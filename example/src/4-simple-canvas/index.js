import FontPainter, { FontParserSVG, RenderEngineCanvas, RenderBoundsElementWidth, TextAlign } from 'fontpainter';
import robotoBlack from '../../assets/font/Roboto-Black-webfont.svg';
import './example-simple-canvas.scss';

export class Demo {
	constructor() {
		this.container = document.querySelector('.example-simple-canvas');
		this.canvas = document.querySelector('.main-canvas');
		this.painter = new FontPainter();
		this.engine = new RenderEngineCanvas();
		this.engine.target = this.canvas.getContext('2d');
		this.painter.setEngine(this.engine);
		this.painter.fontSize = 60;
		this.painter.align = TextAlign.CENTER;
		this.painter.bounds = new RenderBoundsElementWidth(this.container);
		this.painter.loadFont(robotoBlack, FontParserSVG);
	}

	render(copy = '') {
		this.canvas.setAttribute('width', this.canvas.offsetWidth);
		this.canvas.setAttribute('height', this.canvas.offsetHeight);
		this.painter.getFont().then(() => {
			this.painter.paint(copy);
		});
	}

	dispose() {
		this.painter.dispose();
	}
}

export const menuName = 'Simple Canvas';

export const defaultText = 'Wow, look at me!!1 I\'m a canvas!';

export { default as template } from 'raw-loader!./template.html';

