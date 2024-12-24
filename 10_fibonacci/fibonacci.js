const fibonacci = function (place) {
    let n1 = 0;
    let n2 = 1;
    let nextTerm;

    if (place < 0) {
        return "OOPS";
    }

    for (let i = 1; i <= place; i++) {
        console.log(n1);
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }

    return n1;
};

// Do not edit below this line
module.exports = fibonacci;
