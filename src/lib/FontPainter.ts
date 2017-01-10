import IRenderBounds from "./interfaces/IRenderBounds";
import WrapMode from "./enum/WrapMode";
import Disposable from 'seng-disposable';

export default class FontPainter extends Disposable {
	public bounds:IRenderBounds|null = null;
	public wrapMode:WrapMode = WrapMode.BREAK_WHITESPACE;

	constructor() {
		super();
	}

	public dispose():void {

		super.dispose();
	}
}
