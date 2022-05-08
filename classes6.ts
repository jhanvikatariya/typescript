// data hiding 

class DataHiding { 
    str:string = "hello" 
    private str2:string = "world" 
 } 
  
 var obj3 = new DataHiding() 
 console.log(obj3.str) 
//  console.log(obj3.str2) 