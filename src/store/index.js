import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isSignIn: 0,

  },
  mutations: {
    changIsSignIn (state,n) {
      state.isSignIn = n
    },
  },
});
