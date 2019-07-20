<template>
<div id="detail">
  <section class="user-info">
    <img src="usr.avatar" alt="username" :title="user.username" class="avatar">
    <h3>{{titile}}</h3>
    <p><router-link to="`/user/${user.id}`">{{user.username}}</router-link> 发布于{{friendlyDate(createdAt)}}</p>
  </section>
  <section class="article" v-html="markdown"></section>
</div>
</template>

<script src="./template.js"></script>

<style src="./template.less" lang="less"></style>
