const repeatString = function (word, numOfTimes) {
    let wordToReturn = "";

    if (numOfTimes < 0) {
        return "ERROR";
    }

    for (let i = 0; i < numOfTimes; i++) {
        wordToReturn += word;
    }

    return wordToReturn;
};

// Do not edit below this line
module.exports = repeatString;
