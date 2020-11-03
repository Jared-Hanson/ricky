import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import pokedex from './pokedex.js'
import Embed from 'v-video-embed'

// global register
Vue.use(Embed);


let data = {
  pokemon: pokedex,
  cart: [],
  textVal: "You dont have any items selected"
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
