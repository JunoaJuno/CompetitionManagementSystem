<template>
  <view>
    <AtForm id="form">
      <AtInput
        required
        :editable="editable"
        class="input-info"
        name='value1'
        title='竞赛名称'
        type='text'
        placeholder=''
        :value="value1"
        :onChange="handleChange"
      />
      <AtInput
        required
        :editable="editable"
        class="input-info"
        name='value2'
        title='队伍名称'
        type='text'
        placeholder=''
        :value="value2"
        :onChange="handleChange"
      />
      <AtInput
        required
        :editable="editable"
        class="input-info"
        name='value3'
        title='队长姓名'
        type='text'
        placeholder=''
        :value="value3"
        :onChange="handleChange"
      />
      <AtInput
        required
        :editable="editable"
        class="input-info"
        name='value4'
        title='队长学号'
        type='text'
        placeholder=''
        :value="value4"
        :onChange="handleChange"
      />

      <AtInput
        required
        :editable="editable"
        class="input-info"
        name='value5'
        title='手机号'
        type='text'
        placeholder=''
        :value="value5"
        :onChange="handleChange"
      />

      <AtInput
        required
        :editable="editable"
        class="input-info"
        name='value6'
        title='指导老师'
        type='text'
        placeholder=''
        :value="value6"
        :onChange="handleChange"
      />
      <view id="team-member" v-if="isPersonal===0">
        <AtIcon value='add-circle' size='20' color='blue' @click="addMember"></AtIcon>
        <AtInput
          required
          :editable="editable"
          class='input-info'
          name='value7'
          title='队员姓名'
          type='text'
          placeholder=''
          :value="value7"
          :onChange="handleChange"
          v-for="(item,i) of items" v-model="items[i]" :key="i"
        />
      </view>

      <AtInput
        :editable="editable"
        class="input-info"
        name='value8'
        title='作品名称'
        type='text'
        placeholder=''
        :value="value8"
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
      value1:'浙江省第三届信息安全竞赛',
      value2:'拿拿爱吃鱼',
      value3:'张小明',
      value4:'17905661',
      value5:'13055616651',
      value6:'张萍萍',
      value7:'韩一',
      value8:'无'
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
