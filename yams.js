function countDiceValues(dice) {
    return dice.reduce((acc, val) => {
        acc[val] = (acc[val] || 0) + 1;
        return acc;
    }, {});
}

function checkBrelan(dice) {
    return Object.values(countDiceValues(dice)).some(count => count === 3) ? 28 : 0;
}
function checkCarre(dice) {
    return Object.values(countDiceValues(dice)).some(count => count === 4) ? 35 : 0;
}
function checkFull(dice) {
    const occurrences = countDiceValues(dice);
    return Object.values(occurrences).includes(3) && Object.values(occurrences).includes(2) ? 30 : 0;
}
function checkGrandeSuite(dice) {
    const sortedDice = dice.slice().sort((a, b) => a - b);
    return sortedDice.every((val, idx, arr) => idx === 0 || val === arr[idx - 1] + 1) ? 40 : 0;
}
function checkYams(dice) {
    return dice.every(val => val === dice[0]) ? 50 : 0;
}
function calculateChance(dice) {
    return dice.reduce((sum, val) => sum + val, 0);
}

module.exports = {
    checkBrelan,
    checkCarre,
    checkFull,
    checkGrandeSuite,
    checkYams,
    calculateChance,
};
