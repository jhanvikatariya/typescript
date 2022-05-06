//Anonymous Functions

// without parmeter

var greeting=function(){
    return "welcome to typescript!";

}
console.log(greeting())



//with parameter
var result=function(x:number, y:number){
    return x*y;
}
console.log(result(4, 2))