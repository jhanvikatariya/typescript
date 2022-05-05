function student(info: (number | string)){
    if(typeof(info)==="number")
    console.log("The info is id")
    else if(typeof(info)==="string")
    console.log("The info is name")
}
student(2);
student("Seema");
 