<template>
  <div class="edit">
    <section>
      <div class="container">
        <navigation></navigation>
        <center>
          <div class="edit-list">
            <b-field label="Title">
              <b-input name="title" placeholder="책 제목을 입력해주세요" expanded></b-input>
            </b-field>
            <b-field label="Author">
              <b-input name="autor" placeholder="작가명을 입력해주세요" expanded></b-input>
            </b-field>
            <b-field label="Reeeview">
              <b-input type="textarea" placeholder="리뷰를 적어주세요 :)"></b-input>
            </b-field>
            <a class="button is-medium is-primary is-rounded">제출하기</a>
          </div>
        </center>
      </div>
    </section>
  </div>
</template>

<script>
import Navigation from './Navigation';

export default {
  name: 'Edit',
  components: {
    navigation: Navigation
  }
}
</script>

<style scoped>
section {
  background: url("../assets/bg_2.jpg") no-repeat bottom;
  background-size: cover;
}

.edit-list {
  width: 90%;
  max-width: 600px;
  text-align: left;
}

.button {
  width: 100%;
  background-color: rgba(0, 0, 0, 0.4);
}

</style>
