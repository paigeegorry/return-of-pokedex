import pokemons from '../pokedex.js';

const types = [];
pokemons.forEach(pokemon => {
  const type = pokemon.type_1;

  if(!types.includes(type)){
    types.push(type);
  }

});

export default {
  getPokemons() {
    return pokemons;
  },
  getTypes() {
    return types;
  }
};