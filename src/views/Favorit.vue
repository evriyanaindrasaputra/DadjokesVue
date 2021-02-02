<template>
  <div
    class="max-w-3xl w-11/12 md:w-full mx-auto grid-cols-1 gap-y-4 items-center"
  >
    <div
      class="w-full bg-pink-200 rounded-lg my-2 py-2 cursor-pointer"
      v-for="favorit in favoritJokes"
      :key="favorit.id"
      @click="deleteFavorJoke(favorit)"
    >
      <p class="text-black text-2xl">
        {{ favorit.joke }}
      </p>
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
    ...mapActions(['deleteJoke' ]),
    deleteFavorJoke(favor){
     this.deleteJoke(favor)
    }
  },
  computed: {
    ...mapGetters(['getFavoritJokes']),
    favoritJokes(){
      return this.getFavoritJokes
    }
  },
}
</script>