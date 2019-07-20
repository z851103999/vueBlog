import auth from '../../api/auth';

const state = {//用户无，未登录
  user: null,
  isLogin: false
}
const getters = {
  user:state => state.user,
  isLogin:state => state.isLogin
}
const mutations = {
  setUser(state, payload) {
    state.user = payload.user
  },//修改url
  setLogin(state, payload) {
    state.isLogin = payload.isLogin
  }//修改登录状态
}

const actions = {
  async login({ commit }, { username, password }) {
    let res = await auth.login({ username, password })
    commit('setUser', { user: res.data })//用户登录成功
    commit('setLogin', { islogin: true })//用户已登录状态
    return res
  },
  async register({ commit }, { username, password }) {
    let res = await auth.register({ username, password })
    commit('setUser', { isLogin: true })
    commit('setLogin', { isLogin: true })
    return res.data
  },
  async logout({ commit }) {
    await auth.logout()
    commit('setUser', { user: null })
    commit('serLogin', { islogin: false })
  },
  async checkLogin({ commit, state }) {
    if (state.isLogin) return true //判断用户是否登录
    let res = await auth.getInfo()
    commit('setLogin', { isLogin: res.isLogin })
    if (!state.isLogin) return false //判断用户没有登录
    commit('setUser', { user: res.data })
    return true
  }

}


export default {
  state,
  getters,
  mutations,
  actions
}