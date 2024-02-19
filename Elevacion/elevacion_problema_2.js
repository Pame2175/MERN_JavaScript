var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}

// Después del hoisting por el intérprete:
// var needle;
// function test() {
//     var needle;
//     needle = 'magnet';
//     console.log(needle);
// }
// needle = 'haystack';
// test();

// Predicción de salida: 'magnet'
