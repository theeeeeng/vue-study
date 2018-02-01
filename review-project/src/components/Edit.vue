<template>
  <div class="edit">
    <section>
      <div class="container">
        <navigation></navigation>
        <center>
          <div class="edit-list">
            <b-field label="Title">
              <b-input name="title" placeholder="책 제목을 입력해주세요" expanded
                v-model="bookTitle"></b-input>
            </b-field>
            <b-field label="Author">
              <b-input name="autor" placeholder="작가명을 입력해주세요" expanded
                v-model="bookAuthor"></b-input>
            </b-field>
            <b-field label="Reeeview">
              <b-input type="textarea" placeholder="리뷰를 적어주세요 :)"
                v-model="bookReview"></b-input>
            </b-field>
            <a class="button is-medium is-primary is-rounded" v-on:click="pushBookReview">제출하기</a>
          </div>
        </center>
      </div>
    </section>
  </div>
</template>

<script>
import Navigation from './Navigation';
import firebase from 'firebase';

export default {
  name: 'Edit',
  components: {
    navigation: Navigation,
  },
  data() {
    return {
      booksRef: firebase.database().ref('book'),
      bookTitle: '',
      bookAuthor: '',
      bookReview: '',
    };
  },
  methods: {
    pushBookReview: function () { // 책 리뷰 업로드
      var pushBooksRef = this.booksRef.push();
      pushBooksRef.set({
        book_title: this.bookTitle,
        book_author: this.bookAuthor,
        book_review: this.bookReview,
        member_id: 1,
        date: new Date(),
      });
    },
  },
};
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
