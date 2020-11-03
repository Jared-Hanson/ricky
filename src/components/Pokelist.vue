<template>
<div class="wrapper">
  <div class="pokemon">
    <div class="poke" v-for="poke in pokemon" :key="poke.id">
      <div class="flex">
        <div class="image" id="poop">
          <img :src="'/images/images/'+poke.id +'.png'">
        </div>
        <div class="info">
          <div class="text">
          <h1>{{poke.name.english}}</h1>
          <h2> {{poke.name.japanese}}</h2>
          <p>Base HP: {{poke.base.HP}}</p>
          <p>Attack: {{poke.base.Attack}}</p>
          <p>Defense: {{poke.base.Defense}}</p>
          <p>Speed: {{poke.base.Speed}}</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>
</template>
<script>
export default {

  name: 'Pokelist',
  props: {
    pokemon: Array
  },
  methods: {
  }
}
</script>

<style scoped>
.wrapper {
  align-items: center;
  justify-content: center;
}

.pokemon {
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  margin-top: 20px;
  justify-content: center;
}

.flex {
  display: flex;
}

.poke {
  margin-right: 300px;
  margin-top: 50px;
  width: 300px;
}

.poke img {
  display: flex;
  justify-content: left;
  border: 2px solid #333;
  height: 300px;
  width: 300px;
  object-fit: cover;
}

.poke .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}
.text{
  justify-content: left;


}

.info {
  background: #cc0000;
  color: #000;
  padding: 10px 20px;
  height: 300px;
  width: 600px;
}

.info h1 {
  font-size: 16px;
}

.info h2 {
  font-size: 14px;
}

.info p {
  margin: 0px;
  font-size: 10px;
}


.price {
  display: flex;
}

button {
  height: 50px;
  background: #000;
  color: white;
  border: none;
}

.auto {
  margin-left: auto;
}
</style>
