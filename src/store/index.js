import Vue from "vue";
import Vuex from "vuex";
import joke from "./modules/joke";

Vue.use(Vuex);
// const url = "https://icanhazdadjoke.com";
// const headers = { Accept: "application/json" };
// export default new Vuex.Store({
//   state: {
//     joke: [],
//     favoritJokes: [],
//     tempFavorits: [],
//   },
//   mutations: {
//     setStateJoke(state, payload) {
//       state.joke = payload;
//     },
//     setStateFavoritJokes(state, payload) {
//       state.tempFavorits = [payload, ...state.tempFavorits];
//       state.favoritJokes = Array.from(new Set(state.tempFavorits));
//       state.tempFavorits = [...state.favoritJokes];
//     },
//     deleteStateJoke(state, payload) {
//       const newFavor = state.favoritJokes.filter(
//         (favor) => favor.id !== payload.id
//       );
//       state.favoritJokes = newFavor;
//     },
//   },
//   actions: {
//     setJoke(state) {
//       fetch(url, { headers })
//         .then((response) => response.json())
//         .then((data) => {
//           state.commit("setStateJoke", data);
//         });
//     },
//     setFavoritJokes(state, joke) {
//       state.commit("setStateFavoritJokes", joke);
//     },
//     deleteJoke(state, joke) {
//       state.commit("deleteStateJoke", joke);
//     },
//   },
//   modules: {},
//   getters: {
//     getJoke: (state) => state.joke,
//     getFavoritJokes: (state) => state.favoritJokes,
//   },
// });
const store = new Vuex.Store({
  modules: {
    joke,
  },
});
export default store;
