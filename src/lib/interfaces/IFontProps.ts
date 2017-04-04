/**
 * @module lib/interfaces
 *//** */
interface IFontProps {
	/**
	 * Number of units that go into an em in this font's coordinate system
	 */
	unitsPerEm:number;

	/**
	 * The maximum unaccented height of the font within the font coordinate system.
	 */
	ascent:number;

	/**
	 * The maximum unaccented depth of the font within the font coordinate system.
	 */
	descent:number;

	/**
	 * Default number of units the cursor should advance after typing a glyph
	 */
	horizAdvX:number;
}

export default IFontProps;
