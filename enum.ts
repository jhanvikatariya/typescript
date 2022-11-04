enum Weekdays{
    Sunday=1,
    Monday,
    Tuesday,
    Wednesday,
     Thursday,
     Friday,
     Saturday
}

function getDays(Record: String):Weekdays{
    if(Record==="Weekend"){
        return Weekdays.Sunday;
    }
    return 0;
}

var Day:Weekdays=getDays("Weekend");
console.log(Day);
