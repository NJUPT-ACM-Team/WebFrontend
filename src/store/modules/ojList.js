
import * as types from '../mutation-types';

const state = {
	ojList: []
}

const getters = {
	allOj: state => state.ojList
}

const actions = {
	getAllOj: ({commit}, data) => commit(types.RECEIVE_OJLIST, data),
}

const mutations = {
	[types.RECEIVE_OJLIST]: (state, data) => {
		state.ojList = data;
	}
}

export default {
	state,
	getters,
	actions,
	mutations
}