<template>
  <div class="container">
    <div class="header-container">
      <Header class="header"/>
    </div>
    <div class="main-container">
      <main class="content">
        <!-- 右侧栏 -->
        <router-view class="content-right" name="rightBar"></router-view>
        <!-- 主要内容区 -->
        <router-view class="content-left"></router-view>
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
    .header-container {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 50px;
      background-color: #444;
    }
    .header {
      width: 90%;
      margin: 0 auto;
    }
    .main-container {
      position: absolute;
      top: 50px;
      left: 0;
      right: 0;
      bottom: 0;
      overflow: auto;
    }
    .content {
      width: 90%;
      margin: 15px auto;
      min-height: 600px;
    }
  }

  .content-left {
    padding: 0;
    margin-right: 305px;
    background-color: #fff;
  }
  .content-right {
    width: 290px;
    float: right;
    margin-bottom: 20px;
    background-color: #fff;
  }
</style>
<style lang="scss">
  @import '../styles/index.scss';
</style>
