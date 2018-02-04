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
          <div class="review-cards">
            <div class="card" v-for="best in bestBookReview">
              <header class="card-header">
                <p class="card-header-title">
                  {{best.book_title}}
                </p>
                <a href="#" class="card-header-icon" aria-label="more options">
                  <span class="icon">
                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                  </span>
                </a>
              </header>
              <div class="card-content">
                <div class="content">
                  {{best.book_review}}
                  <a href="#">@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a>
                  <br>
                  <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                </div>
              </div>
              <footer class="card-footer">
                <a href="#" class="card-footer-item like-button">{{best.like_count}} Like</a>
                <a href="#" class="card-footer-item dislike-button">{{best.dislike_count}} Dislike</a>
              </footer>
            </div>
          </div>
        </center>
      </div>
    </section>
  </div>
</template>

<script>
import firebase from 'firebase';
import Navigation from './Navigation';

export default {
  name: 'Book',
  components: {
    navigation: Navigation,
  },
  data() {
    return {
      booksRef: firebase.database().ref('book'),
      bestBookReview: [],
    };
  },
  mounted () {
    var bestBooksRef = this.booksRef.orderByChild('like_count').limitToFirst(3);

    bestBooksRef.once('value', snapshot => {
      var booksArr = [];
      snapshot.forEach(function (childSnapshot) {
        booksArr.push(childSnapshot.val());
      });

      this.bestBookReview = booksArr;

      console.log(this.bestBookReview);
    });
  }, methods: {
  }
}
</script>

<style scoped>
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

.section01 hr {
  width: 90%;
  max-width: 500px;
  height: 2px;
  background-color: #fff;
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
  margin: 20px 0;
  font-size: 36px;
  font-weight: 900;
  color: #fff;
}

.section02 .card {
  display: inline-block;
  width: 80%;
  max-width: 300px;
  margin: 10px;
  vertical-align: top;
}

.section02 .like-button {
  color: red;
}

.section02 .dislike-button {
  color: #000;
}

@media (max-width: 900px) {
  .section02 .card {
    display: inline-block;
    max-width: 500px;
  }
}

</style>
