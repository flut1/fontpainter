import Disposable from 'seng-disposable';
import IFontProps from "../interfaces/IFontProps";
import IRenderOptions from "../interfaces/IRenderOptions";
import ICopyProps from "../interfaces/ICopyProps";
import ILinePositioning from "../interfaces/ILinePositioning";
import ILineBreak from "../interfaces/ILineBreak";

abstract class AbstractRenderEngine extends Disposable {
	protected copyProps:ICopyProps;
	protected fontProps:IFontProps;
	protected renderOptions:IRenderOptions;
	protected glyphAdvX:Array<number>;
	protected lineBreaks:Array<ILineBreak>;
	protected positioning:Array<ILinePositioning>;
	protected lineHeight:number;
	protected unitsPerPx:number;

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

		// todo: account for glyph offset

		if (this.renderOptions.bounds) {
			if (this.renderOptions.bounds.isFixed) {
				const width = this.renderOptions.bounds.getWidth() * this.calculateUnitsPerPx();
				let cx = 0;
				let tokenWidth = 0;
				let breakOption:ILineBreak|null = null;

				this.copyProps.characters.forEach((character, index) => {
					const horizAdvX = this.glyphAdvX[index];

					if (character === ' ') {
						if (breakOption && (cx > width)) {
							lineBreaks.push(breakOption);
							breakOption = null;
							cx = tokenWidth;
						}

						breakOption = { index, remove: true, add: null };
						tokenWidth = 0;
					} else if(character === '-') {
						if (breakOption && (cx + horizAdvX + this.copyProps.kernings[index] > width)) {
							lineBreaks.push(breakOption);
							breakOption = null;
							cx = tokenWidth;
						}
						breakOption = { index: index + 1, remove: false, add: null };
						tokenWidth = horizAdvX;
					} else {
						tokenWidth += horizAdvX;
					}

					cx += horizAdvX + this.copyProps.kernings[index];
				});

			} else {
				throw new Error('TODO');
			}
		}

		return lineBreaks;
	}

	public calculatePositioning():Array<ILinePositioning> {
		let {
			fontProps: { ascent: lineY },
			lineHeight, glyphAdvX, lineBreaks, copyProps
		} = this;

		// todo: account for glyph offset

		const lines:Array<ILinePositioning> = [];
		let currentLine = 0;
		let glyphX = 0;

		glyphAdvX.forEach((horizAdvX, index) => {
			const lineBreak = lineBreaks.find(lineBreak => lineBreak.index === index);
			if (lineBreak) {
				currentLine ++;
				lineY += lineHeight;
				glyphX = 0;

				if (lineBreak.remove) {
					return;
				}
			}
			if (!lines[currentLine]) {
				lines[currentLine] = { x: 0, y: lineY, width: 0, height: lineHeight, glyphs: [] };
			}

			lines[currentLine].glyphs.push({ index, x: glyphX, y: 0 });
			glyphX += horizAdvX + copyProps.kernings[index];
			lines[currentLine].width = glyphX;
		});

		// todo: alignment (change line X)

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