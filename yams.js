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
module.exports = {
    checkBrelan,
    checkCarre,
    checkFull,
};
