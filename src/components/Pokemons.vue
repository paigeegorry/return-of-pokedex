<template>
    <section id="Pokemon">
        <ul>
            <Pokemon v-for="pokemon in pokemons"
              v-bind:key="pokemon.pokemon"
              v-bind:pokemon="pokemon"/>
        </ul>
    </section>
</template>

<script>
import Pokemon from './Pokemon.vue';
import pokemonApi from '../pokemonApi.js';

export default {
  data() {
    return {
      pokemons: pokemonApi.getPokemons()
    };
  },
  components: {
    Pokemon
  }
};
</script>

<style>
ul {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

  grid-column-gap: 10px;
  grid-row-gap: 200px;
	}

</style>
