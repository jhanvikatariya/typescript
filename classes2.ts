// inheritance

class Shape {
    Area: number

    constructor(a:number){
        this.Area=a;
    }
}

class Square extends Shape{
    disp():void{
        console.log("Area of Square is: " + this.Area)
    }
}

var obj=new Square(67);
obj.disp()