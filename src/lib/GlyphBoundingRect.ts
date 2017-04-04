/**
 * @module fontpainter
 */ /** */

class GlyphBoundingRect {
	constructor(
		public minX:number,
		public minY:number,
		public maxX:number,
		public maxY:number
	) {}

	public get width():number {
		return this.maxX - this.minX;
	}

	public get height():number {
		return this.maxY - this.minY;
	}
}

export default GlyphBoundingRect;
