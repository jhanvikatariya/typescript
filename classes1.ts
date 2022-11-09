class Employee{
    //field
    name:string;

    //constructor
    constructor(name:string){
        this.name=name;
    }

    //function
    disp():void{
        console.log("The name of employee is: " + this.name)
    }

}
// object creation
var obj = new Employee("John")

//accessing the field
console.log(obj.name)

//accessing the function
obj.disp()
