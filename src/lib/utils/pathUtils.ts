/**
 *
 * @module lib/utils/pathUtils
 */ /** */
import IPathInstruction from "../interfaces/IPathInstruction";
import GlyphBoundingRect from "../GlyphBoundingRect";
import ICanvasCommand from "../interfaces/ICanvasCommand";

class SVGCommandDef {
	constructor(
		public canvasCommand:string,
		public paramLength:number = 2,
		public hasX:boolean = true,
		public hasY:boolean = true
	) {}
}

const SVG_COMMAND_MAP:{[command:string]:SVGCommandDef} = {
	M: new SVGCommandDef('moveTo'),
	L: new SVGCommandDef('lineTo'),
	Z: new SVGCommandDef('lineTo', 0, false, false),
	H: new SVGCommandDef('lineTo', 1, true, false),
	V: new SVGCommandDef('lineTo', 1, false),
	C: new SVGCommandDef('bezierCurveTo', 6),
	S: new SVGCommandDef('bezierCurveTo', 4),
	Q: new SVGCommandDef('quadraticCurveTo', 4),
	T: new SVGCommandDef('quadraticCurveTo', 2)
};

export function getCanvasCommands(pathData:Array<IPathInstruction>):Array<ICanvasCommand> {
	const commands:Array<ICanvasCommand> = [];
	let cx = 0;
	let cy = 0;
	let subPathStart:[number,number]|null = null;

	if (!pathData.length) {
		return commands;
	}
	commands.push({ command: 'beginPath', params: [] });

	pathData.forEach((pathInstruction) => {
		const { command, params } = pathInstruction;
		const commandName = command.toUpperCase();
		const isAbsolute = command === commandName;

		if (!subPathStart && commandName !== 'M' && commandName !== 'Z') {
			subPathStart = [cx, cy];
		}

		const commandDef = SVG_COMMAND_MAP[commandName];
		if (commandDef) {
			let absParams:Array<number> = [];

			if (commandDef.paramLength) {
				for (let p=0; p < params.length; p += commandDef.paramLength) {
					const singleParams = params.slice(0, commandDef.paramLength);
					absParams = isAbsolute ? singleParams : singleParams.map((param, paramIndex) => {
						const isX = commandDef.hasX ? (
								commandDef.hasY ? !(paramIndex % 2) : true
							) : false;
						return isX ? cx + param : cy + param;
					});

					switch (commandName) {
						case 'H':
							absParams.push(cy);
							break;
						case 'V':
							absParams.unshift(cx);
							break;
						case 'S':
						case 'T':
							const prevCommand = commands[commands.length - 1];
							const controlPoint = (prevCommand && prevCommand.command === commandDef.canvasCommand) ? [
									2 * cx - prevCommand.params[prevCommand.params.length - 4],
									2 * cy - prevCommand.params[prevCommand.params.length - 3]
								] : [cx, cy];
							absParams.splice(absParams.length - 2, 0, ...controlPoint);
							break;
						default:
							// do nothing
					}
				}
			} else if (commandName === 'Z') {
				absParams.push(...(<[number,number]> subPathStart));
				subPathStart = null;
			}

			commands.push({
				command: commandDef.canvasCommand,
				params: absParams
			});

			if (commandDef.hasX) {
				cx = absParams[absParams.length - 2];
			}
			if (commandDef.hasY) {
				cy = absParams[absParams.length - 1];
			}
		} else if (commandName === 'A') {
			// TODO: implement "A"
		} else {
			throw new Error(`Unknown command in SVG path "${command}"`);
		}
	});

	commands.push({ command: 'closePath', params: [] });

	return commands;
}

/**
 * Parses an SVG Path data string into an array of separate instructions.
 * For more info on Path Data see: http://www.w3.org/TR/SVG/paths.html#PathData
 * @param d The data string to parse.
 * @param invertY If true, will invert all y coordinates. Defaults to false
 * @returns An array of instructions, containing a single letter as command and an array of
 * integers for parameters.
 */
