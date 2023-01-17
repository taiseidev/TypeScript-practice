"use strict";
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergeObj = merge({ name: "Max" }, { age: 30 });
console.log(mergeObj.age);
function countAndDescribe(element) {
    let descriptionText = "値がありません";
    if (element.length > 0) {
        descriptionText = "値は" + element.length + "個です。";
    }
    return [element, descriptionText];
}
console.log(countAndDescribe("お疲れ様様です"));
function extractAndConvert(obj, key) {
    return "value: " + obj[key];
}
extractAndConvert({ name: "Max" }, "name");
//# sourceMappingURL=app.js.map