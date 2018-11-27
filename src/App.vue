<template>
  <div id="app">
    <Header />
    <Pokemons v-bind:pokemons="pokemons"/>
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
    };
  },
  components: {
    Header,
    Pokemons
  }
};
</script>

<style>
#app {
  margin-top: 0px;
}
</style>
