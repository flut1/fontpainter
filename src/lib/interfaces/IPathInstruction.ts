/**
 * @module lib/interfaces
 *//** */

/**
 * Represents a single instruction in an SVG path data string
 */
interface IPathInstruction {
	command: string;
	params: number[];
}

export default IPathInstruction;
