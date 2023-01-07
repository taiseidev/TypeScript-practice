function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log("Result: " + num);
}

function addAndHadle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHadle(10, 20, (result) => {
  console.log(result);
});

printResult(add(5, 12));
console.log(printResult(add(5, 12))); // 何も返さないため出力はundefinedとなる

let combineValues: (a: number, b: number) => number;

combineValues = add;

console.log(combineValues(8, 8));
