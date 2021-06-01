<template>
  <AtDivider v-if="state===0" content="报名失败" fontColor='#ed3f14' lineColor='#ed3f14'></AtDivider>
  <AtDivider v-if="state===1" content="报名成功" fontColor='rgb(90, 228, 152)' lineColor='rgb(90, 228, 152)'></AtDivider>
  <AtDivider v-if="state===2" content="审核中" fontColor='#ff9900' lineColor='#ff9900'></AtDivider>
  <SignUpForm></SignUpForm>

</template>

<script>
import { AtDivider } from 'taro-ui-vue'
import SignUpForm from '../../../components/SignUpForm'
export default {
  name: 'signUpRecord',
  components:{
    SignUpForm,
    AtDivider,
  },
  data(){
    return{
      state:2
    }
  },
  methods:{

  }
}
</script>

<style>

</style>
