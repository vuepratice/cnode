<template>
    <div class = "topic-navbar">
      <span
      class="current-tab"
      v-for="item in navbarTab"
      :key="item.name"
      :class="{'activebar-tab': item.isActive}"
      @click="changeBar(item)"
      >
        {{item.name}}
      </span>
    </div>
</template>

<script>
export default {
  data () {
    return {
      navbarTab: [
        {name: '全部', isActive: true, tab: ''},
        {name: '精华', isActive: false, tab: 'good'},
        {name: '分享', isActive: false, tab: 'share'},
        {name: '问答', isActive: false, tab: 'ask'},
        {name: '招聘', isActive: false, tab: 'job'},
        {name: '客户端测试', isActive: false, tab: 'test'}
      ]
    }
  },
  methods: {
    changeBar (item) {
      // 首先清除其他navbarTab高亮CSS
      this.navbarTab.map((item) => {
        item.isActive = false
      })
      item.isActive = true
      // 自定义事件传递tab给父组件来获取相应tab数据
      this.$emit('clickTab', item.tab)
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
            &:hover {color: #005580}
        }
        .activebar-tab {
            background-color: #80bd01;
            color: #fff;
            padding: 3px 4px;
            border-radius: 3px;
            &:hover {color: #fff}
        }
    }
</style>
