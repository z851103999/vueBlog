<template>
<div class="login">
  <el-form :model="loginUser" status-icon :rules="rules" ref="loginUser" label-width="100px" class="login">
    <el-form-item label="姓名" prop="username">
      <el-input type="text" v-model="loginUser.username" placeholder="用户名"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input type="password" v-model="loginUser.password" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary"  class="submit_btn" @click="onLogin">登  录</el-button>
    </el-form-item>
  </el-form>
  </div>
</template>

<script src="./template.js"></script>

<style src="./template.less" lang="less"></style>
