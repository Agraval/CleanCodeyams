const {
    yams,
    checkBrelan,
} = require('./yams');

describe("yams", () => {
    it("should return 0 for an empty array", () => {
        const rolls = [];
        expect(yams(rolls)).toBe(0);
    });

test('identifie un Brelan', () => {
    expect(checkBrelan([1, 1, 1, 2, 3])).toBe(true);
    expect(checkBrelan([1, 2, 3, 4, 5])).toBe(false);
});
