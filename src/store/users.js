import axios from 'axios';
export default {
  state: {
    users: [],
  },
  mutations: {
    setUsers(state, data) {
      state.users = data;
    },
  },
  getters: {
    users: (state) => state.users,
    getUser: (state) => (id) => {
      return state.users.find((user) => user.id == id) || {};
    },
  },

  actions: {
    async getUsers({ commit }) {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/users`
        );
        const data = response.data;
        commit('setUsers', data);
        console.log(response);
      } catch (err) {
        commit('setError', err);
        console.log(err.response);
      }
    },
  },
};
