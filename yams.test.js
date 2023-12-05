const {
    checkBrelan,
} = require('./yams');

test('identifie un Brelan', () => {
    expect(checkBrelan([1, 1, 1, 2, 3])).toBe(28);
    expect(checkBrelan([1, 2, 3, 4, 5])).toBe(0);
});

