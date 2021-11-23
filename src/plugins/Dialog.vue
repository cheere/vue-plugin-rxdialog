<template>
  <div class="rxdialog_box">
    <!-- <transition :name="maskTransition">
    </transition> -->
    <div
      class="rxdialog_mask"
      v-show="show"
      :transition="maskTransition"
      @click="_onHide"
    ></div>
    <div class="rxdialog_content" v-show="show">
      <div class="rxdialog_content_box rxdialog_no_select">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    show: Boolean,
    hideOnBlur: Boolean,
    maskTransition: { type: String, default: 'rxdialog-fade' },
    dialogTransition: { type: String, default: 'rxdialog-box' },
  },
  methods: {
    _onHide () {
      if (!this.hideOnBlur) {
        console.log('Dialog onHide')
        this.$emit('onHide')
      }
    }
  },
}
</script>
