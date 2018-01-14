<template>
  <div class="menu2">
    <div>메뉴2 페이지 입니다.</div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Menu2',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
