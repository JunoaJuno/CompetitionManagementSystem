<template>
  <search></search>
  <AddButton @click="AddInfo"></AddButton>
  <AtCard
    note='作品名称'
    extra=''
    title='队伍名称'
    class="info-card"
    @click="onEdit"
  >
    竞赛名称
  </AtCard>
</template>

<script>
import { AtCard } from 'taro-ui-vue'
import Taro from '@tarojs/taro'
import Search from '../../../../../components/Search'
import AddButton from '../../../../../components/AddButton'
export default {
  name: 'signUpInfo',
  components:{
    AddButton,
    Search,
    AtCard
  },
  methods:{
    onEdit(){
      Taro.navigateTo({
        url:'/pages/mine/control/contestControl/signUpInfo/signUpEdit/signUpEdit'
      })
    },
    AddInfo(){
      Taro.navigateTo({
        url:'/pages/mine/control/contestControl/signUpInfo/signUpEdit/signUpEdit'
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
