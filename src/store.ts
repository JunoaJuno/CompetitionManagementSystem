import { createStore } from 'vuex'

const state = {
  numbers: [1, 2, 3],
  current: 0,
  userInfo: {},
  authToken: '',
  preToken: ''
}

const mutations = {
  ADD_NUMBER(state, payload) {
    state.numbers.push(payload)
  },
  CHANGE_CURRENT(state, payload){
    state.current = payload
  },
  CHANGE_USER_INFO(state, payload) {
    state.userInfo = payload
  },
  CLEAN_USER_INFO(state) {
    state.userInfo = {}
  },
  CHANGE_AUTH_TOKEN(state, payload) {
    state.authToken = payload
  },
  CLEAN_AUTH_TOKEN(state) {
    state.authToken = ''
  },
  CHANGE_PRE_TOKEN(state, payload) {
    state.preToken = payload
  }
}

const actions = {
  addNumber(context, number) {
    context.commit('ADD_NUMBER', number)
  },
  changeCurrent(context, current) {
    context.commit('CHANGE_CURRENT', current)
  },
  changeUserInfo(context, userInfo) {
    context.commit('CHANGE_USER_INFO', userInfo)
  },
  changeAuthToken(context, authToken) {
    context.commit('CHANGE_AUTH_TOKEN', authToken)
  },
  cleanInfo(context) {
    context.commit('CLEAN_USER_INFO')
    context.commit('CLEAN_AUTH_TOKEN')
  },
  changePreToken(context, preToken) {
    context.commit('CHANGE_PRE_TOKEN', preToken)
  }
}

const getters = {
  getNumbers(state) {
    return state.numbers
  },
  getCurrent(state) {
    return state.current
  },
  getUserInfo(state) {
    return state.userInfo
  },
  getAuthToken(state) {
    return state.authToken
  },
  getPreToken(state) {
    return state.preToken
  }
}

const store = createStore({
  state,
  mutations,
  actions,
  getters
})

export default store
