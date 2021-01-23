<template>
  <div class="text-3xl" :class="textClassName">
    {{ date }}
  </div>
</template>

<script>
export default {
  data () {
    return {
      date: new Date().toLocaleDateString('en-Us', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }),
      textClass: ''
    }
  },
  computed: {
    textClassName () {
      return `text-${this.textClass}`
    }
  },
  mounted () {
    this.$root.$on('changed-text-class', (val) => {
      this.textClass = val
    })
  }
}
</script>
