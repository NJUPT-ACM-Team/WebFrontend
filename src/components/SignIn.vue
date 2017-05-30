<template>
	<div>
		<div class="mod-sign">
			<div class="sign-hd">
				<h2>Sign in to <router-link to="/">NOJ</router-link></h2>
			</div>
			<div class="sign-bd">
				<div class="form-body">
					<div class="form-item">
						<label for="usr">Username</label>
						<input type="text" id="usr" v-model="username"/>
					</div>
					<div class="form-item">
						<label for="pwd">Password</label>
						<input type="password" id="pwd" v-model="pwd" @keydown.enter="enter" />
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
			enter: async function() {
				try {
					const res = await login(this.username, this.pwd);
					if(res.status == 200) {
						let data = res.data.login_auth_response;
						if(data.error) {
							alert(data.error.msg);
						}else {
							// console.log(data);
							let userInfo = {
								nickname: data.username,
								role: 'common'
							}
							this.$store.dispatch('login', userInfo);
							alert(data.msg);
							this.$router.go(-1);
						}
					}else {
						console.log('login error');
					}
				}catch(err) {
					console.log(err);
				}
			}
		}
	}
</script>