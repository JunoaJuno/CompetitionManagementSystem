<template>
  <view>
    <AtForm>
      <AtInput
        :editable="editable"
        name='value'
        title='竞赛ID'
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
        title='主竞赛名称'
        type='text'
        placeholder=''
        :value="value"
        :onChange="handleChange"
      />
      <AtInput
        :editable="editable"
        name='value'
        title='报名开始'
        type='text'
        placeholder=''
        :value="value"
        :onChange="handleChange"
      />
      <AtInput
        :editable="editable"
        name='value'
        title='报名截止'
        type='text'
        placeholder=''
        :value="value"
        :onChange="handleChange"
      />
      <AtInput
      :editable="editable"
      name='value'
      title='作品截止'
      type='text'
      placeholder=''
      :value="value"
      :onChange="handleChange"
    />
      <AtInput
        :editable="editable"
        name='value'
        title='地点'
        type='text'
        placeholder=''
        :value="value"
        :onChange="handleChange"
      />
      <AtInput
        :editable="editable"
        name='value'
        title='主办方'
        type='text'
        placeholder=''
        :value="value"
        :onChange="handleChange"
      />
      <AtInput
        :editable="editable"
        name='value'
        title='承办方'
        type='text'
        placeholder=''
        :value="value"
        :onChange="handleChange"
      />
      <AtInput
        :editable="editable"
        name='value'
        title='级别'
        type='text'
        placeholder=''
        :value="value"
        :onChange="handleChange"
      />
      <AtInput
        :editable="editable"
        name='value'
        title='备注'
        type='text'
        placeholder=''
        :value="value"
        :onChange="handleChange"
      />
      <AtButton formType='submit' :onClick="onEdit">修改</AtButton>
      <AtButton formType='submit' :onClick="onSubmit">保存</AtButton>
      <AtButton formType='reset' :onClick="onReset">删除</AtButton>
    </AtForm>
  </view>

</template>

<script>
import { AtForm, AtInput, AtButton } from 'taro-ui-vue'
export default {
  name: 'contestEdit',
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
