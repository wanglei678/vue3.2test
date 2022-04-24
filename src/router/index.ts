import { createRouter, createWebHashHistory } from 'vue-router';
import routes from './routes';
// import { login } from '@utils/login';
// import { tokenParse } from '@utils/tokenParse';
// import NProgress from 'nprogress';
// import 'nprogress/nprogress.css';

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  // scrollBehavior(to, from, savedPosition) {
  //   // if (savedPosition) {
  //   //   return savedPosition;
  //   // } else {
  //   //   return { top: 0, left: 0 };
  //   // }
  // }
});

// NProgress.configure({ showSpinner: false });

// 登录拦截
router.beforeEach((to, from, next) => {
  next()
  // NProgress.start();
  // if (to.path === '/login') {
  //   login();
  // } else if (to.path.includes('/access_token=')) {
  //   // tokenParse();
  // } else if (to.path !== '/logout') {
  //   const token = localStorage.getItem('token');
  //   token ? next() : login();
  // } else {
  //   return next();
  // }
});

router.afterEach(() => {
  // NProgress.done();
});

export default router;
