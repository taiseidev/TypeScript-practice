"use strict";
{
    function add(n1, n2) {
        return n1 + n2;
    }
    function printResult(num) {
        console.log("Result: " + num);
    }
    function addAndHadle(n1, n2, cb) {
        const result = n1 + n2;
        cb(result);
    }
    addAndHadle(10, 20, (result) => {
        console.log(result);
    });
    printResult(add(5, 12));
    console.log(printResult(add(5, 12)));
    let combineValues;
    combineValues = add;
    console.log(combineValues(8, 8));
}
//# sourceMappingURL=functions.js.map