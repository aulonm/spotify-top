import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Artists from './views/Artists.vue';
import Tracks from './views/Tracks.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/tracks',
      name: 'tracks',
      component: Tracks,
    },
    {
      path: '/artists',
      name: 'artists',
      component: Artists,
    },
  ],
});
