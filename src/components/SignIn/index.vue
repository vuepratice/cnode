<template>
  <div class="container">
    <div class="header">
      <router-link class="tohome" :to="{path:'/'}">主页</router-link>
      <span>/&emsp;登录</span>
    </div>
    <div class="signin">
      <span class="uesr-name">用户名:</span>
      <input type="text" class="user-login" v-model="loginname"><br>
      <span>:{{loginname}}</span><br>
      <button class="login-btn" @click="signIn()">登录</button>
      <span>{{xxx}}</span>
      <!-- <a href="">忘记密码了?</a> -->
    </div>
  </div>
</template>

<script>
import { postAccessToken } from '@/api'

export default {
  data () {
    return {
      loginname: '',
      user: '',
      cat: ''
    }
  },
  computed: {
    // 测试读取vuex的state.userAccesstoken状态
    xxx () {
      return this.$store.state.userAccesstoken.loginname
    },
    // 若是成功返回首页
    gohome () {
      return ''
    }
  },
  methods: {
    signIn () {
      // 验证用户的accesstoken来获取用户详情，然后把该值存储在Local Storage
      postAccessToken({ accesstoken: this.loginname }).then((ren) => {
        this.user = ren.data
        this.$store.commit('userInfor', ren.data) // commit改变state.userAccesstoken
        localStorage.setItem('accesstoken', this.loginname) // 把accesstoken保存在浏览器localStorage
        localStorage.setItem('accesstokenReturn', JSON.stringify(ren.data)) // 把验证后的返回值保存在浏览器localStorage
        console.log('用户验证后返回数据：', this.user)
        this.cat = JSON.parse(localStorage.getItem('accesstokenReturn'))
        console.log('保存在localstorage的数据：', this.cat)
      })
      // 路由跳转
      this.$router.push({path: '/'})
    }
  }
}
</script>

<style lang="scss" scoped>
  .header {
    padding: 10px;
    text-align: left;
    line-height: 20px;
    font-size: 14px;
    word-break: break-word;
    background-color: #f6f6f6;
    border-radius: 3px 3px 0 0;
    .tohome {
      color: #80bd01;
      font-size: 14px;
      &:hover {
        text-decoration: underline;
      }
    }
    span {
      color: #999;
      font-size: 14px;
    }
  }
  .signin {
    padding: 10px;
    background-color: #fff;
    line-height: 2em;
    border-radius: 0 0 3px 3px;
    .uesr-name{
      font-size: 16px;
    }
    .user-login {
      width: 230px;
      height: 20px;
      padding: 3px 5px 3px 12px;
      margin: 30px 0 10px 5px;
      border-style: solid;
      border-radius: 15px;
      border-color: #888;
      &:focus {
        outline: none;
      }
    }
    .login-btn {
      font-size: 14px;
      padding: 8px 16px;
      margin-top: 10px;
      color: #fff;
      border-radius: 3px;
      border-style: none;
      background-color: #08c;
      cursor: pointer;
      &:hover {
        background-color: #05c;
      }
    }
  }
</style>
