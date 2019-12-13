<template>
  <div>
        <slot name="head"/>
        <slot />
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    @import 'src/assets/sass/main.scss';

    div {
        width: 20%;
        display:flex;
        flex-direction: column;
        background:  $gray-1;
        border-style: solid;
        border-width: 1px;  
        padding: 4px;
    }

    .labeled-input {
        padding: 4px;
    }

    input {
        float: right;
        width: 90%;
    }

</style>