const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Sálida
console.log(name); // Error: name is not defined
console.log(otherName); // Salida: 'Elon'
