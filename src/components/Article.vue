<template>
  <web-view :src="url"></web-view>
</template>

<script>
import { AtIcon } from 'taro-ui-vue'
export default {
  name: 'Article',
  data(){
    return{
      url:'https://mp.weixin.qq.com/s?__biz=Mzg3ODYzMjYyNA==&mid=100000004&idx=1&sn=ee093149896cce5fcbbc64ffaef4355f&chksm=4f118adb786603cd5d65b1d0af8b5f7eb68e3205af64a8db98a2036c93e90bb740100c1bc5a6#rd'
    }
  }
}
</script>

<style scoped>

</style>
