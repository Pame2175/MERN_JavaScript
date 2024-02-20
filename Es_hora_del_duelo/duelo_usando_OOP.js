// Clase para representar una carta de unidad
class CartaUnidad {
    constructor(nombre, costo, poder, resiliencia) {
        this.nombre = nombre;
        this.costo = costo;
        this.poder = poder;
        this.resiliencia = resiliencia;
    }
}

// Clase para representar una carta de efecto
class CartaEfecto {
    constructor(nombre, costo, texto, stat, magnitud) {
        this.nombre = nombre;
        this.costo = costo;
        this.texto = texto;
        this.stat = stat;
        this.magnitud = magnitud;
    }
}
class Duelo {
    constructor() {
        this.jugador1 = [];
        this.jugador2 = [];
    }

    convocarJugador1(carta) {
        this.jugador1.push(carta);
    }

    convocarJugador2(carta) {
        this.jugador2.push(carta);
    }

    aplicarEfecto(carta, objetivo) {
        if (carta.stat === "Resiliencia") {
            objetivo.resiliencia += carta.magnitud;
        } else if (carta.stat === "Poder") {
            objetivo.poder += carta.magnitud;
        }
    }

    jugar() {
        this.jugador1.forEach((carta, index) => {
            if (index === 0) {
                console.log(`Turno ${index + 1}: El jugador 1 convoca a ${carta.nombre}`);
            } else {
                console.log(`Turno ${index + 1}: El jugador 1 juega "${carta.nombre}" en "${this.jugador2[index - 1].nombre}"`);
                this.aplicarEfecto(carta, this.jugador2[index - 1]);
            }
        });

        this.jugador2.forEach((carta, index) => {
            if (index === 0) {
                console.log(`Turno ${index + 1}: El jugador 2 convoca a ${carta.nombre}`);
            } else {
                console.log(`Turno ${index + 1}: El jugador 2 juega "${carta.nombre}" en "${this.jugador1[index - 1].nombre}"`);
                this.aplicarEfecto(carta, this.jugador1[index - 1]);
            }
        });
    }
}

// Crear instancias de las cartas y el duelo
const ninjaRojo = new CartaUnidad("Ninja Cinturón Rojo", 3, 3, 4);
const ninjaNegro = new CartaUnidad("Ninja Cinturón Negro", 4, 5, 4);
const algoritmoDificil = new CartaEfecto("Algoritmo Difícil", 2, "aumentar la resistencia del objetivo en 3", "Resiliencia", 3);
const rechazoPromesa = new CartaEfecto("Rechazo de promesa no manejado", 1, "reducir la resistencia del objetivo en 2", "Resiliencia", -2);
const programacionPareja = new CartaEfecto("Programación en pareja", 3, "aumentar el poder del objetivo en 2", "Poder", 2);

const duelo = new Duelo();
duelo.convocarJugador1(ninjaRojo);
duelo.convocarJugador1(algoritmoDificil);
duelo.convocarJugador1(programacionPareja);

duelo.convocarJugador2(ninjaNegro);
duelo.convocarJugador2(rechazoPromesa);

duelo.jugar();
