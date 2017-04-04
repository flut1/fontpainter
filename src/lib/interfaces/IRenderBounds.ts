/**
 * @module lib/interfaces
 *//** */

/**
 * Render bounds
 */
interface IRenderBounds {
	contains(x, y):boolean;
	getWidth():number;
	isFixed:boolean;
}

export default IRenderBounds;
