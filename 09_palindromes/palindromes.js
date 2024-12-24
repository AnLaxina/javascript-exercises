const palindromes = function (word) {
    // For this, I'm removing any characters in the string that are NOT letters
    // this makes it easier to compare words later
    let newWord = word.replace(/\W/g, '').toLowerCase();
    let reversedWord = newWord.split("").reverse("").join("");
    return newWord === reversedWord;

};

// Do not edit below this line
module.exports = palindromes;
