<template>
  <div v-if="quoteObj.content && quoteObj.author" class="quote">
    <span
      :class="`text-${textClass}`"
      class="text-2xl italic font-bold content"
    >
      "{{ quoteObj.content }}"
    </span>
    <span class="text-xl font-bold author" :class="`text-${textClass}`">
      - {{ quoteObj.author }}
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      quoteObj: {},
      textClass: "",
    };
  },
  created() {
    this.getQuote();
  },
  mounted() {
    this.$root.$on("changed-text-class", (val) => {
      this.textClass = val;
    });
  },
  methods: {
    async getQuote() {
      const res = await fetch("https://api.quotable.io/random?maxLength=90");
      const data = await res.json();
      this.quoteObj = data;
    },
  },
};
</script>
