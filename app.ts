// interface Admin {
//   name: string;
//   privileges: string[];
// }

// interface Employee {
//   name: string;
//   startDate: Date;
// }

// interface ElevatedEmployee extends Employee, Admin {}

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
type Numeric = number | boolean;

// 交差型は交差している型を作るためunion型で交差型がを作成する場合は
// 下記のように交差しているnumber型のみが結合される
// オブジェクト型の場合は各プロパティが使用できるようになる
type Universal = Combinables & Numeric;
