<template>
  <div>
    <button v-on:click="isVisible = !isVisible" class="auto">See my favorite pokemon!</button>
    <div>

<video-embed css="embed-responsive-1by1" v-show="isVisible"  :params="{autoplay: 1, allow}" src="https://www.youtube.com/watch?v=oHg5SJYRHA0"></video-embed>
	</div>
  </div>
</template>

<script>

  export default {
    name: 'Favorite',

    data() {
      return {
        isVisible: false,

			}

    }
    }



</script>
