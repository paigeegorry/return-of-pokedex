<template>
    <section id="Pokemon">
      <Modal v-if="showModal" :onClose="() => showModal = false">
        <PokemonDetail :pokemon="selected"/>
      </Modal>
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
import Modal from '../shared/Modal.vue';

export default {
  data() {
    return {
      selected: null,
      showModal: false
    };
  },
  props: {
    pokemons: Array
  },
  components: {
    Pokemon,
    PokemonDetail,
    Modal
  },
  methods: {
    handleSelect(pokemon) {
      this.selected = pokemon;
      this.showModal = true;
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
