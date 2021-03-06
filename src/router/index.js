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
      component:() => import('@/views/Person.vue'),
      meta:{
        requireAuth:true//代表这个页面需要登录权限
      }
    },
    {
      path:'/article',
      component:() => import('@/views/Article.vue'),
      meta:{
        requireAuth:true//true为这个页面需要登录权限
      }
    },
    {
      path:'/article/edit',
      name:'editArticle',
      component:() => import('@/views/ArticleEdit.vue'),
      meta:{
        requireAuth:true//true为这个页面需要登录权限
      }
    },
    {
      path:'/article/edit/:id',
      name:'updateArticle',
      component:() => import('@/views/ArticleEdit.vue'),
      meta:{
        requireAuth:true//true为这个页面需要登录权限
      }
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
