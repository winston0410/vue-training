import { createStore } from "vuex";
import createPersistedState from 'vuex-persistedstate'

interface IState {
    user: null;
    loggedIn: boolean;
}

export default createStore({
  strict: true,
  plugins: [ createPersistedState() ],
  state(): IState{
    return {
      user: null,
      loggedIn: false
    }
  },
  mutations: {
    setLoggedIn (state, loggedIn) {
      state.loggedIn = loggedIn
    },
    setUser (state, user) {
      state.user = user
    }
  },
  actions: {
    login ({ commit }, { user }) {
      commit('setLoggedIn', true)
      commit('setUser', user)
    }
  }
})
