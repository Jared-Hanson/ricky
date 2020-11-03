<template>
<div>
<p class="titleText">The most ADVANCED cs-260 pokedex yet! </p>
  <div class="wrapper">

    <div class="search">
      <form class="pure-form">
        <i class="fas fa-search"></i><input v-model="searchText" />
      </form>
    </div>
  </div>
  <div class="pokemon">
  <Pokelist :pokemon="pokemon" />
  </div>
  
</div>
</template>

<script>
import Pokelist from "../components/Pokelist.vue"
export default {
  name: 'Home',
  components: {
    Pokelist
  },
  data() {
    return {
    searchText: '',
    }
  },
  computed: {
    pokemon() {
      return this.$root.$data.pokemon.filter(poke => poke.name.english.toLowerCase().search(this.searchText) >= 0);
    }
  },
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}
.titleText{
  text-align: center;
}
.pokemon {
  display: flex;
  align-items: left;
  justify-content: left;
}

.search {
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 50%;
}

form {
  display: table;
  width: 100%;
}

i {
  display: table-cell;
  padding-left: 10px;
  width: 1px;
}

input {
  display: table-cell;
  font-size: 20px;
  border: none !important;
  box-shadow: none !important;
  width: 100%;
  height: 40px;
}
</style>
