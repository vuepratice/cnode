<template>
  <div class="container">
    <div class="header">
      <router-link class="tohome" :to="{path:'/'}">主页</router-link>
      <span>/  登录</span>
    </div>
    <div class="signin">
      <span>用户名</span>
      <input type="text" v-model="loginname"><br>
      <span>:{{loginname}}</span><br>
      <router-link @click="signIn()" :to="{path: gohome}">登录</router-link>
      <span>{{xxx}}</span>
      <a href="">忘记密码了?</a>
    </div>
  </div>
</template>

<script>
import { postAccessToken } from '@/api'

export default {
  data () {
    return {
      loginname: '',
      user: {}
    }
  },
  computed: {
    // 测试读取vuex的state.userAccesstoken状态
    xxx () {
      return this.$store.state.userAccesstoken.loginname
    },
    // 若是成功返回首页
    gohome () {
      return '/'
    }
  },
  methods: {
    signIn () {
      // 验证用户的accesstoken来获取用户详情，然后把该值存储在Local Storage
      postAccessToken({ accesstoken: this.loginname }).then((ren) => {
        this.user = ren.data
        this.$store.commit('userInfor', ren.data) // commit改变state.userAccesstoken
        console.log(this.user)
      })
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
  }
  .signin {
    padding: 10px;
    background-color: #fff;
    line-height: 2em;
    border-radius: 0 0 3px 3px;
  }
</style>
