<template>
  <view>
    <AtForm>
      <AtInput
        name='value'
        title='手机号'
        type='text'
        :value="value"
        :onChange="handleChange"
      />
      <AtButton class="phone-button" formType='submit' :onClick="onSubmit">确定</AtButton>
    </AtForm>
  </view>
</template>

<script>
import { AtInput, AtForm, AtButton} from 'taro-ui-vue'
export default {
  name: 'editPhoneNumber',
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
