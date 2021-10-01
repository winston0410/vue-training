<template>
  <div id="login-form">
    <form @submit="handleSubmit">
      <h1>{{ title }}</h1>
      <p>Fill out this form to login.</p>
      <hr />

      <label for="email"><b>Email</b></label>
      <input
        type="text"
        placeholder="Enter your email"
        id="email"
        name="email"
        v-model="email"
        required
      />

      <label for="psw"><b>Password</b></label>
      <input
        type="password"
        placeholder="Enter your password"
        id="psw"
        name="psw"
        v-model="password"
        required
      />

      <p><button type="submit">Login</button></p>
    </form>
  </div>
</template>

<script lang="ts">
interface State {
  title: string;
  email: string;
  password: string;
}

import { defineComponent } from "vue";
import Film from "./Film.vue";

export default defineComponent({
  data(): State {
    return {
      title: "Authentication",
      email: "",
      password: "",
    };
  },
  components: {
    Film,
  },
  methods: {
    handleSubmit(e: SubmitEvent) {
      e.preventDefault();
      if(this.email === "test@test.com" && this.password === "test1234"){
      this.$store.dispatch("login", { user: "John Smith" })
      }
    },
  },
});
</script>

<style></style>
