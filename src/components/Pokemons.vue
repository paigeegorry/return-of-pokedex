<template>
    <section id="Pokemon">
      <PokemonDetail :pokemon="selected"/>
        <ul>
            <Pokemon v-for="pokemon in pokemons"
              :key="pokemon.pokemon"
              :pokemon="pokemon"
              :onSelect="handleSelect"/>
        </ul>
    </section>
</template>

<script>
import Pokemon from './Pokemon.vue';
import PokemonDetail from './PokemonDetail.vue';

export default {
  data() {
    return {
      selected: null
    };
  },
  props: {
    pokemons: Array
  },
  components: {
    Pokemon,
    PokemonDetail
  },
  methods: {
    handleSelect(pokemon) {
      this.selected = pokemon;
      console.log('clicked!', this.selected.pokemon);
    }
  }
};
</script>

<style>
ul {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-column-gap: 10px;
  grid-row-gap: 60px;
	}
</style>
