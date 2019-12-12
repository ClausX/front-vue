import Vue from "vue";
import FVButton from "./Button.vue";
import FVIconButton from "./IconButton.vue";

const Components = {
  FVButton,
  FVIconButton
};

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name]);
});

export default Components;
