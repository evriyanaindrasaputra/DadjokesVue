const url = "https://icanhazdadjoke.com";
const headers = { Accept: "application/json" };
const types = {
  SET_JOKE: "SET_JOKE",
  SET_FAVORIT: "SET_FAVORIT",
  DEL_FAVORIT: "DEL_FAVORIT",
};
const state = () => ({
  joke: [],
  favoritJokes: [],
  tempFavorits: [],
});
const mutations = {
  [types.SET_JOKE](state, payload) {
    state.joke = payload;
  },
  [types.SET_FAVORIT](state, payload) {
    state.tempFavorits = [payload, ...state.tempFavorits];
    state.favoritJokes = Array.from(new Set(state.tempFavorits));
    state.tempFavorits = [...state.favoritJokes];
  },
  [types.DEL_FAVORIT](state, payload) {
    const newFavor = state.favoritJokes.filter(
      (favor) => favor.id !== payload.id
    );
    state.favoritJokes = newFavor;
  },
};
const actions = {
  setJoke({ commit }) {
    fetch(url, { headers })
      .then((response) => response.json())
      .then((data) => {
        // state.commit("setStateJoke", data);
        commit(types.SET_JOKE, data);
      });
  },
  setFavoritJokes({ commit }, joke) {
    // state.commit("setStateFavoritJokes", joke);
    commit(types.SET_FAVORIT, joke);
  },
  deleteJoke({ commit }, joke) {
    commit(types.DEL_FAVORIT, joke);
  },
};
const getters = {
  getJoke: (state) => state.joke,
  getFavoritJokes: (state) => state.favoritJokes,
};
export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions,
};
