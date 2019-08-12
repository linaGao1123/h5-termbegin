import Vue from 'vue'
import Vuex from 'vuex'
import index from './modules/index'
import 'babel-polyfill' // 客户端低版本内核不兼容promise

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    index
  }
})
