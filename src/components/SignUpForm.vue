<template>
  <view>
    <AtForm id="form">
      <AtInput
        required
        :editable="editable"
        class="input-info"
        name='value'
        title='竞赛'
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
        <AtIcon value='add-circle' size='20' color='blue' @click="addMember"></AtIcon>
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
      <AtButton class="submit-but" formType='submit' :onClick="onSubmit">提交</AtButton>
      <AtButton class="submit-but" :onClick="onEdit">编辑</AtButton>
<!--      <AtButton formType='reset' :onClick="onReset">重置</AtButton>-->
    </AtForm>
  </view>
</template>

<script>
import { AtIcon } from 'taro-ui-vue'
import { AtForm, AtInput, AtButton } from 'taro-ui-vue'
export default {
  name: 'SignUpForm',
  components:{
    AtForm,
    AtInput,
    AtButton,
    AtIcon
  },
  data(){
    return{
      isPersonal:0,
      items:[],
      editable:false,
    }

  },
  methods:{
    handleChange(value='value'){
      this.value=value
    },
    onSubmit (event) {
      console.log(this.value)
    },
    onReset (event) {
      this.value = ''
    },
    addMember(){
      this.items.push('')
    },
    onEdit(){
      this.editable=true
    }
  }
}
</script>

<style>
.submit-but{
  margin-top: 50px;
  width: 80%;
  border: lightskyblue solid 1px;
  border-radius: 10px;
  background-color: rgb(97, 144, 232);
  color: white;
  font-size: 30px;
}
.input-info{
  //width: 85%;
  //float: left;
  //margin-left: 15px;
  //padding-left: 15px;

}
#form{
  padding-left: 20px;
}

</style>
