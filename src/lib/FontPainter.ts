import IRenderBounds from "./interfaces/IRenderBounds";
import WrapMode from "./enum/WrapMode";
import Disposable from 'seng-disposable';
import IRenderEngine from "./interfaces/IRenderEngine";
import IFontParser from "./interfaces/IFontParser";
import FontLoader from "./utils/FontLoader";
import FontParserSVG from "./parsers/svg/FontParserSVG";
import {FontParserConstructor} from "./utils/FontLoader";

export default class FontPainter extends Disposable {
	public bounds:IRenderBounds|null = null;
	public wrapMode:WrapMode = WrapMode.BREAK_WHITESPACE;
	public fontLoader:FontLoader;

	private _fontPromise:Promise<IFontParser>|null = null;
	private _engine:IRenderEngine|null = null;

	constructor() {
		super();

		this.fontLoader = new FontLoader();
		this.fontLoader.setDefaultParser('svg', FontParserSVG);
	}

	public setEngine(engine:IRenderEngine):void {
		this._engine = engine;
	}

	public paint(copy:string):Promise<void> {
		if (this._engine === null) {
			throw new ReferenceError('Please use setEngine() to set a rendering engine before calling paint()');
		}
		if (this._fontPromise === null) {
			throw new ReferenceError('Expected font to be set before calling paint()');
		}

		return this._fontPromise.then((parser) => {

		});
	}

	public setFontParser(parser:IFontParser):void {
		this._fontPromise = Promise.resolve(parser);
	}

	public loadFont(url:string, parser?:FontParserConstructor) {
		this._fontPromise = this.fontLoader.load(url, parser);
	}

	public getFont():Promise<IFontParser>|null {
		return this._fontPromise;
	}

	public dispose():void {

		super.dispose();
	}
}
