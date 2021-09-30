<template>
  <div id="search-film">
    <form>
      <label for="search">Search :</label>
      <input id="search" type="text" />
    </form>

  <ul class="films">
    <li v-for="film in films" :key="film.title" class="film card">
      <film v-bind="film"/>
    </li>
  </ul>
  </div>
</template>

<script lang="ts">
interface State {
  title: string;
  loggedIn: boolean;
  email: string;
  password: string;
}

import { defineComponent } from "vue";
import Film from "./Film.vue";

export default defineComponent({
  components: {
    Film
  },
  props: {
    films: Array
  }
});
</script>

<style></style>
