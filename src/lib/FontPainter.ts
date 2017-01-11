import IRenderBounds from "./interfaces/IRenderBounds";
import WrapMode from "./enum/WrapMode";
import Disposable from 'seng-disposable';
import IFontParser from "./interfaces/IFontParser";
import FontLoader from "./utils/FontLoader";
import FontParserSVG from "./parsers/FontParserSVG";
import {FontParserConstructor} from "./utils/FontLoader";
import AbstractRenderEngine from "./engines/AbstractRenderEngine";

export default class FontPainter extends Disposable {
	public bounds:IRenderBounds|null = null;
	public wrapMode:WrapMode = WrapMode.BREAK_WHITESPACE;
	public fontLoader:FontLoader;

	private _fontPromise:Promise<IFontParser>|null = null;
	private _engine:AbstractRenderEngine|null = null;
	private _fontParser:IFontParser|null = null;

	constructor() {
		super();

		this.fontLoader = new FontLoader();
		this.fontLoader.setDefaultParser('svg', FontParserSVG);
	}

	public setEngine(engine:AbstractRenderEngine):void {
		this._engine = engine;
	}

	public paint(copy:string):any {
		if (this._engine === null) {
			throw new ReferenceError('Please use setEngine() to set a rendering engine before calling paint()');
		}
		if (this._fontParser === null) {
			throw new ReferenceError('Font should have completed loading before calling paint()');
		}

		const parser = <IFontParser> this._fontParser;
		const characters = copy.split('');
		const charCodes = characters.map(glyph => glyph.charCodeAt(0));
		const glyphs = characters.map(character => parser.getGlyph(character));
		const kernings = charCodes.map((charCode, index) => {
			if (index === charCodes.length - 1) {
				return 0;
			}
			return this._fontParser.getKerning(charCode, charCodes[index + 1]);
		});
		this._engine.render(copy, charCodes, kernings, glyphs, this._fontParser);
	}

	public setFontParser(parser:IFontParser):void {
		this._fontParser = parser;
		this._fontPromise = Promise.resolve(parser);
	}

	public loadFont(url:string, parser?:FontParserConstructor):Promise<IFontParser> {
		this._fontPromise = this.fontLoader.load(url, parser).then((parser) => {
			this._fontParser = parser;
			return parser;
		});
		return this._fontPromise;
	}

	public getFont():Promise<IFontParser>|null {
		return this._fontPromise;
	}

	public dispose():void {

		super.dispose();
	}
}
