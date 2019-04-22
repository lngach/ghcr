import IRouter from './router.interface'
import Home from '@/views/Home.vue'

export const aiComparationRouter: IRouter = {
  path: '/',
  name: 'home',
  component: Home,
}
