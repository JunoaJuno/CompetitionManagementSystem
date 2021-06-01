<template>
  <view class='at-article'>
    <view class='at-article__h1'>{{ competitionName }}</view>
    <view class='at-article__info'>{{time}}</view>
  </view>
  <view class='at-article__content'>
    <view class="competition-info">
      <view class='at-article__h3'>
        一、报名开始时间：
      </view>
      <view class='at-article__h3'>
        {{signUpTime}}
      </view>
    </view>
    <view class="competition-info">
      <view class='at-article__h3'>
        二、报名截止时间：
      </view>
      <view class='at-article__h3'>
        {{signUpEndTime}}
      </view>
    </view>
    <view class="competition-info">
      <view class='at-article__h3'>
        三、作品提交截止时间：
      </view>
      <view class='at-article__h3'>
        {{workEndTime}}
      </view>
    </view>
    <view class="competition-info">
      <view class='at-article__h3'>
        四、地点：
      </view>
      <view class='at-article__h3'>
        {{competitionLocation}}
      </view>
    </view>
    <view class="competition-info">
      <view class='at-article__h3'>
        五、主办方：
      </view>
      <view class='at-article__h3'>
        {{sponsor}}
      </view>
    </view>
    <view class="competition-info">
      <view class='at-article__h3'>
        六、承办方：
      </view>
      <view class='at-article__h3'>
        {{undertaker}}
      </view>
    </view>
    <view class="competition-info">
      <view class='at-article__h3'>
        七、竞赛状态：
      </view>
      <view class='at-article__h3'>
        {{competitionState}}
      </view>
    </view>
    <view class="competition-info">
      <view class='at-article__h3'>
        八、备注：
      </view>
      <view class='at-article__h3'>
        {{notes}}
      </view>
    </view>
  </view>
  <SignUpButton></SignUpButton>
</template>

<script>
import { AtButton } from 'taro-ui-vue'
import SignUpButton from '../../../components/SignUpButton'
export default {
  name: 'competitionInfo',
  components: {SignUpButton},
  data(){
    return{
      competitionName:'第十一届全国服务外包大赛院赛',
      time:'2017-05-07',
      signUpTime:'2017-05-08 12:00',
      signUpEndTime:'2017-05-18 12:00',
      workEndTime:'2017-05-18 12:00',
      competitionLocation:'杭州电子科技大学信息工程学院B303',
      sponsor:'杭州电子科技大学信息工程学院',
      undertaker:'杭州电子科技大学信息工程学院',
      competitionState:'报名阶段',
      notes:'不允许相互交流'
    }
  }
}
</script>

<style>
.competition-info{
  margin-top: 20px;
  margin-bottom: 30px;
}

</style>
