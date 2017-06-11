// ajax get data 

import axios from 'axios';

const URL = 'http://35.189.170.28:8000/';
// const URL = 'http://10.160.31.231:8000/';

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

export function logout(goodbye) {
	return axios.post('/api/inline/logout', {
		logout_request: {
			goodbye: goodbye
		}
	});
}

export function register(name, pwd, email, phone, school, motto, captcha) {
	return axios.post('/api/inline/register', {
		captcha: captcha,
		register_request: {
			username: name,
			password: pwd,
			email: email,
			phone: phone,
			school: school,
			motto: motto
		}
	});
}

export function getCaptcha() {
	var ran = Math.random();
	return URL + '/api/inline/captcha?' + ran;
}

export function getProblemList(per_page=20, current_page=1, order_by, is_desc, filter_oj, filter_p_status=0) {
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
			need_ojs_list: true,
			need_username: true
		}
	});
}

export function getContestList(per_page, current_page, filter_is_virtual, order_by, is_desc, filter_ctype, filter_is_public) {
	// ctype: ICPC/OI/CF
	// order_by: CID/TITLE/STARTTIME/ENDTIME/STATUS
	// filter_is_public: PUBLIC/PRIVATE
	// is_virtual: VIRTUAL/FORMAL
	return axios.get('/api/inline/contests', {
		params: {
			per_page: per_page,
			current_page: current_page,
			filter_is_virtual: filter_is_virtual,
			order_by: order_by,
			is_desc: is_desc,
			filter_ctype: filter_ctype,
			filter_is_public: filter_is_public
		}
	});
}

export function getProblemDetail(id) {
	return axios.get('/api/inline/problem', {
		params: {
			problem_sid: id
		}
	});
}

export function getStatus(per_page=20, current_page=1, is_desc=false, filter_run_id, filter_username, filter_oj, filter_pid, filter_status_code, filter_language, filter_compiler) {
	return axios.get('/api/inline/status', {
		params: {
			per_page: per_page,
			current_page: current_page,
			is_desc: is_desc,
			filter_run_id: filter_run_id,
			filter_username: filter_username,
			filter_oj: filter_oj,
			filter_pid: filter_pid,
			filter_status_code: filter_status_code,
			filter_language: filter_language,
			filter_compiler: filter_compiler
		}
	});
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
	});
}

export function checkContestAccess(contest_id, pwd='') {
	return axios.post('/api/inline/contest/auth', {
		contest_auth_request: {
			contest_id: contest_id,
			password: pwd
		}
	});
}

export function showContest(contest_id) {
	return axios.get('/api/inline/contest/detail', {
		params: {
			contest_id: contest_id
		}
	});
}

export function getContestProblemsList(contest_id) {
	return axios.get('/api/inline/contest/problems', {
		params: {
			contest_id: contest_id
		}
	});
}

export function getContestProblemDetail(contest_id, problem_sid) {
	return axios.get('/api/inline/contest/problem', {
		params: {
			contest_id: contest_id,
			problem_sid: problem_sid
		}
	});
}

export function getContestListSubmissions(per_page, current_page, contest_id, filter_run_id, filter_username, filter_label, filter_status_code, filter_language, filter_compiler, is_desc) {
	return axios.get('/api/inline/contest/status', {
		params: {
			per_page: per_page,
			current_page: current_page,
			contest_id: contest_id,
			filter_run_id: filter_run_id,
			filter_username: filter_username,
			filter_label: filter_label,
			filter_status_code: filter_status_code,
			filter_language: filter_language,
			filter_compiler: filter_compiler,
			is_desc: is_desc
		}
	});
}

export function getContestRankList(contest_id, rank_type) {
	return axios.get('/api/inline/contest/ranklist', {
		params: {
			contest_id: contest_id,
			rank_type: rank_type
		}
	});
}

export function postContestCode(contest_id, problem_sid, code, language_id, is_shared) {
	return axios.post('/api/inline/contest/submit', {
		submit_request: {
			contest_id: contest_id,
			problem_sid: problem_sid,
			code: code,
			language_id: language_id,
			is_shared: is_shared
		}
	});
}

export function rejudge(run_id) {
	return axios.post('/api/inline/rejudge', {
		re_judge_request: {
			run_id: run_id
		}
	});
}

export function saveProblem(oj_name, oj_pid, title, description, input, output, sample_in, sample_out, source, hint, hide, is_spj, spj_code, limits) {
	return axios.post('/api/inline/save_problem', {
		save_problem_request: {
			oj_name: oj_name,
			oj_pid: oj_pid,
			title: title,
			description: description,
			input: input,
			output: output,
			sample_in: sample_in,
			sample_out: sample_out,
			source: source,
			hint: hint,
			hide: hide,
			is_spj: is_spj,
			spj_code: spj_code,
			limits: limits
		}
	});
}

export function saveContest(title, description, is_virtual, contest_type, start_time, end_time, lock_board_time, hide_others_status, is_hidden, password, problems) {
	return axios.post('/api/inline/contest/save', {
		save_contest_request: {
			title: title,
			description: description,
			is_virtual: is_virtual,
			contest_type: contest_type,
			start_time: start_time,
			end_time: end_time,
			lock_board_time: lock_board_time,
			hide_others_status: hide_others_status,
			is_hidden: is_hidden,
			password: password,
			problems: problems
		}
	});
}