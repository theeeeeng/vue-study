<template>
  <div class="book-review-card">
    <header class="card-header">
      <p class="card-header-title">
        {{review.book_title}}
      </p>
      <a class="card-header-icon" aria-label="more options" v-on:click="isCardModalActive = true">
        더보기
        <span class="icon"><i class="fas fa-angle-right"></i></span>
      </a>
    </header>
    <div class="card-content">
      <div class="content">
        {{review.book_review}}
        <br><br>
        <div class="date">{{review.date}}</div>
      </div>
    </div>
    <footer class="card-footer">
      <a class="card-footer-item like-button">
        <span>{{review.like_count}}</span>
        <span class="icon"><i class="fas fa-thumbs-up"></i></span>
      </a>
      <a class="card-footer-item dislike-button">
        <span>{{review.dislike_count}}</span>
        <span class="icon"><i class="fas fa-thumbs-down"></i></span>
      </a>
    </footer>
    <bookReviewModal :isCardModalActive="isCardModalActive" :review="review"></bookReviewModal>
  </div>
</template>

<script>
import BookReviewModal from './BookReviewModal';

export default {
  name: 'BookReviewCard',
  components: {
    bookReviewModal: BookReviewModal
  },
  props: ['review'],
  data() {
    return {
      isCardModalActive: false,
    };
  },
}
</script>

<style scoped>


.content {
  text-align: left;
  font-weight: 800;
}

.date {
  text-align: right;
  font-weight: 300;
  font-size: 12px;
}

.card-footer-item span:not(.icon) {
  font-size: 15px;
  vertical-align: middle;
  color: #333;
}

.card-footer-item .icon {
  align-items: center;
  font-size: 14px;
}

.like-button .icon {
  color: red;
}

.dislike-button .icon {
  color: #333;
}

</style>
