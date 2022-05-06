//Lambda expression

var nums = (x:number)=>10 + x 
    console.log(nums(10)) 

//lambda statement

var nums2 = (x:number)=> {    
    x = 10 + x 
    console.log(x)  
 } 
 nums2(10)