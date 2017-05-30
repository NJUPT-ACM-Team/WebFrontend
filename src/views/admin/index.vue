<template>
	<div>
		<index-nav></index-nav>
		<div class="layout-body">
			<div class="layout-aside">
				<index-menu></index-menu>
			</div>
			<div class="layout-main router-view">
				<router-view></router-view>
			</div>
		</div>
		<!-- <index-footer></index-footer> -->
	</div>
</template>

<script>

import Nav from 'components/admin/Nav';
import Footer from 'components/index/Footer';
import Menu from 'components/admin/Menu';

	export default {
		components: {
			'index-nav': Nav,
			'index-footer': Footer,
			'index-menu': Menu
		}
	}
	
</script>

<style scoped>

.layout-body {
    width: 1200px;
    margin: 20px auto;
    border: 1px solid #e0e0e0;
    background: #ffffff;
    display: flex;
}

.layout-body .layout-aside {
	width: 200px;
	flex: 1;
	box-sizing: border-box;
	border-right: 1px solid #e0e0e0;
}

.layout-body .layout-main {
	width: 1000px;
	flex: 5;
}

</style>