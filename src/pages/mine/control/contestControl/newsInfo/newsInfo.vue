<template>
  <search></search>
  <AtCard
    note='日期'
    extra=''
    title='要闻标题'
    class="info-card"
    @click="onEdit"
  >
    作者/协会
  </AtCard>
</template>

<script>
import Taro from '@tarojs/taro'
import { AtCard } from 'taro-ui-vue'
import Search from '../../../../../components/Search'
export default {
  name: 'newsInfo',
  components:{
    Search,
    AtCard
  },
  methods:{
    onEdit(){
      Taro.navigateTo({
        url:'/pages/mine/control/contestControl/newsInfo/newsEdit/newsEdit'
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
