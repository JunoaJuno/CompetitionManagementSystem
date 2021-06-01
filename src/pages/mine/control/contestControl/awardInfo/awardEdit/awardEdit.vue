<template>
  <view>
    <AtForm>
      <AtInput
        :editable="editable"
        name='value'
        title='成绩ID'
        type='text'
        placeholder=''
        :value="value"
        :onChange="handleChange"
      />
      <AtInput
        :editable="editable"
        name='value'
        title='队伍/个人'
        type='text'
        placeholder=''
        :value="value"
        :onChange="handleChange"
      />
      <AtInput
        :editable="editable"
        name='value'
        title='竞赛名称'
        type='text'
        placeholder=''
        :value="value"
        :onChange="handleChange"
      />
      <AtInput
        :editable="editable"
        name='value'
        title='获奖等级'
        type='text'
        placeholder=''
        :value="value"
        :onChange="handleChange"
      />
      <AtInput
        :editable="editable"
        name='value'
        title='日期'
        type='text'
        placeholder=''
        :value="value"
        :onChange="handleChange"
      />
      <AtButton :onClick="onEdit">修改</AtButton>
      <AtButton formType='submit' :onClick="onSubmit">保存</AtButton>
      <AtButton formType='reset' :onClick="onReset">删除</AtButton>
    </AtForm>
  </view>

</template>

<script>
import { AtForm, AtInput, AtButton } from 'taro-ui-vue'
export default {
  name: 'awardEdit',
  components: {
    AtForm,
    AtInput,
    AtButton
  },
  data(){
    return{
      editable:false
    }
  },
  methods: {
    handleChange (value = 'value') {
      this.value = value
    },
    onSubmit (event) {
      console.log(this.value)
    },
    onReset (event) {
      this.value = ''
    },
    onEdit(){
      this.editable=true
    }
  },
}
</script>

<style scoped>

</style>
