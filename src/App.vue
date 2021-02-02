<template>
  <div id="app" class="bg-white">
    <h2 class="text2xl tracking-tight md:text-4xl font-bold text-black pt-5">
      DadJokes Fav
    </h2>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/favorit">Favorit</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 10px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
