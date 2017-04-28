// ajax get data 

import axios from 'axios';

const URL = 'http://10.160.30.179:8000';

axios.defaults.baseURL = URL;

export function login(name, pwd) {
	var data = {
		login_auth_request: {
			username: name,
			password: pwd
		}
	}
	return axios.post('/api/inline/login/auth',{
		data: {
			data
		}
	});
}

export function getProblemList(per_page, current_page, order_by, is_desc, filter_oj, filter_p_status) {
	var data = {
		per_page: per_page,
		current_page: current_page,
		order_by: order_by,
		is_desc: is_desc,
		filter_oj: filter_oj,
		filter_p_status: filter_p_status
	}
	return axios.get('/api/inline/problems', {
		params: {
			data
		}
	});
}