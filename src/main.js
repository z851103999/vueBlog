import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/base.less'
import Util from '@/helpers/util'


Vue.use(ElementUI)
Vue.use(Util)


Vue.config.productionTip = false


new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
