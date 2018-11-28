<template>
    <section id="header">
        <h1>Pokedex</h1>
        <label>
            Attack:
            <input v-model.number="filter.attack" type="number" step="50">
        </label>
        <label>
            Defense:
            <input v-model.number="filter.defense" type="number" step="50">
        </label>
    </section>
</template>

<script>
export default {
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
