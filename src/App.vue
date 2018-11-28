<template>
  <div id="app">
    <Header v-bind:filter="filter"/>
    {{filter}}
    <Pokemons v-bind:pokemons="filtered"/>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Pokemons from './components/Pokemons.vue';
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
        return hasAttack && hasDefense && hasName;
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
