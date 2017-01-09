/**
 * Interface for defining the bounds of a single Glyph
 */
interface IGlyphBoundingRect {
	/**
	 * Smallest x coordinate
	 */
	minX:number;
	/**
	 * Smallest Y coordinate
	 */
	minY:number;
	/**
	 * Largest X coordinate
	 */
	maxX:number;
	/**
	 * Largest Y coordinate
	 */
	maxY:number;
}

export default IGlyphBoundingRect;
