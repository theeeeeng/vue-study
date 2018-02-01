<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  word-break: keep-all;
}

button {
  cursor: pointer;
}

button:focus {
  outline:0 !important;
}

/* section 태그 내에서 기본 가운데 배치에 필요한 공통 style */
.container {
  display: table;
  width: 100%;
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 10px 0;
}

center {
  display: table-cell;
  vertical-align: middle;
}

.edit textarea {
  height: 300px;
  resize: none;
}

</style>
