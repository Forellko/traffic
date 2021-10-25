import { createApp } from "vue";
import App from "./App.vue";
import * as VueRouter from "vue-router";
import TrafficLights from "./components/TrafficLights.vue";
import store from "./store";

const routes = [
  {
    path: "/red",
    name: "Red",
    component: TrafficLights,
    props: {
      nextColor: '/yellow',
      time: 10000,
      colorName: 'red',
      hexColor: "#cc3232"
    },
  },
  {
    path: "/yellow",
    name: "Yelow",
    component: TrafficLights,
    props:{
      time: 3000,
      colorName: 'yellow',
      hexColor: '#e7b416'
    }
  },
  {
    path: "/green",
    name: "Green",
    component: TrafficLights,
    props:{
      nextColor: '/yellow',
      time: 15000,
      colorName: 'green',
      hexColor: '#2dc937'
    }
  },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
});

createApp(App)
  .use(store)
  .use(router)
  .mount("#app");
