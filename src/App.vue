<template>
<div id="app">
  <div id="menu">
    <div id="brand">
      <router-link to="/">
        <img src="/images/logo.png">
      </router-link>
    </div>
    <div id="side">
      <router-link to="/randomizer">
        <div class="menu-item randomizer">
          <img src="/images/36601.png">
          <p>Random</p>
        </div>
      </router-link>
      <router-link to="/favorite">
        <div class="menu-item">
          <img src="/images/star.png">
          <p>Favorites</p>
        </div>
      </router-link>
    </div>
  </div>
  <router-view />
  <v-footer>
  <a href="https://github.com/Jared-Hanson/ricky">Github</a>
  </v-footer>
</div>
</template>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 50px 100px;

}

#menu {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 5px;
  grid-template-areas: "none brand side";
  margin-bottom: 50px;
}

#menu a {
  color: #B84901;
}

#brand {
  grid-area: brand;
  display: flex;
  justify-content: center;
}

#brand img {
  height: 200px;
}

#side {
  grid-area: side;
  display: flex;
  justify-content: flex-end;
}

#side img {
  width: 50px;
}

.menu-item {
  display: flex;
  flex-direction: column;
}

.menu-item p {
  margin: 0px;
}

.randomizer {
  margin-right: 50px;
}
</style>
