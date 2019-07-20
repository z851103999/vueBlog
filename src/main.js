import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import router from './router/index'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/base.less'
import Util from '@/helpers/util'


Vue.use(ElementUI)
Vue.use(Util)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
