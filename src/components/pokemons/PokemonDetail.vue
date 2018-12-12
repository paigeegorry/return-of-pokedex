<template>
    <section v-if="pokemon">
        <h2>{{pokemon.pokemon}}</h2>
        <a :href="pokemon.pokedex">Learn more.</a>
    </section>
</template>

<script>
export default {
  props: {
    pokemon: Object
  }
};
</script>

<style lang="postcss">

</style>
