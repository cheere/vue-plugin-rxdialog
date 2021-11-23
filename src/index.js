import PluginAlert from './plugins/alert'
import PluginToast from './plugins/toast'

const install = Vue => {
  // console.log('doing install ...')
  PluginAlert.install(Vue)
  PluginToast.install(Vue)
}

const plugin = {
  install,
  version: '$version', // webpack-replace-loader
  alert: PluginAlert,
  toast: PluginToast,
}

export default plugin

// Auto-install
let GlobalVue = null
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue
}

if (GlobalVue) {
  GlobalVue.use(plugin)
}
// else {
//   console.log('no install ...')
// }
