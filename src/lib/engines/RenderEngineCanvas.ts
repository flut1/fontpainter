import AbstractRenderEngine from "./AbstractRenderEngine";
import IRenderOptions from "../interfaces/IRenderOptions";
import IFontProps from "../interfaces/IFontProps";
import ICopyProps from "../interfaces/ICopyProps";
import Glyph from "../Glyph";

export default class RenderEngineCanvas extends AbstractRenderEngine {
	public target:CanvasRenderingContext2D;

	public render(copyProps:ICopyProps, fontProps:IFontProps, renderOptions:IRenderOptions) {
		super.render(copyProps, fontProps, renderOptions);

		if (!this.target) {
			throw new ReferenceError('Please specify a target to render to.');
		}

		this.target.fillStyle = '#ffffff';
		this.positioning.forEach(({ glyphs, x: lineX, y: lineY }) => {
			glyphs.forEach(({ x: glyphX, y: glyphY, index: glyphIndex }) => {
				const glyph = copyProps.glyphs[copyProps.charCodes[glyphIndex]];
				const canvasCommands = (<Glyph> glyph).getCanvasCommands();

				canvasCommands.forEach(({ command, params }) => {
					const absParams = params.map((param, paramIndex) => {
						const isX = !(paramIndex % 2);
						const base = isX ? (lineX + glyphX) : (lineY + glyphY);

						return (base + param) / this.unitsPerPx;
					});
					this.target[command](...absParams);

					if (command === 'closePath') {
						this.target.fill();
 					}
				});
			});
		})
	}
}
