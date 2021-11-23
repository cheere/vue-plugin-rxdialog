<template>
  <div class="rxdialog_alert">
    <rx-dialog
      :show="show"
      v-show="show"
      :hideOnBlur="hideOnBlur"
      :mask-transition="maskTransition"
      :dialog-transition="dialogTransition"
      @onHide="_onHide"
    >
      <div class="rxdialog_alert_title">{{ title }}</div>
      <div class="rxdialog_alert_content">
        <slot> {{ content }} </slot>
      </div>
      <div class="rxdialog_alert_bottom">
        <template v-if="cancelText">
          <div class="rxdialog_alert_cancel cursor" @click="_onCancle">{{ cancelText}}</div>
          <div class="rxdialog_alert_middle"></div>
        </template>
        <div class="rxdialog_alert_primary cursor" @click="_onConfirm">{{ buttonText }}</div>
      </div>
    </rx-dialog>
  </div>
</template>

<script>
import RxDialog from '../Dialog.vue'
export default {
  components: { RxDialog },
  props: {
    show: Boolean,
    hideOnBlur: { type: Boolean, default: true },
    title: String,
    content: [String, Number, Object],
    buttonText: { type: String, default: 'ok' },
    cancelText: String,
    maskTransition: { type: String, default: 'rxdialog-fade' },
    dialogTransition: { type: String, default: 'rxdialog-com' }
  },
  watch: {
    show (val) {
      this.$emit(val ? 'on-show' : 'on-hide')
    }
  },
  methods: {
    _onHide () {
      this.show = false
      this.$emit('on-hide')
    },
    _onCancle () {
      this.onCancle && this.onCancle()
      this._onHide()
    },
    _onConfirm () {
      this.onConfirm && this.onConfirm()
      this._onHide()
    },
  }
}
</script>
