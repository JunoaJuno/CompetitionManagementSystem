export default {
  pages: [
    'pages/index/index',
    'pages/competitionSchedule/competitionSchedule',
    'pages/mine/mine',
    'pages/myContest/myContest'
  ],
  tabBar: {
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
        text: '我的'
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
