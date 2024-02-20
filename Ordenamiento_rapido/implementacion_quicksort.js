function quicksort(array) {
    if (array.length <= 1) {
        return array; // Caso base: una matriz de longitud 0 o 1 ya está ordenada
    }

    const pivot = array[0]; // Tomamos el primer elemento como pivote
    const left = [];
    const right = [];

    // Particionamos el array en dos partes: elementos menores que el pivote y elementos mayores que el pivote
    for (let i = 1; i < array.length; i++) {
        if (array[i] < pivot) {
            left.push(array[i]);
        } else {
            right.push(array[i]);
        }
    }

    // Concatenamos los arrays ordenados de la parte izquierda, el pivote y la parte derecha
    return quicksort(left).concat(pivot, quicksort(right));
}

// Ejemplo de uso:
const array = [6, 3, 8, 2, 9, 10];
const sortedArray = quicksort(array);
console.log(sortedArray); // Output: [1, 2, 3, 6, 8, 9]
