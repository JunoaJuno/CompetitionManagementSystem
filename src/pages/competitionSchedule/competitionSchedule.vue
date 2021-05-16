<template>
  <view class="main">
    <Schedule/>
    <TabBar/>
  </view>
</template>

<script>
import TabBar from '../../components/TabBar'
import Schedule from '../../components/Schedule'
export default {
  name: 'CompetitionSchedule',
  components: {
    TabBar,
    Schedule
  },

}
</script>

<style scoped>

</style>
