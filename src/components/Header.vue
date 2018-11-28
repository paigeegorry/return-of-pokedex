<template>
    <section id="header">
        <h1>Pokedex</h1>
        <label>
            Name:
            <input v-model="filter.pokemon" type="text">
        </label>
        <label>
            Attack:
            <input v-model.number="filter.attack" type="number" step="50" min="1">
        </label>
        <label>
            Defense:
            <input v-model.number="filter.defense" type="number" step="50" min="1">
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
        <label>
            Sort by:
            <select v-model="sort.field">
                <option value="all"></option>
                <option value="pokemon">Name</option>
                <option value="type">Type 1</option>
                <option value="attack">Attack</option>
                <option value="defense">Defense</option>
            </select>
            <select v-model="sort.direction">
                <option value="1">Ascending</option>
                <option value="-1">Descending</option>
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
    filter: Object,
    sort: Object
  }
};
</script>

<style>
#header{
    background: rgba(63, 63, 63, 0.7);
    color: white;
    padding: 30px;
    font-family: 'Courier New', Courier, monospace;
    font-size: 1em;
}
h1 {
    text-transform: uppercase;
    font-size: 60px;
}
p, label {
    font-size: 1.25em;
}
label {
    font-weight: bold;
    text-transform: uppercase;
    /* display: block; */
}

@media(max-width: 1140px){
    label {
        display: block;
    }
}
</style>
