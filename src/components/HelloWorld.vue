<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <FVButton @click="handleClick">Click</FVButton>
    <FVButton @click="handleCloseButtonClick"><template v-slot:left>x</template> Close</FVButton>
    <FVIconButton :buttonIcon="saveIcon" @click="handleSaveClick">Save</FVIconButton>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      theEvent: "",
      saveIcon: "fas fa-save"
    }
  },
  methods: {
    handleClick(event) {
      console.log(event.target.textContent);
      this.theEvent = event;
    },

    handleCloseButtonClick(event) {
      console.log("close event: ", event.target.textContent);
    },

    handleSaveClick(event) {
      console.log(event.target.textContent);
      alert("SAVE");
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
a {
  color: #42b983;
}
</style>
