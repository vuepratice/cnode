<template>
  <div class="container">
    <div class="container-lf">
      <a href="/" class="logo">
        <img src="@/assets/cnode.svg" alt="cnode">
      </a>
      <input class="search" @keyup.enter="search" placeholder="请输入" v-model.trim="searchText" type="text">
    </div>
    <div class="container-rg">
      <router-link class="container-rg-api" :to="{path:'/'}">首页</router-link>
      <a href="/">新手入门</a>
      <router-link class="container-rg-api" :to="{path:'/API'}">API</router-link>
      <a href="/">关于</a>
      <a href="/">注册</a>
      <a href="/">登录</a>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      searchText: ''
    }
  },
  methods: {
    search () {
      // 改变store的值
      this.$store.commit('SET_SEARCHTEXT', this.searchText)
    }
  }
}
</script>

<style lang="scss" scoped>
  .container {
    display: flex;
    margin: auto;
    background-color: #444;
    z-index: 99;
    align-items: center;
    justify-content: space-between;
    .container-lf, .container-rg {
      display: flex;
      align-items: center;
    }
  }

  .logo {
    display: inline-block;
    width: 120px;
    padding: 3px 20px;
    padding-left: 0;
    height: 34px;
    line-height: 34px;
    color: #ccc;
    font-weight: 700;
  }
  .search {
    padding: 3px 5px 3px 22px;
    border-radius: 15px;
  }
  .container-rg {
    a {
      padding: 10px 15px;
    }
    .container-rg-api {
      padding: 10px 15px;
    }
  }

</style>
