<template>
  <Loader v-if="isLoading"></Loader>
  <section v-else class="post__page post">
    <div class="post__container _container">
      <h1 class="post__title">{{ post.title }}</h1>
      <div class="post__author">
        <h2>About author</h2>
        <span>Name: {{ post.name }}</span>
        <span>Alias: {{ post.username }}</span>
        <span>E-mail: {{ post.email }}</span>
      </div>
      <div class="post__text">
        <p>{{ post.body }}</p>
      </div>
    </div>
  </section>
  <Comments :postComments="commentForPost"></Comments>
  <AddComment @created="addNewComment" :postId="postId"></AddComment>
</template>

<script>
import Comments from '../components/Comments.vue';
import AddComment from '../components/AddComment.vue';
import { mapActions, mapGetters, mapState } from 'vuex';
export default {
  name: 'singlePost',
  data() {
    return {};
  },
  methods: {
    ...mapActions(['getComments', 'getPosts', 'getUsers']),
    addNewComment(comment) {
      this.comments.push(comment);
      console.log(this.comments);
    },
  },
  mounted() {
    this.getComments();
    this.getPosts();
    this.getUsers();
  },
  computed: {
    post() {
      return this.$store.getters['getPost'](this.postId);
    },
    comments() {
      return this.$store.getters['comments'];
    },
    postId() {
      return parseInt(+this.$route.params.id);
    },
    ...mapState({
      isLoading: (state) => state.posts.loading,
    }),
    commentForPost() {
      return this.comments.filter((comment) => comment.postId == this.postId);
    },
  },
  components: { Comments, AddComment },
};
</script>

<style lang="scss" scoped>
.post {
  &__container {
    padding: 50px 15px;
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
  &__title {
    @include border;
    @include title;
    text-align: center;

    &::first-letter {
      text-transform: uppercase;
    }
  }
  &__author {
    @include border;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 30px;
    h2 {
      @include title;
      font-size: 18px;
    }
    span {
      @include text-font;
    }
  }

  &__text {
    @include border;
    padding: 30px;
    p {
      @include text-font;
      &::first-letter {
        text-transform: uppercase;
      }
    }
  }
}
</style>
