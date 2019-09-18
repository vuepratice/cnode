<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  // 先去读取localStorage的用户数据数据，也可以防止刷新网页后，store里面的数据清空而丢失用户数据
  created () {
    this.$store.commit('userInfor', JSON.parse(localStorage.getItem('accesstokenReturn')))
  }
}
</script>

<style>
#app {
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
