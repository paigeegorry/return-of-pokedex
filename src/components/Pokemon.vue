<template>
    <li v-bind:class="pokemon.type_1">
        <img v-bind:src="pokemon.url_image">
        <div id="info">
            <h3>{{ pokemon.pokemon }}</h3>
            <p>Attack: {{pokemon.attack}}</p>
            <p>Defense: {{pokemon.defense}}</p>
            <p>Type 1: {{pokemon.type_1}}</p>
            <p>Type 2: {{pokemon.type_2}}</p>
        </div>
    </li>
</template>

<script>
export default {
  props: {
    pokemon: Object
  }
};
</script>

<style >
li {
    height: 300px;
    list-style: none;
    position: relative;
    text-align: center;
}
img {
    position: absolute;
    top:0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
#info {
    position: absolute;
    width: 100%;
    bottom: 0;
    background: rgba(255, 255, 255, 0.8);
}
h3, p {
    margin: 0;
    font-family: 'Courier New', Courier, monospace;
}

/* grass, fire, water, bug, normal, poison, electric, 
ground, fairy, fighting, psychic, rock, ghost, ice,
dragon, dark, steel, flying */

</style>
