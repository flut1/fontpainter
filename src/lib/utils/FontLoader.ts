import Disposable from "seng-disposable";
import IFontParser from "../interfaces/IFontParser";

export interface FontParserConstructor {
	new(rawData:string): IFontParser;
}

export default class FontLoader extends Disposable {
	private _defaultParsers:{[extension:string]: FontParserConstructor} = {};
	private _files:Array<{path:string, loading:Promise<IFontParser>}> = [];

	public setDefaultParser(extension:string, parser:FontParserConstructor):void {
		this._defaultParsers[extension] = parser;
	}

	public load(path:string, _parser?:FontParserConstructor):Promise<IFontParser> {
		const pendingFile = this._files.find(file => file.path === path);
		if (pendingFile) {
			return pendingFile.loading;
		}

		let Parser:any = _parser;
		if (!_parser) {
			const parserExtension = Object.keys(this._defaultParsers).find(extension => (
				path.indexOf(extension, path.length - extension.length) !== -1
			));
			if (!parserExtension) {
				throw new Error(`No default parser defined for path "${path}". Please provide a parser`);
			}
			Parser = this._defaultParsers[parserExtension];
		}

		const loading = fetch(path).then(response => response.text()).then((text) => {
			return <IFontParser> new Parser(text);
		});
		this._files.push({
			path,
			loading
		});

		return loading;
	}
}
