<template>
	<div>
		<table>
			<tr>
				<td>run_id</td>
				<td>username</td>
				<td>sid</td>
				<td>status</td>
				<td>time_used</td>
				<td>memory_used</td>
				<td>code_length</td>
				<td>language</td>
				<td>submit_time</td>
			</tr>
			<tr v-for="item in statusList">
				<td> {{ item.run_id }} </td>
				<td> {{ item.username }} </td>
				<td> {{ item.sid }} </td>
				<td> {{ item.status }} </td>
				<td> {{ item.time_used }} </td>
				<td> {{ item.memory_used }} </td>
				<td> {{ item.code_length }} </td>
				<td> {{ item.language.compiler }} </td>
				<td> {{ item.submit_time }} </td>
			</tr>
		</table>
	</div>
</template>

<style scoped>
	table {
		margin-top: 20px;
	}
	table,
	tr td {
		border: 1px solid #ccc;
	}
	tr td {
		padding: 10px;
	}
</style>

<script>
	
import { getStatus } from 'src/api';

export default {
	data() {
		return {
			statusList: []
		}
	},
	created() {
		var $this = this;
		var res = getStatus(10);
		res.then(function(response) {
			var data = response.data.list_submissions_response;
			var lines = data.lines;
			$this.statusList = lines;
			console.log(data);
		})
	}
}

</script>