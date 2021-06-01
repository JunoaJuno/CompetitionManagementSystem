<template>
  <Search></Search>
  <AtCard
    note=''
    extra='17905302'
    title='王逸君'
    class="info-card"
    @click="onEdit"
  >
    计算机科学与技术
  </AtCard>
  <AtCard
    note=''
    extra='17905403'
    title='谢露露'
    class="info-card"
  >
    计算机科学与技术
  </AtCard>
  <AtCard
    note=''
    extra='16905113'
    title='顾小邱'
    class="info-card"
  >
    计算机科学与技术
  </AtCard>
</template>

<script>
import { AtCard } from 'taro-ui-vue'
import Taro from '@tarojs/taro'
import Search from '../../../../../components/Search'
export default {
  name: 'studentInfo',
  components:{
    Search,
    AtCard
  },
  methods:{
    onEdit(){
      Taro.navigateTo({
        url:'/pages/mine/control/userControl/studentInfo/studentInfoEdit/studentInfoEdit'
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
