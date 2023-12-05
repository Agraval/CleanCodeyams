const {
    checkBrelan,
    checkCarre,
    checkFull,
    checkGrandeSuite,
    checkYams,
    calculateChance,
} = require('./yams');

test('identifie un Brelan', () => {
    expect(checkBrelan([1, 1, 1, 2, 3])).toBe(28);
    expect(checkBrelan([1, 2, 3, 4, 5])).toBe(0);
});
test('identifie un Carré', () => {
    expect(checkCarre([2, 2, 2, 2, 5])).toBe(35);
    expect(checkCarre([1, 2, 3, 4, 5])).toBe(0);
});
test('identifie un Full', () => {
    expect(checkFull([1, 1, 2, 2, 2])).toBe(30);
    expect(checkFull([1, 2, 3, 4, 5])).toBe(0);
});
test('identifie une Grande Suite', () => {
    expect(checkGrandeSuite([1, 2, 3, 4, 5])).toBe(40);
    expect(checkGrandeSuite([1, 1, 1, 2, 3])).toBe(0);
});
test('identifie un Yams', () => {
    expect(checkYams([4, 4, 4, 4, 4])).toBe(50);
    expect(checkYams([1, 1, 1, 1, 2])).toBe(0);
});
test('calcule la Chance', () => {
    expect(calculateChance([1, 2, 3, 4, 5])).toBe(15);
    expect(calculateChance([6, 6, 6, 6, 6])).toBe(30);
});