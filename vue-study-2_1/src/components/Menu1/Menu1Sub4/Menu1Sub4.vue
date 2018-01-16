<template>
  <div class="menu1sub4">
    <div class="rgb" v-for="(rgb, index) in rgbArr"
    v-bind:key="index"
    v-bind:style="{ backgroundColor: rgb }">
      {{rgb}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Menu1Sub4',
  data() {
    return {
      rgbArr: [
        '#FAEB78', '#FAF082', '#FAF58C', '#FAFA96', '#FAFAA0', '#FAFAAA', '#FAFAB4', '#FAFABE', '#FAFAD2', '#FAFAD2',
        '#FFDC3C', '#FFE146', '#FFE650', '#FFEB5A', '#FFF064', '#FFF56E', '#FFFA78', '#FFFA82', '#FFFF8C', '#FFFF96',
        '#FFC81E', '#FFD228', '#FFD732', '#FFDC3C', '#FFE146', '#FFE650', '#FFEB5A', '#FFF064', '#FFF56E', '#FFF978',
        '#FFB400', '#FFBE0A', '#FFC314', '#FFC81E', '#FFCD28', '#FFD232', '#FFD73C', '#FFDC46', '#FFE150', '#FFE65A',
        '#FDCD8C', '#FDD296', '#FDD7A0', '#FDDCAA', '#FDE1B4', '#FDE6BE', '#FDEBC8', '#FDF5D2', '#FDF5DC', '#FDF5E6',
        '#FAC87D', '#FACD87', '#FAD291', '#FAD79B', '#FADCA5', '#FAE1AF', '#FAE6B9', '#FAEBC3', '#FAEBCD', '#FAEBD7',
        '#FFA500', '#FFAF0A', '#FFB914', '#FFC31E', '#FFCD28', '#FFD732', '#FFDC37', '#FFE13C', '#FFE641', '#FFEB46',
        '#FF9100', '#FF9B00', '#FFA500', '#FFAF00', '#FFB900', '#FFC300', '#FFC800', '#FFCD00', '#FFD200', '#FFD700',
        '#FF8200', '#FF8C0A', '#FF9614', '#FFA01E', '#FFAA28', '#FFB432', '#FFB937', '#FFBE3C', '#FFC341', '#FFC846',
        '#FFA98F', '#FFB399', '#FFBDA3', '#FFC7AD', '#FFD1B7', '#FFDBC1', '#FFE0C6', '#FFE5CB', '#FFEAD0', '#FFEFD5',
        '#FFA374', '#FFAD7E', '#FFB788', '#FFC192', '#FFCB9C', '#FFD0A1', '#FFD5A6', '#FFDAAB', '#FFDFB0', '#FFE4B5',
        '#FF9473', '#FF9E7D', '#FFA887', '#FFB291', '#FFBC9B', '#FFC6A5', '#FFD0AF', '#FFD0AF', '#FFD5B4', '#FFDAB9',
        '#FF7F50', '#FF895A', '#FF9364', '#FF9D6E', '#FFA778', '#FFB182', '#FFBB8C', '#FFC091', '#FFC596', '#FFCA9B',
        '#CD853F', '#CD8F49', '#D29953', '#D7A35D', '#DCAD67', '#E1B771', '#E6C17B', '#EBC680', '#F0CB85', '#F5D08A',
        '#D2691E', '#D27328', '#D27D32', '#D7873C', '#DC9146', '#E19B50', '#E6A55A', '#EBAA5F', '#EBAF64', '#F0B469',
        '#AE5E1A', '#B86824', '#C2722E', '#CC7C38', '#D68642', '#E0904C', '#E59551', '#EA9A56', '#EF9F5B', '#F4A460',
        '#8B4513', '#8B4F1D', '#8B5927', '#8B6331', '#906D3B', '#957745', '#9F814F', '#A48654', '#A98B59', '#AE905E',
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
