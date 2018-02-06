<template>
  <div class="bookEdit">
    <h1>Boook Review</h1>
    <div class="edit-container">
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
  </div>
</template>

<script>
import firebase from 'firebase';
import Navigation from './Navigation';

export default {
  name: 'BookEdit',
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
      const pushBooksRef = this.booksRef.push();
      const now = new Date();
      pushBooksRef.set({
        book_title: this.bookTitle,
        book_author: this.bookAuthor,
        book_review: this.bookReview,
        member_id: 1,
        like_count: 0,
        dislike_count: 0,
        date: now.getFullYear() + '.' + now.getMonth() + '.' + now.getDate(),
      });
    },
  },
};
</script>

<style scoped>
h1 {
  margin-bottom: 10px;
  font-size: 25pt;
  font-weight: 800;
}

.edit-container {
  width: 90%;
  max-width: 600px;
  text-align: left;
}

.button {
  width: 100%;
  background-color: rgba(0, 0, 0, 0.4);
}
</style>
