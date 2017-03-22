import SS from './SuperStore.js'
import Store from './Store.js'
import Action from './Action.js'
import Vue from 'vue'

// create the unique superstore
const SuperStore = new SS()
// make available to all components
const flueVue = {
  install(Vue, options) {
    Vue.prototype.$store = SuperStore
  }
};

export {
  SuperStore,
  Store,
  Action,
  flueVue
}
