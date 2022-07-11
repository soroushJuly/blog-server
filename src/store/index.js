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
    STORE_NEW_POST(state, payload) {
      state.posts.push(payload);
    },
  },
  actions: {
    async getPosts({ commit }, q) {
      try {
        const { data } = await api.get(POSTS, {
          params: { q, _expand: "user" },
        });
        commit("STORE_POSTS", data);
      } catch (error) {
        console.log(error);
      }
    },
    async createPost({ commit }, { payload }) {
      try {
        const { data } = await api.post(POSTS, payload);
        commit("STORE_NEW_POST", data);
        alert("Post id: " + data.id);
        Promise.resolve();
      } catch (error) {
        console.log(error);
      }
    },
  },
  modules: {},
});
