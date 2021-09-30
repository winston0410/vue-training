<template>
  <img class="poster" :src="poster" />
  <p class="title">
    {{ title }}
    <span class="rating">★★★★</span>
  </p>
  <dl>
    <dt>Release date</dt>
    <dd>{{ released }}</dd>
    <dt>Director</dt>
    <dd>{{ director }}</dd>
    <dt>Actors</dt>
    <dd>{{ actors }}</dd>
  </dl>
  <p class="plot">
    {{ plot }}
  </p>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Film",
  props: {
    title: String,
    released: String,
    director: String,
    actors: String,
    plot: String,
    poster: String,
  },
});
</script>
