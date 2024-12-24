const findTheOldest = function (people) {
    // Sorts each person's age from oldest to youngest
    people.sort((a, b) => (b.yearOfDeath - b.yearOfBirth) - (a.yearOfDeath - a.yearOfBirth));
    return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;
