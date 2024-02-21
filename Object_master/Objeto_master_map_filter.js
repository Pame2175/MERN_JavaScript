const pokemon = Object.freeze([
        { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
        { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
        { "id": 9,   "name": "Blastoise",  "types": ["water"] },
        { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
        { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
        { "id": 23,  "name": "Ekans",      "types": ["poison"] },
        { "id": 24,  "name": "Arbok",      "types": ["poison"] },
        { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
        { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
        { "id": 52,  "name": "Meowth",     "types": ["normal"] },
        { "id": 63,  "name": "Abra",       "types": ["psychic"] },
        { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
        { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
        { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
        { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
        { "id": 98,  "name": "Krabby",     "types": ["water"] },
        { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
        { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
        { "id": 133, "name": "Eevee",      "types": ["normal"] },
        { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
        { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
        { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
        { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
    ]);
    //Series de objetos donde la identificación es divisible por 3
    const divisibleby3 = pokemon.filter(p => p.id % 3 === 0);
    console.log(divisibleby3);
    //Series de objetos que son de tipo fuego(fire)
    const firetype = pokemon.filter(p => p.types.includes("fire"));
    console.log(firetype);
    //Una variedad de objetos Pokémon que tienen más de un tipo
    const multitype = pokemon.filter(p => p.types.length > 1);
    console.log(multitype);
    //Una matriz con solo los nombres de los Pokémon
    const pokemonNames= pokemon.map(p => p.name);
    console.log(pokemonNames);
    //Una matriz con solo los nombres de Pokémon con una identificación mayor que 99
    const namesOver99= pokemon.filter(p => p.id > 99).map(p => p.name);
    console.log(namesOver99);
    //Una matriz con solo los nombres del pokémon cuyo único tipo es veneno
    const poisonTypeOnly= pokemon.filter( p => p.types.includes("poison")).map(p => p.name);
    console.log(poisonTypeOnly);
    //Una matriz que contiene solo el primer tipo de todos los Pokémon cuyo segundo tipo es "volador"
    const firstTypeFlying= pokemon.filter(p => p.types.length > 1 && p.types[1] === "flying");
    console.log(firstTypeFlying);
    //Un recuento de la cantidad de pokémon que son de tipo "normal"s
    const normalTypeCount= pokemon.filter(p => p.types.includes("normal")).length;
    console.log(normalTypeCount);

