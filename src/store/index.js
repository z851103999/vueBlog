import Vue from 'vue';
import Vuex from 'vuex';
import auth from '../store/models/auth';
import blog from '../store/models/blog';


Vue.use(Vuex)

export default new Vuex.Store({
   modules:{
     auth,
     blog
   }
});
