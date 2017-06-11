<template>
	<div>
		<div class="layout-header">
			<div class="mod-header">
				<h2>New Problem</h2>
			</div>
		</div>
		<div class="layout-body">
			<div class="layout-main">
				<div class="form-body">
					<div class="item">
						<label for="title">Title: </label>
						<input type="text" id="title" />
					</div>
					<div class="item">
						<label for="description">Description: </label>
						<input type="text" id="description" />
					</div>
					<div class="item">
						<label for="input">Input: </label>
						<input type="text" id="input" />
					</div>
					<div class="item">
						<label for="output">Output: </label>
						<input type="text" id="output" />
					</div>
					<div class="item">
						<label for="sample-in">Sample Input: </label>
						<input type="text" id="sample-in" />
					</div>
					<div class="item">
						<label for="sample-out">Sample Output: </label>
						<input type="text" id="sample-out" />
					</div>
					<div class="item">
						<label for="source">Source: </label>
						<input type="text" id="source" />
					</div>
					<div class="item">
						<label for="hint">Hint: </label>
						<input type="text" id="hint" />
					</div>
					<div class="item">
						<label for="is-spj">Is SPJ: </label>
						<input type="text" id="is-spj" />
					</div>
					<div class="item">
						<label for="spj-code">SPJ Code: </label>
						<input type="text" id="password" />
					</div>
					<div class="item">
						<label for="limits">Limits: </label>
						<input type="text" id="limits" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
	.layout-header .mod-header h2 {
		padding-left: 30px;
		color: #000000;
	}

	.layout-body .layout-main {
		box-sizing: border-box;
		padding: 20px 40px;
	}

	.form-body .item {
		line-height: 24px;
		margin-bottom: 12px;
	}
	.form-body .item label {
		display: inline-block;
		font-size: 16px;
		width: 20%;
		color: #000000;
	}
	.form-body .item input {
		height: 24px;
		width: 68%;
	}
</style>

<script>

import 'assets/css/mod-header.css';
	
</script>