<template>
  <div
    class="max-w-3xl w-11/12 md:w-full mx-auto grid-cols-1 gap-y-4 items-center"
  >
    <div
      v-if="favoritJokes.length === 0"
      class="w-3/4 mx-auto bg-red-200 py-2 rounded-md"
    >
      <p class="text-lg text-red-500 font-bold">
        don't have a favorite right now
      </p>
    </div>
    <div
      class="w-full bg-pink-100 rounded-lg my-3 p-5 flex justify-between items-center"
      v-for="favorit in favoritJokes"
      :key="favorit.id"
    >
      <div>
        <p class="text-black text-left text-2xl">
          {{ favorit.joke }}
        </p>
      </div>
      <svg
        class="w-6 h-6 cursor-pointer"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        @click="deleteFavorJoke(favorit)"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
        ></path>
      </svg>
    </div>
  </div>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'
export default {
  name: 'Favorit',
  data: () => ({
    
    // favoritJokes : []
  }),
  methods: {
    ...mapActions('joke',['deleteJoke' ]),
    deleteFavorJoke(favor){
     this.deleteJoke(favor)
    }
  },
  computed: {
    ...mapGetters('joke',['getFavoritJokes']),
    favoritJokes(){
      return this.getFavoritJokes
    }
  },
}
</script>