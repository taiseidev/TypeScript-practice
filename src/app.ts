{
  // デコレーターとして適用する際は大文字で命名
  function Logger(logString: string) {
    console.log("LOGGER ファクトリ");
    return function (constructor: Function) {
      console.log(logString);
      console.log(constructor);
    };
  }

  function WithTemplate(template: string, hookId: string) {
    console.log("TEMPLATE ファクトリ");
    // _を指定した場合引数では受け取るが使用しないことを明示している
    return function (constructor: any) {
      console.log("テンプレートを表示");
      const hookEl = document.getElementById(hookId);
      const p = new constructor();
      if (hookEl) {
        hookEl.innerHTML = template;
        hookEl.querySelector("h1")!.textContent = p.name;
      }
    };
  }

  // デコレータ関数は下から上に実行される
  //下記の場合はWithTemplateが先
  @Logger("ログ出力中 - Person")
  @WithTemplate("<h1>Personオブジェクト</h1>", "app")
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
