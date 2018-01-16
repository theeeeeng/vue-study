<template>
  <div class="menu1">
    <div class="rgb-list">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Menu1',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .rgb-list {
    display: inline-block;
    width: 1000px;
  }
</style>
