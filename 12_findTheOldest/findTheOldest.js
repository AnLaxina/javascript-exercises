const findTheOldest = function (people) {
    const noDeadPeople = people.map((person) => typeof person.yearOfDeath === "undefined");
    const combinedPeople = people.concat(noDeadPeople);
    // Sorts each person's age from oldest to youngest
    combinedPeople.sort((a, b) => {
        const date = new Date();
        let currentYear = date.getFullYear();
        if (typeof a.yearOfDeath === "undefined") {
            return (b.yearOfDeath - b.yearOfBirth) - (currentYear - a.yearOfBirth);
        }
        else if (typeof b.yearOfDeath === "undefined") {
            return (currentYear - b.yearOfBirth) - (a.yearOfDeath - a.yearOfBirth);

        }
        return (b.yearOfDeath - b.yearOfBirth) - (a.yearOfDeath - a.yearOfBirth);

    });
    return combinedPeople[0];
};

// Do not edit below this line
module.exports = findTheOldest;
