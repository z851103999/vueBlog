<template>
  <div class="login">
      <section class="form_container">
    <el-form :model="LoginUser" status-icon :rules="rules" ref="LoginForm" label-width="100px" class="LoginFrom">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="LoginUser.username" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          type="password"
          v-model="LoginUser.password"
          autocomplete="off"
          placeholder="请输入密码"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="row-bg" @click="submitForm('LoginForm')">登 录</el-button>
      </el-form-item>
      <div class="tipare">
        <p>
          还没有账号？想在
          <router-link to="/register">注册</router-link>
        </p>
      </div>
    </el-form>
    </section>
  </div>
</template>

<script src="./template.js"></script>

<styles src="./template.less" scoped></styles>
