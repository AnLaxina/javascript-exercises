const leapYears = function (year) {
    // Criteria for leap year:
    // - Divisible by 4
    // - Can't be divisible by 100 unless also divisible by 400
    // (year % 100 === 0 && year % 400 === 0) && year % 100 != 0

    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return true;
            }
            return false;
        }
        return true;
    }
    return false;

};

// Do not edit below this line
module.exports = leapYears;
