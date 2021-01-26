<template>
  <div>
    <div
      v-if="hours && minutes"
      class="font-bold text-9xl"
      :class="`text-${textClass}`"
    >
      {{ hours }}
      <span :style="[blinkStyle]">:</span>
      {{ minutes }}
      <span class="text-5xl">{{ hours > 12 ? "PM" : "AM" }}</span>
    </div>
    <div v-else class="loading" :class="`text-${textClass}`">loading....</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hours: "",
      minutes: "",
      isBlink: false,
      textClass: "",
    };
  },
  computed: {
    blinkStyle() {
      if (!this.isBlink) {
        return { visibility: "hidden" };
      }
      return {};
    },
  },
  created() {
    setInterval(() => {
      this.getTime();
    }, 1000);
    setInterval(() => {
      this.isBlink = !this.isBlink;
    }, 500);
  },
  mounted() {
    this.$root.$on("changed-text-class", (val) => {
      this.textClass = val;
    });
  },
  methods: {
    getTime() {
      const date = new Date();
      this.hours =
        date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
      this.minutes =
        date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    },
  },
};
</script>
