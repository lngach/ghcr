import IRouter from './router.interface'

import About from '@/views/About.vue'

export const aboutRouter: IRouter = {
  path: '/about',
  name: 'about',
  component: About,
}
