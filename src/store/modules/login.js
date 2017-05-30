
import * as types from '../mutation-types';

const state = {
	isLogin: false,
	userInfo: {
		nickName: '',
		role: ''
	}
}

const getters = {
	getUserInfo: state => state.userInfo,
	checkStatus: state => state.isLogin
}

const actions = {
	login: ({commit}, data) => commit(types.LOGIN, data),
	logout: ({commit}) => commit(types.LOGOUT),
}

const mutations = {
	[types.LOGIN]: (state, data) => { 
		state.userInfo.nickName = data.nickname;
		// state.userInfo.role = data.role;
		state.isLogin = true;
	},
	[types.LOGOUT]: (state) => {
		state.userInfo = {},
		state.isLogin = false
	}
}

export default {
	state,
	getters,
	actions,
	mutations
}