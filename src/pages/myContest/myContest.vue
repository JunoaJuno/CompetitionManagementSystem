<template>
  <view class="main">
      <view class='at-row'>
        <view class='at-col at-col-9 sign-up-note'><text>竞赛报名记录：</text></view>
        <view class='at-col at-col-2'>
          <SignUpButton></SignUpButton>
        </view>
    </view>
    <SignUpCard @click='viewDetails'></SignUpCard>
    <TabBar/>
  </view>
</template>

<script>
import TabBar from '../../components/TabBar'
import SignUpCard from '../../components/SignUpCard'
import SignUpButton from '../../components/SignUpButton'
import Taro from '@tarojs/taro'

export default {
  name: 'MyContest',
  components: {
    SignUpCard,
    TabBar,
    SignUpButton
  },
  methods:{
    viewDetails(){
      Taro.navigateTo({
        url:'/pages/myContest/signUpRecord/signUpRecord'
      })
    }
  }
}
</script>

<style>
.sign-up-note{
  text-align: left;
  padding-left: 25px;
}
</style>
