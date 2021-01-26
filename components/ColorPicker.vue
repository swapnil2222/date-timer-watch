<template>
  <div class="flex flex-row">
    <!-- {{ colorObj }} -->
    <span
      v-for="(value, key, idx) in colorObj"
      :key="idx"
      :class="activeColorId === idx ? 'active' : ''"
      :style="{ background: value }"
      class="flex items-center justify-center w-12 h-12 mr-4 rounded-full"
      @click="changeColor(idx, key)"
    />
  </div>
</template>

<script>
import colors from "../assets/js/colors.js";
export default {
  data() {
    return {
      colorObj: colors,
      activeColorId: 0,
    };
  },
  mounted() {
    this.changeColor(0, Object.keys(colors)[0]);
  },
  methods: {
    changeColor(id, classVal) {
      this.activeColorId = id;
      this.$root.$emit("changed-text-class", classVal);
    },
  },
};
</script>
<style>
.active {
  border: 5px solid #000;
}
</style>
