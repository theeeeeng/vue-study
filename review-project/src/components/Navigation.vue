<template>
  <div class="navigation">
    <router-link to="/"><img class="logo" src="../assets/logo_white.png"/></router-link>
    <router-link to="/edit"><img class="edit-icon" src="../assets/edition_box.png"/></router-link>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
};
</script>

<style scoped>
.navigation {
  display: table-header-group;
}

.logo {
  width: auto;
  height: 50px;
  margin-left: 10px;
}

.edit-icon {
  float: right;
  margin: 7px 10px 7px 0;
}
</style>
