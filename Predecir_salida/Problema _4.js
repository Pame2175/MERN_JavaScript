const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Sálida
console.log(first == second); // Salida: false (2 != 5)
console.log(first == third); // Salida: true (2 == 2)
