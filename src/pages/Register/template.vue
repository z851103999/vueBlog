<!--<template>-->
<!--  <div id="register">-->
<!--    <h4>用户名</h4>-->
<!--    <input v-model="username" placeholder="用户名">-->
<!--    <h4>密码</h4>-->
<!--    <input v-model="password" type="password" placeholder="密码" @keyup.enter="onRegister" >-->
<!--    <el-button size="medium" @click="onRegister">立即注册</el-button>-->
<!--    <p class="notice">已有账号？<router-link to="/login">立即登录</router-link></p>-->
<!--  </div>-->
<!--</template>-->

<template>
<div class="register">
  <el-form :model="registerUser" status-icon :rules="rules" ref="registerUser" label-width="100px" class="login">
    <el-form-item label="姓名" prop="username">
      <el-input type="text" v-model="registerUser.username" placeholder="用户名"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input type="password" v-model="registerUser.password" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="确认密码" prop="checkPass">
      <el-input type="password" v-model="registerUser.checkPass" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary"  class="submit_btn" @click="onRegister">注 册</el-button>
    </el-form-item>
  </el-form>
  </div>
</template>




<script src="./template.js"></script>

<style src="../Login/template.less" lang="less"></style>
