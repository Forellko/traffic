import { createStore } from "vuex";
import {getCookie} from "../utils";

export default createStore({
  state: {
    timer: 0,
    currentColor: 'red',
    savedColor: getCookie('color'),
    savedTimer: getCookie('timer'),
    continueMode: false,
    trafficColors: {
      red: '#cc3232',
      yellow: '#e7b416',
      green: '#2dc937'
    }
  },
  mutations: {
    setTimer(state, timer) {
      state.timer = timer
    },
    reduceTimer(state) {
      state.timer-= 1000;
    },
    changeLightColor(state, color){
      state.currentColor = color;
    },
    toogleContinueFromSaveMode(state){
      state.continueMode = !state.continueMode;
    }
  }
  });