import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/hello',
      name: 'Helloworld',
      meta: {
        title: '欢迎'
      },
      component: resolve => require(['@/components/HelloWorld'], resolve)
    },
    {
      path: '/',
      name: 'Home',
      component: resolve => require(['@/views/index/index'], resolve)
    },
    {
      path: '*',//*号表示匹配任意内容
      redirect: '/index',
      extra: {
        inMenu: false
      },
      component: resolve => require(['@/views/index/index'], resolve)
    },
    {
      path: '/index',
      name: 'Index',
      meta: {
        title: '首页'
      },
      component: resolve => require(['@/views/index/index'], resolve)
    },
    {
      path: '/goods',
      name: 'Goods',
      meta: {
        title: '商品详情'
      },
      component: resolve => require(['@/views/goods/detail'], resolve)
    },
    {
      path: '/scratch',
      name: 'Scratch',
      meta: {
        title: '刮刮卡'
      },
      component: resolve => require(['@/views/scratch/index'], resolve)
    },
    {
      path: '/point',
      name: 'Point',
      meta: {
        title: '积分商城'
      },
      component: resolve => require(['@/views/point/index'], resolve)
    },
    {
      path: '/cart',
      name: 'Cart',
      meta: {
        title: '购物车'
      },
      component: resolve => require(['@/views/cart/index'], resolve)
    },
    {
      path: '/my',
      name: 'My',
      meta: {
        title: '个人中心'
      },
      component: resolve => require(['@/views/my/index'], resolve)
    },
  ],
  linkActiveClass: 'active'
})
