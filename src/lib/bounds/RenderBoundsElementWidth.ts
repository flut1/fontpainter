import IRenderBounds from "../interfaces/IRenderBounds";

// todo: implement update on resize
export default class RenderBoundsElementWidth implements IRenderBounds {
	public width:number|null = null;

	constructor(
		public element:HTMLElement
	) {}

	public update():void {
		this.width = this.element.offsetWidth;
	}

	public contains(x:number):boolean {
		if (this.width === null) {
			this.update();
		}

		return x <= this.width;
	}
}
