// allows us to specify --noEmitHelpers within our tsconfig.json
// this skips emitting helpers in every file, we just load them once here
import "ts-helpers";

// Export all classes (named and default) that you want to be publicly available
// in the browser as named exports here.
// Interfaces should be ignored, as they don't export any code.
export {default as FontParserSVG} from './lib/parsers/FontParserSVG';
export {default as FontPainter} from './lib/FontPainter';
export {default as FPRenderEngineSVG} from './lib/engines/RenderEngineSVG';
export {default as FPRenderBoundsElementWidth} from './lib/bounds/RenderBoundsElementWidth';
export {default as FPRenderBoundsFixedWidth} from './lib/bounds/RenderBoundsFixedWidth';
