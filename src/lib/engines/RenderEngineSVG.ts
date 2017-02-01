import AbstractRenderEngine from "./AbstractRenderEngine";
import ICopyProps from "../interfaces/ICopyProps";
import IFontProps from "../interfaces/IFontProps";
import IRenderOptions from "../interfaces/IRenderOptions";
import {
	createSVGElement, setSVGAttributes, positionTransformSVG,
	instructionsToDataString
} from '../utils/SVGUtils';
import IPathInstruction from "../interfaces/IPathInstruction";

export default class RenderEngineSVG extends AbstractRenderEngine {
	public container:Element|null = null;
	public enableSVGElement:boolean = true;
	private _svgElement:SVGSVGElement|null = null;
	private _rootGroupElement:SVGGElement|null = null;
	private _lineGroups:Array<SVGGElement> = [];
	private _glyphPaths:Array<SVGPathElement> = [];

	constructor() {
		super();
	}

	public render(copyProps:ICopyProps, fontProps:IFontProps, renderOptions:IRenderOptions) {
		super.render(copyProps, fontProps, renderOptions);

		if (!this._rootGroupElement) {
			this._rootGroupElement = <SVGGElement> createSVGElement('g');
		}

		if (this.enableSVGElement && !this._svgElement) {
			this.createSVGElement();
			(<any> this._svgElement).appendChild(this._rootGroupElement);
		}

		this.positioning.forEach((line, lineIndex) => {
			if (!this._lineGroups[lineIndex]) {
				this._lineGroups[lineIndex] = <SVGGElement> createSVGElement('g');
				(<SVGGElement> this._rootGroupElement).appendChild(this._lineGroups[lineIndex]);
			}

			positionTransformSVG(this._lineGroups[lineIndex], line.x, line.y);

			line.glyphs.forEach((glyphPositioning) => {
				const { index: glyphIndex, x, y } = glyphPositioning;

				if (!this._glyphPaths[glyphIndex]) {
					this._glyphPaths[glyphIndex] = <SVGPathElement> createSVGElement('path');
				}

				positionTransformSVG(this._glyphPaths[glyphIndex], x, y);
				const charCode = this.copyProps.charCodes[glyphIndex];
				const glyph = this.copyProps.glyphs[charCode];
				const instructions:Array<IPathInstruction> = (glyph && glyph.instructions) || [];

				setSVGAttributes(this._glyphPaths[glyphIndex], {
					d: instructionsToDataString(instructions),
					fill: '#000'
				});

				if((<any> this._glyphPaths[glyphIndex].parentElement) !== this._lineGroups[lineIndex]) {
					this._lineGroups[lineIndex].appendChild(this._glyphPaths[glyphIndex]);
				}
			});
		});

		for(let i=this.positioning.length; i<this._lineGroups.length; i++) {
			const groupParent = this._lineGroups[i].parentElement;
			if(groupParent) {
				groupParent.removeChild(this._lineGroups[i]);
			}
		}

		this.scaleSVGElement();
	}

	public get svgElement():SVGSVGElement|null {
		return this._svgElement;
	}

	public get rootGroupElement():SVGGElement|null {
		return this._rootGroupElement;
	}

	public get lineGroups():Array<SVGGElement> {
		return this._lineGroups;
	}

	private scaleSVGElement():void {
		if(this.enableSVGElement && this._svgElement) {
			const width = Math.max.apply(Math, this.positioning.map(pos => pos.width));
			const lastLinePositioning = this.positioning[this.positioning.length - 1];
			const height = lastLinePositioning.y + lastLinePositioning.height;
			const unitsPerPx = this.calculateUnitsPerPx();
			setSVGAttributes(this._svgElement, {
				viewBox: `0 0 ${width} ${height}`,
				width: `${width / unitsPerPx}px`,
				height: `${height / unitsPerPx}px`
			});
		}
	}

	private createSVGElement():SVGSVGElement {
		this._svgElement = <SVGSVGElement> createSVGElement('svg');
		setSVGAttributes(this._svgElement, {
			preserveAspectRatio: "xMidYMid meet",
			version: "1.1",
		});

		this._svgElement.setAttributeNS(
			"http://www.w3.org/2000/xmlns/", "xmlns", "http://www.w3.org/2000/svg"
		);

		return this._svgElement;
	}
}
