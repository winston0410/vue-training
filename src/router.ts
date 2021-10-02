import { createRouter, createWebHistory } from "vue-router";
import LoginForm from "./LoginForm.vue";
import SearchFlim from "./SearchFilm.vue";
import store from './store'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "login-form",
      component: LoginForm,
    },

    {
      path: "/search",
      name: "search-film",
      component: SearchFlim,
      beforeEnter(to, from, next){
          if (store.state.loggedIn) {
            return next()
          }
          next({ path: "/" })
      }
    },
  ],
});
