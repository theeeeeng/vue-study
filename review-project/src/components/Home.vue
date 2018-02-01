<template>
  <div class="home">
    <!-- 첫번쨰 섹션 -->
    <section class="section01">
      <div class="container">
        <navigation></navigation>
        <center>
          <div class="section-title">
            <h1>Reeeeeview</h1>
            <h5>당신이 끝까지 감상했던 것에 대한 리뷰를 공유해주세요 :)</h5>
          </div>
        </center>
        <div class="section-footer">
          <img src="../assets/ic_keyboard_arrow_down_white.png"/>
          <div class="pantone-color">
            PANTONE<br>
            18-3838<br>
            Ultra Violet
          </div>
        </div>
      </div>
    </section>
    <section class="section02">
      <div class="container">
        <center>
          <div class="section-title">
            <h1>리뷰하고 싶은 종목을 골라보세요 :)</h1>
            <h5>Select the type of review</h5>
          </div>
          <div class="section-buttons">
            <router-link to="/edit"><button>Boooook</button></router-link>
            <button>Movieeeee</button>
            <button>Gameeeee</button>
          </div>
        </center>
      </div>
    </section>
  </div>
</template>

<script>
import Navigation from './Navigation';

export default {
  name: 'Home',
  components: {
    navigation: Navigation,
  },
};

</script>

<style scoped>
.section01 {
  background-color: rgb(95, 75, 139);
}

.section01 h1 {
  margin-bottom: 7px;
  color: #fff;
  font-size: 50px;
  font-weight: 700;
  line-height: 1;
}

.section01 h5 {
  color: rgb(224, 224, 224);
  font-size: 15px;
  font-weight: 400;
}

.section01 .section-title {
  width: 30%;
  min-width: 350px;
  margin: 0 auto;
  padding: 18px 0;
  border: 4px solid #fff;
}

.section01 .section-footer {
  position: relative;
  display: table-footer-group;
  text-align: center;
}

.section01 .section-footer img {
  width: 25px;
  height: auto;
  border: 2px solid #fff;
  border-radius: 50%;
}

.section01 .pantone-color {
  position: absolute;
  bottom: 5px;
  right: 5px;
  width: 73px;
  float: right;
  padding: 3px 0px 3px 5px;
  font-size: 11px;
  text-align: left;
  border: 1px solid #fff;
  color: #fff;
}

.section02 {
  background: url("../assets/bg_1.jpg") no-repeat center;
  background-size: cover;
}

.section02 h1 {
  font-size: 35px;
  font-weight: 700;
  color: #fff;
}

.section02 h5 {
  font-size: 18px;
  font-weight: 600;
  color: #fff;
}

.section02 .section-buttons {
  margin-top: 40px;
  text-align: center;
}

.section02 button {
  width: 160px;
  height: 45px;
  margin: 0 20px;
  background: transparent;
  border: 3px solid #fff;
  border-radius: 5px;
  color: #fff;
  font-size: 20px;
  font-weight: 700;
}

@media (max-width: 740px) {
  .section02 button {
    width: 80%;
    max-width: 400px;
    margin: 10px 0;
  }
}

</style>
