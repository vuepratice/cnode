<template>
  <div class="container">
    <Header class="header"/>
    <div class="container-main">
      <main class="content">
        <router-view></router-view>
      </main>
      <Footer/>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default {
  components: {
    Header, Footer
  }
}
</script>

<style lang="scss" scoped>
  .container {
    position: relative;
    height: 100%;
    box-sizing: border-box;
    .header {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 50px;
    }
    .container-main {
      position: absolute;
      top: 50px;
      left: 0;
      right: 0;
      bottom: 0;
      overflow: auto;
    }
    .content {
      min-height: 600px;
    }
  }
</style>
<style lang="scss">
  @import '../styles/index.scss';
</style>
