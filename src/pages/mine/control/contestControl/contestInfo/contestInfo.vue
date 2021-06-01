<template>
  <search></search>
  <AtCard
    note='竞赛等级'
    extra='举办年份'
    title='竞赛名称'
    class="info-card"
    @click="onEdit"
  >
    主竞赛名称
  </AtCard>
  <AtCard
    note='省级'
    extra='2021'
    title='浙江省第三届大学生服务外包竞赛'
    class="info-card"
  >
    大学生服务外包竞赛
  </AtCard>
</template>

<script>
import Taro from '@tarojs/taro'
import { AtCard } from 'taro-ui-vue'
import Search from '../../../../../components/Search'
export default {
  name: 'contestInfo.vue',
  components:{
    Search,
    AtCard
  },
  methods:{
    onEdit(){
      Taro.navigateTo({
        url:'/pages/mine/control/contestControl/contestInfo/contestEdit/contestEdit'
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
