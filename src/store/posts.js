import { stringifyStyle } from '@vue/shared';
import axios from 'axios';
// import { _ } from 'core-js';
import _ from 'underscore';
export default {
  state: {
    posts: [],
    loading: false,
  },
  mutations: {
    setPosts(state, data) {
      state.posts = data;
    },
    setLoader(state, bool) {
      state.loading = bool;
    },
  },
  getters: {
    posts: (state) => state.posts,

    getPost: (state, rootGetters) => (id) => {
      let post = state.posts.find((post) => post.id == id) || {};
      if (post) {
        let user = rootGetters['getUser'](post.userId);
        return _.extend(post, {
          name: user.name,
        });
      } else {
        return null;
      }
    },
  },

  actions: {
    async getPosts({ commit, dispatch }) {
      try {
        commit('setLoader', true);
        const response = await axios.get(
          `http://jsonplaceholder.typicode.com/posts`
        );
        const data = response.data;
        commit('setPosts', data);
        console.log(response);
      } catch (err) {
        commit('setError', err);
        console.log(err.response);
      } finally {
        commit('setLoader', false);
      }
    },
  },
};
