import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueCodeMirror from 'vue-codemirror'

Vue.use(VueCodeMirror);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router,
})

