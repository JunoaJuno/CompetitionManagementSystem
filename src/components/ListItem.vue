<template>
  <AtList class="list-style">
    <AtListItem class="list-content" title='参赛记录' :onClick="handleClick" arrow='right'/>
    <AtListItem class="list-content" title='获奖记录' :onClick="handleClick" arrow='right'/>
    <AtListItem class="list-content" title='个人管理' :onClick="handleClick" arrow='right'/>
  </AtList>
</template>

<script>
import { AtList, AtListItem } from 'taro-ui-vue'
export default {
  name: 'ListItem',
  components:{
    AtList,
    AtListItem
  }
}
</script>

<style>
.list-style{
  margin:0 auto;
  width: 95%;
}
.list-content{
  text-align: left;
}

</style>
