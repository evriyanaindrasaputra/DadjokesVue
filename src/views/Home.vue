<template>
  <div class="max-w-3xl w-11/12 md:w-full mx-auto">
    <div
      class="bg-green-300 h-60 rounded-lg p-4 shadow-lg mb-5 flex items-center"
    >
      <h2 class="font-bold text-2xl">{{ joke.joke }}</h2>
    </div>
    <div class="w-full grid grid-cols-2 justify-between items-center gap-x-5">
      <button
        class="bg-gradient-to-l from-yellow-200 to-green-400 p-3 rounded-md shadow-md w-full focus:outline-none transform hover:scale-105 ease-out duration-500 hover:from-green-400 hover:to-green-400"
        @click="getJoke"
      >
        <p class="text-base font-medium text-black">Get Random Joke</p>
      </button>
      <button
        class="bg-gradient-to-r from-red-300 to-pink-400 p-3 rounded-md shadow-md w-full focus:outline-none transform hover:scale-105 ease-out duration-500 hover:from-pink-400 hover:to-pink-400"
        @click="AdtoFavorit"
      >
        <p class="text-base font-medium text-black">Add to Favorit</p>
      </button>
    </div>
  </div>
</template>

<script>
const url = "https://icanhazdadjoke.com";
const headers = { Accept: "application/json" };

export default {
  name: 'Home',
  data: () => ({
    joke : [],
    favoritJokes : []
  }),
  methods: {
    getJoke(){
      fetch(url, {headers}).then(response => response.json()).then(data => {
        this.joke = data
      })
    },
    AdtoFavorit() {
      const newJoke = this.joke
      this.favoritJokes.push(newJoke)
    }
  },
  mounted(){
    this.getJoke()
  }
}
</script>
