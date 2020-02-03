import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import BTH645 from '@/views/BTH645.vue';
import BTH645Intro from '@/views/BTH645/Bth645Intro.vue';
import BTH645Lab1 from '@/views/BTH645/Bth645Lab1.vue';
import BTH645Lab2 from '@/views/BTH645/Bth645Lab2.vue';
import BTH645Lab3 from '@/views/BTH645/Bth645Lab3.vue';
import BTH645NotFound from '@/views/BTH645/Bth645NotFound.vue';
import AboutMe from '@/views/AboutMe.vue';
// import NotFound from '@/views/NotFound.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: { name: 'home' },
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
  },
  {
    path: '/bth645',
    component: BTH645,
    children: [
      {
        path: '',
        name: 'bth645',
        component: BTH645Intro,
      },
      {
        path: 'lab1',
        name: 'bth645-lab1',
        component: BTH645Lab1,
      },
      {
        path: 'lab2',
        name: 'bth645-lab2',
        component: BTH645Lab2,
      },
      {
        path: 'lab3',
        name: 'bth645-lab3',
        component: BTH645Lab3,
      },
      {
        path: '*',
        name: 'bth645-notfound',
        component: BTH645NotFound,
      },
    ],
  },
  {
    path: '/about',
    name: 'about-me',
    component: AboutMe,
  },
  {
    path: '*',
    redirect: { name: 'home' },
    // component: NotFound,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
