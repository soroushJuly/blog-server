<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
:root {
  --black: #2d2d2d;
  --blue: #4f73d0;
  --blue-dark: #224dba;
  --empty: #c4c4c4;
  --gray: #9d9d9d;
  --gray-light: #e7e7e7;
  --input-background: #fdfdfd;
  --white: #ffffff;
}

* {
  box-sizing: border-box;
  margin: 0;
  text-decoration: none;
}

#app {
  font-family: "IBM Plex Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 1210px;
  margin: auto;
}

.page {
  padding: 100px;
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
