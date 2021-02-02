<template>
  <div>
    <div
      class="home max-w-3xl w-full bg-green-300 mx-auto h-80 rounded-lg p-4 shadow-lg"
    >
      {{ joke.joke }}
    </div>
  </div>
</template>

<script>
const url = "https://icanhazdadjoke.com";
const headers = { Accept: "application/json" };

export default {
  name: 'Home',
  data: () => ({
    joke : []
  }),
  methods: {
    getJoke(){
      fetch(url, {headers}).then(response => response.json()).then(data => {
        this.joke = data
      })
    }
  },
  mounted(){
    this.getJoke()
  }
}
</script>
