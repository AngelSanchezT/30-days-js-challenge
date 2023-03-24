import assert from 'assert';
import { calculateTip } from '../script';


describe('✔ Day 02 - Calculate the tip.', () => {
    it('should return 10',() => {
        assert.equal(calculateTip(100, 10), 10);
    });

    it('should return 381.0825',() => {
        assert.equal(calculateTip(1524.33, 25), 381.0825);
    });
});