import { createRouter, createWebHistory } from 'vue-router'
import TextBinding from '../views/TextBinding';
import HtmlBinding from '../views/HtmlBinding';
import AttributeBinding from '../views/AttributeBinding';
import ClassBinding from '../views/ClassBinding';
import StyleBinding from '../views/StyleBinding';
import ConditionalRendering from '../views/ConditionalRendering';
import ListRendering from '../views/ListRendering';
import YblEkycForm from '../components/YblEkycForm';
import PageNotFound from '../views/PageNotFound';
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
    },
    {
      path: '/attribute-binding',
      name: 'AttributeBinding',
      component: AttributeBinding
    },
    {
      path: '/class-binding',
      name: 'ClassBinding',
      component: ClassBinding
    },
    {
      path: '/style-binding',
      name: 'StyleBinding',
      component: StyleBinding
    },
    {
      path: '/conditionl-rendering',
      name: 'ConditionalRendering',
      component: ConditionalRendering
    },
    {
      path: '/list-rendering',
      name: 'ListRendering',
      component: ListRendering
    },
    {
      path: '/ybl-ekyc',
      name: 'YblEKyc',
      component: YblEkycForm
    },

   //Page Not Found Redirection
    {
      path: '/:catchAll(.*)', //This is a regex pattern
      name: 'PageNotFound',
      component: PageNotFound
    }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
