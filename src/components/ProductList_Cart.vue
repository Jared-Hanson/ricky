<template>

<div class="wrapper">
<div class="textVal">
<p id="status1">{{this.$root.$data.textVal}}</p>
</div>
  <div class="products">
    <div class="product" v-for="product in products" :key="product.id">
      <div class="info">
        <h1>{{product.name}}</h1>
      </div>
      <div class="image" id="poop">
        <img :src="'/images/products/'+product.image">
        <div class="price">
          <h2>{{product.price}}</h2>
        </div>
      </div>
      <button @click="remove(product)" class="auto">Remove</button>
    </div>
  </div>
</div>
</template>
<script>

export default {

  name: 'ProductList',
  props: {
    products: Array,
    //textVal: String
  },
  methods: {
    addProduct(product) {
      this.$root.$data.cart.push(product);


    },
    remove(product) {
      this.$root.$data.cart.pop(product);
      let x = this.$root.$data.cart.length
      if (x > 0){
        this.$root.$data.textVal = ""
      }
      else{
        this.$root.$data.textVal = "You have no Items"
      }
    }

  }
}


</script>

<style scoped>
.wrapper {

  align-items: center;
  justify-content: center;
}

.products {
  margin-top: 20px;
  justify-content: center;
}

.product {
  margin: 10px;
  margin-top: 50px;
  width: 200px;
}

.product img {
  border: 2px solid #333;
  height: 250px;
  width: 200px;
  object-fit: cover;
}

.product .image {
  display: flex;
  justify-content: left;
  margin-bottom: 5px;
}

.info {
  background: #F2921D;
  color: #000;
  padding: 10px 30px;
  height: 80px;
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
  margin: 10px;
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
