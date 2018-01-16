<template>
  <div class="menu1sub6">
    <div class="rgb" v-for="(rgb, index) in rgbArr"
    v-bind:key="index"
    v-bind:style="{ backgroundColor: rgb }">
      {{rgb}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Menu1Sub6',
  data() {
    return {
      rgbArr: [
        '#CD853F', '#CD8B45', '#CD904A', '#D2954F', '#D29A54', '#D79F59', '#D7A45E', '#E1A963', '#E1AE68', '#E6B36D',
        '#DB631F', '#E56D29', '#E57733', '#EA813D', '#EF8B47', '#EF904C', '#F49551', '#F49A56', '#F49F5B', '#F4A460',
        '#D2691E', '#D27328', '#D77D32', '#D7873C', '#DC9146', '#E19B50', '#E6A055', '#EBA55A', '#F0AA5F', '#F5AF64',
        '#A0522D', '#A05C37', '#A06641', '#A5704B', '#AA7A55', '#B4845F', '#B98E69', '#C39873', '#CDA27D', '#D7AC87',
        '#8B4513', '#8B4F1D', '#8B5927', '#8B6331', '#906D3B', '#9A7745', '#A4814F', '#AE8B59', '#B89563', '#C29F6D',
        '#DA70D6', '#DF75DB', '#E47AE0', '#E97FE5', '#EE84EA', '#F389EF', '#F88EF4', '#FD93F9', '#FF98FE', '#FF9DFF',
        '#BA55D3', '#BF5AD8', '#C45FDD', '#C964E2', '#CE69E7', '#D36EEC', '#D873F1', '#DD78F6', '#E27DFB', '#E782FF',
        '#9932CC', '#9E37D1', '#A33CD6', '#A841DB', '#AD46E0', '#B24BE5', '#B750EA', '#BC55EF', '#C15AF4', '#C65FF9',
        '#9400D3', '#9905D8', '#9E0ADD', '#A30FE2', '#A814E7', '#AD19EC', '#B21EF1', '#B723F6', '#BC28FB', '#C12DFF',
        '#942894', '#9E329E', '#A83CA8', '#B246B2', '#BC50BC', '#C65AC6', '#D064D0', '#DA6EDA', '#E478E4', '#EE82EE',
        '#8c008c', '#960a96', '#a014a0', '#aa1eaa', '#b428b4', '#be32be', '#c83cc8', '#d246d2', '#dc50dc', '#e65ae6',
        '#800080', '#8a0a8a', '#941494', '#9e1e9e', '#a828a8', '#b232b2', '#bc3cbc', '#c646c6', '#d050d0', '#da5ada',
        '#834683', '#8d508d', '#975a97', '#a164a1', '#ab6eab', '#b578b5', '#bf82bf', '#c98cc9', '#d396d3', '#dda0dd',
        '#828282', '#8c8c8c', '#969696', '#a0a0a0', '#aaaaaa', '#b4b4b4', '#bebebe', '#c8c8c8', '#d2d2d2', '#dcdcdc',
        '#000000', '#282828', '#323232', '#3c3c3c',
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
