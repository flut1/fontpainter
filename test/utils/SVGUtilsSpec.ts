import {expect} from 'chai';
import {
	parsePathData, invertInstructionsY, getUnicodeRanges,
	instructionsToDataString
} from "../../src/lib/utils/SVGUtils";

describe('parsePathData()', () =>
{
	describe('with an empty string', () =>
	{
		const result = parsePathData('');
		it('should return an empty array', () =>
		{
			expect(result).to.have.lengthOf(0);
		});
	});
	describe('with string "M124 570v22q0,392,152,665.5t344 354.5"', () =>
	{
		const result = parsePathData('M124 570v22q0,392,152,665.5t344 354.5');

		it('should return an array with length 4', () =>
		{
			expect(result).to.have.lengthOf(4);
		});

		it('should return the correct commands', () =>
		{
			expect(result[0].command).to.equal('M');
			expect(result[1].command).to.equal('v');
			expect(result[2].command).to.equal('q');
			expect(result[3].command).to.equal('t');
		});

		it('should return the correct parameters', () =>
		{
			expect(result[0].params[0]).to.equal(124);
			expect(result[0].params[1]).to.equal(570);
			expect(result[1].params[0]).to.equal(22);
			expect(result[2].params[0]).to.equal(0);
			expect(result[2].params[1]).to.equal(392);
			expect(result[2].params[2]).to.equal(152);
			expect(result[2].params[3]).to.equal(665.5);
			expect(result[3].params[0]).to.equal(344);
			expect(result[3].params[1]).to.equal(354.5);
		});
	});
	describe('with string "M124 570v22q0,392,152,665.5t344 354.5" and invertY true', () =>
	{
		const result = parsePathData('M124 570v22q0,392,152,665.5t344 354.5', true);

		it('should invert the Y parameters', () =>
		{
			expect(result[0].params[0]).to.equal(124);
			expect(result[0].params[1]).to.equal(-570);
			expect(result[1].params[0]).to.equal(-22);
			expect(result[2].params[0]).to.equal(0);
			expect(result[2].params[1]).to.equal(-392);
			expect(result[2].params[2]).to.equal(152);
			expect(result[2].params[3]).to.equal(-665.5);
			expect(result[3].params[0]).to.equal(344);
			expect(result[3].params[1]).to.equal(-354.5);
		});
	});
});

describe('instructionsToDataString()', () =>
{
	describe('with an empty array', () =>
	{
		const result = instructionsToDataString([]);
		it('should return an empty string', () =>
		{
			expect(result).to.equal('');
		});
	});
	describe('with [{command:"M", params: [5, 2]},{command:"q", params: [0,372,784,62.4]}]', () =>
	{
		const result = instructionsToDataString([
			{command:"M", params: [ 5, 2 ]},
			{command:"q", params: [ 0,372,784,62.4 ]}
		]);
		it('should return "M5 2q0 372 784 62.4"', () =>
		{
			expect(result).to.equal('M5 2q0 372 784 62.4');
		});
	});
});

describe('invertInstructionsY()', () => {
	const result = invertInstructionsY([
		{
			command: 'V',
			params: [11, -16, 21, 31]
		},
		{
			command: 'c',
			params: [10, -15, 20, 30]
		},
		{
			command: 'H',
			params: [10, -15, 20, 30]
		},
		{
			command: 'l',
			params: [10, -15, 20, 30]
		},
		{
			command: 'Q',
			params: [10, -15, 20, 30, 2, 3]
		},
	]);

	it('should not invert parameters for "H" command', () => {
		expect(result[2].params[0]).to.equal(10);
		expect(result[2].params[1]).to.equal(-15);
		expect(result[2].params[2]).to.equal(20);
		expect(result[2].params[3]).to.equal(30);
	});

	it('should invert every parameter of the "V" command', () => {
		expect(result[0].params[0]).to.equal(-11);
		expect(result[0].params[1]).to.equal(16);
		expect(result[0].params[2]).to.equal(-21);
		expect(result[0].params[3]).to.equal(-31);
	});

	it('should invert every second parameter of the commands "c", "l" and "Q"', () => {
		expect(result[1].params[0]).to.equal(10);
		expect(result[1].params[1]).to.equal(15);
		expect(result[1].params[2]).to.equal(20);
		expect(result[1].params[3]).to.equal(-30);

		expect(result[3].params[0]).to.equal(10);
		expect(result[3].params[1]).to.equal(15);
		expect(result[3].params[2]).to.equal(20);
		expect(result[3].params[3]).to.equal(-30);

		expect(result[4].params[0]).to.equal(10);
		expect(result[4].params[1]).to.equal(15);
		expect(result[4].params[2]).to.equal(20);
		expect(result[4].params[3]).to.equal(-30);
		expect(result[4].params[4]).to.equal(2);
		expect(result[4].params[5]).to.equal(-3);
	});
});



describe('getUnicodeRanges()', () =>
{
	describe('with an array of single characters in "U" and "G"', () =>
	{
		const result = getUnicodeRanges(['a', ')', 'g'], ['z', ']', '"']);
		it('should return all characters as length-1 ranges', () =>
		{
			expect(result).to.deep.include.members([[97,97], [41,41], [103,103], [122,122], [93,93], [34,34]]);
		});
	});

	describe('with the unicode range "U+20A7"', () =>
	{
		const result = getUnicodeRanges(['U+20A7'], []);
		it('should return a length-1 range 8359-8359', () =>
		{
			expect(result).to.deep.equal([[8359, 8359]]);
		});
	});

	describe('with the unicode range "U+20A?"', () =>
	{
		const result = getUnicodeRanges(['U+20A?'], []);
		it('should return a range 8352-8367', () =>
		{
			expect(result).to.deep.equal([[8352, 8367]]);
		});
	});

	describe('with the unicode range "U+12??"', () =>
	{
		const result = getUnicodeRanges(['U+12??'], []);
		it('should return a range 4608-4863', () =>
		{
			expect(result).to.deep.equal([[4608, 4863]]);
		});
	});

	describe('with the unicode range "U+2315-2437"', () =>
	{
		const result = getUnicodeRanges(['U+2315-2437'], []);
		it('should return a range 8981-9271', () =>
		{
			expect(result).to.deep.equal([[8981, 9271]]);
		});
	});

	describe('with glyph entity names "PlusMinus", "comma", "LeftArrow"', () =>
	{
		const result = getUnicodeRanges([], ['PlusMinus', 'comma', 'LeftArrow']);
		it('should return 177, 44 and 8592 characters as length-1 ranges', () =>
		{
			expect(result).to.deep.include.members([[177, 177], [44, 44], [8592, 8592]]);
		});
	});

	describe('with a combination of unicode ranges and glyph entity names', () =>
	{
		const result = getUnicodeRanges(
			['U+2315-2437', 'U+12??', 'U+20A?', 'U+20A7'],
			['PlusMinus', 'comma', 'LeftArrow']
		);
		it('should return all ranges combined', () =>
		{
			expect(result).to.deep.include.members([
				[177, 177],
				[44, 44],
				[8592, 8592],
				[8981, 9271],
				[4608, 4863],
				[8352, 8367],
				[8359, 8359]
			]);
		});
	});
});
