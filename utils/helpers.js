module.exports = {
    capitalize(string) {
        let firstLetter = string[0];
        let remainingLetters = string.slice(1);

        firstLetter = firstLetter.toUpperCase();

        return firstLetter + remainingLetters;
    }
};