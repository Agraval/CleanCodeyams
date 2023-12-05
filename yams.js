function checkBrelan(dice) {
    const occurrences = countOccurrences(dice);
    return Object.values(occurrences).some(count => count === 3);
}
const yams = (rolls) => {
    const scores = rolls.map(roll => {
        return getScore(roll);
    });
    return scores.reduce((acc, score) => acc + score, 0);
};

module.exports = { yams, checkBrelan };
