<template>
  <view>
<!--    <AtButton type='primary' size='normal'>按钮文案</AtButton>-->
    <AtButton type='secondary' size='small' @click="click">报名</AtButton>
  </view>
</template>

<script>
import { AtButton } from 'taro-ui-vue'
import Taro from '@tarojs/taro'
export default {
  name: 'SignUpButton',
  components:{
    AtButton
  },
  methods:{
    click(){
      Taro.navigateTo({
        url:'/pages/myContest/signUpContest/signUpContest'
      })
    }
  }
}
</script>

<style>

</style>
