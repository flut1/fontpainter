import Disposable from 'seng-disposable';
import IFontProps from "../interfaces/IFontProps";
import IRenderOptions from "../interfaces/IRenderOptions";
import ICopyProps from "../interfaces/ICopyProps";
import ILinePositioning from "../interfaces/ILinePositioning";

abstract class AbstractRenderEngine extends Disposable {
	constructor() {
		super();
	}

	public render(
		copyProps:ICopyProps,
		fontProps:IFontProps,
		renderOptions:IRenderOptions
	) {

	}

	public getPositioning(
		copyProps:ICopyProps,
		fontProps:IFontProps,
		renderOptions:IRenderOptions
	):Array<ILinePositioning> {
		const lines:Array<ILinePositioning> = [];
		let currentLine = 0;
		let currentLineY = 0;
		let currentGlyphX = 0;

		copyProps.charCodes.forEach((charCode, index) => {

		});

		return lines;
	}

	public abstract getUnitsPerPx():number;

	public getGlyphOffset():[number,number,number,number] {
		return [0,0,0,0];
	}

	public dispose():void {

		super.dispose();
	}
}

export default AbstractRenderEngine;
