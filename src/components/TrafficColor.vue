<template>
    <div
      class="traffic-color"
      v-bind:class="{
        active: isActive,
        blink:
          isActive &&
          this.$store.state.timer < 3000
      }"
      :style="{ background: backgroundColor }"
    ></div>
</template>

<script>
export default {
  name: "TrafficColor",
  props: {
    isActive: Boolean,
    backgroundColor: String
  }
};
</script>

<style scoped>
.traffic-color {
  width: 100%;
  height: 100%;
  opacity: 0.6;
}
.active.traffic-color {
  opacity: 1;
  z-index: -2;
}
.blink {
  animation: blink-animation 0.2s steps(15, start) infinite alternate;
}
@keyframes blink-animation {
  to {
    opacity: 0;
  }
  from {
    opacity: 1;
  }
}
</style>
