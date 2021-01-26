<template>
  <div class="week-day flex flex-row">
    <div v-for="(day, id) in weekList" :key="id" class="flex text-3xl mr-4">
      <span
        :class="
          activeDay == id ? `text-${textClass} font-bold` : `text-${textClass}`
        "
        >{{ day }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      weekList: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      activeDay: 0,
      textClass: "",
    };
  },
  created() {
    const day = new Date().getDay();
    this.activeDay = day;
  },
  mounted() {
    this.$root.$on("changed-text-class", (val) => {
      this.textClass = val;
    });
  },
};
</script>
