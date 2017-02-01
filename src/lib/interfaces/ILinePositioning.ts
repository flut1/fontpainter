import IGlyphPositioning from "./IGlyphPositioning";

interface ILinePositioning {
	x:number;
	y:number;
	width:number;
	height:number;
	glyphs:Array<IGlyphPositioning>;
}

export default ILinePositioning;
