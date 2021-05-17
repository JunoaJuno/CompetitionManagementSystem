<template>
  <view class='at-row at-row__align--start'>
    <view class='at-col at-col-9 name-line'>
      <text class="name">
        Juno
      </text>
    </view>
    <view class='at-col at-col-3 icon'>
      <AtAvatar class="icon-img" size="large" image='https://www.gkirito.com/images/me/avatar.png'></AtAvatar>
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
.icon-img{
  box-shadow: 0 4px 30px 0 rgba(4, 59, 85, 0.1);
}
.icon{
  height: 60px;
  margin: 7% auto 0;
}
.name{
  font-size: 12px;
}
.name-line{
  text-align: left;
}

</style>
