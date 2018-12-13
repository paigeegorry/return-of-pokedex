<template>
  <div id="app">
    <Header :filter="filter"
      :sort="sort"/>
    <Pokemons :pokemons="sortedPokemon"/>
  </div>
</template>

<script>
import Header from './components/shared/Header.vue';
import Pokemons from './components/pokemons/Pokemons.vue';
import pokemonApi from './pokemonApi.js';

export default {
  name: 'app',
  data() {
    return {
      pokemons: pokemonApi.getPokemons(),
      filter: {
        attack: 0,
        defense: 0,
        pokemon: '',
        type: ''
      },
      sort: {
        field: 'pokemon',
        direction: 1
      }
    };
  },
  components: {
    Header,
    Pokemons
  },
  computed: {
    filtered() {
      return this.pokemons.filter(pokemon => {
        const hasName = !this.filter.pokemon || pokemon.pokemon.includes(this.filter.pokemon);
        const hasAttack = !this.filter.attack || pokemon.attack >= this.filter.attack; 
        const hasDefense = !this.filter.defense || pokemon.defense >= this.filter.defense;
        const hasType = !this.filter.type || pokemon.type_1 === this.filter.type || 
        pokemon.type_2 === this.filter.type;
        return hasAttack && hasDefense && hasName && hasType;
      });
    },
    sortedPokemon() {
      const field = this.sort.field;
      const direction = this.sort.direction;

      return this.filtered.slice().sort((a, b) => {
        if(a[field] > b[field]){
          return 1 * direction;
        }

        if(a[field] < b[field]){
          return -1 * direction;
        }
        
        return 0;
      });
    }
  }
};
</script>

<style>
#app {
  margin-top: 0px;
}
</style>
