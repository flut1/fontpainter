import entities from "../data/entities";


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

export const SVG_NAMESPACE:string = 'http://www.w3.org/2000/svg';

export const createSVGElement =
	(name):SVGElement => <SVGElement> document.createElementNS(SVG_NAMESPACE, name);

export function setSVGAttributes(element:SVGElement, attributes:Object):void {
	Object.keys(attributes).forEach(key => element.setAttribute(key, attributes[key]))
}

export function positionTransformSVG(element:SVGGElement, x:number = 0, y:number = 0):void {
	setSVGAttributes(element, {
		transform: `translate(${x}, ${y})`
	});
}
