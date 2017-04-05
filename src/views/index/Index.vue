<template>
	<div>
		<index-nav></index-nav>
		<div class="router-view">
			<router-view></router-view>
		</div>
		<index-footer></index-footer>
	</div>
</template>

<script>

import Nav from 'components/index/Nav';
import Footer from 'components/index/Footer';

	export default {
		components: {
			'index-nav': Nav,
			'index-footer': Footer
		}
	}
	
</script>

<style scoped>

.router-view {
    width: 980px;
    margin: 0 auto;
}

</style>