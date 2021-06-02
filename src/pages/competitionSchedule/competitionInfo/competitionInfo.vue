<template>
  <view class='at-article'>
    <view class='at-article__h1'>{{ info.name }}</view>
    <view class='at-article__info'>{{info.updateTime}}</view>
  </view>
  <view class='at-article__content'>
    <view class="competition-info">
      <view class='at-article__h3'>
        一、报名开始时间：
      </view>
      <view class='at-article__h3'>
        {{info.signupStart}}
      </view>
    </view>
    <view class="competition-info">
      <view class='at-article__h3'>
        二、报名截止时间：
      </view>
      <view class='at-article__h3'>
        {{info.signupEnd}}
      </view>
    </view>
    <view class="competition-info">
      <view class='at-article__h3'>
        三、作品提交截止时间：
      </view>
      <view class='at-article__h3'>
        {{info.worksEnd}}
      </view>
    </view>
    <view class="competition-info">
      <view class='at-article__h3'>
        四、地点：
      </view>
      <view class='at-article__h3'>
        {{info.location}}
      </view>
    </view>
    <view class="competition-info">
      <view class='at-article__h3'>
        五、主办方：
      </view>
      <view class='at-article__h3'>
        {{info.sponsor}}
      </view>
    </view>
    <view class="competition-info">
      <view class='at-article__h3'>
        六、承办方：
      </view>
      <view class='at-article__h3'>
        {{info.undertaker}}
      </view>
    </view>
    <view class="competition-info">
      <view class='at-article__h3'>
        七、竞赛状态：
      </view>
      <view class='at-article__h3'>
        {{info.state}}
      </view>
    </view>
    <view class="competition-info">
      <view class='at-article__h3'>
        八、备注：
      </view>
      <view class='at-article__h3'>
        {{info.description}}
      </view>
    </view>
  </view>
  <AtButton type='secondary' size='small' @click="click">报名</AtButton>
<!--  <SignUpButton/>-->
</template>

<script>
import { AtButton } from 'taro-ui-vue'
import SignUpButton from '../../../components/SignUpButton'
import Taro from '@tarojs/taro'
import config from '../../../config'
export default {
  name: 'competitionInfo',
  components: {AtButton},
  async onShow() {
    const id = Taro.getCurrentInstance().router.params.id
    const response = await Taro.request({
      url: config.backendUrl+ '/api/v1/manage/competition/slave/getBySlave/'+ id,
      method: 'GET'
    })
    if (response.statusCode === 200 && response.data.message==='ok') {
      this.info = response.data.data
    }
  },
  methods:{
    click(){
      Taro.navigateTo({
        url:'/pages/myContest/signUpContest/signUpContest?id='+this.info.id
      })
    }
  },
  data(){
    return{
      info: {},
      // competitionName:'第十一届全国服务外包大赛院赛',
      // time:'2017-05-07',
      // signUpTime:'2017-05-08 12:00',
      // signUpEndTime:'2017-05-18 12:00',
      // workEndTime:'2017-05-18 12:00',
      // competitionLocation:'杭州电子科技大学信息工程学院B303',
      // sponsor:'杭州电子科技大学信息工程学院',
      // undertaker:'杭州电子科技大学信息工程学院',
      // competitionState:'报名阶段',
      // notes:'不允许相互交流'
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
