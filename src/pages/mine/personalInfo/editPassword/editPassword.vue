<template>
  <view>
    <AtForm>
      <AtInput
        required
        name='value'
        title='原密码'
        type='text'
        :value="value"
        :onChange="handleChange"
      />
      <AtInput
        required
        name='value'
        title='新密码'
        type='text'
        :value="value"
        :onChange="handleChange"
      />
      <AtInput
        required
        name='value'
        title='确认密码'
        type='text'
        :value="value"
        :onChange="handleChange"
      />
      <AtButton class="password-button" formType='submit' :onClick="onSubmit">确定修改</AtButton>
    </AtForm>
  </view>
</template>

<script>
import { AtInput, AtForm, AtButton} from 'taro-ui-vue'
export default {
  name: 'editPassword',
  components:{
    AtInput,
    AtForm,
    AtButton
  }
}
</script>

<style>
.phone-button{
  margin-top: 30px;
}
</style>
