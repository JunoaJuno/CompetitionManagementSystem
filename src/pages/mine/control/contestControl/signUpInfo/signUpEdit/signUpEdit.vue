<template>
  <view>
    <AtForm id="form">
      <AtInput
        required
        :editable="editable"
        class="input-info"
        name='value'
        title='竞赛名称'
        type='text'
        placeholder=''
        :value="value"
        :onChange="handleChange"
      />
      <AtInput
        required
        :editable="editable"
        class="input-info"
        name='value'
        title='队伍名称'
        type='text'
        placeholder=''
        :value="value"
        :onChange="handleChange"
      />
      <AtInput
        required
        :editable="editable"
        class="input-info"
        name='value'
        title='队长姓名'
        type='text'
        placeholder=''
        :value="value"
        :onChange="handleChange"
      />
      <AtInput
        required
        :editable="editable"
        class="input-info"
        name='value'
        title='队长学号'
        type='text'
        placeholder=''
        :value="value"
        :onChange="handleChange"
      />

      <AtInput
        required
        :editable="editable"
        class="input-info"
        name='value'
        title='手机号'
        type='text'
        placeholder=''
        :value="value"
        :onChange="handleChange"
      />

      <AtInput
        required
        :editable="editable"
        class="input-info"
        name='value'
        title='指导老师'
        type='text'
        placeholder=''
        :value="value"
        :onChange="handleChange"
      />
      <view id="team-member" v-if="isPersonal===0">
        <AtInput
          required
          :editable="editable"
          class='input-info'
          name='value'
          title='队员姓名'
          type='text'
          placeholder=''
          :value="value"
          :onChange="handleChange"
          v-for="(item,i) of items" v-model="items[i]" :key="i"
        />
      </view>

      <AtInput
        :editable="editable"
        class="input-info"
        name='value'
        title='作品名称'
        type='text'
        placeholder=''
        :value="value"
        :onChange="handleChange"
      />
      <AtButton class="submit-but" formType='submit' :onClick="onSubmit">通过</AtButton>
      <AtButton class="submit-but" :onClick="onEdit">不通过</AtButton>
    </AtForm>
  </view>

</template>

<script>
import { AtForm, AtInput, AtButton } from 'taro-ui-vue'
export default {
  name: 'contestMasterEdit',
  components: {
    AtForm,
    AtInput,
    AtButton
  },
  data(){
    return{
      editable:false,
      isPersonal:0,
      items:[],
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
