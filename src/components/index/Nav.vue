<template>
	<div class="nav">
		<div class="nav-container clearfix">
			<div class="nav-logo">
				<a href="/">
					<h1>NOJ</h1>
				</a>
			</div>
			<div class="nav-tabs">
				<ul class="tabs">
					<li class="tabs-item">
						<router-link to="/news">News</router-link>
					</li>
					<li class="tabs-item">
						<router-link to="/problems">Problems</router-link>
					</li>
					<li class="tabs-item">
						<router-link to="/status">Status</router-link>
					</li>
					<li class="tabs-item">
						<router-link to="/contests">Contests</router-link>
					</li>
					<li class="tabs-item">
						<router-link to="/user-rank">User Rank</router-link>
					</li>
					<li class="tabs-item">
						<router-link to="/about">About</router-link>
					</li>
				</ul>
			</div>
			<div class="nav-user">
				<div v-if="isSignin">
					<p>
						<span>{{ userInfo.nickName }}</span>
						<a href="javascript:;" @click="logout">Logout</a>	
					</p>
					
				</div>
				<div v-else>
					<p>
						<router-link to="/signin" class="sign-in">Sign in</router-link>/
						<router-link to="/signup" class="sign-up">Sign up</router-link>
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

import { mapGetters } from 'vuex';
import { logout } from 'src/api';

	export default {
		data() {
			return {
				
			}
		},
		created() {

		},
		computed: mapGetters({
			isSignin: 'checkStatus',
			userInfo: 'getUserInfo'
		}),
		methods: {
			logout: async function() {
				try{
					const res = await logout();
					if(res.status == 200) {
						let data = res.data.logout_response;
						if(data.error) {
							alert('error');
						}else {
							alert('logout success');
							this.$store.dispatch('logout');
							mapGetters({
								isSignin: 'checkStatus',
								userInfo: 'getUserInfo'
							});
						}
					}
				}catch(err) {
					console.log(err);
				}
			}
		}
	}
</script>

<style scoped>
.nav {
    width: 100%;
    height: 54px;
    border-bottom: 1px solid #e0e0e0;
    line-height: 54px;
}
.nav .nav-container {
    width: 980px;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
}
.nav .nav-logo {
    float: left;
    height: 100%;
}
.nav-logo h1{
    color: #22409a;
    font-size: 18px;
}

.nav-tabs {
    float: left;
    margin-left: 120px;
}
.nav-tabs .tabs li {
    display: inline-block;
    padding: 0 12px;
}

.nav-user {
    float: right;
}
.nav-user p {
    font-size: 18px;
}
.nav-user a {
    color: #22409a;
    font-size: 16px;
    margin: 0 10px;
}
.nav-user a:hover {
    text-decoration: underline;
}

.tabs li a {
    color: rgba(0,0,0,0.8);
}
.tabs li a:hover {
    color: rgba(0,0,0,1);
}
</style>