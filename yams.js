function checkBrelan(dice) {
    const occurrences = dice.reduce((acc, val) => {
        acc[val] = (acc[val] || 0) + 1;
        return acc;
    }, {});

    return Object.values(occurrences).some(count => count === 3) ? 28 : 0;
}

module.exports = { checkBrelan };
