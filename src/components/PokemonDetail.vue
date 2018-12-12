<template>
    <section v-if="pokemon">
        <p>Hello detail</p>
        <h1>{{pokemon.pokemon}}</h1>
    </section>
</template>

<script>
export default {
  props: {
    pokemon: Object
  }
};
</script>

<style>

</style>
