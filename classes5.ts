// // static keyword

class Static_ex {  
    static num:number; 
    
    static disp():void { 
       console.log("The value of num: "+ Static_ex.num) 
    } 
 } 
 
 Static_ex.num = 45
 Static_ex.disp()