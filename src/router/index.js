import { createRouter, createWebHistory } from 'vue-router'
import TextBinding from '../views/TextBinding';
import HtmlBinding from '../views/HtmlBinding';

const routes = [
    {
      path: '/',
      name: 'TextBinding',
      component: TextBinding
    },
    {
      path: '/html-binding',
      name: 'HtmlBinding',
      component: HtmlBinding
    }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
