/*=========================================================================================
  File Name: router.js
  Description: Routes for vue-router. Lazy loading is enabled.
  Object Strucutre:
                    path => router path
                    name => router name
                    component(lazy loading) => component to load
                    meta : {
                      rule => which user can have access (ACL)
                      breadcrumb => Add breadcrumb to specific page
                      pageTitle => Display title besides breadcrumb
                    }
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    scrollBehavior () {
        return { x: 0, y: 0 }
    },
    routes: [

      {
    // =============================================================================
    // MAIN LAYOUT ROUTES
    // =============================================================================
        path: '',
        component: () => import('./layouts/main/Main.vue'),
        children: [
      // =============================================================================
      // Theme Routes
      // =============================================================================
          {
            path: '/',
            name: 'home',
            component: () => import('./views/Home.vue'),
          },
          {
            path: '/page2',
            name: 'page2',
            component: () => import('./views/Page2.vue'),
          },
          {
            path: '/page3',
            name: 'page3',
            component: () => import('./views/Page3.vue'),
          },
          {
            path: '/page4',
            name: 'page4',
            component: () => import('./views/Page4.vue'),
          },
        ],
      },
    // =============================================================================
    // FULL PAGE LAYOUTS
    // =============================================================================
      {
        path: '',
        component: () => import('@/layouts/full-page/FullPage.vue'),
        children: [
      // =============================================================================
      // PAGES
      // =============================================================================
          {
            path: '/pages/login',
            name: 'pageLogin',
            component: () => import('@/views/pages/Login.vue'),
          },
          {
              path: '/pages/register',
              name: 'pageRegister',
              component: () => import('@/views/pages/Register.vue'),
          },
          {
              path: '/pages/forgot-password',
              name: 'pageForgotPassword',
              component: () => import('@/views/pages/ForgotPassword.vue'),
          },
          {
              path: '/pages/reset-password',
              name: 'pageResetPassword',
              component: () => import('@/views/pages/ResetPassword.vue'),
          },
          {
              path: '/pages/lock-screen',
              name: 'pageLockScreen',
              component: () => import('@/views/pages/LockScreen.vue'),
          },
          {
              path: '/pages/comingsoon',
              name: 'pageComingSoon',
              component: () => import('@/views/pages/ComingSoon.vue'),
          },
          {
              path: '/pages/error-404',
              name: 'pageError404',
              component: () => import('@/views/pages/Error404.vue'),
          },
          {
              path: '/pages/error-500',
              name: 'pageError500',
              component: () => import('@/views/pages/Error500.vue'),
          },
          {
              path: '/pages/not-authorized',
              name: 'pageNotAuthorized',
              component: () => import('@/views/pages/NotAuthorized.vue'),
          },
          {
              path: '/pages/maintenance',
              name: 'pageMaintenance',
              component: () => import('@/views/pages/Maintenance.vue'),
          },
        ]
      },
      // Redirect to 404 page, if no match found
      {
        path: '*',
        redirect: '/pages/error-404'
      }
    ],
})

router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById('loading-bg')
    if (appLoading) {
        appLoading.style.display = "none";
    }
})

router.beforeEach((to, from, next) => {
  const publicPages = ['/pages/login', '/pages/register'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  // trying to access a restricted page + not logged in
  // redirect to login page
  if (authRequired && !loggedIn) {
    router.push({ path: '/pages/login', query: { to: to.path }});
  } else {
    next();
  }
});

export default router
