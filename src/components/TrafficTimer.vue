<template>
  <div class="traffic-light">
    <div class="vue-logo">
      <span class="traffic-timer">{{ this.$store.state.timer / 1000 }}</span>
      <img alt="Vue logo" src="../assets/logo.png" />
      <div class="vue-log__controls">
        <button class="vue-log__controls-button" v-on:click="saveState">
          Save traffic light
        </button>
        <button class="vue-log__controls-button" v-on:click="deleteState">
          Delete traffic light
        </button>
      </div>
    </div>
    <router-view :key="$route.path"></router-view>
  </div>
</template>

<script>
import { useStore } from "vuex";

export default {
  name: "TrafficTimer",
  data() {
    return {
      prevRoute: null,
    };
  },
  methods: {
    saveState: function() {
      document.cookie = `timer=${this.$store.state.timer}`;
      document.cookie = `color=${this.$store.state.currentColor}`;
    },
    deleteState: function() {
      document.cookie = `timer=`;
      document.cookie = `color=`;
    },
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.prevRoute = from;
    });
  },
  mounted() {
    if (performance.navigation.type == 1) {
      const store = useStore();
      if (store.state.savedColor) {
        store.commit("toogleContinueFromSaveMode");
        return this.$router.push(`/${store.state.savedColor}`);
      }
    }
    setTimeout(()=>{ // this.$router.currentRoute.value.fullPath does not gain real meaning immediately
      if(this.$router.currentRoute.value.fullPath === '/'){
        return this.$router.push(`/red`);
      }
    },100)
  },
};
</script>

<style scoped>
.vue-logo {
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.vue-log__controls-button {
  margin-right: 64px;
  background: #7914ff;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 5px;
}

.vue-log__controls-button:hover {
  cursor: pointer;
  opacity: 0.9;
}

.vue-log__controls-button:last-child {
  margin-right: 0;
}

.traffic-timer {
  color: #000;
  font-family: sans-serif;
  margin-right: 10px;
}
</style>
