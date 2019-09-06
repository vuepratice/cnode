<template>
  <div class="container">
    <div class="header">
      <router-link class="tohome" :to="{path:'/'}">主页</router-link>
      <span>/  登录</span>
    </div>
    <div class="signin">
      <span>用户名</span>
      <input type="text"><br>
      <span>密码</span>
      <input type="password" name="" id=""><br>
      <button>登录</button>
      <button>通过GitHub登录</button>
      <a href="">忘记密码了?</a>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" socped>
  .header {
    padding: 10px;
    text-align: left;
    line-height: 20px;
    font-size: 14px;
    word-break: break-word;
    background-color: #f6f6f6;
    border-radius: 3px 3px 0 0;
  }
  .signin {
    padding: 10px;
    background-color: #fff;
    line-height: 2em;
    border-radius: 0 0 3px 3px;
  }
</style>
