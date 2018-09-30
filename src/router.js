import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Projects from './views/Projects.vue';
import Contact from './views/Contact.vue';

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About,
    props: true,
  },
  {
    path: '/projects',
    name: 'projects',
    component: Projects,
    props: true,
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact,
    props: true,
  },
];

const router = new Router({
  routes,
});

export default router;
