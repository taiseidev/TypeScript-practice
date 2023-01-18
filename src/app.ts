{
  // デコレーターとして適用する際は大文字で命名
  function Logger(constructor: Function) {
    console.log("ログ出力中...");
    console.log(constructor);
  }

  @Logger
  class Person {
    name = "Max";

    constructor() {
      console.log("Personオブジェクトを作成中、");
    }
  }

  const pers = new Person();

  console.log(pers);
}

// デコレーターはクラスが定義されたタイミングで実行
// インスタンス化のタイミングではない
// デコレーターはJavaScriptがクラスの定義を見つけた時に実行
