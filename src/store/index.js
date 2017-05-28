import Vue from 'vue'
import Vuex from 'vuex'
import login from './modules/login'
import ojList from './modules/ojList'

Vue.use(Vuex);

export default new Vuex.Store({

	modules: {
		login,
		ojList
	}

});