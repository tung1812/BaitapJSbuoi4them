function dateCal() {
    // Dau vao
    var day = document.getElementById("day").value;
    var month = document.getElementById("month").value;
    var year = document.getElementById("year").value;
    day = parseInt(day);
    month = parseInt(month);
    year = parseInt(year);
    // Xu ly
    var nextDay = day + 1;
    var lastDay = day - 1;
    var nextMonth = month;
    var lastMonth = month;
    var nextYear = year;
    var lastYear = year;
    nextDay = parseInt(nextDay);
    nextMonth = parseInt(nextMonth);
    nextYear = parseInt(nextYear);
    lastDay = parseInt(lastDay);
    lastMonth = parseInt(lastMonth);
    lastYear = parseInt(lastYear);
    if ((month == 1) && (day == 1)) {
        lastYear -= 1;
        lastMonth = 12;
        lastDay = 31;
    }

    if (day == 31) {
        nextMonth += 1;
        nextDay = 1;
        if (month == 12) {
            nextYear += 1;
            nextMonth = 1;
        }
    }
    if ((day == 29) && (month == 2) && ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0))) {
        nextMonth = 3;
        nextDay = 1;
    }
    if ((day == 28) && (month == 2) && (year % 4 != 0)) {
        nextMonth = 3;
        nextDay = 1;
    }
    if ((month == 3) && ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0))) {
        if (day == 1) {
            lastDay = 29;
            lastMonth = 2;
        }
    }
    if ((month == 3) && (year % 4 != 0)) {
        if (day == 1) {
            lastDay = 28;
            lastMonth = 2;
        }
    }
    if ((month == 5) || (month == 7) || (month == 8) || (month == 10)) {
        if (day == 31) {
            nextMonth =+ 1;
            nextDay = 1;
        }
        if (day == 1) {
            lastDay = 30;
            lastMonth -= 1;
        }
    }




    if ((month == 4) || (month == 6) || (month == 9) || (month == 11)) {
        if (day == 30) {
            nextDay = 1;
            nextMonth += 1;
        }
        else if (day == 1) {
            lastDay = 31;
            lastMonth -= 1;
        }
    }


    if ((month == 2)) {
        if (day == 1) {
            lastDay = 31;
            lastMonth = 1;
        }
    }


    var result = "The last date is:" + " " + lastDay + "/" + lastMonth + "/" + lastYear + " " + "and the next date is:" + " " + nextDay + "/" + nextMonth + "/" + nextYear + ".";

    // Dau ra
    document.getElementById("footer").innerHTML = result;
    
}