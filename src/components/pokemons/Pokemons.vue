<template>
    <section id="Pokemon">

      <transition name="bounce">
        <Modal v-if="showModal" 
          :onClose="() => showModal = false" id="modal">
            <PokemonDetail :pokemon="selected"/>
        </Modal>
      </transition>

      <div id="staggered-list-demo">
          <transition-group
            name="staggered-fade"
            tag="ul"
            v-bind:css="false"
            v-on:before-enter="beforeEnter"
            v-on:enter="enter"
            v-on:leave="leave">

            <Pokemon v-for="pokemon in pokemons"
              :key="pokemon.pokemon"
              :pokemon="pokemon"
              :onSelect="handleSelect"/>
         
          </transition-group>
        </div>
        
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
    },
    beforeEnter: function(el) {
      el.style.opacity = 0;
      el.style.height = 0;
    },
    enter: function(el, done) {
      var delay = 400;
      setTimeout(function() {
        /*eslint-disable-next-line*/
        Velocity(
          el,
          { opacity: 1, height: '300px' },
          { complete: done }
        );
      }, delay);
    },
    leave: function(el, done) {
      var delay = 400;
      setTimeout(function() {
        /*eslint-disable-next-line*/
        Velocity(
          el,
          { opacity: 0, height: 0 },
          { complete: done }
        );
      }, delay);
    }
  }
};
</script>

<style lang="postcss">

ul {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-column-gap: 10px;
  grid-row-gap: 60px;
}

#modal {
  z-index: 5;
}

.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}

</style>
