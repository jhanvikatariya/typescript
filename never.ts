function help(error:string):never{
    throw new Error(error);
}
function abc():never{
    while(true){
        console.log("never in something that is not used till end")
    }
}