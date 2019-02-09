import Vuex from 'vuex'

const store = () => new Vuex.Store({
  state: {
    user: {}
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    }
  }
})

export default store 