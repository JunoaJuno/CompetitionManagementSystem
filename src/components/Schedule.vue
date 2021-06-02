<template>
  <view class='example-item'>
    <AtAccordion
      title='2021-05'
      :open="value1"
      :icon="{ value: 'tags', color: '#77a1fd' }"
      :onClick="onClick1"
    >
      <AtList :hasBorder="false" v-for="item in itemList">
        <AtListItem
          :title="item.name"
          note=""
          thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
          @click="click(item.id)"
        />

<!--        <AtListItem-->
<!--          title='第十一届全国服务外包大赛院赛'-->
<!--          note=''-->
<!--          thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'-->
<!--          @click="click"-->
<!--        />-->
<!--        <AtListItem-->
<!--          title='浙江省第三届信息安全竞赛'-->
<!--          note=''-->
<!--          thumb='http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'-->
<!--          @click="click"-->
<!--        />-->
      </AtList>
    </AtAccordion>
    <AtAccordion
      title='2021-06'
      :open="value2"
      :icon="{ value: 'tags', color: '#77a1fd' }"
      :onClick="onClick2"
    >
    </AtAccordion>
    <AtAccordion
      title='2021-07'
      :open="value3"
      :icon="{ value: 'tags', color: '#77a1fd' }"
      :onClick="onClick3"
    >
    </AtAccordion>
  </view>
</template>

<script>
import { AtAccordion, AtList, AtListItem } from 'taro-ui-vue'
import config from '../config'
import Taro from '@tarojs/taro'
export default {
  name: 'Schedule',
  components: {
    AtAccordion,
    AtList,
    AtListItem
  },
  props: {
    items: {
      type: Array
    }
  },
  data() {
    return {
      value1:false,
      value2:false,
      value3: false,
      itemList: this.items
    }
  },
  methods: {
    click() {
      Taro.navigateTo({
        url:'/pages/competitionSchedule/competitionInfo/competitionInfo'
      })
    },
    onClick1(val){
      this.value1 = val
    },
    onClick2(val){
      this.value2 = val
    },
    onClick3(val){
      this.value3 = val
    }
  },
}
</script>

<style scoped>

</style>
