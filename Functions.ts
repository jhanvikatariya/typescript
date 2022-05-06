// Optional parameters
function employee(id:number, name:string, salary?:number){
    console.log("ID: ", id)
    console.log("Name: ", name)

    if(salary!=undefined)
    console.log("Salary: ", salary)
}
employee(2, "John")
employee(5, "Meena", 75000)

