import Vue from 'vue'
import Router from 'vue-router'
import IndexTemplate from '@/components/IndexTemplate'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/landingpage/1'
    },
    {
      path: '/landingpage',
      redirect: '/landingpage/1'
    },
    {
      path: '/landingpage/:landingPageId',
      name: 'IndexTemplate',
      component: IndexTemplate,
      props: true
    }
  ]
})
