<template>
  <section class="page__comments comments">
    <div class="comments__container _container">
      <h2 class="comments__title">Comments</h2>
      <ul class="comments__list comment">
        <li
          class="comment__item"
          v-for="comment in postComments"
          :key="comment.id"
        >
          <h3 class="comment__title">{{ comment.name }}</h3>
          <p class="comment__text">{{ comment.body }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'comments',
  props: ['postComments'],
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.comments {
  &__title {
    font-size: 21px;
    font-weight: 700;
    line-height: 26px;
    text-align: center;
  }
  &__list {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 30px 0;
  }
}
.comment {
  &__item {
    border: 1px solid rgba(151, 224, 209, 0.808);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.089),
      0px 4px 4px rgba(0, 0, 0, 0.171);
    border-radius: 10px;
    padding: 10px;
  }
  &__title {
    font-size: 16px;
    font-weight: 700;
    line-height: 26px;
    padding-bottom: 10px;
    &::first-letter {
      text-transform: uppercase;
    }
  }
  &__text {
    &::first-letter {
      text-transform: uppercase;
    }
  }
}
</style>
