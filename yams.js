function checkBrelan(dice) {
    const occurrences = countOccurrences(dice);
    return Object.values(occurrences).some(count => count === 3);
}

module.exports = { checkBrelan };
