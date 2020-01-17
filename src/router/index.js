import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import BTH645 from '@/views/BTH645.vue';
import BTH645Intro from '@/views/BTH645/Bth645Intro.vue';
import BTH645Lab1 from '@/views/BTH645/Bth645Lab1.vue';
import BTH645NotFound from '@/views/BTH645/Bth645NotFound.vue';
import NotFound from '@/views/NotFound.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/bth645',
    name: 'bth645',
    component: BTH645,
    children: [
      {
        path: '',
        component: BTH645Intro,
      },
      {
        path: 'lab1',
        component: BTH645Lab1,
      },
      {
        path: '*',
        component: BTH645NotFound,
      },
    ],
  },
  {
    path: '*',
    component: NotFound,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
