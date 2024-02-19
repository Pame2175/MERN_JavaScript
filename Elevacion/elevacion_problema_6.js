dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

// Después del hoisting por el intérprete:
// dojo = "san jose";
// console.log(dojo);
// function learn() {
//     var dojo;
//     dojo = "seattle";
//     console.log(dojo);
//     dojo = "burbank";
//     console.log(dojo);
// }
// console.log(dojo);
// learn();
// console.log(dojo);

// Predicción de salida:
// 'san jose'
// 'seattle'
// 'burbank'
// 'san jose'

