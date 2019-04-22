import IRouter from './router.interface'
import Home from '@/views/Home.vue'

export const homeRouter: IRouter = {
  path: '/',
  name: 'home',
  component: Home,
}
