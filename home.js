const URL = "https://pokeapi.co/api/v2";
let pokemon = {
    id: null,
    name: "",
    ability: {
        id: null,
        name: "",
        generation: ""
    },
};

// On veut récupèrer une liste des 10 premiers pokémons
const getAllPokemons =  async() => {
    console.log("-- GET ALL POKEMONS --");
    const pokemons = await fetch(`${URL}/pokemon?limit=10`)
    const toJson = await pokemons.json();
    console.log(toJson.results);
}

// On veut récupèrer la fiche détaillée d'un pokémon
const getPokemon = async (name) => {
    console.log("-- GET POKEMON --");
    const result = await fetch(`${URL}/pokemon/${name}`);
    const toJson = await result.json();
    console.log(toJson);
}

// On veut récupèrer les détails d'une compétence de notre pokémon
const getPokemonAbilities = async (ability) => {
    console.log("-- GET ABILITY DETAILS --");
    const result = await fetch(`${URL}/ability/${ability}`);
    const toJson = await result.json();
    console.log(toJson);
}

// On veut récupèrer la fiche détaillée d'un pokémon
// On veut récupèrer les détails d'une compétence de notre pokémon
const getPokemonAndAbilities = async ({name, ability}) => {
    console.log("-- GET POKEMONS AND ABILITY DETAILS --");
    const resultPokemon = await fetch(`${URL}/pokemon/${name}`);
    const resultAbility = await fetch(`${URL}/ability/${ability}`);
    const toJsonPokemon = await resultPokemon.json();
    const toJsonAbility = await resultAbility.json();
    console.log(toJsonPokemon);
    console.log(toJsonAbility);

    pokemon.name = toJsonPokemon.name;
    pokemon.id = toJsonPokemon.id;

    pokemon.ability.id = toJsonAbility.id;
    pokemon.ability.name = toJsonAbility.name;
    pokemon.ability.generation = toJsonAbility.generation.name;
}
const main = async () => {
    await getAllPokemons();
    await getPokemon('bulbasaur');
    await getPokemonAbilities('overgrow');
    await getPokemonAndAbilities({name: 'ivysaur', ability: 'chlorophyll'});
    console.log('Pokémon: ', pokemon);
}

main();