export function parsePathData(d:string, invertY:boolean = false):Array<IPathInstruction> {
	const commandRegex = /[MZLHVCSQTA](:?\-?[0-9.]+[, ]?)*/gi;
	const paramRegex = /-?[0-9.]+/g
	const instructions = d.match(commandRegex);

	if (!instructions) {
		return [];
	}

	const parsedInstructions = instructions.map((match) => {
		const command = match.charAt(0);
		const params = match.match(paramRegex) || [];

		return {
			command,
			params: params.map(param => parseFloat(param))
		};
	});

	return invertY ? invertInstructionsY(parsedInstructions) : parsedInstructions;
}

/**
 * Converts separate path instructions (as returned by parsePathData()) back to
 * a single path data string that can be applied as an svg 'd' attribute
 * @param instructions
 */
export const instructionsToDataString = (instructions:Array<IPathInstruction>):string =>
	instructions.reduce((d, {command, params}) => d + `${command}${params.join(' ')}`, '');

/**
 * Inverts the Y-axis of an array of PathInstructions. Useful for SVG Fonts, where the
 * Y-axis is in the opposite direction as an HTML SVG document.
 * note: mutates the array in-place
 * @param instructions
 * @returns The original array with mutated y params
 */
export function invertInstructionsY(instructions:Array<IPathInstruction>):Array<IPathInstruction> {
	instructions.forEach(({params, command}) => {
		const commandName = command.toUpperCase();
		if (SVG_COMMAND_MAP[commandName]) {
			const commandDef = SVG_COMMAND_MAP[commandName];
			if (commandDef.paramLength) {
				let isY = true;
				for (let p=0; p<params.length; p++) {
					if (isY && commandDef.hasX) {
						isY = false;
					} else if (!isY && commandDef.hasY) {
						isY = true;
					}
					if (isY) {
						params[p] *= -1;
					}
				}
			}
		} else if (commandName === 'A') {
		  // TODO: currently does not support elliptical arc curve commands (A)
		}
	});

	return instructions;
}

/**
 * Gets the bounding box of an array of PathInstructions that form a path. For performance
 * reasons, this algorithm will only use the path endpoints and will not account for any curves
 * that might go outside of the bounding box.
 * @param instructions An array containing SVG Path instructions
 * @returns The bounding rect of the instruction set
 */
export function getInstructionsBoundingRect(instructions:Array<IPathInstruction>):GlyphBoundingRect {
	let cx = 0, cy = 0;
	let pointsX:Array<number> = [];
	let pointsY:Array<number> = [];

	instructions.forEach(({command, params}) => {
		const commandName = command.toUpperCase();
		const absolute = command === commandName;
		const commandDef = SVG_COMMAND_MAP[commandName];

		if (commandDef && commandDef.paramLength) {
			if (commandDef.hasX) {
				let xPos = commandDef.paramLength - (commandDef.hasY ? 2 : 1);
				while (typeof params[xPos] !== 'undefined') {
					if (absolute) {
						cx = 0;
					}
					cx += params[xPos];
					pointsX.push(cx);
					xPos += commandDef.paramLength;
				}
			}
			if (commandDef.hasY) {
				let yPos = commandDef.paramLength - 1;
				while (typeof params[yPos] !== 'undefined') {
					if (absolute) {
						cy = 0;
					}
					cy += params[yPos];
					pointsY.push(cy);
					yPos += commandDef.paramLength;
				}
			}
		} else if (commandName === 'A') {
			// TODO: currently does not support elliptical arc curve commands (A)
		}
	});

	return new GlyphBoundingRect(
		Math.min.apply(Math, pointsX),
		Math.min.apply(Math, pointsY),
		Math.max.apply(Math, pointsX),
		Math.max.apply(Math, pointsY)
	);
}
