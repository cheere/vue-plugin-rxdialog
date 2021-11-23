import AlertComponent from './Alert.vue'
import mergeOprions from '../../utils/merge-vm-props'

let $vm
let watcher

export default {
  install (vue) {
    // console.log('alert install vue=', vue)
    if (!$vm) {
      const Alert = vue.extend(AlertComponent)
      $vm = new Alert({
        el: document.createElement('div')
      })
      document.body.appendChild($vm.$el)
    }

    const alert = {
      show (options) {
        watcher && watcher()
        mergeOprions($vm, options)
        if (typeof options === 'string') {
          // const view = $vm.$el.querySelector('.rxdialog_alert_content')
          // view && view.innerHTML && (view.innerHTML = options)
          $vm.content = options
        } else if (typeof options === 'object') {
          if (options.onCancle) {
            $vm.onCancle = options.onCancle
          }
          if (options.onConfirm) {
            $vm.onConfirm = options.onConfirm
          }
        }

        if (typeof options === 'object' && (options.onShow || options.onHide)) {
          watcher = $vm.$watch('show', (val) => {
            // console.log('Install Alert show =', val)
            val && options.onShow && options.onShow($vm)
            val === false && options.onHide && options.onHide($vm)
          })
        }

        $vm.show = true
      },

      hide () {
        $vm.show = false
      },

      isVisible () {
        return $vm.show
      }
    }

    // all Vux's plugins are included in this.$vux
    if (!vue.$rxdialog) {
      vue.$rxdialog = {
        alert
      }
    } else {
      vue.$rxdialog.alert = alert
    }

    vue.$rxdialog.alert.version = '$version'

    vue.mixin({
      created: function () {
        this.$rxdialog = vue.$rxdialog
      }
    })
  }
}
