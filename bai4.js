function furDistance() {
    // Dau vao
    var name1 = "A";
    var name2 = "B";
    var name3 = "C";
    const x1 = 6;
    const x2 = 8;
    const x3 = 3;
    const y1 = 8;
    const y2 = 10;
    const y3 = -2;
    const uniX = 0;
    const uniY = 0;

    // Xu ly
    var disX1;
    var disX2;
    var disX3;
    var disY1;
    var disY2;
    var disY3;
    var distance1;
    var distance2;
    var distance3;

    disX1 = x1 - uniX;
    disX2 = x2 - uniX;
    disX3 = x3 - uniX;
    disY1 = y1 - uniY;
    disY2 = y2 - uniY;
    disY3 = uniY - y3;


    distance1 = Math.pow(disX1, 2) + Math.pow(disY1, 2);
    distance2 = Math.pow(disX2, 2) + Math.pow(disY2, 2);
    distance3 = Math.pow(disX3, 2) + Math.pow(disY3, 2);
    distance1 = Math.sqrt(distance1);
    distance2 = Math.sqrt(distance2);
    distance3 = Math.sqrt(distance3);

    disX1 = parseFloat(disX1);
    disX2 = parseFloat(disX2);
    disX3 = parseFloat(disX3);
    disY1 = parseFloat(disY1);
    disY2 = parseFloat(disY2);
    disY3 = parseFloat(disY3);
    distance1 = parseFloat(distance1);
    distance2 = parseFloat(distance2);
    distance3 = parseFloat(distance3);


    var result = "The student who is the furthest away from the university is:" + " ";

    if (distance1 > distance2) {
        if (distance1 > distance3) {
            result += name1;
        }
        else {
            result += name3;
        }
    }
    if (distance2 > distance1) {
        if (distance2 > distance3) {
            result += name2;
        }
        else {
            result += name3;
        }
    }

    // Dau ra
    document.getElementById("footer4").innerHTML = result;


}