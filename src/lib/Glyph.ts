import {
	getInstructionsBoundingRect
} from "./utils/SVGUtils";
import IPathInstruction from "./interfaces/IPathInstruction";
import GlyphBoundingRect from "./GlyphBoundingRect";

/**
 * Class that represents a single parsed glyph
 */
export default class Glyph {
	private _boundingRect:GlyphBoundingRect|null = null;

	constructor(public instructions:Array<IPathInstruction>, public horizAdvX:number) {
	}

	public getBoundingRect():GlyphBoundingRect {
		if (!this._boundingRect) {
			this._boundingRect = getInstructionsBoundingRect(this.instructions);
		}

		return <GlyphBoundingRect> this._boundingRect;
	}
}
