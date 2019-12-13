import Vue from "vue";
import FVButton from "./Button.vue";
import FVIconButton from "./IconButton.vue";
import FVPanel from "./Panel.vue";
import FVInputGroup from "./InputGroup.vue";

const Components = {
  FVButton,
  FVIconButton,
  FVPanel,
  FVInputGroup
};

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name]);
});

export default Components;
