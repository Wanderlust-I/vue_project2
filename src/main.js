import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store";
// 引入elementui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 引入基础样式
import '@/assets/scss/reset.scss'
import '@/assets/font/iconfont.css'
import '@/assets/scss/common.scss'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import axios from 'axios'
import setAxios from './setAxios'
import Cookie from 'js-cookie'

 
setAxios();
Vue.use(mavonEditor)
Vue.use(ElementUI)
Vue.prototype.$axios=axios
router.beforeEach((to,from,next)=>{
  store.commit('setToken',Cookie.get('token'))
  if(store.state.token){
    store.commit('changIsSignIn',1)
  }
  if(to.meta.requireAuth){
    if(store.state.token){
      next()
    }else{
      next({path:'/login'})
    }
  }else{
    next()
  }
})

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
