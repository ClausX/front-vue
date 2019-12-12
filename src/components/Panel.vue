<template>
  <div class="panel" :class="{collapsible: isCollapsible}">
      <div class="panel-head">
        <span class="panel-label"><slot name="head"/></span>
        <span v-if="isCollapsible">
            <i v-if="!isCollapsed" class="toggle-collapse fas fa-sort-up fa-2x"></i>
            <i v-else class="toggle-collapse fas fa-sort-down fa-2x"></i>
        </span>
      </div>
      <div class="panel-body">
        <slot/>
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
        isCollapsible: Boolean,
        open: Boolean
    },
    data () {
        return {
            isCollapsed: false
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
            padding: 12px;
            background: $primary;
            text-align: left;
            color: $light-text-color;

            .panel-label {
                font-size: $large;
                font-weight: bold;
            }
            
            .toggle-collapse {
                float: right;
            }
        }

        .panel-body {
            padding: 16px;
            background: $gray-1;
            color: $text-color;
            text-align: left;
        }

        .panel-foot {
            background: $gray-2;
            text-align: right;
        }
    }

</style>