<template>
  <div class="user-sidebar">
    <div class="user-header">
      <span>个人信息</span>
    </div>
    <div class="user-inner">
      <div>
        <a href=""><img src="" alt="">tupian</a>
        <span class="user-name">
          <a href="">name</a>
        </span>
        <div>
          <span>积分：</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getUserDetails } from '@/api'

export default {
  name: 'User',
  data () {
    return {
      user: ''
    }
  },
  created () {
    this.user = localStorage.getItem('accesstokenReturn')
    console.log('用户名：' + this.user.loginname)
    getUserDetails({loginname: this.user.loginname}).then((ren) => {
      console.log('用户详细数据：' + ren)
    })
  },
  methods: {
  }
}
</script>

<style>

</style>
