<template>
  <div class="return-top" @click="backTop" @scroll="scroll">返回顶部</div>
</template>

<script>
export default {
  name: 'ReturnTop',
  methods: {
    backTop () {
      console.log('回到顶部')
    },
    scroll (event) {
      let g = event.target.scrollTop
      console.log(g)
    }
  },
  computed: {
    showTop () {
      let value = this.scrollTop > 200
      console.log(this.scrollTop, value)
      return value
    }
  }
}
</script>

<style>
  .return-top {
    position: fixed;
    height: 50px;
    width: 30px;
    bottom: 150px;
    right: 20px;
    cursor: pointer;
    line-height: 20px;
    border-radius: 3px;
    background-color: #867e7e;
  }
</style>
