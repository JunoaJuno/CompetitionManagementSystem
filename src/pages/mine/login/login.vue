<template>
  <AtAvatar class="header-note" circle="true" size="large" :image='avatarUrl'></AtAvatar>
  <text class="header-name">{{ username }}</text>
  <button class="header-note" type="primary" open-type="getPhoneNumber"  @getphonenumber="getPhoneNumber">微信登录</button>
</template>

<script>
import Taro from '@tarojs/taro'
import { AtAvatar } from 'taro-ui-vue'
import {useStore} from 'vuex'
import {computed} from 'vue'
import config from '../../../config'

export default {
  name: 'login',
  setup() {
    const store = useStore()
    return{
      store
    }
  },
  data() {
    return {
      avatarUrl: '',
      username: '',
      preToken: ''
    }
  },
  components: {
    AtAvatar
  },
  onShow() {
    const userInfo = computed(() => this.$store.getters.getUserInfo)
    this.avatarUrl = userInfo.value.avatarUrl
    this.username = userInfo.value.nickName
    this.preToken = computed(() => this.$store.getters.getPreToken)
  },
  methods: {
    async getPhoneNumber(e) {
      const response = await Taro.request({
        url: config.backendUrl+ '/api/v1/user/login',
        header: {
          Authorization: this.preToken
        },
        method: 'POST',
        data: {
          encryptedData: e.detail.encryptedData,
          iv: e.detail.iv
        }
      })
      if (response.statusCode === 200 && response.data.message === 'ok') {
        await this.$store.dispatch('changeAuthToken', response.header.Authorization)
        await Taro.reLaunch({
          url: '/pages/index/index'
        })
      }
    }
  }
}
</script>

<style>
.header-note{
  margin: 80px auto 0;
}
.header-name{
  margin-top: 30px;
  font-size: 50px;
}
</style>
