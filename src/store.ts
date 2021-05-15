import { createStore } from 'vuex'

const state = {
  numbers: [1, 2, 3],
  current: 0,
}

const mutations = {
  ADD_NUMBER(state, payload) {
    state.numbers.push(payload)
  },
  CHANGE_CURRENT(state, payload){
    state.current = payload
  }
}

const actions = {
  addNumber(context, number) {
    context.commit('ADD_NUMBER', number)
  },
  changeCurrent(context, current) {
    context.commit('CHANGE_CURRENT', current)
  }
}

const getters = {
  getNumbers(state) {
    return state.numbers
  },
  getCurrent(state) {
    return state.current
  }
}

const store = createStore({
  state,
  mutations,
  actions,
  getters
})

export default store
