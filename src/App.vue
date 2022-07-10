<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
:root {
  --blue: #4f73d0;
  --blue-dark: #224dba;
  --white: #ffffff;
}

#app {
  font-family: "IBM Plex Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

button {
  border: none;
}
</style>
