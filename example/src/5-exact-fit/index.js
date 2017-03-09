import FontPainter, { FontParserSVG, RenderEngineSVG, RenderBoundsElementWidth, TextAlign } from 'fontpainter';
import './example-exact-fit.scss';

export class Demo {
	immediate = true;

	constructor() {
		this.container = document.querySelector('.example-exact-fit');
		this.painter = new FontPainter();
		this.engine = new RenderEngineSVG();
		this.painter.setEngine(this.engine);
		this.painter.fontSize = 45;
		this.painter.lineHeight = 1;
		this.painter.exactFit = true;
		this.painter.bounds = new RenderBoundsElementWidth(this.container);
	}

	render(copy = '', fontPath) {
		this.painter.loadFont(fontPath, FontParserSVG);

		this.painter.getFont().then(() => {
			this.painter.paint(copy);
			this.container.appendChild(this.engine.svgElement);
		});
	}

	dispose() {
		this.painter.dispose();
	}
}

export const menuName = 'Exact Fit';

export const defaultText = 'The red box fits exactly around me';

export { default as template } from 'raw-loader!./template.html';

