const removeFromArray = function (arr, ...elementsToRemove) {
    // To handle multiple values/elements, I use the rest parameter
    // to remove any number of elements in the array (if they exist)
    // for (const element of elementsToRemove) {
    //     const elementIndex = arr.indexOf(element);
    //     arr.splice(elementIndex, 2);
    // }

    // return arr
    return arr.filter(val => !elementsToRemove.includes(val));
};


// Do not edit below this line
module.exports = removeFromArray;
