import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserView from '../views/UserView.vue'
import SettingsView from '@/views/SettingsView.vue'
import Message1 from '../views/Message1.vue'
import Message2 from '../views/Message2.vue'
Vue.use(VueRouter)
const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/user',
    name: 'user',
    component: UserView
  },  
  {
    path: '/settings',
    name: 'settings',
    component: SettingsView
  },  
  {
    path: '/message1',
    name: 'message1',
    component: Message1
  },
  {
    path: '/message2',
    name: 'message2',
    component: Message2
  },     
]

const router = new VueRouter({
  routes
})

export default router
