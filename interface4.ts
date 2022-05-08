// multiple inheritance

interface Book1 { 
    id1:number 
 } 
 
 interface Book2 { 
    id2:number 
 } 
 
 interface Author extends Book1, Book2 { } 
 var obj4:Author = { id1:4309, id2:5372} 
 console.log("Book ID 1: "+obj4.id1+"Book ID 2: "+obj4.id2)