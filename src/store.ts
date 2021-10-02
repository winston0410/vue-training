import { createStore } from "vuex";
import createPersistedState from 'vuex-persistedstate'
import router from './router'

export interface IStore {
    user: null;
    loggedIn: boolean;
}

export default createStore({
  strict: true,
  plugins: [ createPersistedState() ],
  state(): IStore{
    return {
      user: null,
      loggedIn: false
    }
  },
  mutations: {
    setLoggedIn (state: IStore, loggedIn) {
      state.loggedIn = loggedIn
    },
    setUser (state: IStore, user) {
      state.user = user
    }
  },
  actions: {
    login ({ commit }, { user }) {
      commit('setLoggedIn', true)
      commit('setUser', user)
      router.push("/search")
    }
  }
})
