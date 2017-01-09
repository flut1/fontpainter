import IPathInstruction from "./interfaces/IPathInstruction";
import IGlyphBoundingRect from "./interfaces/IGlyphBoundingRect";

abstract class AbstractGlyph {
	public abstract getPathString():string;
	public abstract getPathInstructions():Array<IPathInstruction>;
	public abstract getBoundingRect():IGlyphBoundingRect;
}

export default AbstractGlyph;
