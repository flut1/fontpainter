import KerningMap from "./types/KerningMap";
import IGlyhpBoundingRect from "./interfaces/IGlyphBoundingRect";
import {
	parsePathData, getInstructionsBoundingRect,
	instructionsToDataString
} from "./parsers/svg/SVGUtils";

/**
 * Class that represents a single parsed glyph
 */
export default class Glyph {
	private _boundingRect:IGlyhpBoundingRect|null = null;
	public instructions:Array<IPathInstruction>;

	/**
	 * The path data as can be applied to an SVG <path> element.
	 * Is allowed a null value when this glyph is empty (for example, a space character)
	 */
	public d:string = '';

	constructor(
		d:string|null,
		/**
		 * Number of units the cursor should advance when rendering this glyph
		 */
		public horizAdvx:number,
		/**
		 * Amount of kerning that should be applied per each succeeding character
		 */
		public kerning:KerningMap
	) {
		if(d) {
			this.instructions = parsePathData(d, true);
			this.d = instructionsToDataString(this.instructions);
		}
	}

	public getBoundingRect():IGlyhpBoundingRect {
		if (!this._boundingRect) {
			this._boundingRect = getInstructionsBoundingRect(this.instructions);
		}

		return this._boundingRect;
	}
}
