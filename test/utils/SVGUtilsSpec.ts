import {expect} from 'chai';
import {parsePathData, invertInstructionsY} from "../../src/lib/utils/SVGUtils";

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

