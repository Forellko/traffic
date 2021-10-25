<template>
  <TrafficTimer/>
</template>

<script>
import TrafficTimer from './components/TrafficTimer.vue'

export default {
  name: 'App',
  components: {
    TrafficTimer
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  overflow: hidden;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.vue-logo{
  z-index: 3;
}
</style>
