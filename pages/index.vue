<template>
  <div class="flex flex-col disable-select">
    <theme-picker />
    <div class="flex mx-auto">
      <date />
    </div>
    <div class="flex mx-auto mt-2">
      <week-day />
    </div>
    <div class="flex mx-auto mt-24">
      <timer />
    </div>
    <div class="flex mx-auto mt-24">
      <quote />
    </div>
    <div class="flex mx-auto mt-24">
      <ColorPicker />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ColorPicker from "~/components/ColorPicker.vue";

export default Vue.extend({ components: { ColorPicker } });
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.disable-select {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>
