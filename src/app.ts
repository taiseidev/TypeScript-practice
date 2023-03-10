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
    return function <T extends { new (...args: any[]): { name: string } }>(
      originalConstructor: T
    ) {
      return class extends originalConstructor {
        // 新しく生成したクラスを返している
        constructor(..._: any[]) {
          super();
          console.log("テンプレートを表示");
          const hookEl = document.getElementById(hookId);
          if (hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector("h1")!.textContent = this.name;
          }
        }
      }; // 新しいクラスを返却
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

  new Product("Book", 100);
  new Product("Book2", 200);
  // console.log(pro);

  function Autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    const adjDescriptor: PropertyDescriptor = {
      configurable: true,
      enumerable: false,
      get() {
        const boundFn = originalMethod.bind(this);
        return boundFn;
      },
    };
    return adjDescriptor;
  }

  class Printer {
    message = "クリックしました";

    @Autobind
    showMessage() {
      console.log(this.message);
    }
  }
  const p = new Printer();

  const button = document.querySelector("button")!;
  button.addEventListener("click", p.showMessage);

  // class Course {
  //   title: string;
  //   price: number;

  //   constructor(t: string, p: number) {
  //     this.title = t;
  //     this.price = p;
  //   }
  // }

  const courseForm = document.querySelector("form")!;
  courseForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const titleEl = document.getElementById("title") as HTMLInputElement;
    const priceEl = document.getElementById("price") as HTMLInputElement;

    const title = titleEl.value;
    const price = +priceEl.value;

    const createdCourse = new Course(title, price);

    if (!validate(createdCourse)) {
      alert("正しく入力してください");
      return;
    }

    console.log(createdCourse);
  });

  interface ValidatorConfig {
    [prop: string]: {
      [validatableProp: string]: string[];
    };
  }

  const registeredValidators: ValidatorConfig = {};

  function Required(target: any, propName: string) {
    registeredValidators[target.constructor.name] = {
      ...registeredValidators[target.constructor.name],
      [propName]: ["required"],
    };
  }

  function PositiveNumber(target: any, propName: string) {
    registeredValidators[target.constructor.name] = {
      ...registeredValidators[target.constructor.name],
      [propName]: ["positive"],
    };
  }

  function validate(obj: any) {
    const objValidatorConfig = registeredValidators[obj.constructor.name];

    if (!objValidatorConfig) {
      return true;
    }

    let isValid = true;
    for (const prop in objValidatorConfig) {
      for (const validator of objValidatorConfig[prop]) {
        switch (validator) {
          case "required":
            isValid = isValid && !!obj[prop];
            break;
          case "positive":
            isValid = isValid && obj[prop] > 0;
            break;
        }
      }
    }
    return isValid;
  }

  class Course {
    @Required
    title: string;
    @PositiveNumber
    price: number;

    constructor(t: string, p: number) {
      this.title = t;
      this.price = p;
    }
  }
}

// デコレーターはクラスが定義されたタイミングで実行
// インスタンス化のタイミングではない
// デコレーターはJavaScriptがクラスの定義を見つけた時に実行

// デコレーターファクトリーを使うことによってデコレータの内部で行うことをカスタマイズすることができる

// クラスに使いされるデコレータはコンストラクタ関数を返却することができる
