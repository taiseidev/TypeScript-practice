"use strict";
class Person {
    constructor(n) {
        this.age = 30;
        if (n) {
            this.name = n;
        }
    }
    greet(phrase) {
        console.log(phrase + " " + this.name);
    }
}
let user1;
user1 = new Person("Maxさん");
user1.greet("Hello I am");
let add;
add = (n1, n2) => {
    return n1 + n2;
};
//# sourceMappingURL=app.js.map