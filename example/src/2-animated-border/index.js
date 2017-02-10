import FontPainter, { FontParserSVG, RenderEngineSVG, RenderBoundsElementWidth, TextAlign } from 'fontpainter';
import robotoBlack from '../../assets/font/Roboto-Black-webfont.svg';
import './example-animated-border.scss';

export class Demo {
	constructor() {
		this.container = document.querySelector('.example-animated-border');
		this.painter = new FontPainter();
		this.engine = new RenderEngineSVG();
		this.painter.setEngine(this.engine);
		this.painter.fontSize = 80;
		this.painter.align = TextAlign.CENTER;
		this.painter.loadFont(robotoBlack, FontParserSVG);
		this.painter.bounds = new RenderBoundsElementWidth(this.container);

		this.engine.addLayer((path, unitsPerPx) => {
			path.setAttribute('stroke', '#e56');
			path.setAttribute('stroke-width', 6 * unitsPerPx);
			path.setAttribute('stroke-dasharray', `${30 * unitsPerPx},${60 * unitsPerPx}`);
		});
		this.engine.addLayer(path => path.setAttribute('fill', '#ddd'));
		this.engine.setGlyphPadding({ top: 3, left: 3, bottom: 3, right: 3 });
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

export const menuName = 'Animated Border';

export const defaultText = 'Look at that fancy border!!';

export { default as template } from 'raw-loader!./template.html';

