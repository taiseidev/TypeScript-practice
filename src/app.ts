// interface Admin {
//   name: string;
//   privileges: string[];
// }

// interface Employee {
//   name: string;
//   startDate: Date;
// }

// interface ElevatedEmployee extends Employee, Admin {}

{
  type Admin = {
    name: string;
    privileges: string[];
  };

  type Employee = {
    name: string;
    startDate: Date;
  };

  // 交差型
  // 複数の型を結合
  // どんな型についても使うことができる
  type ElevatedEmployee = Admin & Employee;

  const e1: ElevatedEmployee = {
    name: "Max",
    privileges: ["create-server"],
    startDate: new Date(),
  };

  type Combinables = string | number;
  // type Numeric = number | boolean;

  // 交差型は交差している型を作るためunion型で交差型がを作成する場合は
  // 下記のように交差しているnumber型のみが結合される
  // オブジェクト型の場合は各プロパティが使用できるようになる
  // type Universal = Combinables & Numeric;

  function add(a: Combinables, b: Combinables) {
    if (typeof a === "string" || typeof b === "string") {
      return a.toString() + b.toString();
    }
    return a + b;
  }

  add(12, 12);

  type UnknownEmployee = Employee | Admin;

  function printEmployeeInformation(emp: UnknownEmployee) {
    console.log(emp.name);
    // カスタム型はjavascriptでは認識されないため、typeof emp === 'Admin'
    // といった書き方はできない
    if ("privileges" in emp) {
      console.log("Privilages: " + emp.privileges);
    }
    if ("startDate" in emp) {
      console.log("Privilages: " + emp.startDate);
    }
  }

  // privilegesとstartDateが存在するため
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

    loadCargo(amount: number) {
      console.log("荷物を乗せています..." + amount);
    }
  }

  type Vehicle = Car | Truck;

  const v1 = new Car();
  const v2 = new Truck();

  function useVehicle(vehicle: Vehicle) {
    vehicle.drive();

    // クラスをタプガードを行う場合はinstanceofを使うことによってクラスのチェックを行うことができる。
    if (vehicle instanceof Truck) {
      vehicle.loadCargo(1000);
    }
  }

  useVehicle(v1);
  useVehicle(v2);

  interface Bird {
    type: "bird";
    flyingSpeed: number;
  }

  interface Horse {
    type: "hourse";
    runnningSpeed: number;
  }

  type Animal = Bird | Horse;

  function moveAnimal(animal: Animal) {
    // if ("flyingSpeed" in animal) {
    //   console.log(animal.flyingSpeed);
    // }
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

  // const userInputElement = <HTMLInputElement>(
  //   document.getElementById("user-input")!
  // );

  const userInputElement = document.getElementById("user-input")!;
  if (userInputElement) {
    (userInputElement as HTMLInputElement).value = "こんにちは";
  }

  // index型を使用したinterfaceの定義
  interface ErrorContainer {
    [props: string]: string;
  }

  const errorBag: ErrorContainer = {
    email: "正しいメールアドレスではありません。",
    username: "ユーザ名に記号を含めることはできません。",
  };
}
