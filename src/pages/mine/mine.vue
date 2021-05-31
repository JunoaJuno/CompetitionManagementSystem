<template>
  <view class="main">
    <view class="change-role">
      <ChangeRole></ChangeRole>
    </view>

    <HeaderMine/>
    <DividerLine lineColor='#204, 204, 204'></DividerLine>
    <ListItem></ListItem>
    <TabBar/>
  </view>
</template>

<script>
import TabBar from '../../components/TabBar'
import HeaderMine from '../../components/HeaderMine'
import DividerLine from '../../components/DividerLine'
import ListItem from '../../components/ListItem'
import ChangeRole from '../../components/ChangeRole'
export default {
  name: 'Mine',
  components: {
    ChangeRole,
    ListItem,
    DividerLine,
    TabBar,
    HeaderMine,
  }
}
</script>

<style>
.change-role{
  width: 100%;
  text-align: right;
}
</style>
