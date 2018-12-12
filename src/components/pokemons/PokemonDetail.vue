<template>
    <section v-if="pokemon">
        <h2>{{pokemon.pokemon}}</h2>
        <p>height: {{pokemon.height}} |
            weight: {{pokemon.weight}}</p>
        <p>shape: {{pokemon.shape}}</p>
        <p>attack: {{pokemon.attack}} |
            defense: {{pokemon.defense}}</p>
        <p>egg group 1: {{pokemon.egg_group_1}}</p>
        <p>egg group 2: {{pokemon.egg_group_2}}
        <p>ability: {{pokemon.ability_1}}</p>
        <p>hidden ability: 
            <span> 
              {{pokemon.ability_hidden}}
            </span>
        </p>
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

<style lang="postcss" scoped>
section {
  padding: 50px;
  text-align: center;
  margin: 20px;
  font-family: 'Courier New', Courier, monospace;
  font-size: 1.5em;
  p {
    padding: 10px;
  }
  span {
    visibility: hidden;
  }
  span:hover {
    visibility: visible;
  }
  a:hover {
    font-weight: bold;
  }
  
}
</style>
