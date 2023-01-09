"use strict";
class Department {
    static createEmployee(name) {
        return { name: name };
    }
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    addEmployee(name) {
        this.employees.push(name);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
Department.fiscalYear = 2023;
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, "IT");
        this.admins = admins;
    }
    describe() {
        console.log("IT部門 - ID:" + this.id);
    }
}
class AccountingDepartment extends Department {
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error("レポートが見つかりません");
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error("正しい値を設定してください");
        }
        this.addReport(value);
    }
    constructor(id, reports) {
        super(id, "Accounting");
        this.reports = reports;
        this.lastReport = reports[0];
    }
    describe() {
        console.log("会計部門 - ID" + this.id);
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReports() {
        console.log(this.reports);
    }
    addEmployee(name) {
        if (name === "Max") {
            return;
        }
        this.employees.push(name);
    }
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
const accounting = AccountingDepartment.getInstance();
accounting.addReport("貸借対照表");
accounting.printReports();
accounting.addEmployee("Max");
accounting.addEmployee("Manu");
accounting.printEmployeeInformation();
console.log(accounting.mostRecentReport);
accounting.mostRecentReport = "損益計算書";
accounting.printReports();
//# sourceMappingURL=classes.js.map