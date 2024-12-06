const sumAll = function (start, end) {
    let sum = 0;
    // Ensures that the given parameters are valid (positive integers)
    if (Number.isInteger(start) && Number.isInteger(end) && start >= 0 && end >= 0) {
        if (start > end) {
            for (; start >= end; start--) {
                sum += start;
            }
        }
        else {
            for (; start <= end; start++) {
                sum += start;
            }
        }

        return sum;
    }
    return "ERROR";

};

// Do not edit below this line
module.exports = sumAll;
