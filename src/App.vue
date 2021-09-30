<template>
  <div>
    <login-form v-if="!loggedIn" @updateLoggedIn="updateLoggedIn" />
    <search-film v-else :films="films" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LoginForm from "./LoginForm.vue";
import SearchFilm from "./SearchFilm.vue";

interface IFilm {
  title: string;
  director: string;
  actors: string;
  metascore: string;
  plot: string;
  poster: string;
  released: string;
}

interface State {
  loggedIn: boolean;
  films: Array<IFilm>;
}

export default defineComponent({
  components: {
    LoginForm,
    SearchFilm,
  },
  methods: {
    updateLoggedIn(value: boolean) {
      console.log('method executed', value)
      this.loggedIn = value;
    },
  },
  data(): State {
    return {
      loggedIn: false,
      films: [
        {
          title: "Titanic",
          released: "19 Dec 1997",
          director: "James Cameron",
          actors: "Leonardo DiCaprio, Kate Winslet, Billy Zane, Kathy Bates",
          poster:
            "https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg",
          plot: "84 years later, a 100 year-old woman named Rose DeWitt Bukater tells the story to her granddaughter Lizzy Calvert, Brock Lovett, Lewis Bodine, Bobby Buell and Anatoly Mikailavich on the Keldysh about her life set in April 10th 1912, on a ship called Titanic when young Rose boards the departing ship with the upper-class passengers and her mother, Ruth DeWitt Bukater, and her fiancé, Caledon Hockley. Meanwhile, a drifter and artist named Jack Dawson and his best friend Fabrizio De Rossi win third-class tickets to the ship in a game. And she explains the whole story from departure until the death of Titanic on its first and last voyage April 15th, 1912 at 2:20 in the morning.",
          metascore: "75",
        },
        {
          title: "Blade Runner",
          released: "25 Jun 1982",
          director: "Ridley Scott",
          actors: "Harrison Ford, Rutger Hauer, Sean Young, Edward James Olmos",
          poster:
            "https://m.media-amazon.com/images/M/MV5BNzQzMzJhZTEtOWM4NS00MTdhLTg0YjgtMjM4MDRkZjUwZDBlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
          plot: "A blade runner must pursue and terminate four replicants who stole a ship in space, and have returned to Earth to find their creator.",
          metascore: "89",
        },
        {
          title: "The Shining",
          released: "13 Jun 1980",
          director: "Stanley Kubrick",
          actors:
            "Jack Nicholson, Shelley Duvall, Danny Lloyd, Scatman Crothers",
          poster:
            "https://m.media-amazon.com/images/M/MV5BZWFlYmY2MGEtZjVkYS00YzU4LTg0YjQtYzY1ZGE3NTA5NGQxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
          plot: "A family heads to an isolated hotel for the winter where an evil spiritual presence influences the father into violence, while his psychic son sees horrific forebodings from both past and future.",
          metascore: "63",
        },
      ],
    };
  },
});
</script>

<style>
html {
  font-family: Palatino, Georgia, Lucida Bright, Book Antiqua, serif;
  font-size: 16px;
  line-height: 1.5rem;
}

h1,
h2,
h3,
h4,
h5,
h6,
th {
  font-weight: normal;
}

/* Minor third */
h1 {
  font-size: 2.488em;
}
h2 {
  font-size: 2.074em;
}
h3 {
  font-size: 1.728em;
}
h4 {
  font-size: 1.44em;
}
h5 {
  font-size: 1.2em;
}
h6 {
  font-size: 1em;
}
small {
  font-size: 0.833em;
}

h1,
h2,
h3 {
  line-height: 3rem;
}

p,
ul,
ol,
dl,
table,
blockquote,
pre,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 1.5rem 0 0;
}
ul ul,
ol ol,
ul ol,
ol ul {
  margin: 0;
}

hr {
  margin: 0;
  border: none;
  padding: 1.5rem 0 0;
}

/* Colors */

body {
  color: #222;
  background-color: #fcfcfc;
}
code,
pre,
samp,
kbd {
  color: #111;
}
a,
header nav a:visited,
a code {
  color: #00e;
}
a:visited,
a:visited code {
  color: #60b;
}
mark {
  color: inherit;
}

code,
pre,
samp,
thead,
tfoot {
  background-color: rgba(0, 0, 0, 0.05);
}
mark {
  background-color: #fe0;
}

main aside,
blockquote,
ins {
  border: solid rgba(0, 0, 0, 0.05);
}
pre,
code,
samp {
  border: solid rgba(0, 0, 0, 0.1);
}
th,
td {
  border: solid #dbdbdb;
}

/* Layout */

body {
  margin: 1.5rem 1ch;
}

body > header {
  text-align: center;
}

main,
body > footer {
  display: block; /* Just in case */
  max-width: 78ch;
  margin: auto;
}

img {
  max-width: 100%;
}

/* Lists */

ul,
ol,
dd {
  padding: 0 0 0 3ch;
}
dd {
  margin: 0;
}

nav ul {
  padding: 0;
  list-style-type: none;
}
nav ul li {
  display: inline;
  padding-left: 1ch;
  white-space: nowrap;
}
nav ul li:first-child {
  padding-left: 0;
}

/* Tables */

table {
  width: 100%;
  border-collapse: collapse;
  overflow-x: auto;
}

th,
td {
  border-width: 1px;
  padding: 0 0.5ch;
}

/* Copy inline */

a {
  text-decoration: none;
}

mark {
  padding: 1px;
}

code,
samp {
  border-width: 1px;
  border-radius: 2px;
  padding: 0.1em 0.2em;
  white-space: nowrap;
}

form,
.card {
  background: white;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.5);
  padding: 0.5em;
}

button,
input {
  font-size: 1.2rem;
  margin: 0.5em;
  padding: 0.25em 0.5em;
}

ul,
dl {
  padding: 0;
  display: flex;
  flex-wrap: wrap;
}

li {
  list-style: none;
}

dt,
label {
  display: inline-block;
  width: 30%;
  text-align: right;
  margin-right: 1em;
  font-weight: bold;
}

dd,
input {
  display: inline-block;
  min-width: 40%;
  flex: 1;
  text-align: left;
}

#login-form {
  display: flex;
  justify-content: center;
}

#logout-btn {
  position: fixed;
  right: 1em;
  top: 1em;
}

.film.card {
  flex: 1 0 960px;
}

.film .poster {
  float: left;
  margin: 0 0.5em 0.5em 0;
}

.film .title {
  font-size: 2rem;
}

.rating {
  color: gold;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
}
</style>
