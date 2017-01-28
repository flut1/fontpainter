import IRenderBounds from "./interfaces/IRenderBounds";
import WrapMode from "./enum/WrapMode";
import Disposable from 'seng-disposable';
import IFontParser from "./interfaces/IFontParser";
import FontLoader from "./utils/FontLoader";
import FontParserSVG from "./parsers/FontParserSVG";
import {FontParserConstructor} from "./utils/FontLoader";
import AbstractRenderEngine from "./engines/AbstractRenderEngine";
import IRenderOptions from "./interfaces/IRenderOptions";
import TextAlign from "./enum/TextAlign";
import GlyphMap from "./types/GlyphMap";
import ICopyProps from "./interfaces/ICopyProps";

export default class FontPainter extends Disposable implements IRenderOptions {
	public bounds:IRenderBounds|null = null;
	public wrapMode:WrapMode = WrapMode.BREAK_WHITESPACE;
	public align:TextAlign = TextAlign.LEFT;
	public letterSpacing:number = 0;
	public lineHeight:number = 1.2;
	public fontLoader:FontLoader;
	public fontSize:number = 16;

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

		this._engine.render(
			this.getCopyProps(copy),
			<IFontParser> this._fontParser,
			this
		);
	}

	public getCopyProps(copy:string):ICopyProps {
		if (this._fontParser === null) {
			throw new ReferenceError('Font is undefined or has not yet completed loading');
		}

		const parser = <IFontParser> this._fontParser;
		const characters = copy.split('');
		const charCodes = characters.map(glyph => glyph.charCodeAt(0));

		const glyphs:GlyphMap = charCodes.reduce((glyphMap, charCode, index) => {
			if(!glyphMap[charCode]) {
				glyphMap[charCode] = parser.getGlyph(characters[index]);
			}

			return glyphMap;
		}, {});

		const kernings = charCodes.map((charCode, index) => {
			if (index === charCodes.length - 1) {
				return 0;
			}
			return parser.getKerning(charCode, charCodes[index + 1]);
		});

		return { copy, characters, charCodes, kernings, glyphs };
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
