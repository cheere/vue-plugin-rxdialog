<template>
  <div class="rxdialog_toast" v-show="show">
    <div
      class="rxdialog_toast_box rxdialog_no_select"
      :class="toastClass"
      :style="{ width: width }"
      :transition="transition"
    >
      <div class="rxdialog_toast_icon" v-show="type !== 'text'"></div>
      <div class="rxdialog_toast_content" v-if="text" v-html="text"></div>
      <div class="rxdialog_toast_content" v-else>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    time: { type: Number, default: 2000 },
    type: { type: String, default: 'none' },
    transition: { type: String, default: '' },
    width: { type: String, default: 'auto' },
    text: String,
  },
  data() {
    return {
      show: false
    }
  },
  computed: {
    toastClass () {
      return {
        rxdialog_toast_forbidden: this.type === 'warn',
        rxdialog_toast_success: this.type === 'succ',
        rxdialog_toast_fail: this.type === 'fail',
        rxdialog_toast_text: this.type === 'text'
      }
    }
  },
  methods: {
    alertShow() {
      this.show = true
      clearTimeout(this.timeout)
      this.timeout = setTimeout(() => {
        this.alertClose()
      }, this.time)
    },
    alertClose() {
      this.show = false
      clearTimeout(this.timeout)
      this.timeout = null
      this.$emit('on-hide')
    }
  }
}
</script>
