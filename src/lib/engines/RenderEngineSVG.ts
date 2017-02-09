import AbstractRenderEngine from "./AbstractRenderEngine";
import ICopyProps from "../interfaces/ICopyProps";
import IFontProps from "../interfaces/IFontProps";
import IRenderOptions from "../interfaces/IRenderOptions";
import {
	createSVGElement, setSVGAttributes, positionTransformSVG,
	instructionsToDataString
} from '../utils/SVGUtils';
import IPathInstruction from "../interfaces/IPathInstruction";
import TextAlign from "../enum/TextAlign";
import IRenderEngineSVGLayer from "../interfaces/IRenderEngineSVGLayer";

const defaultLayer:IRenderEngineSVGLayer = {
	offset: [0,0,0,0],
	processPath: (path:SVGPathElement) => setSVGAttributes(path, { fill: '#fff' }),
	offsetIsPx: false
};

export default class RenderEngineSVG extends AbstractRenderEngine {
	public container:Element|null = null;
	public enableSVGElement:boolean = true;
	private _svgElement:SVGSVGElement|null = null;
	private _rootGroupElement:SVGGElement|null = null;
	private _lineGroups:Array<SVGGElement> = [];
	private _layerGroups:Array<SVGGElement> = [];
	private _glyphPaths:Array<SVGPathElement> = [];
	private _layers:Array<IRenderEngineSVGLayer> = [];
	private _glyphPadding:[number,number,number,number] = [0,0,0,0];
	private _glyphPaddingIsPx:boolean = false;

	constructor() {
		super();
	}

	public render(copyProps:ICopyProps, fontProps:IFontProps, renderOptions:IRenderOptions) {
		super.render(copyProps, fontProps, renderOptions);

		if (!this._rootGroupElement) {
			this._rootGroupElement = <SVGGElement> createSVGElement('g');
			this._rootGroupElement.classList.add('fp-svg-root');
		}

		if (this.enableSVGElement && !this._svgElement) {
			this.createSVGElement();
			(<any> this._svgElement).appendChild(this._rootGroupElement);
		}

		const layers = this._layers.length ? this._layers : [defaultLayer];
		let lineIndex = 0;
		let pathIndex = 0;
		layers.forEach((layer, layerIndex) => {
			if (!this._layerGroups[layerIndex]) {
				this._layerGroups[layerIndex] = <SVGGElement> createSVGElement('g');
				this._layerGroups[layerIndex].classList.add(`fp-svg-layer-${layerIndex}`);
				(<SVGGElement> this._rootGroupElement).appendChild(this._layerGroups[layerIndex]);
			}

			this.positioning.forEach((line, localLineIndex) => {
				if (!this._lineGroups[lineIndex]) {
					this._lineGroups[lineIndex] = <SVGGElement> createSVGElement('g');
					this._lineGroups[lineIndex].classList.add(`fp-svg-line-${localLineIndex}`);
					(<SVGGElement> this._layerGroups[layerIndex]).appendChild(this._lineGroups[lineIndex]);
				}

				positionTransformSVG(this._lineGroups[lineIndex], line.x, line.y);

				line.glyphs.forEach((glyphPositioning) => {
					const { index: glyphIndex, x, y } = glyphPositioning;

					if (!this._glyphPaths[pathIndex]) {
						this._glyphPaths[pathIndex] = <SVGPathElement> createSVGElement('path');
					}

					positionTransformSVG(this._glyphPaths[pathIndex], x, y);
					const charCode = this.copyProps.charCodes[glyphIndex];
					const glyph = this.copyProps.glyphs[charCode];
					const instructions:Array<IPathInstruction> = (glyph && glyph.instructions) || [];

					setSVGAttributes(this._glyphPaths[pathIndex], {
						d: instructionsToDataString(instructions)
					});
					layer.processPath(this._glyphPaths[pathIndex], this.unitsPerPx);

					if((<any> this._glyphPaths[pathIndex].parentElement) !== this._lineGroups[lineIndex]) {
						this._lineGroups[lineIndex].appendChild(this._glyphPaths[pathIndex]);
					}

					pathIndex ++;
				});

				if((<any> this._lineGroups[lineIndex].parentElement) !== this._layerGroups[layerIndex]) {
					this._layerGroups[layerIndex].appendChild(this._lineGroups[lineIndex]);
				}

				lineIndex++;
			});
		});

		for(let i=pathIndex; i<this._glyphPaths.length; i++) {
			const pathParent = this._glyphPaths[i].parentElement;
			if(pathParent) {
				pathParent.removeChild(this._glyphPaths[i]);
			}
		}

		this.scaleSVGElement();
	}

	public addLayer(
		processPath:(path:SVGPathElement, unitsPerPx?:number) => any,
		offset:[number, number, number, number] = [0,0,0,0],
		offsetIsPx:boolean = false
	) {
		this._layers.push({ processPath, offset, offsetIsPx	});
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

	public getGlyphOffset():[number,number,number,number] {
		return this._glyphPadding.map(x => x * (this._glyphPaddingIsPx ? this.unitsPerPx : 1));
	}

	public setGlyphPadding(
		{top = 0, right = 0, bottom = 0, left = 0}:{[key:string]:number},
		isPx:boolean = false
	) {
		this._glyphPadding = [top,right,bottom,left];
		this._glyphPaddingIsPx = isPx;
	}

	private scaleSVGElement():void {
		if(this.enableSVGElement && this._svgElement) {
			let width = Math.max.apply(Math, this.positioning.map(pos => pos.width));
			if (this.renderOptions.align !== TextAlign.NONE && this.renderOptions.bounds) {
				width = this.renderOptions.bounds.getWidth() * this.unitsPerPx;
			}
			const lastLinePositioning = this.positioning[this.positioning.length - 1];
			const height = lastLinePositioning.y + lastLinePositioning.height;
			setSVGAttributes(this._svgElement, {
				viewBox: `0 0 ${width} ${height}`,
				width: `${width / this.unitsPerPx}px`,
				height: `${height / this.unitsPerPx}px`
			});
		}
	}

	private createSVGElement():SVGSVGElement {
		this._svgElement = <SVGSVGElement> createSVGElement('svg');
		setSVGAttributes(this._svgElement, {
			preserveAspectRatio: "xMinYMin meet",
			version: "1.1",
		});

		this._svgElement.setAttributeNS(
			"http://www.w3.org/2000/xmlns/", "xmlns", "http://www.w3.org/2000/svg"
		);

		return this._svgElement;
	}
}
