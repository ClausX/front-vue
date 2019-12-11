<template>
    <button class="btn" @click="$emit('click', $event)">
        <slot>Button</slot>
    </button>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
    @import 'src/assets/sass/main.scss';

    .btn {
            
        border-radius:5px;
        border: none;
        outline:none;
        cursor:pointer;
        font-size: $large;
        padding:6px 18px;
        margin: 6px;
        color: $light-text-color;
        background: $primary;

        &:hover {
            background: $primary-dark;
        }

        &:active {
            position:relative;
            top:1px;
        }
    }

</style>