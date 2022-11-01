import { createRouter, createWebHistory } from "vue-router";


import BaseLayout from '@/layouts/base/Main.vue';

import Home from '@/views/home/Main.vue'




const routes = [
  {
    path: "/",
    name: 'home',
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { left: 0, top: 0 };
  },
});

export default router;
