<template>
<!--  <view class='at-row at-row__align&#45;&#45;start'>-->
<!--    <view class='at-col at-col-9 name-line'>-->
<!--      <text class="name">-->
<!--        Juno-->
<!--      </text>-->
<!--    </view>-->
<!--    <view class='at-col at-col-3 icon'>-->
<!--      <AtAvatar class="icon-img" circle="true" size="large" image='https://www.gkirito.com/images/me/avatar.png'></AtAvatar>-->
<!--    </view>-->
<!--  </view>-->
  <view class="header">
    <view class="header-note">
      <AtAvatar class="icon-img" circle="true" size="large" image='https://www.gkirito.com/images/me/avatar.png'></AtAvatar>
      <text class="header-name">Juno</text>
    </view>
  </view>
</template>

<script>
import { AtAvatar } from 'taro-ui-vue'

export default {
  name: 'HeaderMine',
  components: {
    AtAvatar
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
.name-line{
  text-align: center;

}

</style>
