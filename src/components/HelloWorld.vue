<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <FVButton @click="handleClick">Click</FVButton>
    <FVButton @click="handleCloseButtonClick">Close</FVButton>
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
      theEvent: ""
    }
  },
  methods: {
    handleClick(event) {
      console.log(event.target.textContent);
      this.theEvent = event;
    },

    handleCloseButtonClick(event) {
      console.log("close event: ", event.target.textContent);
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
