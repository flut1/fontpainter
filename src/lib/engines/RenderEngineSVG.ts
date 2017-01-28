import AbstractRenderEngine from "./AbstractRenderEngine";
import ICopyProps from "../interfaces/ICopyProps";
import IFontProps from "../interfaces/IFontProps";
import IRenderOptions from "../interfaces/IRenderOptions";

export default class RenderEngineSVG extends AbstractRenderEngine {
	constructor() {
		super();
	}

	public render(copyProps:ICopyProps, fontProps:IFontProps, renderOptions:IRenderOptions) {
		super.render(copyProps, fontProps, renderOptions);
	}
}
