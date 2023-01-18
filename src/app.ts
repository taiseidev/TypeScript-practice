// console.log("ジェネリクスについて学習していきます");

// const names: Array<string> = []; // === string[]

// const primise = new Promise<string>((resolve, reject) => {
//   setTimeout(() => {
//     resolve("終わりました");
//   }, 2000);
// });

// どんな型になるかわからないけど型に追加の情報を付与する場合はジェネリクスを使用する
function merge<T extends {}, U extends {}>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergeObj = merge({ name: "Max" }, { age: 30 });
console.log(mergeObj.age);

interface Lengthy {
  length: number;
}

// lengthプロパティのある方であればどんな型も入れることができる
function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "値がありません";

  if (element.length > 0) {
    descriptionText = "値は" + element.length + "個です。";
  }

  return [element, descriptionText];
}

console.log(countAndDescribe("お疲れ様様です"));

// 第一引数に渡したオブジェクトに特定のプロパティが格納されていることを保証するため
// 第二引数のジェネリクスにはkeofを指定

// 下記だとkey部分にエラーが発生する
// function extractAndConvert<T extends object, U>(obj: T, key: U) {
//   return "value: " + obj[key];
// }

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "value: " + obj[key];
}

extractAndConvert({ name: "Max" }, "name");

class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }
  removeItem(item: T) {
    // 引数に渡されるオブジェクトは実質的に新しいオブジェクトであるため、
    // そのままspliceしてしまうとアドレスが見つからないため-1となってしまう
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item, 1));
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();

textStorage.addItem("Data1");
textStorage.addItem("Data2");
textStorage.removeItem("Data1");

console.log(textStorage.getItems());

const numberStorage = new DataStorage<number | string>();

// const objStorage = new DataStorage<object>();

// // 一度定数に格納することによって同じオブジェクト（ハッシュ値も同じ）を渡すことができる
// const obj = { name: "Max" };

// objStorage.addItem(obj);
// objStorage.addItem({ name: "Manu" });
// objStorage.removeItem(obj);

// console.log(objStorage.getItems());

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  // Partialで囲うことによって任意のプロパティを設定することができる
  // courseGoalにはtitle等のプロパティはないがPartialで囲ってることによっtえ
  // 一時的にプロパティがあるということをTypeScriptに伝えることができる
  let courseGoal: Partial<CourseGoal> = {};

  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  // Partial型のためキャスとして返却
  return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ["Max"];
// Readonlyのためpushすることができない
// names.push("Anna");
