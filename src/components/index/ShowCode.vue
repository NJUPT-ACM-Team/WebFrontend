<template>
	<div>
		<pre>{{ code }}</pre>
		<!-- <p>{{sc}}</p> -->
		<div ref="ads" id="ads"></div>
	</div>
</template>

<style scoped>

</style>

<script>

import { getStatus } from 'src/api';

	export default {
		data() {
			return {
				code: "",
				test: `&lt;script&gt;alert('hh')&lt;/script&gt;`
			}
		},
		created() {
			this.fetchData();
		},
		mounted() {
			
		},
		methods: {
			fetchData: async function() {
				var runId = this.$route.params.runId;
				try {
					const res = await getStatus(undefined,undefined,undefined,runId);
					if(res.status == 200) {
						let data = res.data.list_submissions_response.lines[0];
						this.code = data.code;
					}
				}catch(err) {
					console.log(err);
				}
			}
		}
	}
</script>
