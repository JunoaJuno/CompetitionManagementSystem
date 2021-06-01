<template>
  <AtList class="list-person">
    <AtListItem
      class="list-content"
      title='参赛记录'
      arrow='right'
      @click="onContest"
      :iconInfo="{ size: 25, color: '#e38634', value: 'tags', }"
    />
    <AtListItem
      class="list-content"
      title='获奖记录'
      arrow='right'
      @click="onAward"
      :iconInfo="{ size: 25, color: '#FF4949', value: 'tags', }"
    />
    <AtListItem
      class="list-content"
      title='个人管理'
      arrow='right'
      @click="onPerson"
      :iconInfo="{ size: 25, color: '#25c6ee', value: 'user', }"
    />
  </AtList>
  <AtFab :onClick="onButtonClick" class="position">
    <text class='at-fab__icon at-icon at-icon-equalizer'></text>
  </AtFab>

  <AtDrawer :show="show" mask :onClose="onClose">
    <AtAccordion
      :onClick="onClick1"
      title='用户管理'
      :open="value1"
      :icon="{ value: 'tags', color: '#ee9a40' }"
    >
      <AtList :hasBorder="false">
        <AtListItem
          title='学生信息管理'
          @click="StudentClick"
        />
        <AtListItem
          title='教师信息管理'
          @click="TeacherClick"
        />
      </AtList>
    </AtAccordion>
    <AtAccordion
      :onClick="onClick2"
      title='竞赛管理'
      :open="value2"
      :icon="{ value: 'tags', color: '#7cef68' }"
    >
      <AtList :hasBorder="false">
        <AtListItem
          title='竞赛信息管理'
          @click="ContestClick"
        />
        <AtListItem
          title='主竞赛信息管理'
          @click="ContestMasterClick"
        />
        <AtListItem
          title='报名信息管理'
          @click="SignUpClick"
        />
        <AtListItem
          title='成绩管理'
          @click="AwardClick"
        />
      </AtList>
    </AtAccordion>
    <AtAccordion
      :onClick="onClick3"
      title='权限管理'
      :open="value3"
      :icon="{ value: 'tags', color: '#5ab4f1' }"
    >
      <AtList :hasBorder="false">
        <AtListItem
          title='角色管理'
          @click="RoleClick"
        />
        <AtListItem
          title='权限点管理'
          @click="AuthorityClick"
        />
      </AtList>
    </AtAccordion>
  </AtDrawer>
</template>

<script>
import { AtAccordion } from 'taro-ui-vue'
import { AtFab } from 'taro-ui-vue'
import { AtDrawer } from 'taro-ui-vue'
import { AtList, AtListItem } from 'taro-ui-vue'
import Taro from '@tarojs/taro'
export default {
  name: 'ListItem',
  components:{
    AtList,
    AtListItem,
    AtDrawer,
    AtFab,
    AtAccordion
  },

  data(){
    return{
      role:1,
      show:false,
      value1:false,
      value2:false,
      value3:false,
    }
  },
  methods:{
    onContest(){
      Taro.navigateTo({
        url:'/pages/mine/competitionRecord/competitionRecord'
      })
    },
    onAward(){
      Taro.navigateTo({
        url:'/pages/mine/personalAward/personalAward'
      })
    },
    onPerson(){
      Taro.navigateTo({
        url:'/pages/mine/personalInfo/personalInfo'
      })
    },
    onButtonClick(){
      this.show=true
    },
    onClose(){
      this.show=false
    },
    onClick1(val){
      this.value1 = val
    },
    onClick2(val){
      this.value2 = val
    },
    onClick3(val){
      this.value3 = val
    },

    StudentClick(){
      Taro.navigateTo({
        url:'/pages/mine/control/userControl/studentInfo/studentInfo'
      })
    },
    TeacherClick(){
      Taro.navigateTo({
        url:'/pages/mine/control/userControl/teacherInfo/teacherInfo'
      })
    },
    ContestClick(){
      Taro.navigateTo({
        url:'/pages/mine/control/contestControl/contestInfo/contestInfo'
      })
    },
    ContestMasterClick(){
      Taro.navigateTo({
        url:'/pages/mine/control/contestControl/contestMasterInfo/contestMasterInfo'
      })
    },
    SignUpClick(){
      Taro.navigateTo({
        url:'/pages/mine/control/contestControl/signUpInfo/signUpInfo'
      })
    },
    AwardClick(){
      Taro.navigateTo({
        url:'/pages/mine/control/contestControl/awardInfo/awardInfo'
      })
    },
    RoleClick(){
      Taro.navigateTo({
        url:'/pages/mine/control/authorityControl/roleInfo/roleInfo'
      })
    },
    AuthorityClick(){
      Taro.navigateTo({
        url:'/pages/mine/control/authorityControl/authorityInfo/authorityInfo'
      })
    }
  }
}
</script>

<style>
.list-person{
  margin:0 auto;
  width: 95%;
}
.list-control{
  margin: 0 auto;
  margin-top: 60px;
  width: 95%;
}
.list-content{
  text-align: left;
  border-color: #2c3e50;
}
.position{
  position: fixed;
  top: 800px;
  right: 50px;
}


</style>
