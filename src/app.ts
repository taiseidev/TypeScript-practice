{
  // デコレーターとして適用する際は大文字で命名
  function Logger(logString: string) {
    return function (constructor: Function) {
      console.log(logString);
      console.log(constructor);
    };
  }

  @Logger("ログ出力中 - Person")
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

// デコレーターファクトリーを使うことによってデコレータの内部で行うことをカスタマイズすることができる
