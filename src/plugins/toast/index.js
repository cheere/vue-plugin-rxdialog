import ToastComponent from './Toast.vue'
import mergeOprions from '../../utils/merge-vm-props'

let $vm
let watcher

export default {
  install (vue) {
    // console.log('toast install vue=', vue)
    if (!$vm) {
      const Toast = vue.extend(ToastComponent)
      $vm = new Toast({
        el: document.createElement('div')
      })
      document.body.appendChild($vm.$el)
    }

    const toast = {
      show (options) {
        watcher && watcher()
        if ($vm.show) {
          this._componentMethods('alertClose')
          watcher = null
        }
        mergeOprions($vm, options)
        if (typeof options === 'string') {
          $vm.text = options
        }
        if (typeof options === 'object' && (options.onHide)) {
          watcher = $vm.$watch('show', (val) => {
            val && options.onShow && options.onShow($vm)
            val === false && options.onHide && options.onHide($vm)
          })
        }
        this._componentMethods('alertShow')
      },

      hide () {
        this._componentMethods('alertClose')
      },

      _componentMethods(method) {
        if (!$vm) return
        const mtd = $vm[method]
        if (!mtd) return
        if (mtd && typeof mtd === 'function') {
          mtd()
        }
      }
    }

    // all Vux's plugins are included in this.$vux
    if (!vue.$rxdialog) {
      vue.$rxdialog = {
        toast
      }
    } else {
      vue.$rxdialog.toast = toast
    }

    vue.$rxdialog.toast.version = '$version'

    vue.mixin({
      created: function () {
        this.$rxdialog = vue.$rxdialog
      }
    })
  }
}
