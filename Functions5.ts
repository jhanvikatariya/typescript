// recursion

function factorial(number) {
    if (number <= 0) {        
       return 1; 
    } else {     
       return (number * factorial(number - 1));    
    } 
 }; 
 console.log(factorial(5)); 


 (function () { 
    var x = "Hello!!";   
    console.log(x)     
 })()      // the function invokes itself using a pair of parentheses ()