import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/home.vue';
import Help from '../components/help.vue';
import Game from '../components/game.vue';
import New from '../components/new.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/game',
    name: 'Game',
    component: Game
  },
  {
    path: '/help',
    name: 'Help',
    component: Help
  },
  {
    path: '/new',
    name: 'New',
    component: New
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;