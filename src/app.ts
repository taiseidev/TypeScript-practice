abstract class Department {
  static fiscalYear = 2023;
  //   private readonly id: string;
  //   name: string;

  // privateはそのクラス内でしかアクセスすることができないが、
  // protectedは継承したサブクラスまでならアクセスすることができる。
  protected employees: string[] = [];

  static createEmployee(name: string) {
    return { name: name };
  }

  // 変更不可の読み取り専用のプロパティについてはreadonly修飾子をつける
  constructor(protected readonly id: string, public name: string) {
    //     this.id = id;
    //     this.name = n;
  }

  abstract describe(this: Department): void;

  addEmployee(name: string) {
    this.employees.push(name);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }

  describe(): void {
    console.log("IT部門 - ID:" + this.id);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("レポートが見つかりません");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("正しい値を設定してください");
    }
    this.addReport(value);
  }

  private constructor(id: string, public reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  describe() {
    console.log("会計部門 - ID" + this.id);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }

  addEmployee(name: string): void {
    if (name === "Max") {
      return;
    }
    this.employees.push(name);
  }

  // シングルトンを実装
  static getInstance() {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment("d2", []);
    return this.instance;
  }
}

const employee1 = Department.createEmployee("Maxさん");
console.log(employee1, Department.fiscalYear);

const it = new ITDepartment("id1", ["Accounting"]);
console.log(it);

it.addEmployee("Max");
it.addEmployee("Manu");

it.printEmployeeInformation();

it.describe();

console.log(it.name);

// const accounting = new AccountingDepartment("id2", []);
const accounting = AccountingDepartment.getInstance();
accounting.addReport("貸借対照表");
accounting.printReports();

accounting.addEmployee("Max");
accounting.addEmployee("Manu");

accounting.printEmployeeInformation();

console.log(accounting.mostRecentReport);

accounting.mostRecentReport = "損益計算書";

accounting.printReports();
