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

        </center>
      </div>
    </section>
  </div>
</template>

<script>
import Navigation from './Navigation';

export default {
  name: 'Book',
  components: {
    navigation: Navigation,
  },
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
  max-width: 500px;
  height: 2px;
  background-color: #fff;
}

.section01 h3 {
  color: rgba(255, 255, 255, 0.6);
  font-weight: 800;
  font-size: 18px;
}
</style>
