import assert from 'assert';
import { solution } from '../script';


describe('solution', () => {
    it('should return a string',() => {
        assert.equal(typeof solution(123), 'string');
        assert.equal(typeof solution('hello'), 'string');
    });
});