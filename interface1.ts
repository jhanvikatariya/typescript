interface Employee{
    firstName:string, 
    lastName:string, 
    sayHi: ()=>string 
}

var Customer:Employee = { 
    firstName:"John",
    lastName:"Shah", 
    sayHi: ():string =>{return "Hi there"} 
 } 

 
console.log("Customer Object ") 
console.log(Customer.firstName) 
console.log(Customer.lastName) 
console.log(Customer.sayHi())  

var Client:Employee = { 
   firstName:"Jim",
   lastName:"James", 
   sayHi: ():string =>{return "Hello!!!"} 
} 
  
console.log("Client Object ") 
console.log(Client.firstName);
console.log(Client.lastName);
console.log(Client.sayHi())