function countDiceValues(dice) {
    return dice.reduce((acc, val) => {
        acc[val] = (acc[val] || 0) + 1;
        return acc;
    }, {});
}

function checkBrelan(dice) {
    return Object.values(countDiceValues(dice)).some(count => count === 3) ? 28 : 0;
}
module.exports = {
    checkBrelan,
};