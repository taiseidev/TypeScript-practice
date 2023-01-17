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
