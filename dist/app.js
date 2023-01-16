"use strict";
{
    const e1 = {
        name: "Max",
        privileges: ["create-server"],
        startDate: new Date(),
    };
    function add(a, b) {
        if (typeof a === "string" || typeof b === "string") {
            return a.toString() + b.toString();
        }
        return a + b;
    }
    add(12, 12);
    function printEmployeeInformation(emp) {
        console.log(emp.name);
        if ("privileges" in emp) {
            console.log("Privilages: " + emp.privileges);
        }
        if ("startDate" in emp) {
            console.log("Privilages: " + emp.startDate);
        }
    }
    printEmployeeInformation(e1);
    printEmployeeInformation({
        name: "Manu",
        startDate: new Date(),
    });
    class Car {
        drive() {
            console.log("運転中...");
        }
    }
    class Truck {
        drive() {
            console.log("トラック運転中...");
        }
        loadCargo(amount) {
            console.log("荷物を乗せています..." + amount);
        }
    }
    const v1 = new Car();
    const v2 = new Truck();
    function useVehicle(vehicle) {
        vehicle.drive();
        if (vehicle instanceof Truck) {
            vehicle.loadCargo(1000);
        }
    }
    useVehicle(v1);
    useVehicle(v2);
    function moveAnimal(animal) {
        let speed;
        switch (animal.type) {
            case "bird":
                speed = animal.flyingSpeed;
                break;
            case "hourse":
                speed = animal.runnningSpeed;
                break;
        }
        console.log("移動速度： " + speed);
    }
    moveAnimal({
        type: "bird",
        flyingSpeed: 10,
    });
    const userInputElement = document.getElementById("user-input");
    if (userInputElement) {
        userInputElement.value = "こんにちは";
    }
}
//# sourceMappingURL=app.js.map