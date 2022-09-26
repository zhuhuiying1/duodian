import Vue from 'vue'
import VueRouter from 'vue-router'

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
        component: () => import('../views/home/index.vue')
      },
      {
        path: '/classify',
        name: 'classify',
        component: () => import('../views/classify/index.vue')
      },
      {
        path: '/car',
        name: 'car',
        component: () => import('../views/car/index.vue')
      },
      {
        path: '/mine',
        name: 'mine',
        component: () => import('../views/mine/index.vue')
      }
    ]
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: () => import('../views/detail/index.vue')
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('../views/search/index.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (to) {
  return VueRouterPush.call(this, to).catch(err => err)
}
export default router
