import { createStore } from 'vuex'
import taskModules from './modules/task-module.js'
// import userModules from './modules/user-module.js'

const store = createStore({
  strict: true,
  state: {
    isLoading: false,
  },
  getters: {
    isLoading(state) {
      return state.isLoading
    },
  },
  mutations: {
    setIsLoading(state, { isLoading }) {
      state.isLoading = isLoading
    },
  },
  actions: {},
  modules: {
    taskModules,
    // userModules
  },
})

export default store