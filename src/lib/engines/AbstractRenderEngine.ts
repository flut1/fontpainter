import Disposable from 'seng-disposable';
import Glyph from "../Glyph";
import IFontProps from "../interfaces/IFontProps";

abstract class AbstractRenderEngine extends Disposable {
	constructor() {
		super();
	}

	public render(
		copy:string,
		charCodes:Array<number>,
		kernings:Array<number>,
		glyphs:GlyphMap,
		fontProps:IFontProps
	) {

	}

	public dispose():void {

		super.dispose();
	}
}

type GlyphMap = {[charCode:number]: Glyph};

export default AbstractRenderEngine;
