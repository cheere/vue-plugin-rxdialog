# vue-plugin-rxdialog

UI Components built on Vue.

## Install
Using npm to install:

```sh
  npm install vue-plugin-rxdialog --save-dev
```

Using yarn or pnpm:
```sh
  # with yarn
  yarn add vue-plugin-rxdialog

  # with pnpm
  pnpm add vue-plugin-rxdialog
```

## Quickstart
```js
  import RxdialogPlugin from 'vue-plugin-rxdialog'
  import 'vue-plugin-rxdialog/lib/vue-plugin-rxdialog.css'
  Vue.use(RxdialogPlugin)

  // or
  import { alert, toast } from 'vue-plugin-rxdialog'
  import 'vue-plugin-rxdialog/lib/vue-plugin-rxdialog.css'
  Vue.use(alert)
  Vue.use(toast)
```


## Usage
alert
```js
  methods: {
    showAlert () {
      this.$rxdialog.alert.show('hello world!')
    },
    showAlert2 () {
      this.$rxdialog.alert.show({
        title: 'title - text',
        content: 'content',
        cancelText: 'cancel',
        buttonText: 'ok',
        onShow() {
          console.log('onShow')
        },
        onHide() {
          console.log('onHide')
        },
        onCancle() {
          console.log('onCancel')
        },
        onConfirm() {
          console.log('onConfirm')
        },
      })
    }
  }
```
toast
```js
  methods: {
    showToast () {
      this.$rxdialog.toast.show('toast')
    },
    showToast2 () {
      this.$rxdialog.toast.show({
        type: 'fail', // text warn succ fail
        time: 1000,
        text: 'hello world !!!',
        onHide() {
          console.log('-- Plugin toast onHide --')
        }
      })
    }
  }
```

# License
[MIT](https://github.com/cheere/vue-plugin-rxdialog/blob/main/LICENSE)