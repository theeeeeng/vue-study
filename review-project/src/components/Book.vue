<template>
  <div class="book">
    <!-- 첫번쨰 섹션 -->
    <section class="section01">
      <div class="container">
        <navigation></navigation>
        <center>
          <h1>Boook</h1>
          <hr/>
          <h3>책을 끝까지 읽고 난 후의 리뷰들을 공유해주세요 :)</h3>
        </center>
        <footer>
          <img src="../assets/ic_keyboard_arrow_down_white.png"/>
        </footer>
      </div>
    </section>
    <!-- 두번째 섹션 -->
    <section class="section02">
      <div class="container">
        <center>
          <h1>이번주 Boook 리뷰 Top3</h1>
          <hr/>
          <div class="review-cards">
            <bookReviewCard class="card" :review="best" :key="best.key" v-for="best in bestBooksReview"></bookReviewCard>
          </div>
        </center>
      </div>
    </section>
    <section class="section03">
      <div class="container">
        <center>
          <h1>Boook Reeeview</h1>
          <hr/>
          <div class="review-cards">
            <bookReviewCard class="card" :review="book" :key="book.key" v-for="book in booksReview"></bookReviewCard>
          </div>
        </center>
        <footer>
          <img src="../assets/ic_keyboard_arrow_down_white.png"/>
        </footer>
      </div>
    </section>
  </div>
</template>

<script>
import firebase from 'firebase';
import Navigation from './Navigation';
import BookReviewCard from './BookReviewCard';

export default {
  name: 'Book',
  components: {
    navigation: Navigation,
    bookReviewCard: BookReviewCard
  },
  data() {
    return {
      booksRef: firebase.database().ref('book'),
      bestBooksReview: [],
      booksReview: [],
    };
  },
  mounted () {

    this.booksRef.orderByChild('like_count').limitToLast(3).once('value', snapshot => {
      var booksArr = [];
      snapshot.forEach(function (childSnapshot) {
        booksArr.push(childSnapshot.val());
      });

      this.bestBooksReview = booksArr;
      this.bestBooksReview.reverse();
    });

    this.booksRef.orderByChild('date').once('value', snapshot => {
      var booksArr = [];
      snapshot.forEach(function (childSnapshot) {
        booksArr.push(childSnapshot.val());
      });

      this.booksReview = booksArr;
      this.booksReview.reverse();
    });
  }, methods: {
  }
}
</script>

<style scoped>
hr {
  width: 90%;
  max-width: 500px;
  height: 2px;
  background-color: #fff;
}

.section01 {
  background: url("../assets/bg_3.jpg") no-repeat bottom;
  background-size: cover;
}

.section01 h1 {
  margin-bottom: 0;
  color: #ffffff;
  font-weight: 900;
  font-size: 30pt;
  line-height: 1;
}

.section01 h3 {
  color: rgba(255, 255, 255, 0.6);
  font-weight: 800;
  font-size: 18px;
}

.section02 {
  background: url("../assets/bg_4.jpg") no-repeat bottom;
  background-size: cover;
}

.section02 h1 {
  margin: 20px 0 0 0;
  font-size: 36px;
  font-weight: 900;
  color: #fff;
}

.review-cards {
  width: 100%;
  max-width: 960px;
  margin: 40px auto 0 auto;
  text-align: left;
}

.card {
  display: inline-block;
  width: 80%;
  max-width: 300px;
  margin: 10px;
  vertical-align: top;
}

.section03 {
  background-color: rgb(95, 75, 139);
}

.section03 h1 {
  margin: 20px 0 0 0;
  font-size: 36px;
  font-weight: 900;
  color: #fff;
}

@media (max-width: 959px) {
  .review-cards {
    text-align: center;
  }
  
  .card {
    display: inline-block;
    max-width: 500px;
  }
}

</style>
