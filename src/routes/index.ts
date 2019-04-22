import Vue from 'vue'
import VueRouter from 'vue-router'
import { routers } from './router'

Vue.use(VueRouter)

export const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routers,
})
