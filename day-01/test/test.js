import assert from 'assert';
import { solution } from '../script';


describe('✔ Day 01 - Know the variables, functions and basic syntax of Javascript.', () => {
    it('should return a number',() => {
        assert.equal(solution(1), 'number');
    });

    it('should return a string',() => {
        assert.equal(solution('Dieguillo'), 'string');
    });

    it('should return a boolean',() => {
        assert.equal(solution(true), 'boolean');
    });
});