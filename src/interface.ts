// interfaceとはオブジェクトがどんな型であるかという定義（jsにはない）

// カスタムtypeはオブジェクトの構造だけでなくunion型など様々な型を定義することができる
// type Person = {
//   name: string;
//   age: number;

//   greet(phrase: string): void;
// }

// interfaceはオブジェクトの構造のみを指定することができる
// interfaceは抽象クラスと同様に継承して継承先に変数とメソッドの追加を強制させることができる
// abstractとの違いはabstractは具象メソッドと抽象メソッドが混在しているがinterfaceは具体的な実装を持つことができない

// interfaceは分割してextendsで継承することができる
// これをするメリットは、例えばNamedは使うけどGreetableの内容を使いたくない時など
interface Named {
  readonly name?: string;
  // ?をつけることによって任意のパラメーターとして設定することができる（オプショナル）
  outputName?: string;
}

interface Greetable extends Named {
  age: number;

  greet(phrase: string): void;
}

class Person implements Greetable {
  name?: string;
  age = 30;

  constructor(n: string) {
    if (n) {
      this.name = n;
    }
  }

  greet(phrase: string): void {
    console.log(phrase + " " + this.name);
  }
}
let user1: Greetable;

user1 = new Person("Maxさん");

user1.greet("Hello I am");

// 関数型としてのインターフェース
// 関数型としてのインターフェースを定義する時はカスタムtypeが一般的
// type AddFn = (a: number, b: number) => number;

interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
  return n1 + n2;
};
