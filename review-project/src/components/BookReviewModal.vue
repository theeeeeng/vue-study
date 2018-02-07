<template>
  <div class="book-review-modal">
    <b-modal :active.sync="isCardModalActive" :width="640" scroll="keep">
        <div class="card">
            <div class="card-content">
                <div class="media">
                    <div class="media-left">
                        <figure class="image is-48x48">
                            <img src="static/img/placeholder-1280x960.png" alt="Image">
                        </figure>
                    </div>
                    <div class="media-content">
                        <p class="title is-4">{{review.book_title}}</p>
                        <p class="subtitle is-6">@johnsmith</p>
                    </div>
                </div>

                <div class="content">
                    {{review.book_review}}
                    <br>
                    <small>{{review.date}}</small>
                </div>
            </div>
        </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: 'BookReviewModal',
  props: ['isCardModalActive', 'review'],
}
</script>

<style scoped>

</style>
