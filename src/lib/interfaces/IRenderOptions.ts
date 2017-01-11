import IRenderBounds from "./IRenderBounds";
import WrapMode from "../enum/WrapMode";
import TextAlign from "../enum/TextAlign";

interface IRenderOptions {
	bounds:IRenderBounds|null;
	wrapMode:WrapMode;
	align:TextAlign;
}

export default IRenderOptions;
