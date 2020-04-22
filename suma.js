var sumaprzedzialu1 = function (x, y) {
    var suma = 0;
    for (i = x + 1; i < y; i++) {
        suma = i + suma;
    }
    return suma;
};

var sumaprzedzialu2 = function (x, y) {
    return (y > x) ? (x + y) / 2 * (y - x - 1) : 0;
};

var x = 2;
var y = 9;
console.log("Wynik1: " + sumaprzedzialu1(x, y) + " Wynik2: " + sumaprzedzialu2(x, y));