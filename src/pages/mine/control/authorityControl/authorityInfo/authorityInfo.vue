<template>
  <search></search>
  <AtCard
    note=''
    extra=''
    title='权限名称'
    class="info-card"
  >
    权限动作
  </AtCard>
</template>

<script>
import { AtCard } from 'taro-ui-vue'
import Taro from '@tarojs/taro'
import Search from '../../../../../components/Search'
export default {
  name: 'authorityInfo.vue',
  components:{
    Search,
    AtCard
  },
  methods:{
    onEdit(){
      Taro.navigateTo({
        url:'/pages/mine/control/authorityControl/authorityInfo/authorityEdit/authorityEdit'
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
