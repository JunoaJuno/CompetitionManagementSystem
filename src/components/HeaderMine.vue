<template>
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
</template>

<script>
import { AtAvatar } from 'taro-ui-vue'
import {useStore} from 'vuex'
import {computed} from 'vue'
import Taro from '@tarojs/taro'
import config from '../config'
import { AtToast } from 'taro-ui-vue'

export default {
  name: 'HeaderMine',
  setup() {
    const store = useStore()
    return {
      store,
    }
  },
  onShow() {
    // const userInfo = computed(() => this.$store.getters.getUserInfo)
    // const authToken = computed(() => this.$store.getters.getAuthToken)
    // if (userInfo.value && authToken) {
    //   this.isLogin = true
    //   this.username = userInfo.value.nickName
    //   this.userIcon = userInfo.value.avatarUrl
    // }
  },
  data() {
    return {
      isLogin: this.isLogin1,
      username: this.username1,
      userIcon: this.userIcon1,
      isOpened: false,
      text: '',
      icon: '',
    }
  },
  props:{
    isLogin1:{
      type: Boolean
    },
    username1: {
      type: String
    },
    userIcon1: {
      type: String
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
    AtAvatar,
  }
}
</script>

<style>
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
