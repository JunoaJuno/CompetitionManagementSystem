<template>
  <AtCard
    note='个人'
    extra=''
    title='浙江省第六届信息与安全竞赛校选拔赛'
    class="contest-card"
  >
    2020-05-04
  </AtCard>
  <AtCard
    note='团队'
    extra=''
    title='浙江省第四届服务外包大赛'
    class="contest-card"
  >
    2020-12-01
  </AtCard>
</template>
<script>
import { AtCard } from 'taro-ui-vue'

export default {
  name: 'ContestCard',
  components:{
    AtCard
  }
}
</script>

<style>
.contest-card{
  margin-top: 30px;
  border-color: darkorange;
}
</style>
