<template>
  <div class="menu1sub3">
    <div class="rgb" v-for="(rgb, index) in rgbArr"
    v-bind:key="index"
    v-bind:style="{ backgroundColor: rgb }">
      {{rgb}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Menu1Sub3',
  data() {
    return {
      rgbArr: [
        '#FFB6C1', '#FFBBC6', '#FFC0CB', '#FFC5D0', '#FFCAD5', '#FFCFDA', '#FFD4DF', '#FFD9E4', '#FFDEE9', '#FFE3EE',
        '#FFAAAF', '#FFB4B9', '#FFBEC3', '#FFC8CD', '#FFD2D7', '#FFDCE1', '#FFE1E6', '#FFE6EB', '#FFEBF0', '#FFF0F5',
        '#FF9E9B', '#FFA8A5', '#FFB2AF', '#FFBCB9', '#FFC6C3', '#FFD0CD', '#FFD5D2', '#FFDAD7', '#FFDFDC', '#FFE4E1',
        '#FF7A85', '#FF848F', '#FF8E99', '#FF98A3', '#FFA2AD', '#FFACB7', '#FFB1BC', '#FFB6C1', '#FFBBC6', '#FFC0CB',
        '#FF5675', '#FF607F', '#FF6A89', '#FF7493', '#FF7E9D', '#FF88A7', '#FF92B1', '#FF9CBB', '#FFA6C5', '#FFB0CF',
        '#FF82FF', '#FF8CFF', '#FF96FF', '#FFA0FF', '#FFAAFF', '#FFB4FF', '#FFBEFF', '#FFC8FF', '#FFD2FF', '#FFDCFF',
        '#FF7DB4', '#FF87BE', '#FF91C8', '#FF9BD2', '#FFA5DC', '#FFAFE6', '#FFB4EB', '#FFB9F0', '#FFBEF5', '#FFC3FA',
        '#FF69B4', '#FF73BE', '#FF7DC8', '#FF87D2', '#FF91DC', '#FF9BE6', '#FFA5F0', '#FFAAF5', '#FFAFFA', '#FFB4FF',
        '#FF1493', '#FF1E9D', '#FF28A7', '#FF32B1', '#FF3CBB', '#FF46C5', '#FF50CF', '#FF5AD9', '#FF64E3', '#FF6EED',
        '#DB7093', '#DB7A9D', '#DB84A7', '#E08EB1', '#E598BB', '#EAA2C5', '#EAB1D4', '#EFACCF', '#F4BBDE', '#F4B6D9',
        '#D7567F', '#DC6089', '#E16A93', '#E6749D', '#EB7EA7', '#F088B1', '#F592BB', '#FA9CC5', '#FFA6CF', '#FFB0D9',
        '#C71585', '#C71F8F', '#C73399', '#C73DA3', '#CC47AD', '#D151B7', '#D65BC1', '#E065CB', '#EA6FD5', '#F479DF',
        '#CD1039', '#CD1F48', '#CD2E57', '#CD3861', '#CD426B', '#D24C75', '#D7567F', '#DC6089', '#E16A93', '#E6749D',
        '#B9062F', '#B91A4D', '#BE2457', '#C32E61', '#C8386B', '#CD4275', '#D24C7F', '#D75689', '#DC6093', '#E16A9D',
      ]
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.rgb {
  display: inline-block;
  width: 100px;
  height: 100px;
  line-height: 100px;
  font-size: 12px;
}
</style>
