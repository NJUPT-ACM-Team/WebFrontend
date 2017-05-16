// ajax get data 

import axios from 'axios';

const URL = 'http://35.189.170.28:8000/';

axios.defaults.baseURL = URL;
axios.defaults.withCredentials = true;

export function login(name, pwd) {
	return axios.post('/api/inline/login/auth',{
		login_auth_request: {
			username: name,
			password: pwd
		}
	});
}

export function getProblemList(per_page, current_page, order_by, is_desc, filter_oj, filter_p_status=0) {
	return axios.get('/api/inline/problems', {
		params: {
			per_page: per_page,
			current_page: current_page,
			order_by: order_by,
			is_desc: is_desc,
			filter_oj: filter_oj,
			filter_p_status: filter_p_status
		}
	});
}

export function getOJList() {
	return axios.get('/api/inline/about', {
		params: {
			need_ojs_list: true
		}
	});
}

export function getContestList(per_page, current_page, order_by, is_desc, filter_ctype, filter_is_public, filter_is_virtual) {
	// ctype: ICPC/OI/CF
	// order_by: CID/TITLE/STARTTIME/ENDTIME/STATUS
	// filter_is_public: PUBLIC/PRIVATE
	// is_virtual: VIRTUAL/FORMAL
	return axios.get('/api/inline/contests', {
		params: {
			per_page: per_page,
			current_page: current_page,
			order_by: order_by,
			is_desc: is_desc,
			filter_ctype: filter_ctype,
			filter_is_public: filter_is_public,
			filter_is_virtual: filter_is_virtual
		}
	})
}

export function getProblemDetail(id) {
	return axios.get('/api/inline/problem', {
		params: {
			problem_sid: id
		}
	})
}

export function getStatus(per_page=20, current_page=1, is_desc=false, filter_username, filter_oj, filter_pid, filter_status_code, filter_language, filter_compiler) {
	return axios.get('/api/inline/status', {
		params: {
			per_page: per_page,
			current_page: current_page,
			is_desc: is_desc,
			filter_username: filter_username,
			filter_oj: filter_oj,
			filter_pid: filter_pid,
			filter_status_code: filter_status_code,
			filter_language: filter_language,
			filter_compiler: filter_compiler
		}
	})
}

export function postCode(problem_sid, code, language_id, is_shared=false, contest_id=0) {
	return axios.post('/api/inline/submit', {
		submit_request: {
			problem_sid: problem_sid,
			code: code,
			language_id: language_id,
			is_shared: is_shared,
			contest_id: contest_id
		}
	})
}