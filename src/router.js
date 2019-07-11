import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login/template.vue'
import Register from './views/Register/template.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    }, {
      path: '/register',
      name: 'register',
      component: Register
    }
  ]
})
