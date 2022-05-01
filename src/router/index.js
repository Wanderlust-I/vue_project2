import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
  path: "/",
  component: () => import('../components/CommonLayout.vue'),
  children:[
    {
      path:'',
      component:() => import('@/views/Home.vue'),
      name:'home'
    },
    {
      path:'/detail/:id',
      component:() => import('@/views/Detail.vue')
    },
    {
      path:'/person',
      component:() => import('@/views/Person.vue')
    },
    {
      path:'/article',
      component:() => import('@/views/Article.vue')
    },
    {
      path:'/article/edit',
      name:'editArticle',
      component:() => import('@/views/ArticleEdit.vue')
    },
    {
      path:'/article/edit/:id',
      name:'updateArticle',
      component:() => import('@/views/ArticleEdit.vue'),
    }
  ],
    },
    {
      path:'/login',
      component:()=> import('../views/Login.vue')
    }
 ];

const router = new VueRouter({
  routes
})

export default router
