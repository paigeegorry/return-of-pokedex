<template>
  <div id="app">
    <Pokemons />
  </div>
</template>

<script>
import Pokemons from './components/Pokemons.vue';

export default {
  name: 'app',
  components: {
    Pokemons
  }
};
</script>

<style>
#app {
  margin-top: 0px;
}
</style>
