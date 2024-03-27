// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './store/store'
import App from './App'
import router from './router'
console.log('你好呀')
console.log('commit2')
console.log('rever1')
console.log('rever2')
console.log('rever3')
console.log('rever4')
console.log('rever-change')
console.log('dev1-change')
console.log('dev2-change')
console.log('dev-1-change')
console.log('dev-2-change')

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
