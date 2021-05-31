<template>
  <view class="border"  @tap="click">
    <view class='at-row'>
      <view class='at-col at-col-1'>
        <AtAvatar class='atAvatar' size='small' circle='true' image='https://www.gkirito.com/images/me/avatar.png'></AtAvatar>
      </view>
      <view class='at-col at-col-2'>
        <text>
          {{articleInfo.author}}
        </text>
      </view>
      <view class="at-col at-col-9"></view>
    </view>
    <view class='at-row'>
      <view class='at-col at-col-12'>{{articleInfo.title}}</view>
    </view>
    <view class='at-row introduction-size'>
      <view class="at-col at-col-9 at-col--wrap">
        <text class="intro">
          {{articleInfo.digest}}
        </text>
      </view>
      <view class='at-col at-col-3'>
        <image class="introduction-img" :src='articleInfo.thumbUrl' alt=""></image>
      </view>
    </view>
  </view>
</template>

<script>
import { AtAvatar } from 'taro-ui-vue'
import Taro from '@tarojs/taro'
import {encode}from 'utilscore/libs/base64'
export default {
  name: 'Card',
  components: {
    AtAvatar
  },
  props: {
    article: {
      type: Object,
      required: true,
    }
  },
  data(){
    return {
      articleInfo: this.article
    }
  },
  methods:{
    click(){
      Taro.navigateTo({
        url: '/pages/index/news/news?url='+ encode(this.articleInfo.url),
      })
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
