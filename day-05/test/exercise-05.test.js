import assert from "assert";
import { findLargestPalindrome } from "../exercise-05";

describe("🌐 Day 05 - Encuentra el palindromo más grande", () => {
  it("should return racecar", () => {
    const words = ["racecar", "level", "world", "hello"];
    const rta = findLargestPalindrome(words);
    assert.equal(rta, "racecar");
  });

  it("should return null", () => {
    const words = ["Platzi", "javascript", "html", "css"];
    const rta = findLargestPalindrome(words);
    assert.equal(rta, null);
  });

  it("should return madam", () => {
    const words = ["wow", "now", "madam", "civic"];
    const rta = findLargestPalindrome(words);
    assert.equal(rta, "madam");
  });

  it("should return repaper", () => {
    const words = ["asdfsrtetrew", "level", "noon", "repaper"];
    const rta = findLargestPalindrome(words);
    assert.equal(rta, "repaper");
  });
});
