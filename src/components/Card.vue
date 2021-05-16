<template>
  <view class="border">
  <view class='at-row'>
    <view class='at-col at-col-1'>
      <AtAvatar class='atAvatar' size='small' circle='true' image='https://www.gkirito.com/images/me/avatar.png'></AtAvatar>
    </view>
    <view class='at-col at-col-2'>
      <text>
        xxx协会
      </text>
    </view>
    <view class="at-col at-col-9"></view>
  </view>
  <view class='at-row'>
    <view class='at-col at-col-12'>标题</view>
  </view>
  <view class='at-row introduction-size'>
    <view class="at-col at-col-9">
      <text class="intro">
        文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介
        文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介
      </text>
    </view>
    <view class='at-col at-col-3'>
      <img class="introduction-img" src='https://libget.com/gkirito/blog/image/2021/image-202103052Amoqrhl%402x.png' alt="">
    </view>
  </view>
  </view>
</template>

<script>
import { AtAvatar } from 'taro-ui-vue'
export default {
  name: 'Card',
  components: {
    AtAvatar
  },
  methods: {
    click(){
      console.log('clicked!!!')
    }
  }
}
</script>

<style>
.atAvatar{
  width: 40px;
  height: 40px;
}
.introduction-size{
  height: 190px;
}
.introduction-img{
  height: 100%;
  width: 100%;
}
.border{
  border-top: 6px solid #c5c5c57d;
  padding-top: 10px;
}
.intro{
  overflow: hidden;
  display: inline-block;
  width: 100%;
  height: 100%;
  animation-name: auto;
  word-wrap: break-word;
}
</style>
