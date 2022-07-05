<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"
          ><font-awesome-icon icon="fa-solid fa-headset"/><Span>&nbsp;&nbsp;</Span>Game
          Opinion</a
        >
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <font-awesome-icon
                icon="fa-solid fa-house-chimney"
                class="text-light"
              /><Span>&nbsp;&nbsp;</Span><router-link to="/" class="text-light">Home</router-link><Span>&nbsp;&nbsp;</Span>
            </li>
            <li class="nav-item">
              <font-awesome-icon
                icon="fa-solid fa-comments"
                class="text-light"
              /><Span>&nbsp;&nbsp;</Span>
              <router-link to="/Opiniones" class="text-light"> Opiniones</router-link><Span>&nbsp;&nbsp;</Span>
            </li>
            <li class="nav-item">
              <font-awesome-icon
                icon="fa-solid fa-screwdriver-wrench"
                class="text-light"

              /><Span>&nbsp;&nbsp;</Span>
              <router-link to="/Admin" class="text-light"> Administración</router-link><Span>&nbsp;&nbsp;</Span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions } from "vuex";

export default {
  name: "Home",
  components: {},
  methods: {
    ...mapActions(["fetchGames"]),
  },
  created() {
    this.fetchGames();
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}

.nav {
  padding: 30px;
  text-decoration: none;
}

.nav a {
  font-weight: bold;
  color: #2c3e50;
}


a,nav-item,
a:hover {
  text-decoration: none;
  color: white;
}

ul,router-link {
  list-style: none;
}
</style>
