<template>
  <div v-if="quoteObj.content && quoteObj.author" class="quote">
    <span :class="`text-${textClass}`" class="content text-2xl font-bold italic">
      "{{ quoteObj.content }}"
    </span>
    <span
      class="author text-xl font-bold"
      :class="`text-${textClass}`"
    >
      - {{ quoteObj.author }}
    </span>
  </div>
</template>

<script>
export default {
  data () {
    return {
      quoteObj: {},
      textClass: ''
    }
  },
  created () {
    this.getQuote()
  },
  mounted () {
    this.$root.$on('changed-text-class', (val) => {
      this.textClass = val
    })
  },
  methods: {
    async getQuote () {
      const res = await fetch('https://api.quotable.io/random?maxLength=90')
      const data = await res.json()
      this.quoteObj = data
    }
  }
}
</script>
