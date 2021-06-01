export default {
  pages: [
    'pages/index/index',
    'pages/competitionSchedule/competitionSchedule',
    'pages/mine/mine',
    'pages/myContest/myContest',
    'pages/index/news/news',
    'pages/competitionSchedule/competitionInfo/competitionInfo',
    'pages/myContest/signUpContest/signUpContest',
    'pages/myContest/signUpRecord/signUpRecord',
    'pages/mine/personalInfo/personalInfo',
    'pages/mine/competitionRecord/competitionRecord',
    'pages/mine/personalAward/personalAward',
    'pages/mine/personalInfo/editPhoneNumber/editPhoneNumber',
    'pages/mine/personalInfo/editPassword/editPassword',
    'pages/mine/control/userControl/studentInfo/studentInfo',
    'pages/mine/control/userControl/teacherInfo/teacherInfo',
    'pages/mine/control/contestControl/awardInfo/awardInfo',
    'pages/mine/control/contestControl/contestInfo/contestInfo',
    'pages/mine/control/contestControl/contestMasterInfo/contestMasterInfo',
    'pages/mine/control/contestControl/signUpInfo/signUpInfo',
    'pages/mine/control/authorityControl/authorityInfo/authorityInfo',
    'pages/mine/control/authorityControl/roleInfo/roleInfo',
    'pages/mine/control/userControl/studentInfo/studentInfoEdit/studentInfoEdit',
    'pages/mine/control/userControl/teacherInfo/teacherInfoEdit/teacherInfoEdit',
    'pages/mine/control/contestControl/awardInfo/awardEdit/awardEdit',
    'pages/mine/control/contestControl/contestInfo/contestEdit/contestEdit',
    'pages/mine/control/contestControl/contestMasterInfo/contestMasterEdit/contestMasterEdit',
    'pages/mine/control/contestControl/signUpInfo/signUpEdit/signUpEdit',
    'pages/mine/control/authorityControl/authorityInfo/authorityEdit/authorityEdit',
    'pages/mine/control/authorityControl/roleInfo/roleEdit/roleEdit'
  ],
  tabBar: {
    selectedColor: '#7788dd',
    borderStyle: 'black',
    custom: true,
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页'
      },
      {
        pagePath: 'pages/competitionSchedule/competitionSchedule',
        text: '竞赛日程'
      },
      {
        pagePath: 'pages/myContest/myContest',
        text: '我的竞赛'
      },
      {
        pagePath: 'pages/mine/mine',
        text: '个人'
      }
    ]
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
}
