<template>
  <section class="page__posts posts">
    <div class="posts__container _container">
      <ul class="posts__list post">
        <li class="post__item" v-for="post in posts" :key="post.id">
          <a @click="$router.push('/post/' + post.id)" class="post__link">
            <h2 class="post__title">{{ post.title }}</h2>
            <span class="post__author">№: {{ post.id }}</span>
            <p class="post__text">{{ post.body }}</p>
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex';
export default {
  name: 'posts',
  props: {
    posts: Array,
  },
  data() {
    return {};
  },

  // computed: {
  //   postUserName() {
  //     return this.$store.getters['getPost'](this.postId);
  //   },
  // },
};
</script>

<style lang="scss" scoped>
.post {
  &__item {
    margin-bottom: 30px;
    @include border;
    &:hover {
      background-color: $hoverColor;
    }
    &:active {
      background-color: $activeColor;
    }
  }
  &__link {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  &__title {
    @include title;

    &::first-letter {
      text-transform: uppercase;
    }
  }

  &__author {
    @include title;
    font-size: 16px;
  }

  &__text {
    @include text-font;
    &::first-letter {
      text-transform: uppercase;
    }
  }
}
</style>
