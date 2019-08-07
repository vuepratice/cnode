<template>
    <div class = "topic-navbar">
      <a class = "current-tab">全部</a>
      <a>精华</a>
      <a>分享</a>
      <a>问答</a>
      <a>招聘</a>
      <a>客户端测试</a>
    </div>
</template>

<script>
export default {
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
        a{
            font-size: 14px;
            margin:0 10px;
            color: #80bd01;
            cursor: pointer;
            line-height: 20px;
        }
        .current-tab {
            background-color: #80bd01;
            color: #fff;
            padding: 3px 4px;
            border-radius: 3px;
        }
    }
</style>
