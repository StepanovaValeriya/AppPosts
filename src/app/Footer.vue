<template>
  <footer class="page-footer teal lighten-1">
    <div class="container">
      <div class="row">
        <div class="col l6 s12">
          <h5 class="white-text">Posts</h5>
        </div>
        <div class="col l4 offset-l2 s12">
          <ul>
            <li class="list__item">
              <a class="grey-text text-lighten-3" href="#!">About Us</a>
            </li>
            <li class="list__item">
              <a class="grey-text text-lighten-3" href="#!">Contacts</a>
            </li>
            <li class="list__item">
              <a class="grey-text text-lighten-3" href="#!">Partners</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-copyright">
      <div class="container">
        © 2014 Copyright Text
        <a class="grey-text text-lighten-4 right" href="#!"></a>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.list__item {
  padding-top: 10px;
}
.white-text {
  @include title;
}
</style>
