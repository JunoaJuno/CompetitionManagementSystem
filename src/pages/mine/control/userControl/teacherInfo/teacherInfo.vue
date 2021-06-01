<template>
  <search></search>
  <AddButton @click="AddInfo"></AddButton>
  <AtCard
    note=''
    extra='17905302'
    title='付小于'
    class="info-card"
    @click="onEdit"
  >
    副教授
  </AtCard>
  <AtCard
    note=''
    extra='17905403'
    title='顾叶恒'
    class="info-card"
  >
    讲师
  </AtCard>
  <AtCard
    note=''
    extra='16905113'
    title='红军'
    class="info-card"

  >
    讲师
  </AtCard>
</template>

<script>
import { AtCard } from 'taro-ui-vue'
import Taro from '@tarojs/taro'
import Search from '../../../../../components/Search'
import AddButton from '../../../../../components/AddButton'
export default {
  name: 'teacherInfo',
  components:{
    AddButton,
    Search,
    AtCard
  },
  methods:{
    onEdit(){
      Taro.navigateTo({
        url:'/pages/mine/control/userControl/teacherInfo/teacherInfoEdit/teacherInfoEdit'
      })
    },
    AddInfo(){
      Taro.navigateTo({
        url:'/pages/mine/control/userControl/teacherInfo/teacherInfoEdit/teacherInfoEdit'
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
