let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Max";

if (typeof userInput === "string") {
  userName = userInput;
}

/// unknown型はany型と同じでどんな型でも入れることができる
/// unknown型はany型よりは良い選択肢
/// 書き換えをする際に型チェックを行う必要がある
