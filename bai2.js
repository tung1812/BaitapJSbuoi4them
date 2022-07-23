function dayCount() {
    // Dau vao
    var month = document.getElementById("month2").value;
    var year = document.getElementById("year2").value;
    var counter;
    month = parseInt(month);
    year = parseInt(year);
    counter = parseInt(counter);

    // Xu ly
    if ((month == 1) || (month == 3) || (month == 5) || (month == 7) || (month == 8) || (month == 10) || (month == 12)) {
        counter = 31;
    }
    if ((month == 4) || (month == 6) || (month == 9) || (month == 11)) {
        counter = 30;
    }   
    if (month == 2) {
        if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
            counter = 29;
        }
        else if (year % 4 != 0) {
            counter = 28;
        }
    }
    var result = "The number of days of the entered month in" + " " + year + " " + "is:" + " " + counter;

    // Dau ra
    document.getElementById("footer2").innerHTML = result;

}