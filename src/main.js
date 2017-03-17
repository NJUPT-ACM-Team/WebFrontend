import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueCodeMirror from 'vue-codemirror'

Vue.use(VueRouter);
Vue.use(VueCodeMirror);

const router = new VueRouter({
	mode: 'history',
	routes: [
    {
      path: '/',
      component: resolve => require(['components/Home'], resolve)
    },
    {
	    path: '/news',
      component:  resolve => require(['components/News'], resolve)
    },
    {
	    path: '/problem',
      component: resolve => require(['components/Problem'], resolve)
    },
    {
      path: '/problem/:problemId',
      name: 'problem',
      component: resolve => require(['components/ProblemDetail'], resolve)
    },
    {
      path: '/submit/:problemId',
      name: 'submit',
      component: resolve => require(['components/SubmitCode'], resolve)
    },
    {
	    path: '/contest',
      component: resolve => require(['components/Contest'], resolve)
    },
    {
	    path: '/user-rank',
      component: resolve => require(['components/UserRank'], resolve)
    },
    {
	    path: '/about',
      component: resolve => require(['components/About'], resolve)
    }
  ]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router,
})

