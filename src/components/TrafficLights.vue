<template>
  <div class="traffic-light">
    <TrafficColor
      :isActive="Object.keys(this.$store.state.trafficColors)[0] === colorName"
      colorName
      :backgroundColor="this.$store.state.trafficColors.red"
    ></TrafficColor>
    <TrafficColor
      :isActive="Object.keys(this.$store.state.trafficColors)[1] === colorName"
      colorName
      :backgroundColor="this.$store.state.trafficColors.yellow"
    ></TrafficColor>
    <TrafficColor
      :isActive="Object.keys(this.$store.state.trafficColors)[2] === colorName"
      colorName
      :backgroundColor="this.$store.state.trafficColors.green"
    ></TrafficColor>
  </div>
</template>

<script>
import TrafficColor from "./TrafficColor.vue";
import { useStore } from "vuex";
export default {
  name: "TrafficLights",
  props: {
    time: Number,
    colorName: String,
    nextColor: String,
    hexColor: String,
  },
  components: {
    TrafficColor,
  },
  data() {
    return {
      prevRoute: null,
      interval: 0,
    };
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.prevRoute = from;
    });
  },
  mounted() {
    const store = useStore();
    let continueFrom = 0;
    if (store.state.continueMode) {
      continueFrom = store.state.savedTimer;
      store.commit("toogleContinueFromSaveMode");
    }
    const colorTime = continueFrom || this.time;
    store.commit("setTimer", colorTime);
    store.commit("changeLightColor", this.colorName);
    this.interval = setInterval(() => {
      store.commit("reduceTimer");
    }, 1000);
    setTimeout(() => {
      const newNextColor =
        this.prevRoute && this.prevRoute.fullPath == "/red" ? "/green" : "/red";
      this.$router.push(this.nextColor || newNextColor);
    }, colorTime);
  },
  unmounted() {
    clearInterval(this.interval);
  },
};
</script>

<style scoped>
.traffic-light {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  z-index: -2;
  height: 100%;
  width: 100%;
}
</style>
