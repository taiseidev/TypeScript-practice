// let userInput: unknown;
// let userName: string;

// userInput = 5;
// userInput = "Max";

// if (typeof userInput === "string") {
//   userName = userInput;
// }

// /// unknown型はany型と同じでどんな型でも入れることができる
// /// unknown型はany型よりは良い選択肢
// /// 書き換えをする際に型チェックを行う必要がある

// /// 値を絶対に返さないことがわかっている場合はnever型を指定する
// function generageError(message: string, code: number): never {
//   throw { message: message, errorCode: code };
// }

// generageError("エラーが発生しました", 500);

{
  // buttonがあることを明示的に指定するため!を追加
  const button = document.querySelector("button")!;
  // nullsafetyにすることができる
  button?.addEventListener("click", () => {
    console.log("clicked!!");
  });
}
