// Definición de la clase Ninja
class Ninja {
    // Constructor de la clase, se ejecuta al crear una nueva instancia de Ninja
    constructor(nombre) {
        // Asignación de los atributos de la instancia
        this.nombre = nombre; // Nombre del ninja
        this.salud = 100; // Salud del ninja, inicializada en 100
        this.velocidad = 3; // Velocidad del ninja, valor predeterminado de 3
        this.fuerza = 3; // Fuerza del ninja, valor predeterminado de 3
    }

    // Método para imprimir el nombre del ninja en la consola
    sayName() {
        console.log(`Mi nombre es ${this.nombre}`);
    }

    // Método para mostrar las estadísticas del ninja en la consola
    showStats() {
        console.log(`Nombre: ${this.nombre}, Fuerza: ${this.fuerza}, Velocidad: ${this.velocidad}, Salud: ${this.salud}`);
    }

    // Método para aumentar la salud del ninja en 10 puntos
    drinkSake() {
        this.salud += 10; // Aumenta la salud del ninja en 10 puntos
        console.log(`${this.nombre} bebió sake y aumentó su salud en 10 puntos.`);
    }
}

// Ejemplo de uso de la clase Ninja
const ninja1 = new Ninja("Hyabusa"); // Creación de una nueva instancia de Ninja con nombre "Hyabusa"
ninja1.sayName(); // Llama al método sayName para mostrar el nombre del ninja
ninja1.showStats(); // Llama al método showStats para mostrar las estadísticas del ninja
ninja1.drinkSake(); // Llama al método drinkSake para aumentar la salud del ninja
ninja1.showStats(); // Muestra nuevamente las estadísticas del ninja después de beber sake
