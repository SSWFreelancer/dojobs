import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
const darkModeState = localStorage.getItem("darkMode");
const stateValue: boolean = darkModeState == "true";

export default new Vuex.Store({
  state: {
    isDarkMode: stateValue,
  },
  mutations: {
    DARK_MODE(state) {
      state.isDarkMode = true;
      localStorage.setItem("darkMode", state.isDarkMode.toString());
    },
    LIGHT_MODE(state) {
      state.isDarkMode = false;
      localStorage.setItem("darkMode", state.isDarkMode.toString());
    },
  },
  actions: {
    darkMode({ commit }) {
      commit("DARK_MODE");
    },
    lightMode({ commit }) {
      commit("LIGHT_MODE");
    },
  },
  getters: {
    isDarkMode: (state) => state.isDarkMode,
  },
});
