interface ILinePositioning {
	x:number;
	y:number;
	width:number;
	height:number;
	glyphs:Array<IGlyphPositioning>;
}

interface IGlyphPositioning {
	x:number;
	y:number;
	index:number;
}

export default ILinePositioning;
