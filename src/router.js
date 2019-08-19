import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('./views/Home/index.vue'),
    children: [
      {
        path: 'watch',
        component: () => import('./views/Home/watch.vue')
      },
      {
        path: 'bookTicket',
        component: () => import('./views/Home/bookTicket.vue')
      },
      {
        path: 'personCenter',
        component: () => import('./views/Home/personCenter.vue')
      },
      {
        path: '',
        redirect: '/watch'
      }
    ]
  },
  {
    path: '/city',
    component: () => import('./views/City/index.vue')
  },
  {
    path: '/login',
    component: () => import('./views/Login/index.vue')
  },
  {
    path: '/register',
    component: () => import('./views/Register/index.vue')
  },
  {
    path: '/wallet',
    component: () => import('./views/Wallet/index.vue')
  }
]

const router = new VueRouter({
  routes
})
export default router
