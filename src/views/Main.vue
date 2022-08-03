<template>
  <SelectUser
    @newUser="changeCurrentUser"
    :users="users"
    :currentUser="currentUser"
  ></SelectUser>
  <Loader v-if="isLoading"></Loader>
  <Posts v-else :posts="filterPosts"></Posts>
</template>

<script>
import SelectUser from '../components/SelectUser.vue';
import Posts from '../components/Posts.vue';
import { mapActions, mapGetters, mapState } from 'vuex';
export default {
  data() {
    return {
      currentUser: '',
    };
  },
  methods: {
    ...mapActions(['getPosts', 'getUsers', 'getFilterPosts']),
    changeCurrentUser(value) {
      this.currentUser = value;
    },
  },
  mounted() {
    this.getPosts();
    this.getUsers();
  },
  computed: {
    posts() {
      return this.$store.getters.posts;
    },
    users() {
      return this.$store.getters.users;
    },
    userPosts() {
      return this.$store.getters.filterPosts;
    },
    ...mapState({
      isLoading: (state) => state.posts.loading,
    }),
    filterPosts() {
      let user = this.currentUser;
      return this.posts.filter((post) => {
        return user == '' || post.userId == user;
      });
    },
  },

  components: { SelectUser, Posts },
};
</script>
