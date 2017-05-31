<template>
	<div>
		<pre>{{ code }}</pre>
	</div>
</template>

<style scoped>
	
</style>

<script>

import { getContestListSubmissions } from 'src/api';

	export default {
		data() {
			return {
				code: ''
			}
		},
		created() {
			this.fetchData();
		},
		methods: {
			fetchData: async function() {
				var contestId = this.$route.params.contestId,
					runId = this.$route.params.runId;
				try {
					const res = await getContestListSubmissions(undefined,undefined,contestId,runId);
					if(res.status == 200) {
						let data = res.data.contest_list_submissions_response.lines[0];
						this.code = data.code;
						// console.log(res);
					}
				}catch(err) {
					console.log(err);
				}
			}
		}
	}
</script>