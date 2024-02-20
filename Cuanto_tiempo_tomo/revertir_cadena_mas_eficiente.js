const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";
const reversed1 = story.split("").reverse().join("");
console.log(reversed1);

/*Una forma de mejorar la eficiencia en este caso sería evitar el uso de split() y join() para convertir la 
cadena en un array de caracteres y luego volver a unirla después de invertirla. En lugar de eso, podemos 
utilizar un bucle iterativo para recorrer la cadena desde el final hasta el principio y construir la cadena 
invertida directamente. Esto elimina la necesidad de crear un array temporal. */

// Definición de la función reverseString que invierte una cadena
function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str.charAt(i); // Agregar el carácter en el índice i al inicio de la cadena invertida
    }
    return reversed;
}

const story_ = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";
// Llamada a la función para invertir la cadena
const reversed1_ = reverseString(story_);
console.log(reversed1_);



