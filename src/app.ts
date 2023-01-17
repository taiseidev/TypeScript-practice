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
