import IPathInstruction from "../interfaces/IPathInstruction";
import GlyphBoundingRect from "../GlyphBoundingRect";
import entities from "../data/entities";
const PATH_PARAM_MAP:ICommandXYMap = {
	M: {x: 0, y: 1, length: 2},
	L: {x: 0, y: 1, length: 2},
	T: {x: 0, y: 1, length: 2},
	C: {x: 4, y: 5, length: 6},
	S: {x: 2, y: 3, length: 4},
	Q: {x: 2, y: 3, length: 4},
	V: {y: 0, length: 1},
	H: {x: 0, length: 1}
};


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
 * // TODO: currently does not support elliptical arc curve commands (A)
 * @param instructions
 * @returns The original array with mutated y params
 */
export function invertInstructionsY(instructions:Array<IPathInstruction>):Array<IPathInstruction> {
	instructions.forEach(({params, command}) => {
		switch(command.toUpperCase()) {
			case 'V':
				for(let p=0; p<params.length; p++) params[p] *= -1;
				break;
			case 'L':
			case 'M':
			case 'T':
			case 'C':
			case 'S':
			case 'Q':
				for(let p=1; p<params.length; p+=2) params[p] *= -1;
				break;
			default:
				// do nothing
		}
	});
	return instructions;
}

/**
 * Gets the bounding box of an array of PathInstructions that form a path. For performance
 * reasons, this algorithm will only use the path endpoints and will not account for any curves
 * that might go outside of the bounding box.
 * // TODO: currently does not support elliptical arc curve commands (A)
 * @param instructions An array containing SVG Path instructions
 * @returns The bounding rect of the instruction set
 */
export function getInstructionsBoundingRect(instructions:Array<IPathInstruction>):GlyphBoundingRect {
	let cx = 0, cy = 0;
	let pointsX:Array<number> = [];
	let pointsY:Array<number> = [];

	instructions.forEach(({command, params}) => {
		const commandUpper = command.toUpperCase();
		const absolute = command === commandUpper;
		const paramIndexMap = PATH_PARAM_MAP[commandUpper];

		if (paramIndexMap) {
			let xParam = <number> paramIndexMap.x;
			while(typeof params[xParam] !== 'undefined') {
				if (absolute) {
					cx = 0;
				}
				cx += params[xParam];
				pointsX.push(cx);
				xParam += paramIndexMap.length;
			}
			let yParam = <number> paramIndexMap.y;
			while(typeof params[yParam] !== 'undefined') {
				if(absolute) {
					cy = 0;
				}

				cy += params[yParam];
				pointsY.push(cy);
				yParam += paramIndexMap.length;
			}
		}
	});

	return new GlyphBoundingRect(
		Math.min.apply(Math, pointsX),
		Math.min.apply(Math, pointsY),
		Math.max.apply(Math, pointsX),
		Math.max.apply(Math, pointsY)
	);
}

/**
 * Returns a set of unicode ranges based on the supplied u and g arguments. Used as a helper
 * function to parse attributes of the <hkern> element in an SVG font file. Parsed according
 * to rules defined at
 * https://www.w3.org/TR/SVG/fonts.html#KernElements
 * @param u Array of strings that corresponds with the <hkern> "u1" or "u2" attribute, split
 * by comma
 * @param g Array of strings that corresponds with the <hkern> "g1" or "g2" attribute, split
 * by comma
 * @returns {Array<[number,number]>} An array of number tuples that present unicode ranges.
 * The first number is the start, the second is the end of the range (inclusive). For single
 * unicode characters, these numbers are the same.
 */
export function getUnicodeRanges(u:Array<string>, g:Array<string>):Array<[number, number]> {
	const result:Array<[number, number]> = [];

	g.forEach((name) => {
		if(name.length === 1) {
			const charCode = name.charCodeAt(0);
			result.push([charCode, charCode]);
		} else {
			const charCode = entities[name];
			if (charCode) {
				result.push([charCode, charCode]);
			}
		}
	});
	u.forEach((character) => {
		if(character.length === 1) {
			const charCode = character.charCodeAt(0);
			result.push([charCode, charCode]);
		} else  {
			const range1 = character.match(/U\+([0-9A-F]{1,9})-([0-9A-F]{1,9})$/);
			if (range1) {
				result.push(
					<[number, number]> [1,2].map(
						index => parseInt(range1[index], 16)
					)
				);
			} else {
				const range2 = character.match(/U\+([0-9A-F?]{1,9}$)/);
				if (range2) {
					result.push([
						parseInt(range2[1].replace(/\?/g, '0'), 16),
						parseInt(range2[1].replace(/\?/g, 'F'), 16)
					]);
				}
			}
		}
	});

	return result.sort((a, b) => a[0] - b[0]);
}

/**
 * A map that contains indexes of X and Y parameters of commands, if they have them.
 * Also contains the number of parameters per command, to support multiple parameter sets.
 */
interface ICommandXYMap {
	[command: string]: {x?: number; y?: number; length: number;};
}
