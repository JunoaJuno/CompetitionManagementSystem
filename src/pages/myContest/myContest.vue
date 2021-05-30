<template>
  <view class="main">
      <view class='at-row'>
        <view class='at-col at-col-9 sign-up-note'><text>竞赛报名记录：</text></view>
        <view class='at-col at-col-2'><SignUpButton></SignUpButton></view>
    </view>
    <SignUpCard></SignUpCard>
    <SignUpCard></SignUpCard>
    <TabBar/>
  </view>
</template>

<script>
import TabBar from '../../components/TabBar'
import SignUpCard from '../../components/SignUpCard'
import SignUpButton from '../../components/SignUpButton'

export default {
  name: 'MyContest',
  components: {
    SignUpCard,
    TabBar,
    SignUpButton
  }
}
</script>

<style>
.sign-up-note{
  text-align: left;
  padding-left: 25px;
}
</style>
