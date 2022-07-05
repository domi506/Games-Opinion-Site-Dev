import Vue from "vue";
import Vuex from "vuex";
/* import games from './games.json' */
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    games: [],
    opiniones: [],
  },

  mutations: {
    SET_GAMES(state, games) {
      state.games = games;
    },
    ADD_OPINION(state, opinion) {
      state.opiniones.push(opinion);
    },
    REMOVE_OPINION(state, index) {
      state.opiniones.splice(index, 1);
    },
    EDIT_OPINION(state,opinion){
      let index =[opinion.index]
      delete opinion.index
      state.opiniones[index]=opinion

    }
  },
  actions: {
    async fetchGames({ commit }) {
      try {
        const url = "/games.json";
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        commit("SET_GAMES", data);
      } catch (error) {
        console.log(error);
      }
    },
    addOpinion({ commit }, opinion) {
      commit("ADD_OPINION", opinion);
    },
    removeOpinion({ commit }, index) {
      commit("REMOVE_OPINION", index);
    },
    editOpinion({commit},opinion){
      commit("EDIT_OPINION",opinion)
    }
  },
  modules: {},
});
