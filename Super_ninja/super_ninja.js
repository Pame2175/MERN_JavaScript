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

class Sensei extends Ninja {
    constructor(nombre) {
        super(nombre); // Llama al constructor de la clase Ninja
        this.salud = 200; // Establece la salud predeterminada del Sensei en 200
        this.velocidad = 10; // Establece la velocidad predeterminada del Sensei en 10
        this.fuerza = 10; // Establece la fuerza predeterminada del Sensei en 10
        this.sabiduria = 10; // Agrega el atributo sabiduría con valor predeterminado de 10
    }

    speakWisdom() {
        super.drinkSake(); // Llama al método drinkSake de la clase Ninja
        console.log("Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.");
    }
}

// Ejemplo de uso de la clase Sensei
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom(); // Llama al método speakWisdom para mostrar un mensaje de sabiduría y aumentar la salud
superSensei.showStats(); // Muestra las estadísticas del Sensei después de hablar su sabiduría


