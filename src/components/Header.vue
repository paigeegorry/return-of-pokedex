<template>
    <section id="header">
        <h1>Pokedex</h1>
        <label>
            Name:
            <input v-model="filter.pokemon" type="text">
        </label>
        <label>
            Attack:
            <input v-model.number="filter.attack" type="number" step="50">
        </label>
        <label>
            Defense:
            <input v-model.number="filter.defense" type="number" step="50">
        </label>
        <label>
            Type:
            <select v-model="filter.type">
                <option value="">All</option>
                <option v-for="type in types"
                    v-bind:key="type"
                    v-bind:value="type">
                {{type}}
                </option>
            </select>
        </label>
    </section>
</template>

<script>
import pokemonApi from '../pokemonApi.js';
export default {
  data() {
    return {
      types: pokemonApi.getTypes()
    };
  },
  props: {
    filter: Object
  }
};
</script>

<style>
#header{
    background: rgba(255, 255, 255, 0.8);
    padding: 10px 30px;
    font-family: 'Courier New', Courier, monospace;
    font-size: 1em;
}
h1 {
    text-transform: uppercase;
    font-size: 60px;
}
</style>
