<template>
  <div>
    <div class="alert">
      <ul>
        <li v-for="(t,i) in alertArray" :key="'alert-'+i" class="cursor"
          @click="t.click"
        > {{i}} - {{ t.name }}</li>
      </ul>
      <div>
        <div @click="alertClose" class="cursor">close Alert -- 看看是否影响 操作</div>
      </div>
    </div>
    <hr>
    <div class="toast">
      <ul>
        <li v-for="(t,i) in toastArray" :key="'toast-'+i" class="cursor"
          @click="t.click"
        > {{i}} - {{ t.name }}</li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      alertArray: [
        {
          name: 'alert - string',
          click: this.alertString,
        },
        {
          name: 'alert - object - `title + content + cancel`',
          click: this.alertObj1,
        },
        {
          name: 'alert - object - `title + content + cancel + buttonText`',
          click: this.alertObj2,
        },
        {
          name: 'alert - object - `title + buttonText`',
          click: this.alertObj3,
        },
        {
          name: 'alert - object - Multiple',
          click: this.alertObj4,
        },
      ],
      toastArray: [
        {
          name: 'toast - string',
          click: this.toastString,
        },
        {
          name: 'toast - object',
          click: this.toastObj2,
        },
        {
          name: 'toast - object - Multiple',
          click: this.toastObj3,
        },
        {
          name: 'toast - object - warn',
          click: this.toastObj4,
        },
        {
          name: 'toast - object - success',
          click: this.toastObj5,
        },
        {
          name: 'toast - object - fail',
          click: this.toastObj6,
        },
      ]
    }
  },
  destroyed() {
    this.$rxdialog.alert.hide()
    this.$rxdialog.toast.hide()
  },
  mounted () {
    // this.alertString()
    // this.alertObj1()
    // this.alertObj2()
    // this.alertObj3()
  },
  methods: {
    test() {
      console.log('test')
    },
    alertString () {
      console.log('alertString')
      this.$nextTick(() => {
        setTimeout(() => {
          this.$rxdialog.alert.show('11111')
        }, 1000)
      })
    },
    alertObj1 () {
      console.log('alertObj1--')
      this.alertConfig({
        title: 'alert-title',
        content: 'alert-content',
        cancelText: 'cancel'
      })
    },
    alertObj2 () {
      this.alertConfig({
        title: 'alert-title',
        content: 'alert-content',
        cancelText: 'a-cancel',
        buttonText: 'a-ok'
      })
    },
    alertObj3 () {
      this.alertConfig({
        title: 'title',
        buttonText: '确定'
      })
    },
    alertObj4 () {
      // this.alertString()
      // this.alertObj1()
      this.alertObj2()
      setTimeout(() => {
        this.alertObj3()
      }, 1500)
    },
    alertConfig (options) {
      if (options && typeof options === 'object') {
        const watchClick = {
          onShow() {
            console.log('Plugin alert onShow')
          },
          onHide() {
            console.log('Plugin alert onHide')
          },
          onCancle() {
            console.log('Plugin alert 11')
            console.log('Plugin alert --- button -- cancel')
          },
          onConfirm() {
            console.log('Plugin alert 222')
            console.log('Plugin alert --- button -- confirm')
          },
        }
        Object.assign(options, watchClick)
        this.$nextTick(() => {
          console.log('App -> methods: alertConfig -> alertObj')
          this.$rxdialog.alert.show(options)
        })
      }
    },
    alertClose () {
      console.log('将要关闭 alert')
      setTimeout(() => {
        this.$rxdialog.alert.hide()
      }, 4000)
    },
    toastString () {
      this.$rxdialog.toast.show('toast')
    },
    toastObj2 () {
      this.$rxdialog.toast.show({
        time: 1000,
        text: 'hello world !!!',
        width: '90%',
        onHide() {
          console.log('-- Plugin toast onHide --')
        }
      })
    },
    toastObj3 () {
      this.toastString()
      setTimeout(() => {
        this.toastObj2()
      }, 100)
    },
    toastObj4 () {
      this.$rxdialog.toast.show({
        type: 'warn',
        time: 1000,
        text: 'hello world !!!',
        onHide() {
          console.log('-- Plugin toast onHide --')
        }
      })
    },
    toastObj5 () {
      this.$rxdialog.toast.show({
        type: 'succ',
        time: 1000,
        text: 'hello world !!!',
        onHide() {
          console.log('-- Plugin toast onHide --')
        }
      })
    },
    toastObj6 () {
      this.$rxdialog.toast.show({
        type: 'fail',
        time: 1000,
        text: 'hello world !!!',
        onHide() {
          console.log('-- Plugin toast onHide --')
        }
      })
    },
  }
}
</script>
