import { RouteRecordRaw } from 'vue-router';
import homeRouter from './home';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/Home/index.vue')
  }
];

export default routes;
