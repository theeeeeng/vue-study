<template>
  <div class="menu1sub2">
    <div class="rgb" v-for="(rgb, index) in rgbArr"
    v-bind:key="index"
    v-bind:style="{ backgroundColor: rgb }">
      {{rgb}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Menu1Sub2',
  data() {
    return {
      rgbArr: [
        '#3DFF92', '#47FF9C', '#51FFA6', '#5BFFB0', '#65FFBA', '#6FFFC4', '#79FFCE', '#75FFCA', '#7AFFCF', '#7FFFD4',
        '#55EE94', '#5FEE9E', '#69EEA8', '#73EEB2', '#7DEEBC', '#87EEC6', '#91F8D0', '#9BFFDA', '#A5FFE4', '#AFFFEE',
        '#66CDAA', '#70D2B4', '#7AD7BE', '#84DCC8', '#8EE1D2', '#98EBDC', '#9DF0E1', '#A2F5E6', '#A7FAEB', '#ACFFEF',
        '#AAEBAA', '#B4F0B4', '#BEF5BE', '#C8FAC8', '#D2FFD2', '#DCFFDC', '#E1FFE1', '#E6FFE6', '#EBFFEB', '#F0FFF0',
        '#80E12A', '#8AE634', '#94EB3E', '#9EF048', '#A8F552', '#B2FA5C', '#BCFF66', '#C1FF6B', '#C6FF70', '#CBFF75',
        '#52E252', '#5CE75C', '#66EC66', '#70F170', '#7AF67A', '#84FB84', '#89FB89', '#8EFB8E', '#93FB93', '#98FB98',
        '#64CD3C', '#6ED746', '#78E150', '#82EB5A', '#8CF064', '#96F56E', '#9BFA73', '#A0FA78', '#A5FA7D', '#AAFA82',
        '#13C7A3', '#18CCA8', '#1DD1AD', '#22D6B2', '#27DBB7', '#2CE0BC', '#31E0C1', '#36E0C6', '#3BE0CB', '#40E0D0',
        '#46B4B4', '#50BEBE', '#5AC8C8', '#64D2D2', '#6EDCDC', '#73E1E1', '#78E6E6', '#7DEBEB', '#82F0F0', '#87F5F5',
        '#20B2AA', '#2ABCB4', '#34C6BE', '#3ED0C8', '#48DAD2', '#52E4DC', '#57E9E1', '#5CEEE6', '#61F3EB', '#66F8F0',
        '#5F9EA0', '#69A8AA', '#73B2B4', '#7DBCBE', '#87C6C8', '#91D0D2', '#96D5D7', '#9BDADC', '#A0DFE1', '#A5E3E6',
        '#3CB371', '#46BD7B', '#50C785', '#5AD18F', '#64DB99', '#6EE5A3', '#73EAA8', '#78EFAD', '#7DF4B2', '#82F9B7',
        '#2E8B57', '#389561', '#429F6B', '#4CA975', '#56B37F', '#60BD89', '#65C28E', '#6AC793', '#6FCC98', '#74D19D',
        '#228B22', '#2C952C', '#369F36', '#40A940', '#4AB34A', '#54BD54', '#5EC75E', '#63CC63', '#68D168', '#6DD66D',
        '#497649', '#538053', '#5D8A5D', '#679467', '#719E71', '#7BA87B', '#80AD80', '#85B285', '#8AB78A', '#8FBC8F',
        '#006400', '#0A6E0A', '#147814', '#1E821E', '#288C28', '#329632', '#3CA03C', '#41A541', '#46AA46', '#4BAF4B',
        '#008C8C', '#0A9696', '#14A0A0', '#1EAAAA', '#28B4B4', '#32BEBE', '#37C3C3', '#3CC8C8', '#41CDCD', '#46D2D2',
        '#008080', '#0A8A8A', '#149494', '#1E9E9E', '#28A8A8', '#32B2B2', '#37B7B7', '#3CBCBC', '#41C1C1', '#46C6C6',
      ],
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
