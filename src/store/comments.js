import axios from 'axios';
export default {
  state: {
    comments: [],
  },
  mutations: {
    setComments(state, data) {
      state.comments = data;
    },
  },
  getters: {
    comments: (state) => state.comments,
    getCommentsForPost: (state) => (id) => {
      return state.comments.filter((comment) => comment.postId == id) || {};
    },
  },

  actions: {
    async getComments({ commit }) {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/comments`
        );
        const data = response.data;
        commit('setComments', data);
        console.log(response);
      } catch (err) {
        commit('setError', err);
        console.log(err.response);
      }
    },
  },
};
