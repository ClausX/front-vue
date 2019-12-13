<template>
    <div class="example-collection">
        <FVPanel :isCollapsible=true>
            <template v-slot:head> 
                FVPanel
            </template>
            This is a simple panel (FVPanel). A panel can be collapsible (by using the prop isCollapsible), but that doesn't work atm. 
            A FVPanel has 3 slots: head, foot, and the unnamed default.
        </FVPanel>

        <FVPanel>
            <template v-slot:head> 
                FVButton and FVIconButton
            </template>
            
            This FVPanel contains a couple of different buttons (FVButton). One button is in the foot of the FVPanel 
            <br>
            <FVButton>
                OK
            </FVButton>

            <FVIconButton 
                :button-icon="saveIcon" 
                @click="handleSaveClick">
                Save
            </FVIconButton>

            <FVButton>
                <template v-slot:left> + </template>
                    Choose
                <template v-slot:right> - </template>
            </FVButton>

            <br>
            Buttons can have icons and have two slots: left and right. 
            
            <template v-slot:foot> 
                <FVIconButton :button-icon="sendIcon" @click="handleClick($event)">Send</FVIconButton>
            </template>

        </FVPanel>

        <FVPanel :isCollapsible="false"> 
            <template v-slot:head> FVInputGroup </template> 
            This panel contains an input group (FVInputGroup) with some input fields. A panel could contain many more of these, or many different things. 
     
            <BoringInputgroupExample />

        </FVPanel>

        <FVPanel :isCollapsible="false"> 
            <template v-slot:head> FVModal </template> 
            This input group has a modal (VFModal) attached to it, and its values. The modal has three slots: header, body, footer. As of right now, the content of the modal can look however you like.

            <ModalExample />
            
        </FVPanel>
        <div>
            If you've read this, you probably know that this project mostly is for me, Hampus Rönström, to practice and develop. The project is in its infancy, but I do however intend to develop it further and find new challenges to tackle in the creation of a Vue.js-component library. I do believe they will be many and diverse, and fun.
        </div>
    </div>
</template>

<script>
import BoringInputgroupExample from "./BoringInputgroupExample.vue";
import ModalExample from './ModalExample.vue';

export default {
  name: 'ExamplePage',
  props: {
    msg: String
  },
  components: {
      BoringInputgroupExample,
      ModalExample
  },
  data() {
    return {
      saveIcon: "fas fa-save",
      sendIcon: "fas fa-paper-plane"
    }
  },
  methods: {
    handleClick(event) {
      console.log(event.target.textContent);
    },

    handleSaveClick(event) {
      console.log(event.target.textContent);
      alert("SAVE (but nothing actually happens)");
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
</style>
