import Vue from 'vue'
import Router from 'vue-router'

import PagesView from '@/components/PagesView'
import PageRecommend from '@/components/PageRecommend'
import PageToplist from '@/components/PageToplist'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/pages/'
    },
    {
      path: '/pages',
      component: PagesView,
      children: [
        {
          path: '',
          redirect: '/pages/recommend'
        },
        {
          path: 'recommend',
          component: PageRecommend
        },
        {
          path: 'toplist',
          component: PageToplist
        }
      ]
    }
  ]
})
