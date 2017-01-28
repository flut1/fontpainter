import IRenderBounds from "../interfaces/IRenderBounds";

export default class RenderBoundsFixedWidth implements IRenderBounds {
	public isFixed:boolean = true;

	constructor(
		public width:number
	) {}

	public getWidth():number {
		return this.width;
	}

	public contains(x:number) {
		return x <= this.width;
	}
}
