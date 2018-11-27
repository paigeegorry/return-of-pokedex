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
.grid {
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-template-rows: 100px 200px;
  grid-column-gap: 10px;
  grid-row-gap: 5px;
	}

</style>
