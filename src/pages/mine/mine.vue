<template>
  <view class="main">
    <view class="change-role">
      <ChangeRole></ChangeRole>
    </view>
    <view class="header">
      <view class="header-note">
        <view v-if="isLogin">
          <AtAvatar class="icon-img" circle="true" size="large" :image='userIcon'></AtAvatar>
          <text class="header-name">{{ username }}</text>
        </view>
        <view v-else @tap="login">
          <AtAvatar class="icon-img" circle="true" size="large" image=''></AtAvatar>
          <text class="header-button">登录/注册</text>
          <AtToast :isOpened="isOpened" :text="text" :icon="icon" status="error" onClose="close"></AtToast>
        </view>
      </view>
    </view>
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
import Taro from '@tarojs/taro'
import config from '../../config'
import { AtToast } from 'taro-ui-vue'
import { AtAvatar } from 'taro-ui-vue'
import {useStore} from 'vuex'
import {computed} from 'vue'

export default {
  name: 'Mine',
  setup() {
    const store = useStore()
    return {
      store,
    }
  },
  onShow() {
    const userInfo = computed(() => this.$store.getters.getUserInfo)
    const authToken = computed(() => this.$store.getters.getAuthToken)
    if (authToken.value !== '') {
      this.isLogin = true
      this.username = userInfo.value.nickName
      this.userIcon = userInfo.value.avatarUrl
    }
  },
  data() {
    return {
      isLogin: false,
      username: '',
      userIcon: '',
      isOpened: false,
      text: '',
      icon: '',
    }
  },
  methods: {
    close() {
      this.isOpened = false
    },
    async  login() {
      const userInfo = await Taro.getUserProfile({
        desc: '用于完善会员资料',
      })
      const loginData = await Taro.login()
      const response = await Taro.request({
        url: config.backendUrl + '/api/v1/user/preLogin/'+ loginData.code,
        method: 'POST',
        data: {
          avatarUrl: userInfo.userInfo.avatarUrl,
          city: userInfo.userInfo.city,
          country: userInfo.userInfo.country,
          gender: userInfo.userInfo.gender,
          language: userInfo.userInfo.language,
          nickName: userInfo.userInfo.nickName,
          province: userInfo.userInfo.province
        }
      })
      if (response.statusCode === 200 && response.data.message === 'ok') {
        await this.$store.dispatch('changePreToken', response.header.Authorization)
        await this.$store.dispatch('changeUserInfo', userInfo.userInfo)
        await Taro.navigateTo({
          url: '/pages/mine/login/login'
        })
      }else {
        this.text = '获取数据失败！'
        this.icon = 'close'
        this.isOpened = true
      }

    }
  },
  components: {
    // ChangeRole,
    ListItem,
    DividerLine,
    TabBar,
    AtAvatar
  }
}
</script>

<style>
.change-role{
  width: 100%;
  text-align: right;
}
.header{
  height: 200px;
}
.icon-img{
  box-shadow: 0 4px 30px 0 rgba(4, 59, 85, 0.1);
  margin: auto;
}
.header-note{
  margin:0 auto;
  margin-top: 80px;
}

.header-name{
  margin-top: 30px;
  font-size: 50px;
}
.header-button{
  margin-top: 30px;
}
.name-line{
  text-align: center;

}
</style>
