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
        attack: 0
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
        return pokemon.attack > this.filter.attack;
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
