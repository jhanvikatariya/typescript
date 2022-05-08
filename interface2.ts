// Array and Interfaces

interface People{ 
    [index:number]:string 
 } 
 
 var list2:People = ["kevin","Hooks"] 

 interface ages { 
    [index:number | string]:number 
 } 
 
 var agelist:ages ;
 agelist["fgnuih"] = 78 
//  agelist[2] = "nine"  