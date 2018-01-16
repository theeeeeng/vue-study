<template>
  <div id="app">
    <div class="navigation-bar">
      <div class="title"><router-link to="/">Vue.js Study</router-link></div>
      <ul class="bar">
        <li class="button">
          <p><router-link to="/menu1">RGB</router-link></p>
          <div class="submenu">
            <div><router-link to="/menu1/sub1">BLUE</router-link></div>
            <div><router-link to="/menu1/sub2">GREEN</router-link></div>
            <div><router-link to="/menu1/sub3">PINK</router-link></div>
            <div><router-link to="/menu1/sub4">YELLOW</router-link></div>
            <div><router-link to="/menu1/sub5">RED</router-link></div>
            <div><router-link to="/menu1/sub6">ETC</router-link></div>
          </div>
        </li>
        <li class="button">
          <p><router-link to="/menu2">메뉴2</router-link></p>
          <div class="submenu">
            <div><router-link to="/menu2/sub1">하위메뉴 2-1</router-link></div>
            <div><router-link to="/menu2/sub2">하위메뉴 2-2</router-link></div>
          </div>
        </li>
        <li class="button">
          <p><router-link to="/menu3">메뉴3</router-link></p>
          <div class="submenu">
            <div><router-link to="/menu3/sub1">하위메뉴 3-1</router-link></div>
          </div>
        </li>
      </ul>
    </div>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
* {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

body {
  margin: 0;
  background: beige;
}

a {
  text-decoration: none;
}

.navigation-bar {
  height: 50px;
  line-height: 50px;
  border-bottom: 2px solid #333333;
}

.navigation-bar .title {
  float: left;
  margin-left: 10px;
}

.navigation-bar ul {
  float: right;
  display: inline-block;
  margin: 0 10px 0 0;
}

.navigation-bar li {
  position: relative;
  display: inline-block;
  margin: 0 10px;
  list-style-type: none;
  vertical-align: top;
}

.navigation-bar li p {
  margin: 0 10px;
}

.submenu {
  display: none;
  position: absolute;
  left: calc(50% - 50px);
  top: 52px;
  width: 100px;
  background: rgba(255, 255, 255, 0.6);
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
}

.navigation-bar li:hover .submenu {
  display: block;
}

.submenu div {
  line-height: 50px;
}

.container {
  padding-top: 10px;
}

</style>
