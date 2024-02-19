mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

// Después del hoisting por el intérprete:
// var mean;
// mean(); // Aquí genera un error porque mean no es una función antes de su declaración.
// console.log(food);
// mean = function() {
//     var food;
//     food = "chicken";
//     console.log(food);
//     food = "fish";
//     console.log(food);
// }
// console.log(food);

// Predicción de salida: Error: mean is not a function

