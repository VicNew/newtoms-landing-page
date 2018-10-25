import Vue from 'vue'
import Router from 'vue-router'
import LandingPageTemplate from '@/components/LandingPageTemplate'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LandingPageTemplate',
      component: LandingPageTemplate
    }
  ]
})
