<template>
  <div id="app">
    <Main/>
    <router-view/>
  </div>
</template>
<script>
import Main from './views/main.vue'
export default {
  components: {
    Main
  }
}
</script>
<style lang="less">

*{
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  box-sizing: border-box;
  }
html{
  width: 100%;
  height: 100%;
}
body {
  width: 100%;
  height: 100%;
  font-family: "Helvetica Neue", Helvetica, Arial, Tahoma, "Microsoft Yahei","PingFang SC", "Hiragino Sans GB", "WenQuanYi Micro Hei", sans-serif;
  }
#app{
  width: 100%;
  height: 100%;
}
</style>
