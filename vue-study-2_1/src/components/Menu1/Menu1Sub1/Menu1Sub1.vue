<template>
  <div class="menu1sub1">
    <div class="rgb" v-for="(rgb, index) in rgbArr"
    v-bind:key="index"
    v-bind:style="{ backgroundColor: rgb }">
      {{rgb}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Menu1Sub1',
  data() {
    return {
      rgbArr: [
        '#93DAFF', '#98DFFF', '#9DE4FF', '#A2E9FF', '#A7EEFF', '#ACF3FF', '#B0F7FF', '#B4FBFF', '#B9FFFF', '#C0FFFF',
        '#87CEFA', '#91D8FA', '#A5D8FA', '#AFDDFA', '#B9E2FA', '#C3E7FA', '#CDECFA', '#D7F1FA', '#E1F6FA', '#EBFBFF',
        '#00BFFF', '#0AC9FF', '#14D3FF', '#1EDDFF', '#28E7FF', '#32F1FF', '#3CFBFF', '#46FFFF', '#96FFFF', '#C8FFFF',
        '#00A5FF', '#00AFFF', '#00B9FF', '#00C3FF', '#00CDFF', '#00D7FF', '#00E1FF', '#00EBFF', '#00F5FF', '#00FFFF',
        '#1EA4FF', '#28AEFF', '#32B8FF', '#3CC2FF', '#46CCFF', '#50D6FF', '#5AE0FF', '#6EE0FF', '#6EEAFF', '#78F3FF',
        '#1E90FF', '#289AFF', '#32A4FF', '#3CAEFF', '#46B8FF', '#50C2FF', '#5ACCFF', '#64D6FF', '#6EE0FF', '#78EAFF',
        '#96A5FF', '#A0AFFF', '#AAB9FF', '#B4C3FF', '#BECDFF', '#C8D7FF', '#D2E1FF', '#DCEBFF', '#E8F5FF', '#F4FFFF',
        '#86A5FF', '#90AFFF', '#9AB9FF', '#A4C3FF', '#AECDFF', '#B8D7FF', '#CCE1FF', '#E0EBFF', '#EBF5FF', '#F9FFFF',
        '#6495ED', '#6E9FED', '#78A9ED', '#82B3ED', '#8CBDED', '#96C7ED', '#A0D1F7', '#AADBFF', '#B4E5FF', '#BEEFFF',
        '#0078FF', '#0A82FF', '#148CFF', '#1E96FF', '#28A0FF', '#32AAFF', '#3CB4FF', '#46BEFF', '#50C8FF', '#5AD2FF',
        '#0064FF', '#0A6EFF', '#1478FF', '#1E82FF', '#288CFF', '#3296FF', '#3CA0FF', '#46AAFF', '#50B4FF', '#5ABEFF',
        '#0000FF', '#3232FF', '#5050FF', '#646EFF', '#6478FF', '#6482FF', '#648CFF', '#6496FF', '#64A0FF', '#64AAFF',
        '#4169E1', '#4B73E1', '#557DE1', '#5F87E1', '#6991E1', '#739BE1', '#7DA5E1', '#87AFEB', '#91B9F5', '#9BC3FF',
        '#0064CD', '#0A6ECD', '#1478CD', '#1E82CD', '#288CD2', '#3296D7', '#3CA0E1', '#46AAEB', '#50B4F5', '#5ABEF5',
        '#5A5AFF', '#6464FF', '#6E6EFF', '#7878FF', '#8282FF', '#8C8CFF', '#A0A0FF', '#B4B4FF', '#C8C8FF', '#D2D2FF',
        '#7B68EE', '#8572EE', '#8F7CEE', '#9986EE', '#A390EE', '#AD9AEE', '#B7A4EE', '#C1AEEE', '#CBB8EE', '#D5C2EE',
        '#6A5ACD', '#7E6ECD', '#8878CD', '#9282CD', '#9C8CCD', '#A696CD', '#B0A0CD', '#BAAAD7', '#C4B4E1', '#CEBEE1',
        '#0000CD', '#2828CD', '#4646CD', '#6464CD', '#6E6ED7', '#7878E1', '#8282EB', '#8C8CF5', '#9696FF', '#A0A0FF',
        '#00008C', '#14148C', '#28288C', '#3C3C8C', '#50508C', '#646496', '#7878AA', '#8C8CBE', '#A0A0C8', '#B4B4DC',
        '#483D8B', '#52478B', '#5C518B', '#665B8B', '#70658B', '#7A6F95', '#84799F', '#8E83A9', '#988DB3', '#A297BD',
        '#000069', '#1E3269', '#323C73', '#3C467D', '#3C5087', '#3C5A91', '#46649B', '#506EA5', '#5A78AF', '#6482B9',
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
