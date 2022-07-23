function numSplell() {
    // Dau vao
    var num = document.getElementById("num").value;
    num = parseInt(num);

    // Xu ly
    var units;
    var tens;
    var hundreds;
    var spell1;
    var spell2;
    var spell3;
    var result;
    
    units = num % 10;
    tens = (num / 10) % 10;
    hundreds = (num / 100) % 10;

    unit = parseInt(units);
    tens = parseInt(tens);
    hundreds = parseInt(hundreds);


    if ((num > 999) || (num < 100)) {
        alert("Invalid");
    }
    else {
        


        if (hundreds == 1) {
            spell1 = "One hundred";
            console.log(spell1);
        }
        else if (hundreds == 2) {
            spell1 = "Two hundred";
        }
        else if (hundreds == 3) {
            spell1 = "Three hundred";
        }
        else if (hundreds == 4) {
            spell1 = "Four hundred";
        }
        else if (hundreds == 5) {
            spell1 = "Five hundred";
        }
        else if (hundreds == 6) {
            spell1 = "Six hundred";
        }
        else if (hundreds == 7) {
            spell1 = "Seven hundred";
        }
        else if (hundreds == 8) {
            spell1 = "Eight hundred";
        }
        else if (hundreds == 9) {
            spell1 = "Nine hundred";
        }

        
        if (tens == 2) {
            spell2 = "twenty";
        }
        else if (tens == 3) {
            spell2 = "thirty";
        }
        else if (tens == 4) {
            spell2 = "fourty";
        }
        else if (tens == 5) {
            spell2 = "fifty";
        }
        else if (tens == 6) {
            spell2 = "sixty";
        }
        else if (tens == 7) {
            spell2 = "seventy";
        }
        else if (tens == 8) {
            spell2 = "eighty";
        }
        else if (tens == 9) {
            spell2 = "ninety";
        }

        if (units == 1) {
            spell3 = "one";
        }
        else if (units == 2) {
            spell3 = "two";
        }
        else if (units == 3) {
            spell3 = "three";
        }
        else if (units == 4) {
            spell3 = "four";
        }
        else if (units == 5) {
            spell3 = "five";
        }
        else if (units == 6) {
            spell3 = "six";
        }
        else if (units == 7) {
            spell3 = "seven";
        }
        else if (units == 8) {
            spell3 = "eight";
        }
        else if (units == 9) {
            spell3 = "nine";
        }
        result = "The spelling of this number is:" + " " + spell1 + " " + "and" + " " + spell2 + " " + spell3;
        if ((tens == 1)) {
            if (units == 0) {
                spell2 = "ten"
            }
            else if (units == 1) {
                spell2 = "eleven"
            }
            else if (units == 2) {
                spell2 = "twelve"
            }
            else if (units == 3) {
                spell2 = "thirteen"
            }
            else if (units == 4) {
                spell2 = "fourteen"
            }
            else if (units == 5) {
                spell2 = "fifteen"
            }
            else if (units == 6) {
                spell2 = "sixteen"
            }
            else if (units == 7) {
                spell2 = "seventeen"
            }
            else if (units == 8) {
                spell2 = "eighteen"
            }
            else if (units == 9) {
                spell2 = "nineteen"
            }

            result = "The spelling of this number is:" + " " + spell1 + " " + "and" + " " + spell2;
          
        }
        console.log(spell1);
        console.log(spell2);
        console.log(spell3);

        // Dau ra
        document.getElementById("footer3").innerHTML = result;

    }

    

}