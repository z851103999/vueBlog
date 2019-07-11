import request from '../helpers/request'

//对url进行封装

const URL = {
    REGISTER: '/auth/register',//注册
    LOGIN: '/auth/login',//登录
    LOGOUT: '/auth/logout',//登出
    GET_INFO: '/auth'
}

export default {
    register({ username, password }) {
        return request(URL.REGISTER, 'POST', { username, password })
    },
    login({ username, password }) {
        return request(URL.LOGINZ, 'POST',{ username, password })
    },
    logput(){
        return request(URL.LOGOUT)
    },
    getInfo(){
        return request(URL.GET_INFO)
    }
}