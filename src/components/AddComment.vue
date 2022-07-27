<template>
  <section class="page__create-comment create-comment">
    <div class="create-comment__container _container">
      <form class="create-comment__form form" @submit.prevent="submitHandler">
        <input
          v-model.trim="v$.title.$model"
          class="form__title"
          type="text"
          placeholder="Enter a comment title"
          :class="{
            invalid: v$.title.$error,
          }"
        />
        <input
          v-model.trim="v$.text.$model"
          class="form__body"
          type="text"
          placeholder="Enter comment"
          :class="{
            invalid: v$.text.$error,
          }"
        />

        <button
          class="btn waves-effect waves-light"
          type="submit"
          name="action"
        >
          Comment
          <i class="material-icons right">send</i>
        </button>
      </form>
    </div>
  </section>
</template>

<script>
import useVuelidate from '@vuelidate/core';
import { required } from '@vuelidate/validators';
export default {
  props: ['postId'],
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      title: '',
      text: '',
      id: this.postId,
    };
  },
  validations() {
    return {
      title: { required },
      text: { required },
    };
  },
  methods: {
    async submitHandler() {
      if (this.v$.$invalid) {
        this.v$.$touch();
        return;
      }
      const formData = {
        body: this.text,
        email: '',
        id: '',
        name: this.title,
        postId: this.id,
      };
      try {
        const newComment = await this.$store.dispatch(
          'createComment',
          formData
        );
        console.log(newComment);
        (this.title = ''), (this.text = ''), this.v$.$reset();

        this.$emit('created', newComment);
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.create-comment {
  &__container {
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding-top: 20px;
    padding-bottom: 50px;
  }
}
.form {
  &__title[type='text'] {
    @include border;
    padding: 10px;
    box-sizing: border-box;
  }
  &__body[type='text'] {
    @include border;
    padding: 10px;
    box-sizing: border-box;
  }
}
.invalid {
  border: 1px solid red;
}
</style>
