<template>
  <search></search>
  <AtCard
    note='获奖队伍名称'
    extra=''
    title='竞赛名称'
    class="info-card"
    @click="onEdit"
  >
    获奖等级
  </AtCard>

</template>

<script>
import Taro from '@tarojs/taro'
import { AtCard } from 'taro-ui-vue'
import Search from '../../../../../components/Search'
export default {
  name: 'awardInfo.vue',
  components:{
    Search,
    AtCard
  },
  methods:{
    onEdit(){
      Taro.navigateTo({
        url:'/pages/mine/control/contestControl/awardInfo/awardEdit/awardEdit'
      })
    }
  }
}
</script>

<style>
.info-card{
  margin-top: 20px;
}
</style>
