import IRenderBounds from "../interfaces/IRenderBounds";

export default class RenderBoundsFixedWidth implements IRenderBounds {
	constructor(
		public width:number
	) {}

	public contains(x:number) {
		return x <= this.width;
	}
}
