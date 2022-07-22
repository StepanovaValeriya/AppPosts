import { createRouter, createWebHistory } from 'vue-router';
import Main from '../views/Main.vue';
import SinglePost from '../views/SinglePost.vue';

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main,
  },
  {
    path: '/post/:id',
    name: 'post',
    component: SinglePost,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
