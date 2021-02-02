import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const url = "https://icanhazdadjoke.com";
const headers = { Accept: "application/json" };
export default new Vuex.Store({
  state: {
    joke : [],
    favoritJokes : []
  },
  mutations: {
    setStateJoke(state, payload){
      state.joke = payload
    },
    setStateFavoritJokes(state, payload){
      state.favoritJokes.push(payload)
    },
  },
  actions: {
    setJoke(state) {
      fetch(url, {headers}).then(response => response.json()).then(data => {
        state.commit('setStateJoke', data)
      })
    },
    setFavoritJokes(state, joke){
      state.commit('setStateFavoritJokes', joke)
    }
  },
  modules: {
  },
  getters: {
    getJoke : state => state.joke,
    getFavoritJokes : state => state.favoritJokes
  }
})
