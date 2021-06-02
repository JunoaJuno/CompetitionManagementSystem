<template>
  <view class="main">
<!--    <Schedule :items="items"/>-->
    <AtAccordion
      title='2021-05'
      :open="value1"
      :icon="{ value: 'tags', color: '#77a1fd' }"
      :onClick="onClick1"
    >
    <AtList :hasBorder="false" v-for="item in items">
      <AtListItem
        :title="item.name"
        note=""
        thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
        @click="click(item.id)"
      />
    </AtList>
    </AtAccordion>
    <TabBar/>
  </view>
</template>

<script>
import TabBar from '../../components/TabBar'
import Schedule from '../../components/Schedule'
import { AtAccordion, AtList, AtListItem } from 'taro-ui-vue'
import config from '../../config'
import Taro from '@tarojs/taro'
import { AtButton } from 'taro-ui-vue'
export default {
  name: 'CompetitionSchedule',
  async onShow() {
    const response = await Taro.request({
      url: config.backendUrl+ '/api/v1/manage/competition/slave/getByMaster/1',
      method: 'GET'
    })
    if (response.statusCode ===200 && response.data.message === 'ok') {
      this.items = response.data.data
    }
  },
  data(){
    return {
      items:[],
      value1:true,
    }
  },
  methods:{
    click(id) {
      Taro.navigateTo({
        url:'/pages/competitionSchedule/competitionInfo/competitionInfo?id='+id
      })
    },
    onClick1(val){
      this.value1 = val
    },
  },
  components: {
    TabBar,
    AtList,
    AtListItem,
    AtAccordion,
    AtButton
  },

}
</script>

<style scoped>

</style>
