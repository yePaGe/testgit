import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
const Com = resolve => require(['@/components/Com'], resolve)
const Canvas = resolve => require(['@/components/Canvas'], resolve)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: 'com',
          name: 'Com',
          component: Com
        },
        {
          path: 'canvas',
          name: 'canvas',
          component: Canvas
        }
      ]
    }
  ]
})
