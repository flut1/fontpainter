import IFontParser from "../../interfaces/IFontParser";
import Glyph from "../../Glyph";
import KerningMap from "../../types/KerningMap";

/**
 * Parses an SVG font file and contains various methods to extract glyph information
 */
export default class FontParserSVG implements IFontParser {
	public unitsPerEm:number;
	public ascent:number;
	public descent:number;
	public horizAdvX:number;

	private _domParser = new DOMParser();
	private _document:XMLDocument;
	private _missingGlyph:Element|null;

	/**
	 * Constructs a new SVGFontParser instance and initializes loading
	 * @param rawData The string data from an SVG file
	 */
	constructor(public rawData:string) {
		this._document = this._domParser.parseFromString(rawData, 'application/xml');

		this._parseFontProperties();
	}

	public getGlyph(glyph:string):Glyph|null {
		let element = this._document.querySelector(getUnicodeSelector(glyph));
		if (!element) {
			element = this._missingGlyph;
		}

		if (element) {
			return new Glyph(
				element.getAttribute('d') || null,
				getXMLIntAttribute(element, 'horiz-adv-x', this.horizAdvX),
				this._getGlyphKerning(glyph)
			);
		}

		console.log('GLYPH NOT FOUND :(');
		return null;
	}

	/**
	 * Finds all kerning values for kerning pairs that start with the specified glyph.
	 * TODO: Does not support glyph names (g1, g2 attributes) or unicode ranges (i.e. U+215?)
	 * @param glyph The glyph to find kerning for
	 * @returns An object with charcodes of succeeding characters as keys and the corresponding
	 * kerning as values
	 */
	private _getGlyphKerning(glyph):KerningMap {
		const withQuotes = (glyph == "'") ? "\"'\"" : `'${glyph}'`;
		const hkern = this._document.querySelectorAll(`hkern[i1~=${withQuotes}]`);
		const kerning:KerningMap = {};

		for (let i=0; i<hkern.length; i++) {
			const u2 = hkern[i].getAttribute('u2');
			const k = getXMLIntAttribute(hkern[i], 'k');

			if (k && u2) {
				const pairs = u2.split(',');
				pairs.forEach((pair) => {
					const charCode = pair.charCodeAt(0);
					kerning[charCode] = k;
				});
			}
		}

		return kerning;
	}

	/**
	 * Parses and saves all general properties of the SVG font document
	 */
	private _parseFontProperties():void {
		const fontFace = document.querySelector('font-face');
		const font = document.querySelector('font');
		this._missingGlyph = document.querySelector('missing-glyph');

		this.unitsPerEm = getXMLIntAttribute(fontFace, 'units-per-em', 1000);
		this.ascent = getXMLIntAttribute(fontFace, 'ascent');
		this.descent = getXMLIntAttribute(fontFace, 'descent');
		this.horizAdvX = getXMLIntAttribute(font, 'horiz-adv-x', 1000);
	}
}

/**
 * Returns a query selector string to get the given glyph from an XMLDocument.
 * @param glyph The glyph to select
 * @returns {string} The selector
 */
function getUnicodeSelector(glyph:string):string {
	const withQuotes = (glyph == "'") ? "\"'\"" : `'${glyph}'`;

	return `[unicode=${withQuotes}]`;
}

/**
 * Gets the given attribute from an XML node and parses it to an integer
 * @param xml The node to get the attribute from
 * @param attribute The attribute name
 * @param defaultValue If set, returns this value
 */
function getXMLIntAttribute(xml, attribute, defaultValue?):number {
	let result = xml.getAttribute(attribute);
	if (result) {
		return parseInt(result, 10);
	}
	return defaultValue;
}
