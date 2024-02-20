// Definición de la función isPrime como método del prototipo del tipo Number
Number.prototype.isPrime = function() {
    // Verificación de casos base
    if (this <= 1) return false; // Si el número es menor o igual a 1, no es primo
    if (this <= 3) return true; // Si el número es 2 o 3, es primo
    
    // Verificación de divisibilidad por 2 y 3
    if (this % 2 === 0 || this % 3 === 0) return false; // Si el número es divisible por 2 o 3, no es primo
    
    // Inicialización de la variable i para el bucle de verificación de primalidad
    let i = 5;
    
    // Bucle para verificar si el número es primo
    while (i * i <= this) { // Se itera mientras el cuadrado de i sea menor o igual al número
        if (this % i === 0 || this % (i + 2) === 0) return false; // Si el número es divisible por i o i + 2, no es primo
        i += 6; // Se incrementa i en 6 para saltar los múltiplos de 2 y 3
    }
    
    // Si no se encontraron divisores, el número es primo
    return true;
}

// Importación del módulo performance de Node.js para medir el tiempo de ejecución
const { performance } = require('perf_hooks');

// Registro del tiempo de inicio
const start = performance.now();

// Inicialización de variables
let primeCount = 0;
let num = 2; // Por razones matemáticas, 1 se considera primo

// Bucle para encontrar el primo número 10,000
while (primeCount < 1e4) { // Mientras no se encuentren 10,000 primos
    if (num.isPrime()) { // Si el número actual es primo
        primeCount++; // Se incrementa el contador de primos encontrados
    }
    num++; // Se pasa al siguiente número para verificar su primalidad
}

// Impresión del primo número 10,000 encontrado
console.log(`El número primo número 10,000 es ${num - 1}`);

// Registro del tiempo de finalización y cálculo del tiempo total de ejecución
console.log(`Esto tomó ${performance.now() - start} milisegundos para ejecutar`);
