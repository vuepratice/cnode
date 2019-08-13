<template>
    <div class = "topic-navbar">
      <span
      class="current-tab"
      v-for="item in navbarTab"
      :key="item.index"
      :class="{activebarTab: item.isActive}"
      @click="changeBar(item)"
      >
      {{item.name}}</span>
    </div>
</template>

<script>
export default {
  data () {
    return {
      navbarTab: [
        {name: '全部', isActive: 'true'},
        {name: '精华', isActive: 'false'},
        {name: '分享', isActive: 'false'},
        {name: '问答', isActive: 'false'},
        {name: '招聘', isActive: 'false'},
        {name: '客户端测试', isActive: 'false'}
      ]
    }
  },
  methods: {
    change (x) {
      // 首先清除其他navbarTab高亮CSS
      for (let i = 0; i < this.navbarTab.length; i++) {
        this.navbarTab[i].isActive = false
      }
      x.isActive = true
    }
  }
}
</script>

<style lang = "scss" scoped>
    .topic-navbar{
        height: 20px;
        padding: 10px;
        color: green;
        font-size: 14px;
        text-align: left;
        background: #f6f6f6;
        .current-tab {
            font-size: 14px;
            margin:0 10px;
            color: #80bd01;
            cursor: pointer;
            line-height: 20px;
            text-align: center;
        }
        .activebarTab {
            background-color: #80bd01;
            color: #fff;
            padding: 3px 4px;
            border-radius: 3px;
        }
    }
</style>
