//simple inheritance

interface Student1 { 
    name1:string 
 } 
 
 interface Student2 extends Student1 { 
    name2:string 
 } 
 
 var Teacher1 = <Student2>{}; 
 Teacher1.name1 = "John" 
 Teacher1.name2 = "James" 
 console.log("name:  "+Teacher1.name1)
 console.log("name2:  "+Teacher1.name2)