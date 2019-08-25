<template>
  <div class="loading"></div>
</template>

<script>
export default {
  name: 'Loading'
}
</script>

<style lang="scss" scoped>
  .loading {
    // position: fixed;
    // left: 0;
    // top: 0;
    background: url('~@/assets/loading.svg') center top no-repeat #fff;
    // width: 100vw;
    // height: 100vh;
    z-index: 1000;
    opacity: 0.7;
  }
</style>
