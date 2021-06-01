<template>
  <view class="main">
    <view class="change-role">
      <ChangeRole></ChangeRole>
    </view>
    <HeaderMine :isLogin1="isLogin" :username1="username" :userIcon1="userIcon"/>
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
import { AtAvatar } from 'taro-ui-vue'
import {useStore} from 'vuex'
import {computed} from 'vue'
import Taro from '@tarojs/taro'
import config from '../../config'
import { AtToast } from 'taro-ui-vue'

export default {
  name: 'Mine',
  setup() {
    const store = useStore()
    return {
      store,
    }
  },
  onShow() {
    const userInfo = computed(() => this.store.getters.getUserInfo)
    const authToken = computed(() => this.store.getters.getAuthToken)
    if (userInfo.value && authToken) {
      this.isLogin = true
      this.username = userInfo.value.nickName
      this.userIcon = userInfo.value.avatarUrl
    }
  },
  data() {
    return {
      isLogin: false,
      username: '',
      userIcon: ''
    }
  },
  methods: {
  },
  components: {
    // ChangeRole,
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
