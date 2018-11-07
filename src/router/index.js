import Vue from 'vue'
import Router from 'vue-router'
import IndexTemplate from '@/components/IndexTemplate'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'IndexTemplate',
      component: IndexTemplate
    }
  ]
})
