function zobaczIleToBedzie() {
    var a = document.getElementById('a').value;
    var b = document.getElementById('b').value;
    var c = document.getElementById('c').value;
    document.getElementById('z').value = Math.pow(b, 2) - 4 * a * c;
    var z = document.getElementById('z').value;
    document.getElementById('x').value = Math.sqrt(z).toFixed(2);
    if (z < 0) {
        document.getElementById('p').innerHTML = "to nie ma rozwiazania";
    } else if (z == 0) {
        x = -b / 2 * a;
        document.getElementById('o').innerHTML = x;
    } else if (z > 0) {
        x1 = (-b - Math.sqrt(z).toFixed(2)) / 2;
        x2 = (-b + Math.sqrt(z).toFixed(2)) / 2;
        document.getElementById('i').innerHTML = x1;
        document.getElementById('u').innerHTML = x2;
    }
}