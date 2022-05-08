//class inheritance and method overriding

class Teacher{
    doWrite():void{
        console.log("doWrite() called from Teacher")
    }
}
class Student extends Teacher{
    doWrite():void{
        
        console.log("doWrite() is writting..")
        super.doWrite()
    }
}

var obj2=new Student()
obj2.doWrite()