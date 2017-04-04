/**
 * @module lib/engines/AbstractRenderEngine
 */ /** */

import Disposable from 'seng-disposable';
import IFontProps from "../interfaces/IFontProps";
import IRenderOptions from "../interfaces/IRenderOptions";
import ICopyProps from "../interfaces/ICopyProps";
import ILinePositioning from "../interfaces/ILinePositioning";
import ILineBreak from "../interfaces/ILineBreak";
import TextAlign from "../enum/TextAlign";
import Glyph from "../Glyph";
import IGlyphBoundingRect from "../interfaces/IGlyphBoundingRect";

abstract class AbstractRenderEngine extends Disposable {
	protected copyProps:ICopyProps;
	protected fontProps:IFontProps;
	protected renderOptions:IRenderOptions;
	protected glyphAdvX:Array<number>;
	protected lineBreaks:Array<ILineBreak>;
	protected positioning:Array<ILinePositioning>;
	protected lineHeight:number;
	protected unitsPerPx:number;
	protected glyphOffset:[number,number,number,number];

	constructor() {
		super();
	}

	public render(copyProps:ICopyProps,	fontProps:IFontProps, renderOptions:IRenderOptions) {
		this.copyProps = copyProps;
		this.fontProps = fontProps;
		this.renderOptions = renderOptions;
		this.lineHeight = this.calculateLineHeight();
		this.unitsPerPx = this.calculateUnitsPerPx();
		this.glyphAdvX = this.getGlyphAdvX();
		this.glyphOffset = this.getGlyphOffset();
		this.lineBreaks = this.calcLineBreaks();
		this.positioning = this.calculatePositioning();
	}

	public getGlyphAdvX = ():Array<number> => {
		const { copyProps: { charCodes, glyphs }, fontProps: { horizAdvX: defaultAdvX } } = this;

		return charCodes.map(charCode => {
			const glyph = glyphs[charCode];
			const advX = glyph && glyph.horizAdvX;
			return (typeof advX === 'undefined' || advX === null) ? defaultAdvX : advX;
		});
	};

	public calculateLineHeight = ():number => this.fontProps.unitsPerEm * this.renderOptions.lineHeight;

	public calculateUnitsPerPx = ():number => this.fontProps.unitsPerEm / this.renderOptions.fontSize;

	public calcLineBreaks():Array<ILineBreak> {
		const lineBreaks:Array<ILineBreak> = [];

		if (this.renderOptions.bounds) {
			if (this.renderOptions.bounds.isFixed) {
				const width = this.renderOptions.bounds.getWidth() * this.calculateUnitsPerPx();
				let cx = 0;
				let tokenWidth = 0;
				let breakOption:ILineBreak|null = null;

				this.copyProps.characters.forEach((character, index) => {
					const horizAdvX = this.glyphAdvX[index] + this.glyphOffset[1] + this.glyphOffset[3];

					if (character === ' ') {
						if (breakOption && (cx > width)) {
							lineBreaks.push(breakOption);
							breakOption = null;
							cx = tokenWidth;
						}

						breakOption = { index, remove: true, add: null };
						tokenWidth = 0;
					} else if(character === '-') {
						if (breakOption && (cx + horizAdvX - this.copyProps.kernings[index] > width)) {
							lineBreaks.push(breakOption);
							breakOption = null;
							cx = tokenWidth;
						}
						breakOption = { index: index + 1, remove: false, add: null };
						tokenWidth = horizAdvX;
					} else {
						tokenWidth += horizAdvX;
					}

					cx += horizAdvX - this.copyProps.kernings[index];
				});

				if (breakOption && (cx > width)) {
					lineBreaks.push(breakOption);
				}

			} else {
				throw new Error('TODO');
			}
		}

		return lineBreaks;
	}

	public calculatePositioning():Array<ILinePositioning> {
		let {
			fontProps: { ascent, descent },
			lineHeight, glyphAdvX, lineBreaks, copyProps
		} = this;

		let lineY = ascent + (lineHeight - ascent + descent) * 0.5 + this.glyphOffset[0];
		const lines:Array<ILinePositioning> = [];
		let currentLine = 0;
		let glyphX = 0;

		glyphAdvX.forEach((horizAdvX, index) => {
			const lineBreak = lineBreaks.find(lineBreak => lineBreak.index === index);
			if (lineBreak) {
				currentLine ++;
				lineY += lineHeight + this.glyphOffset[2] + this.glyphOffset[0];
				glyphX = 0;

				if (lineBreak.remove) {
					return;
				}
			}
			if (!lines[currentLine]) {
				lines[currentLine] = {
					x: 0,
					y: lineY,
					width: 0,
					height: lineHeight + this.glyphOffset[2] + this.glyphOffset[0],
					glyphs: []
				};
			}
			glyphX += this.glyphOffset[3];

			lines[currentLine].glyphs.push({ index, x: glyphX, y: 0 });
			glyphX += horizAdvX - copyProps.kernings[index] + this.glyphOffset[1];
			lines[currentLine].width = glyphX;
		});

		if (this.renderOptions.exactFit) {
			const boundingRects = lines.map((line, lineIndex) => {
				const isLineEdge = (lineIndex === 0) || (lineIndex === lines.length - 1);

				return line.glyphs.map((glyphPositioning, glyphIndex) => {
					const isGlyphEdge = (glyphIndex === 0) || (glyphIndex === line.glyphs.length - 1);

					if (isGlyphEdge || isLineEdge) {
						const charCode = this.copyProps.charCodes[glyphPositioning.index];
						const glyph = <Glyph> this.copyProps.glyphs[charCode];
						return glyph.getBoundingRect();
					}
					return null;
				});
			});

			if (lines.length) {
				// remove top gap
				const topGap = ascent + boundingRects[0].reduce(
					(minY, boundingRect) => Math.min(minY, (<IGlyphBoundingRect> boundingRect).minY),
					Number.POSITIVE_INFINITY
				);
				lines[0].height -= topGap;
				lines.forEach(line => (line.y -= topGap));

				// remove bottom gap
				const maxY = boundingRects[boundingRects.length - 1].reduce(
					(maxY, boundingRect) => Math.max(maxY, (<IGlyphBoundingRect> boundingRect).maxY),
					Number.NEGATIVE_INFINITY
				);
				lines[lines.length - 1].height -= lineHeight - maxY;

				// remove horizontal gaps
				lines.forEach((line, lineIndex) => {
					if (line.glyphs.length) {
						const boundings = boundingRects[lineIndex];
						const leftGap = (<IGlyphBoundingRect> boundings[0]).minX;
						line.x -= leftGap;
						const rightGap = (<IGlyphBoundingRect> boundings[boundings.length - 1]).minX;
						line.width -= leftGap + rightGap;
					}
				});
			}
		}

		if (this.renderOptions.align === TextAlign.CENTER && this.renderOptions.bounds) {
			const width = this.renderOptions.bounds.getWidth() * this.unitsPerPx;
			lines.forEach((line) => {
				line.x = (width - line.width) / 2;
			});
		}

		return lines;
	}

	public getGlyphOffset():[number,number,number,number] {
		return [0,0,0,0];
	}

	public dispose():void {

		super.dispose();
	}
}

export default AbstractRenderEngine;
