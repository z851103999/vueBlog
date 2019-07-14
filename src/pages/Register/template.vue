<template>
  <div class="register">
      <section class="form_container">
    <el-form :model="ruleFrom" status-icon :rules="rules" ref="ruleFrom" label-width="80x" class="LoginFrom">

      <el-form-item label="用户名" prop="username">
        <el-input v-model="ruleFrom.username" placeholder="请输入用户名"></el-input>
      </el-form-item>

      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="ruleFrom.password" autocomplete="off" placeholder="请输入密码"></el-input>
      </el-form-item>

      <el-form-item label="确认密码" prop="checkPass">
        <el-input type="password" v-model="ruleFrom.checkPass" auto-complete="off" placeholder="请再次确认密码" ></el-input>
      </el-form-item>

      <el-form-item label="邮箱地址" prop="email">
        <el-input type="email" v-model="ruleFrom.email" placeholder="请输入邮箱" ></el-input>
      </el-form-item>

      <el-form-item>
        <el-button class="row-bg" @click="submitForm('ruleFrom')">注  册</el-button>
      </el-form-item>
        <div class="tipare">
        <p>
          已有账号
          <router-link to="/login">登 录</router-link>
        </p> 
        </div>
    </el-form>
    </section>
  </div>
</template>

<script src="./template.js"></script>

<styles src="./template.less" scoped></styles>
