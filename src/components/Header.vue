<template>
<header :class="{ login: isLogin, 'no-login': !isLogin }">
    <template v-if="!isLogin">
        <h1>Let's share</h1>
        <p>精品博客汇聚</p>
        <div class="btns">
            <el-button><router-link to="/login">立即登录</router-link></el-button>
            <el-button><router-link to="/register">注册账号</router-link></el-button>
        </div>
    </template>
    <template v-if="isLogin">
        <h1>Let's share</h1>
        <i class="edit el-icon-edit"></i>
        <img class="avatar" :src="user.username" :title="user.username"/>
        <ul>
          <li><router-link to="/my">我的</router-link></li>
          <li><a href="#" @click='onlogout'>注销</a></li>
        </ul>
    </template>
</header>
</template>

<script>

import auth from '../api/auth'
window.auth
auth.login({username:'hunger12',password:'123456'})


import {mapGetters,mapActions} from "vuex";

export default {
    data() {
        return {};
    },
    computed:{
      ...mapGetters(['isLogin','user'])
    },
    created() {
        this.checkLogin()
    },
    methods: {
        ...mapActions([
            'checkLogin',
            'logout'
        ]),
        onLogout(){
          this.logout()
        }
    }
};
</script>

<style lang="less">
@import "../assets/base.less";

// 没有登录的时候
header.no-login {
    padding: 0 12% 30px 12%;
    background: @bgColor;
    display: grid;
    justify-items: center;

    h1 {
        color: #fff;
        font-size: 40px;
        margin: 60px 0 0 0;
        text-transform: uppercase;
    }

    p {
        margin: 15px 0 0 0;
        color: #fff;
    }

    .btns {
        margin-top: 20px;
    }

    button {
        margin: 20px 5px 0;
    }
}

// 登录时候的样式
header.login {
    display: flex;
    align-items: center;
    background: @bgColor;

    h1 {
        margin: 0;
        padding: 0;
        color: #fff;
        font-size: 40px;
        text-transform: uppercase;
        flex: 1;
    }

    .edit {
        color: #fff;
        font-size: 30px;
    }

    .avatar {
        width: 40px;
        height: 40px;
        border: 1px solid #fff;
        border-radius: 50%;
        margin-left: 15px;
    }
}
</style>
