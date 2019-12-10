import Vue from "vue";
import FVButton from "./Button.vue"

const Components = {
  FVButton
};

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name]);
});

export default Components;
