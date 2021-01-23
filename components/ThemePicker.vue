<template>
  <div>
    <ul class="flex flex-row justify-end">
      <li v-for="(color, idx) in colors" :key="idx" class="flex mr-2 pt-2">
        <component
          :is="`icon-${color}`"
          :class="getClasses(color)"
          @click="$colorMode.preference = color"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import IconSystem from '@/assets/icons/system.svg?inline'
import IconLight from '@/assets/icons/light.svg?inline'
import IconSepia from '@/assets/icons/sepia.svg?inline'
import IconDark from '@/assets/icons/dark.svg?inline'
export default {
  components: {
    IconSystem,
    IconLight,
    IconSepia,
    IconDark
  },
  data () {
    return {
      colors: ['dark', 'light', 'system', 'sepia']
    }
  },
  methods: {
    getClasses (color) {
      if (this.$colorMode.unknown) {
        return {}
      }
      return {
        preferred: color === this.$colorMode.preference,
        selected: color === this.$colorMode.value
      }
    }
  }
}
</script>

<style scoped>
.feather {
  position: relative;
  top: 0;
  cursor: pointer;
  padding: 2px;
  background-color: var(--bg-secondary);
  border: 2px solid var(--border-color);
  margin: 0;
  border-radius: 5px;
  transition: all 0.1s ease;
}

.feather:hover {
  top: -3px;
}

.feather.preferred {
  border-color: var(--color-primary);
  top: -3px;
}

.feather.selected {
  color: var(--color-primary);
}
</style>
