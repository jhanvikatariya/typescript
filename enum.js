var Weekdays;
(function (Weekdays) {
    Weekdays[Weekdays["Sunday"] = 1] = "Sunday";
    Weekdays[Weekdays["Monday"] = 2] = "Monday";
    Weekdays[Weekdays["Tuesday"] = 3] = "Tuesday";
    Weekdays[Weekdays["Wednesday"] = 4] = "Wednesday";
    Weekdays[Weekdays["Thursday"] = 5] = "Thursday";
    Weekdays[Weekdays["Friday"] = 6] = "Friday";
    Weekdays[Weekdays["Saturday"] = 7] = "Saturday";
})(Weekdays || (Weekdays = {}));
function getDays(Record) {
    if (Record === "Weekend") {
        return Weekdays.Sunday;
    }
}
var Day = getDays("Weekend");
console.log(Day);
