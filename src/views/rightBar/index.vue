<template>
  <div>
    <!-- 公共 -->
    <div class="item  personal-details">
      <p class="cnode">CNode：Node.js专业中文社区</p>
      <a class= "github-sign"><span>登录</span></a>
    </div>

    <div class="item" v-if="publish()">发布话题</div>

    <div class="item" v-if="adList()">广告栏</div>
  </div>
</template>

<script>
// 右侧栏，根据不同到路由，显示不同到模块
import { oneOf } from '@/utils'
import List from './config'
export default {
  computed: {
    routeName () {
      // return当前路由的界面name
      return this.$route.name
    }
  },
  methods: {
    publish () {
      // 判断当前路由name来决定是否显示配置项目
      return oneOf(this.routeName, List.pubList)
    },
    adList () {
      return oneOf(this.routeName, List.adList)
    }
  }
}
</script>

<style lang="scss" scoped>
  .item {
    margin-bottom: 20px;
    background-color: #fff;
    text-align: left;
    padding: 10px 10px;
    font-size: 14px;
  }
  .personal-details {
    line-height: 20px;
    .cnode {
      font-size: 15px;
      margin-bottom: 10px;
      line-height: 26px;
    }
    .github-sign {
      text-decoration: none;
      &:hover {
        font-size: 14px;
      }
      span{
        display:inline-block;
        padding: 3px 20px;
        color:#fff;
        background-color: #5bc0de;
        border-radius: 3px;
        line-height: 28px;
        cursor: pointer;
      }
    }
  }
</style>
