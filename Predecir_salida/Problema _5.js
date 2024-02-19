const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Sálida
console.log(key); // Salida: 'value'
console.log(secondKey); // Salida: [1, 5, 1, 8, 3, 3]
console.log(secondKey[0]); // Salida: 1
console.log(willThisWork); // Salida: 5
