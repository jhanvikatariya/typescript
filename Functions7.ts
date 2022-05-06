// parameter inference

var exam = (x)=> { 
    if(typeof x=="number") { 
       console.log(x+" is a number") 
    } else if(typeof x=="string") { 
       console.log(x+" is a string") 
    }  
 } 
 exam(6) 
 exam("John")