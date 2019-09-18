<template>
  <div class="return-top" v-show="isShow" @click="backTop">返回顶部</div>
</template>

<script>
export default {
  name: 'ReturnTop',
  data () {
    return {
      toTopEle: '',
      isShow: false,
      height: 500
    }
  },
  // 挂载后获取获取区域的元素
  mounted () {
    // 获取活动区域元素的ID，要在元素挂载(mounted)后去获取，即页面渲染后才能获取元素
    // this.toTopEle = document.getElementById('mainContainer') // 方法1获取
    this.toTopEle = document.body.querySelector('#mainContainer') // 方法2获取
    // console.log(this.toTopEle)
    // 滚屏显示返回顶部元素
    this.toTopEle.addEventListener('scroll', this.getScroll)
  },
  methods: {
    backTop () {
      console.log('返回顶部')
      this.toTopEle.scrollTop = 0
      // this.$emit('returnTop') // 向父组件传递事件
    },
    getScroll () {
      if (this.toTopEle.scrollTop > this.height) {
        this.isShow = true
      } else {
        this.isShow = false
      }
    }
  },
  // 元素销毁时移除由mounted的方法
  destroyed () {
    this.toTopEle.removeEventListener('scroll', this.getScroll)
  }
}
</script>

<style>
  .return-top {
    position: fixed;
    height: 50px;
    width: 30px;
    bottom: 150px;
    right: 50px;
    cursor: pointer;
    line-height: 22px;
    border-radius: 3px;
    background-color: #867e7e;
    z-index: 99;
  }
</style>
