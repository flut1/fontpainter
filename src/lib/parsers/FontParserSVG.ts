import IFontParser from "../interfaces/IFontParser";
import Glyph from '../Glyph';
import IKerningMap from "../interfaces/IKerningMap";
import {getUnicodeRanges, parsePathData} from "../utils/SVGUtils";

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

	public getGlyph(glyph:string):Glyph|null {
		let element:Element|null = this._document.querySelector(getUnicodeSelector(glyph));
		if (!element) {
			element = this._missingGlyph;
		}

		if (element) {
			return new Glyph(
				parsePathData(element.getAttribute('d') || '', true),
				getXMLIntAttribute(element, 'horiz-adv-x', this.horizAdvX)
			);
		}

		// todo: proper warning
		console.log('GLYPH NOT FOUND :(');
		return null;
	}

	/**
	 * Finds the kerning for the 2 given characters based on the kerningMaps parsed
	 * from the font file.
	 * @param u1 The unicode for the first character
	 * @param u2 The unicode for the succeeding character
	 * @returns {number} The amount of kerning
	 */
	public getKerning(u1:number, u2:number):number {
		const u1Matches:Array<IKerningMap> = [];
		for (let i=0; i<this._kerningMaps.length; i++) {
			const kerningMap = this._kerningMaps[i];
			if ((kerningMap.u1[0] <= u1) && (kerningMap.u1[1] >= u1)) {
				u1Matches.push(kerningMap);
			} else if ((kerningMap.u1[0] >= u1) && (kerningMap.u1[1] < u1)) {
				break;
			}
		}
		for (let i=0; i<u1Matches.length; i++) {
			for (let j=0; j<u1Matches[i].u2.length; i++) {
				if ((u1Matches[i].u2[j][0] <= u2) && (u1Matches[i].u2[j][1] >= u2)) {
					return u1Matches[i].u2[j][2];
				}
			}
		}
		return 0;
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

		this._kerningMaps.sort((a, b) => {
			if (a.u1[0] === b.u1[0]) {
				return b.u1[1] - a.u1[1];
			} else if (a.u1[0] > b.u1[0]) {
				return 1;
			}
			return -1;
		});
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
	if (result !== null && result !== '') {
		return parseInt(result, 10);
	}
	return defaultValue;
}
