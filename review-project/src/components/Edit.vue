<template>
  <div class="edit">
    <section>
      <div class="container">
        <navigation></navigation>
        <center>
          <bookEdit></bookEdit>
        </center>
      </div>
    </section>
  </div>
</template>

<script>
import Navigation from './Navigation';
import BookEdit from './BookEdit';

export default {
  name: 'Edit',
  components: {
    navigation: Navigation,
    bookEdit: BookEdit,
  },
};
</script>

<style scoped>
section {
  background: url("../assets/bg_2.jpg") no-repeat bottom;
  background-size: cover;
}

</style>
