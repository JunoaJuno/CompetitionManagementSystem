<template>
  <search></search>
  <AtCard
    note=''
    extra='举办年份'
    title='主竞赛名称'
    class="info-card"
    @click="onEdit"
  >
    竞赛种类
  </AtCard>
</template>

<script>
import { AtCard } from 'taro-ui-vue'
import Taro from '@tarojs/taro'
import Search from '../../../../../components/Search'
export default {
  name: 'contestMasterInfo',
  components:{
    Search,
    AtCard
  },
  methods:{
    onEdit(){
      Taro.navigateTo({
        url:'/pages/mine/control/contestControl/contestMasterInfo/contestMasterEdit/contestMasterEdit'
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
