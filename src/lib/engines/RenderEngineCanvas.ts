import AbstractRenderEngine from "./AbstractRenderEngine";
import IRenderOptions from "../interfaces/IRenderOptions";
import IFontProps from "../interfaces/IFontProps";
import ICopyProps from "../interfaces/ICopyProps";

export default class RenderEngineCanvas extends AbstractRenderEngine {
	public target:CanvasRenderingContext2D;

	public render(copyProps:ICopyProps, fontProps:IFontProps, renderOptions:IRenderOptions) {
		super.render(copyProps, fontProps, renderOptions);
		if (!this.target) {
			throw new ReferenceError('Please specify a target to render to.');
		}
	}
}
