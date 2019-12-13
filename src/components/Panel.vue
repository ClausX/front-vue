<template>
    <div class="panel" :class="{collapsible: isCollapsible}">
        <div class="panel-head head">
            <span class="panel-label"><slot name="head"/></span>
            <span v-if="isCollapsible" class="toggle-collapse" @click="handleClick">
                <!-- TODO: Fix bug where click doesn't toggle icon, event though boolean variable in data is toggled. -->
                <i v-show="isCollapsed" class="fas fa-sort-up fa-2x"></i>
                <i v-show="!isCollapsed" class="fas fa-sort-down fa-2x"></i>
            </span>
        </div>
        <div class="panel-body">
            <slot />
        </div>
        <div class="panel-foot">
            <slot name="foot"/>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FVPanel',
    props: {
        isCollapsible: Boolean
    },
    data() {
        return {
            isCollapsed: false
        }
    },
    methods: {
        handleClick() {
            this.isCollapsed = !this.isCollapsed;
        }
    }
}
</script>

<style lang="scss" scoped>
    @import 'src/assets/sass/main.scss';
    .panel {
        box-shadow: 2px 4px 4px black; 
        margin: 8px;
        .panel-head {
            .panel-label {
                font-size: $large;
                font-weight: bold;
            }
            
            .toggle-collapse {
                float: right;
                cursor: pointer;
            } 
        }

        .panel-body {
            padding: 16px;
            background: $gray-1;
            color: $text-color;
            text-align: left;
        }

        .panel-foot {
            background: $gray-1;
            text-align: right;
        }
    }

</style>