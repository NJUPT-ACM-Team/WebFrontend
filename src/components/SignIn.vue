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
						<input type="text" id="usr" />
					</div>
					<div class="form-item">
						<label for="pwd">Password</label>
						<input type="password" id="pwd" />
					</div>
					<div class="form-btn">
						<a href="javascript:;" class="btn">Sign in</a>
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

	export default {
		data() {
			return {

			}
		}
	}
</script>