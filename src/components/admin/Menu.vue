<template>
	<div>
		<div class="mod-list">
			<ul class="menu-list">
				<li class="menu-item">
					<div class="mod-box">
						<div class="box-hd">
							<h3>Management</h3>
						</div>
						<div class="box-bd">
							<ul>
								<li class="">
									<router-link to="/admin/management/problems">Problems</router-link>
								</li>
								<li class="active">
									<router-link to="/admin/management/contests">Contest</router-link>
								</li>
								<li>
									<router-link to="/admin/management/users">Users</router-link>
								</li>
							</ul>
						</div>
					</div>
				</li>
				<li class="menu-item">
					<div class="mod-box">
						<div class="box-hd">
							<h3>System</h3>
						</div>
						<div class="box-bd">
							<ul>
<!-- 								<li>
									<router-link to="/">new</router-link>
								</li>
								<li>
									<router-link to="/">edit</router-link>
								</li> -->
							</ul>
						</div>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<style scoped>
	
	.mod-list {
		margin: 12px 0 100px 0;
	}

	.menu-list .menu-item {
		padding: 6px 0;
		border-bottom: 1px solid #e0e0e0;
	}

	.menu-list .menu-item:last-child {
		border-bottom: 0;
	}

	.mod-box .box-hd {
		padding-bottom: 0;
		line-height: 34px;
		width: auto;
		padding: 0 30px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		word-wrap: normal;
		color: #8d8d8d;
		position: relative;
	}

	.mod-box .box-bd ul li {
		line-height: 34px;
	}

	.mod-box .box-bd ul li:hover {
		background: #e7e7e7;
	}

	.mod-box .box-bd ul li.active {
		background: #22409a;
	}
	.mod-box .box-bd ul li.active a {
		color: #f3f3f3;
	}

	.mod-box .box-bd ul li a {
		display: block;
		width: auto;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		word-wrap: normal;
		color: #222222;
		padding: 0 0 0 48px;
	}

</style>

<script>

import 'assets/css/mod-box.css';

	export default {

	}
</script>