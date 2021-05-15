<template>
  <view class="main">
    <NumberDisplay/>
    <NumberSubmit/>
    <TabBar/>
    <text>
      首页页面
    </text>
  </view>
</template>

<script>
import NumberDisplay from '../../components/NumberDisplay.vue'
import NumberSubmit from '../../components/NumberSubmit.vue'
import TabBar from '../../components/TabBar'

export default {
  name: 'Index',
  components: {
    NumberDisplay,
    NumberSubmit,
    TabBar
  }
}
</script>

<style>
.index {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
