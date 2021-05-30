<template>
  <view class="main">
    <HeaderMine/>
    <DividerLine></DividerLine>
    <TabBar/>
  </view>
</template>

<script>
import TabBar from '../../components/TabBar'
import HeaderMine from '../../components/HeaderMine'
import DividerLine from '../../components/DividerLine'
export default {
  name: 'Mine',
  components: {
    DividerLine,
    TabBar,
    HeaderMine,
  }
}
</script>

<style>

</style>
