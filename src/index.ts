/**
 * Main exports of this module. Can be imported like so:
 * ```
 * import FontPainter, { WrapMode, Glyph } from 'fontpainter';
 * ```
 *
 * @module fontpainter
 * @preferred
 *//** */
import "ts-helpers";
import {default as _export} from './lib/FontPainter';

export {default as GlyphBoundingRect} from './lib/GlyphBoundingRect';
export {default as Glyph} from './lib/Glyph';
export {default as FontParserSVG} from './lib/parsers/FontParserSVG';
export {default as WrapMode} from './lib/enum/WrapMode';
export {default as TextAlign} from './lib/enum/TextAlign';
export {default as RenderEngineSVG} from './lib/engines/RenderEngineSVG';
export {default as RenderEngineCanvas} from './lib/engines/RenderEngineCanvas';
export {default as RenderBoundsElementWidth} from './lib/bounds/RenderBoundsElementWidth';
export {default as RenderBoundsFixedWidth} from './lib/bounds/RenderBoundsFixedWidth';

export default _export;
