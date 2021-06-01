<template>
  <AtList class="base-info">
    <AtListItem title='基本信息' />
    <AtListItem
      title='姓名'
      extraText='王逸君'
      arrow='right'
      :iconInfo="{ size: 25, color: '#78A4FA', value: 'user', }"
    />
    <AtListItem
      title='学号'
      extraText='详细信息'
      arrow='right'
      :iconInfo="{ size: 25, color: '#78A4FA', value: 'star', }"
    />
    <AtListItem
      title='班级号'
      extraText='详细信息'
      arrow='right'
      :iconInfo="{ size: 25, color: '#78A4FA', value: 'tag', }"
    />
    <AtListItem
      title='院系'
      extraText='详细信息'
      arrow='right'
      :iconInfo="{ size: 25, color: '#78A4FA', value: 'tag', }"
    />
    <AtListItem
      title='专业'
      extraText='详细信息'
      arrow='right'
      :iconInfo="{ size: 25, color: '#78A4FA', value: 'tag', }"
    />
    <AtListItem
      title='手机号'
      extraText='13073635561'
      arrow='right'
      :iconInfo="{ size: 25, color: '#78A4FA', value: 'phone', }"
      @click="onPhone"
    />
  </AtList>
  <AtList>
    <AtListItem title='账户管理' />
    <AtListItem
      title='修改密码'
      arrow='right'
      :iconInfo="{ size: 25, color: '#78A4FA', value: 'edit', }"
      @click="onPassword"
    />
  </AtList>

</template>

<script>
import { AtList, AtListItem } from 'taro-ui-vue'
import Taro from '@tarojs/taro'
export default {
  name: 'personalInfo.vue',
  components:{
    AtList,
    AtListItem
  },
  methods:{
    onPhone(){
      Taro.navigateTo({
        url:'/pages/mine/personalInfo/editPhoneNumber/editPhoneNumber'
      })
    },
    onPassword(){
      Taro.navigateTo({
        url:'/pages/mine/personalInfo/editPassword/editPassword'
      })
    }
  }
}
</script>

<style scoped>

</style>
