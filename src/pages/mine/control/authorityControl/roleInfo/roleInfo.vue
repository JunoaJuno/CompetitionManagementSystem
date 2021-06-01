<template>
  <search></search>
  <AtCard
    note=''
    extra=''
    title='角色名称'
    class="info-card"
    @click="onEdit"
  >
    所属部门
  </AtCard>
</template>

<script>
import { AtCard } from 'taro-ui-vue'
import Taro from '@tarojs/taro'
import Search from '../../../../../components/Search'
export default {
  name: 'roleInfo.vue',
  components:{
    Search,
    AtCard
  },
  methods:{
    onEdit(){
      Taro.navigateTo({
        url:'/pages/mine/control/authorityControl/roleInfo/roleEdit/roleEdit'
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
