import Glyph from "../Glyph";
import IFontProps from "./IFontProps";

interface IFontParser extends IFontProps {
	getGlyph(glyph:string):Glyph|null;
	getKerning(u1:number, u2:number):number;
}

export default IFontParser;
