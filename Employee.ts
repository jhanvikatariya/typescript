export let age : number = 30;
export class Employee {
    empID: number;
    empName: string;
    constructor(name: string, id: number) {
        this.empName = name;
        this.empID = id;
    }
    displayEmployee() {
        console.log ("Employee ID: " + this.empID + ", Employee Name: " + this.empName );
    }
}
let companyName:string = "ABC";