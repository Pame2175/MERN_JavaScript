const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Sálida
console.log(password); // Salida: '12345'
console.log(hashedPassword); // Salida: undefined
