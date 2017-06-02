<template>
	<div>
		<div class="layout-header">
			<div class="header-nav">
				<sign-nav></sign-nav>
			</div>
			<div class="header-form">
				<div class="form-container clearfix">
					<div class="mod-sign">
						<div class="sign-bd">
							<div class="form-body">
								<div class="form-item">
									<label for="email">Email: </label>
									<input type="text" id="email" v-model.trim="formData.email" />
								</div>
								<div class="form-item">
									<label for="usr">Username: </label>
									<input type="text" id="usr" v-model.trim="formData.username" placeholder="用户名以字母开头，不少于4个字符" title="用户名以字母开头，不少于4个字符"/>
								</div>
								<div class="form-item">
									<label for="pwd">Password: </label>
									<input type="password" id="pwd" v-model.trim="formData.password" placeholder="密码最短8位" />
								</div>
								<div class="form-item captcha">
									<label for="captcha">Captcha: </label>
									<input type="text" id="captcha" v-model.trim="formData.captcha" @keydown.enter="signUp" />
									<img src="" alt="验证码" class="captcha-img" id="captchaImg" title="点击换一张" @click="setCaptcha()">
								</div>
								<div class="form-btn">
									<a href="javascript:;" class="btn" @click="signUp()">Sign up</a>
								</div>
								<div class="form-exp">
									<div class="error-msg">
										<p>{{ errorMsg }}</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
        <div class="layout-body">
        	<div class="layout-main">
        		
        	</div>
        </div>
	</div>
</template>

<style scoped>
	.layout-header {
		background: url('../assets/img/bg.jpeg');
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
	}
	.layout-header .header-nav .nav {
		border-bottom: 0;
	}
	.layout-header .nav a h1,
	.layout-header .nav .tabs li a,
	.layout-header .nav .nav-user a,
	.layout-header .nav .nav-user p {
		color: #e2e2e2;
	}
	.layout-header .header-form {
		width: 980px;
		margin: 0 auto;
	}
	.layout-header .header-form .form-container {
		width: 100%;
	}
	.layout-header .mod-sign {
		margin: 20px 0 20px 0;
		/*float: right;*/
	}
	.layout-header .mod-sign .form-item {
		margin-bottom: 16px;
	}
	.layout-header .mod-sign .sign-bd {
		padding: 32px 32px 16px;
	}
	.layout-header .mod-sign .form-item label {
		display: inline-block;
		width: 30%;
	}
	.layout-header .mod-sign .form-item input {
		width: 67%;
		height: 28px;
		display: inline-block;
	}
	.layout-header .mod-sign .form-item.captcha {
		margin-bottom: 5px;
	}
	.form-item.captcha img {
		width: 100%;
		height: auto;
		cursor: pointer;
	}
</style>

<script>
import 'assets/css/mod-sign.css';
import 'assets/css/mod-header.css';

import SignNav from './index/Nav.vue';

import { register, getCaptcha } from 'src/api';

	export default {
		data() {
			return {
				formData: {
					username: '',
					password: '',
					email: '',
					phone: '',
					school: '',
					motto: '',
					captcha: ''
				},
				errorMsg: ''
			}
		},
		mounted() {
			this.setCaptcha();
		},
		methods: {
			signUp: async function() {
				const erxp = /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/g;
				const usrrxp = /^[a-zA-Z][0-9a-zA-Z_]{3,19}$/g;
				if(!erxp.test(this.formData.email)) {
					this.errorMsg = 'email format error';
					return;
				}else if(!usrrxp.test(this.formData.username)) {
					this.errorMsg = 'username error';
					return;
				}else if(this.formData.password.length < 8) {
					this.errorMsg = 'password less than 8';
					return;
				}
				try {
					const res = await register(this.formData.username, this.formData.password, this.formData.email, this.formData.phone, this.formData.school, this.formData.motto, this.formData.captcha);
					if(res.status == 200) {
						console.log(res);
						var data = res.data;
						if(data.error) {
							this.errorMsg = data.error.msg;
							// alert(data.error.msg);
						}else {
							alert('success');
							this.$router.push('/signin');
						}
					}else {
						console.log('error');
					}
				} catch(err) {
					console.log(err);
				}
			},
			setCaptcha: function() {
				var captchaImg = document.getElementById('captchaImg');
				captchaImg.src = getCaptcha();
			}
		},
		components: {
			SignNav
		}
	}
</script>