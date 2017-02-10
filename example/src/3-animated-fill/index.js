import FontPainter, { FontParserSVG, RenderEngineSVG, RenderBoundsElementWidth, TextAlign } from 'fontpainter';
import robotoBlack from '../../assets/font/Roboto-Black-webfont.svg';
import './example-animated-fill.scss';

export class Demo {
	constructor() {
		this.gradientInitialized = false;
		this.mask = null;
		this.container = document.querySelector('.example-animated-fill');
		this.painter = new FontPainter();
		this.engine = new RenderEngineSVG();
		this.painter.setEngine(this.engine);
		this.painter.fontSize = 80;
		this.painter.align = TextAlign.CENTER;
		this.painter.loadFont(robotoBlack, FontParserSVG);
		this.painter.bounds = new RenderBoundsElementWidth(this.container);

		this.gradientSvgGroup = document.querySelector('.gradient-svg-group');

		this.engine.addLayer((path, unitsPerPx) => {
			path.setAttribute('stroke', '#000');
			path.setAttribute('stroke-width', 10 * unitsPerPx);
		});

		this.engine.addLayer(path => path.setAttribute('fill', '#fff'));

		this.engine.setGlyphPadding({ top: 3, left: 3, bottom: 3, right: 3 });
	}

	render(copy = '') {
		this.painter.getFont().then(() => {
			this.painter.paint(copy);
			this.container.appendChild(this.engine.svgElement);

			if (!this.gradientInitialized) {
				this.gradientInitialized = true;
				this.engine.svgElement.appendChild(this.gradientSvgGroup);
				const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
				this.engine.svgElement.insertBefore(defs, this.engine.svgElement.firstChild);
				this.mask = document.createElementNS('http://www.w3.org/2000/svg', 'mask');
				this.mask.setAttribute('id', 'textMask');

				defs.appendChild(this.mask);
				this.gradientSvgGroup.setAttributeNS(null, 'mask', "url(#textMask)");
			}

			while(this.mask.firstChild) {
				this.mask.removeChild(this.mask.firstChild);
			}
			this.mask.appendChild(this.engine.layerGroups[1]);
		});
	}

	dispose() {
		this.painter.dispose();
	}
}

export const menuName = 'Animated Fill';

export const defaultText = 'SO MUCH WOW';

export { default as template } from 'raw-loader!./template.html';

