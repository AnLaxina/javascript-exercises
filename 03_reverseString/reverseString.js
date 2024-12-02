const reverseString = function (wordToReverse) {
    let reverseString = "";
    if (typeof wordToReverse === "string") {
        let lastIndexOfString = wordToReverse.length - 1;
        for (let i = lastIndexOfString; i >= 0; i--) {
            reverseString += wordToReverse[i];
        }
        return reverseString;
    }



};

// Do not edit below this line
module.exports = reverseString;
