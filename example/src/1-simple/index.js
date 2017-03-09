import FontPainter, { FontParserSVG, RenderEngineSVG, RenderBoundsElementWidth } from 'fontpainter';
import robotoBlack from '../../assets/font/Roboto-Black-webfont.svg';
import './example-simple.scss';

export class Demo {
	immediate = true;

	constructor() {
		this.container = document.querySelector('.example-simple');
		this.painter = new FontPainter();
		this.engine = new RenderEngineSVG();
		this.painter.setEngine(this.engine);
		this.painter.fontSize = 45;
		this.painter.loadFont(robotoBlack, FontParserSVG);
		this.painter.bounds = new RenderBoundsElementWidth(this.container);
	}

	render(copy = '') {
		this.painter.getFont().then(() => {
			this.painter.paint(copy);
			this.container.appendChild(this.engine.svgElement);
		});
	}

	dispose() {
		this.painter.dispose();
	}
}

export const menuName = 'Simple SVG';

export const defaultText = 'The quick brown fox jumps over the lazy dog';

export { default as template } from 'raw-loader!./template.html';

