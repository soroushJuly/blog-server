import Vue from "vue";
import Vuex from "vuex";
import { POSTS } from "@/constants/endpoints";
import { api } from "@/utils/axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posts: [],
  },
  getters: {
    postsVisible: (state) => (page) => {
      return state.posts.slice(0, page * 8);
    },
  },
  mutations: {
    STORE_POSTS(state, payload) {
      state.posts = payload;
    },
  },
  actions: {
    async getPosts({ commit }) {
      await api.get(POSTS).then((response) => {
        commit("STORE_POSTS", response.data);
      });
    },
  },
  modules: {},
});
