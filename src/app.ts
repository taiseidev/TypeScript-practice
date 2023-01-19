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
  // デコレータ関数の作成については上から下
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

  // ___

  function Log(target: any, propertyName: string | Symbol) {
    console.log("Propertyデコレータ");
    console.log(target, propertyName);
  }

  function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
    console.log("Accessorデコレータ");
    console.log(target);
    console.log(name);
    console.log(descriptor);
  }

  function Log3(
    target: any,
    name: string | Symbol,
    descriptor: PropertyDescriptor
  ) {
    console.log("Methodデコレータ");
    console.log(target);
    console.log(name);
    console.log(descriptor);
  }

  function Log4(target: any, name: string | Symbol, position: number) {
    console.log("Parameterデコレータ");
    console.log(target);
    console.log(name);
    console.log(position);
  }

  class Product {
    @Log
    title: string;
    private _price: number;

    @Log2
    set price(val: number) {
      if (val > 0) {
        this._price = val;
      } else {
        throw new Error("不正な値です。0以下は設定できません");
      }
    }

    constructor(t: string, p: number) {
      this.title = t;
      this._price = p;
    }

    @Log3
    getPriceWithTax(@Log4 tax: number) {
      return this._price * (1 + tax);
    }
  }

  const p1 = new Product("Book", 100);
  const p2 = new Product("Book2", 200);
  // console.log(pro);
}

// デコレーターはクラスが定義されたタイミングで実行
// インスタンス化のタイミングではない
// デコレーターはJavaScriptがクラスの定義を見つけた時に実行

// デコレーターファクトリーを使うことによってデコレータの内部で行うことをカスタマイズすることができる
