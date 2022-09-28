import Vue from 'vue'
import VueRouter from 'vue-router'
// import api from '../api'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/main/index.vue'),
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('../views/home/index.vue'),
        meta: {
          title: '首页'
        }
      },
      {
        path: '/classify',
        name: 'classify',
        component: () => import('../views/classify/index.vue'),
        meta: {
          title: '分类页'
        }
      },
      {
        path: '/car',
        name: 'car',
        component: () => import('../views/car/index.vue'),
        meta: {
          title: '购物车',
          isAuthenticated: true
        }
      },
      {
        path: '/mine',
        name: 'mine',
        component: () => import('../views/mine/index.vue'),
        meta: {
          title: '个人中心',
          isAuthenticated: true
        }
      }
    ]
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: () => import('../views/detail/index.vue'),
    meta: {
      title: '详情页'
    }
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('../views/search/index.vue'),
    meta: {
      title: '搜索页'
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/index.vue'),
    meta: {
      title: '登录页'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 守卫
// 前置守卫
// 需要登录的页面判断有没有token,如果没有就跳到登录页面
router.beforeEach((to, from, next) => {
  if (to.meta.isAuthenticated) {
    const token = localStorage.getItem('verify')
    if (token) {
      next()
    } else {
      next({
        path: '/login',
        query: { // 给router传query参数
          callbackPath: to.path
        }
      })
    }
  }
  next() // 不调用next不往下执行
})
// 后置守卫,常用来设置跳转后的title
router.afterEach((to, from) => {
  document.title = to.meta.title
})

// 自己跳自己不报错
const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (to) {
  return VueRouterPush.call(this, to).catch(err => err)
}
export default router
