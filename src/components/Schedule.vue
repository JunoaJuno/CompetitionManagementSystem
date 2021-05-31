<template>
  <view class='example-item'>
    <AtAccordion
      title='2021-05'
      :open="value3"
      :icon="{ value: 'tags', color: '#77a1fd' }"
      :onClick="onClick"
    >
      <AtList :hasBorder="false">
        <AtListItem
          title='第十一届全国服务外包大赛'
          note='第十一届全国服务外包大赛'
          thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
          @click="click"
        />
        <AtListItem
          title='标题文字'
          note='描述信息'
          thumb='http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'
          @click="click"
        />
      </AtList>
    </AtAccordion>
  </view>
</template>

<script>
import { AtAccordion, AtList, AtListItem } from 'taro-ui-vue'
import Taro from '@tarojs/taro'
export default {
  name: 'Schedule',
  components: {
    AtAccordion,
    AtList,
    AtListItem
  },
  data() {
    return {
      value3: true
    }
  },
  methods: {
    click() {
      Taro.navigateTo({
        url:'/pages/competitionSchedule/competitionInfo/competitionInfo'
      })
    }
  },
}
</script>

<style scoped>

</style>
