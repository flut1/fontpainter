import {expect} from 'chai';
import {parsePathData} from "../../src/lib/utils/SVGUtils";

describe('parsePathData()', () =>
{
	describe('with an empty string', () =>
	{
		const result = parsePathData('');
		it('should return an empty array', () =>
		{
			expect(result).to.have.lengthOf(0);
		});
	})
});
