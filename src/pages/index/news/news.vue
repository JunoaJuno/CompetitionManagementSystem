<template>
  <web-view :src="url"></web-view>
</template>

<script>
import Taro from '@tarojs/taro'
import {decode} from 'utilscore/libs/base64'
export default {
  name: 'news',
  onShow() {
    this.url = decode(Taro.getCurrentInstance().router.params.url)
  },
  data() {
    return{
      url: ''
    }
  }
}
</script>

<style scoped>

</style>
