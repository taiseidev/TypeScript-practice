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
