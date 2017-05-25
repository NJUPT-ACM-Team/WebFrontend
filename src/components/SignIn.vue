<template>
	<div>
		<div class="mod-sign">
			<div class="sign-hd">
				<h2>Sign in to NOJ</h2>
			</div>
			<div class="sign-bd">
				<div class="form-body">
					<div class="form-item">
						<label for="usr">Username</label>
						<input type="text" id="usr" v-model="username"/>
					</div>
					<div class="form-item">
						<label for="pwd">Password</label>
						<input type="password" id="pwd" v-model="pwd"/>
					</div>
					<div class="form-btn">
						<a href="javascript:;" class="btn" @click="enter()">Sign in</a>
					</div>
					<div class="form-exp">
						<router-link to="/signup" class="exp">New?Create an account.</router-link>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scope>
	
</style>

<script>
import 'assets/css/mod-sign.css';

import { login } from 'src/api';

	export default {
		data() {
			return {
				username: '',
				pwd: ''
			}
		},
		methods: {
			enter: function() {
				var res = login(this.username, this.pwd);
				res.then(function(response) {
					var data = response.data;
					if(data.error) {
						alert(data.error.msg);
					}else {
						console.log(data);
						alert(data.login_auth_response.msg);
						// location.href = "/";
					}
				})
			}
		}
	}
</script>