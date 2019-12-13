<template>
<transition name="modal">
    <div class="modal-mask" @keyup.esc="close"> <!-- bugged atm. Should also work to click outside the modal to close -->
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header head">
            <slot name="header">
              default header
            </slot>
            <span class="modal-close-button button" @click="close">
                <i class="fas fa-times-circle" />
            </span>
          </div>

          <div class="modal-body">
            <slot name="body">
              default body
            </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              
              <FVButton class="modal-default-button" @click="close">
                OK
              </FVbutton>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
    name: "modal",
    methods: {
        close() {
            this.$emit('close');
        }
    }
}
</script>

<style lang="scss" scoped>
    @import 'src/assets/sass/main.scss';

    .modal-close-button {
        color: $light-text-color;
        float: right;
    }
    .modal-mask {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
        display: table;
        transition: opacity .3s ease;
    }

    .modal-wrapper {
        display: table-cell;
        vertical-align: middle;
    }

    .modal-container {
        width: 400px;
        margin: 0px auto;
        background-color: $gray-1;
        box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
        transition: all .3s ease;
    }

    .modal-body {
        margin: 20px 0;
    }

    .modal-footer {
      text-align: right;
    }

    .modal-enter {
        opacity: 0;
    }

    .modal-leave-active {
       opacity: 0;
    }

    .modal-enter .modal-container,
    .modal-leave-active .modal-container {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }
</style>