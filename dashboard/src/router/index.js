import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/pages/Main'
import Settings from '@/pages/Settings'
import Landing from '@/pages/Landing'
import SystemLog from '@/pages/SystemLog'
import Package from '@/pages/Package'
import Pretrained from '@/pages/Pretrained'
import Detail from '@/pages/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      children: [
        {
          path: '/settings',
          name: 'Settings',
          component: Settings
        },
        {
          path: '/home',
          name: 'Home',
          component: Landing
        },
        {
          path: '/log',
          name: 'Log',
          component: SystemLog
        },
        {
          path: '/package',
          name: 'Package',
          component: Package
        },
        {
          path: '/pretrained',
          name: 'Pretrained',
          component: Pretrained
        },
        {
          path: '/detail/:vendor/:name',
          name: 'Detail',
          component: Detail
        }
      ]
    }
  ]
})
