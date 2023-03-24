import assert from 'assert';
import { isLeapYear } from '../isLeapYear';


describe('✔ Day 03 - Find out if a year is a leap year', () => {
    it('should return a false',() => {
        assert.equal(isLeapYear(2002), false);
    });

    it('should return a true',() => {
        assert.equal(isLeapYear(2000), true);
    });

    it('should return a false for decimals years',() => {
        assert.equal(isLeapYear(1984.25), false);
    });

    it('should return false for negative years', () => {
        assert.equal(isLeapYear(-2024), false);
    });
});