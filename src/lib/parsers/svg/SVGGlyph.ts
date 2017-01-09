import {
	parsePathData,
	getInstructionsBoundingRect,
	instructionsToDataString
} from "../../utils/SVGUtils";
import AbstractGlyph from "../../AbstractGlyph";
import IPathInstruction from "../../interfaces/IPathInstruction";
import GlyphBoundingRect from "../../GlyphBoundingRect";

/**
 * Class that represents a single parsed glyph
 */
export default class SVGGlyph extends AbstractGlyph {
	private _boundingRect:GlyphBoundingRect|null = null;
	private _instructions:Array<IPathInstruction>|null = null;
	private _pathString:string|null = null;

	constructor(private _d:string, public horizAdvx:number) {
		super();
	}

	public getBoundingRect():GlyphBoundingRect {
		if (!this._boundingRect) {
			this._boundingRect = getInstructionsBoundingRect(this.getPathInstructions());
		}

		return <GlyphBoundingRect> this._boundingRect;
	}

	public getPathString():string {
		if (this._pathString === null) {
			this._pathString = instructionsToDataString(this.getPathInstructions());
		}

		return <string> this._pathString;
	}

	public getPathInstructions():Array<IPathInstruction> {
		if (this._instructions === null) {
			this._instructions = parsePathData(this._d || '', true);
		}
		return <Array<IPathInstruction>> this._instructions;
	}
}
