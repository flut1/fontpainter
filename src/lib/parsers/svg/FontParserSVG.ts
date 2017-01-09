import IFontParser from "../../interfaces/IFontParser";
import SVGGlyph from './SVGGlyph';
import IKerningMap from "../../interfaces/IKerningMap";
import {getUnicodeRanges} from "../../utils/SVGUtils";

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
	private _kerningMaps:Array<IKerningMap>;

	/**
	 * Constructs a new SVGFontParser instance and initializes loading
	 * @param rawData The string data from an SVG file
	 */
	constructor(public rawData:string) {
		this._document = this._domParser.parseFromString(rawData, 'application/xml');

		this._parseFontProperties();
		this._parseFontKerning();
	}

	public getGlyph(glyph:string):SVGGlyph|null {
		let element:Element|null = this._document.querySelector(getUnicodeSelector(glyph));
		if (!element) {
			element = this._missingGlyph;
		}

		if (element) {
			return new SVGGlyph(
				element.getAttribute('d') || '',
				getXMLIntAttribute(element, 'horiz-adv-x', this.horizAdvX)
			);
		}

		console.log('GLYPH NOT FOUND :(');
		return null;
	}

	private _parseFontKerning():void {
		const hkernElements = this._document.querySelectorAll('hkern');

		this._kerningMaps = [];

		for (let i=0; i<hkernElements.length; i++) {
			const hkern = hkernElements[i];

			const [u1, g1, u2, g2] = ['u1', 'g1', 'u2', 'g2'].map((attr) => {
				const val = hkern.getAttribute(attr);
				if (val) {
					return val.split(',');
				}
				return [];
			});

			const k = getXMLIntAttribute(hkern, 'k');
			const u1Ranges = getUnicodeRanges(u1, g1);
			const u2Ranges = getUnicodeRanges(u2, g2);
			u1Ranges.forEach((u1Range) => {
				const kerningMap = this._kerningMaps.find(kerning => (
					kerning.u1[0] === u1Range[0] && kerning.u1[1] === u1Range[1]
				));
				if (kerningMap) {
					u2Ranges.forEach(u2Range => kerningMap.u2.push(
						<[number, number, number]> [...u2Range, k]
					));
				} else {
					this._kerningMaps.push({
						u1: u1Range,
						u2: u2Ranges.map(u2Range => (
							<[number, number, number]> [...u2Range, k]
						))
					});
				}
			});
		}

		this._kerningMaps.sort((a, b) => (a.u1[0] - b.u1[0]));
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
