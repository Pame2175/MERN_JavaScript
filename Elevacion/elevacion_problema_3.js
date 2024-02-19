var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

// Después del hoisting por el intérprete:
// var brendan;
// function print() {
//     brendan = 'only okay';
//     console.log(brendan);
// }
// brendan = 'super cool';
// console.log(brendan);

// Predicción de salida: 'super cool'
