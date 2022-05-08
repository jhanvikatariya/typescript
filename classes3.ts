// multi level inheritance

class Grandparent{
    str:string;
}
class Parent extends Grandparent{}
class Child extends Parent{}

var obj1=new Child();
obj1.str="hello";
console.log(obj1.str);