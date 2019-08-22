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
        component: () => import('./views/Home/watch.vue'),
        meta: {
          title: '咪咕影院-首页'
        }
      },
      {
        path: 'bookTicket',
        component: () => import('./views/Home/bookTicket.vue'),
        meta: {
          title: '咪咕影院-影片'
        }
      },
      {
        path: 'personCenter',
        component: () => import('./views/Home/personCenter.vue'),
        meta: {
          title: '我的'
        }
      },
      {
        path: '',
        redirect: '/watch'
      }
    ]
  },
  {
    path: '/search',
    component: () => import('./views/Home/search.vue'),
    meta: {
      title: '搜索'
    }
  },
  {
    path: '/city',
    component: () => import('./views/City/index.vue'),
    meta: {
      title: '选择城市'
    }
  },
  {
    path: '/login',
    component: () => import('./views/Login/index.vue'),
    meta: {
      title: '咪咕用户中心门户-登录'
    }
  },
  {
    path: '/register',
    component: () => import('./views/Register/index.vue'),
    meta: {
      title: '咪咕用户中心门户-注册'
    }
  },
  {
    path: '/wallet',
    component: () => import('./views/Wallet/index.vue'),
    meta: {
      title: '我的电影卡',
      needLogin: true
    }
  }
]

const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  if (to.meta.needLogin) {
    window.isLogin = sessionStorage.getItem('Authorization')
    if (window.isLogin !== null && window.isLogin !== '') {
      next()
    } else {
      next(`/login?redirect=${to.path}`)
    }
  } else {
    next()
  }
})
router.afterEach((to, from) => {
  let title = to.meta.title
  document.title = title
})
export default router
