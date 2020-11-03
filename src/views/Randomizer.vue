<template>
  <div>
  <button @click="Random()" class="auto">See a random Pokemon!</button>
  <Pokelist :pokemon="pokemon" />
  </div>

</template>

<script>
  import Pokelist from "../components/Pokelist.vue"

  export default {
    name: 'Randomizer',
    components: {
      Pokelist,

    },
    data() {
      return {
        id: '',
      }
    },
    computed: {
      pokemon() {
        return this.$root.$data.pokemon.filter(poke => poke.id === this.id);
      }
    },
    methods: {
      Random(){
        this.id = Math.floor(Math.random() * 810);

      }
    }
  }
</script>
