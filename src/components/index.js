import Vue from "vue";
import FVButton from "./Button.vue";
import FVIconButton from "./IconButton.vue";
import FVPanel from "./Panel.vue";

const Components = {
  FVButton,
  FVIconButton,
  FVPanel
};

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name]);
});

export default Components;
