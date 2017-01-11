import GlyphMap from "../types/GlyphMap";

interface ICopyProps {
	copy:string;
	characters: Array<string>;
	charCodes: Array<number>;
	kernings: Array<number>;
	glyphs: GlyphMap;
}

export default ICopyProps;
