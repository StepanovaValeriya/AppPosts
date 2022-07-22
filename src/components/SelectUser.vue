<template>
  <section class="select__container _container">
    <select
      v-model="current"
      class="browser-default"
      @change="changeUser($event)"
    >
      <option value="">Все авторы</option>
      <option v-for="user in users" :key="user.id" :value="user.id">
        {{ user.name }}
      </option>
    </select>
  </section>
</template>

<script>
export default {
  name: 'selectUser',
  props: {
    users: Array,
    currentUser: String,
  },
  data() {
    return {
      current: this.currentUser,
    };
  },
  methods: {
    changeUser(event) {
      this.$emit('newUser', event.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
.select {
  &__container {
    padding: 50px;
    max-width: 500px;
  }
}
.browser-default {
  @include border;
}
</style>
