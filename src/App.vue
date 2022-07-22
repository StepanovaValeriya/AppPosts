<template>
  <div class="wrapper">
    <Header></Header>
    <main class="page">
      <router-view></router-view>
    </main>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './app/Header.vue';
import Footer from './app/Footer.vue';
export default {
  components: { Header, Footer },
};
</script>

<style lang="scss">
@import 'materialize-css/dist/css/materialize.min.css';
.wrapper {
  min-height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.page {
  flex: 1 1 auto;
}
</style>
