<template>
  <div class="menu1sub5">
    <div class="rgb" v-for="(rgb, index) in rgbArr"
    v-bind:key="index"
    v-bind:style="{ backgroundColor: rgb }">
      {{rgb}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Menu1Sub5',
  data() {
    return {
      rgbArr: [
        '#FF9696', '#FFA0A0', '#FFAAAA', '#FFB4B4', '#FFBEBE', '#FFC8C8', '#FFD2D2', '#FFDCDC', '#FFE6E6', '#FFF0F0',
        '#F08080', '#F08A8A', '#F09494', '#F59E9E', '#FAA8A8', '#FAB2B2', '#FAB7B7', '#FABCBC', '#FAC1C1', '#FAC6C6',
        '#F56E6E', '#F57878', '#F58282', '#F58C8C', '#F59696', '#F5A0A0', '#F5AAAA', '#FAB4B4', '#FABEBE', '#FAC8C8',
        '#F06464', '#F06E6E', '#F07878', '#F08282', '#F08C8C', '#F09696', '#F4A0A0', '#F4AAAA', '#F4B4B4', '#FEBEBE',
        '#FF0000', '#FF3232', '#FF4646', '#FF5050', '#FF5A5A', '#FF6464', '#FF6E6E', '#FF7878', '#FF8282', '#FF8C8C',
        '#EB0000', '#EB3232', '#EB4646', '#EB5050', '#EB5A5A', '#EB6464', '#F06E6E', '#F57878', '#FA8282', '#FA8C8C',
        '#CD0000', '#CD3C3C', '#CD4646', '#CD5050', '#D25A5A', '#D76464', '#DC6E6E', '#E17878', '#E68282', '#EB8C8C',
        '#CD5C5C', '#CD6666', '#CD7070', '#CD7A7A', '#D28484', '#D78E8E', '#DC9898', '#E6A2A2', '#EBACAC', '#F0B6B6',
        '#B90000', '#B93232', '#B93C3C', '#B94646', '#B95050', '#BE5A5A', '#C35F5F', '#C86464', '#CD6969', '#D26E6E',
        '#B22222', '#B24040', '#B24A4A', '#B25454', '#B75E5E', '#BC6868', '#C17272', '#CB7776', '#CB7C7C', '#D08180',
        '#A52A2A', '#AA3E3E', '#AF4848', '#B45252', '#BE5C5C', '#C36666', '#CD7070', '#CD7A7A', '#D28484', '#D78E8E',
        '#800000', '#803232', '#853C3C', '#8F4646', '#945050', '#9E5A5A', '#A36464', '#AD6E6E', '#B77878', '#C18282',
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
