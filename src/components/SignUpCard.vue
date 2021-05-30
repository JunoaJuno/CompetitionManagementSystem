<template>
  <AtCard
    note=''
    extra=''
    title='第三届浙江省信息安全竞赛'
    thumb=''
    class='card-space'
  >
    <view class='at-row'>
      <view class='at-col at-col-9 team-name'>队伍名称</view>
      <view class='at-col at-col-3 review-status' v-bind:style="classObject">审核中</view>
    </view>
  </AtCard>
</template>

<script>
import { AtCard } from 'taro-ui-vue'
export default {
  name: 'SignUpCard',

  methods:{
    classObject:function (){
      // switch (){
      //   case 0:
      // }
    }
  },
  components:{
    AtCard
  },
}

</script>

<style>
.team-name{
  text-align: left;
}
.card-space{
  margin-top:30px;
}

</style>
