<template>
    <FVButton @click="$emit('click', $event)"><template v-slot:left><i :class="buttonIcon"/></template> <slot>btn</slot></FVButton>
</template>

<script>
export default {
    name: 'iconButton',
    props: {
        buttonIcon: String
    }
}
</script>