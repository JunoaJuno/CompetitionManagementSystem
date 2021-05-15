<template>
  <view>
    <AtTabBar
      fixed
      :tabList="tableList"
      :onClick="onClick"
      :current="current"
    />
  </view>
</template>

<script>
import { AtTabBar } from 'taro-ui-vue'
import Taro from '@tarojs/taro'
import {useStore} from 'vuex'
import {computed, ref} from 'vue'

export default {
  setup(){
    const store = useStore()
    let current = computed(() => store.getters.getCurrent)
    return {
      store,
      current
    }
  },
  data() {
    return {
      tableList: [
        { title: '首页',
          iconType: 'home', text: 'new' },
        { title: '竞赛日程', iconType: 'calendar', text: '5', max: 10 },
        { title: '我的竞赛', iconType: 'list', text: '3', max: 10 },
        { title: '我的', iconType: 'user' }
      ],
    }
  },
  methods: {
    onClick(value) {
      this.store.dispatch('changeCurrent', Number(value))
      switch (this.current) {
      case 0:
        Taro.switchTab({
          url: '/pages/index/index'
        })
        break
      case 1:
        Taro.switchTab({
          url: '/pages/competitionSchedule/competitionSchedule'
        })
        break
      case 2:
        Taro.switchTab({
          url: '/pages/myContest/myContest'
        })
        break
      case 3:
        Taro.switchTab({
          url: '/pages/mine/mine'
        })
        break
      }
    }
  },
  components: {
    AtTabBar
  }
}
</script>

<style>

</style>
