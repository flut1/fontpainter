import {
	getInstructionsBoundingRect, getCanvasCommands
} from "./utils/pathUtils";
import IPathInstruction from "./interfaces/IPathInstruction";
import GlyphBoundingRect from "./GlyphBoundingRect";
import ICanvasCommand from "./interfaces/ICanvasCommand";

/**
 * Class that represents a single parsed glyph
 */
export default class Glyph {
	private _boundingRect:GlyphBoundingRect|null = null;
	private _canvasCommands:Array<ICanvasCommand>|null = null;

	constructor(public instructions:Array<IPathInstruction>, public horizAdvX:number) {
	}

	public getBoundingRect():GlyphBoundingRect {
		if (!this._boundingRect) {
			this._boundingRect = getInstructionsBoundingRect(this.instructions);
		}

		return <GlyphBoundingRect> this._boundingRect;
	}

	public getCanvasCommands():Array<ICanvasCommand> {
		if (!this._canvasCommands) {
			this._canvasCommands = getCanvasCommands(this.instructions);
		}

		return <Array<ICanvasCommand>> this._canvasCommands;
	}
}
