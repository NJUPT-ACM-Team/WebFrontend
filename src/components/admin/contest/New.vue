<template>
	<div>
		<div class="layout-header">
			<div class="mod-header">
				<h2>New Contest</h2>
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
						<label for="type">Contest Type: </label>
						<input type="text" id="type" />
					</div>
					<div class="item">
						<label for="start-time">Start Time: </label>
						<input type="text" id="start-time" />
					</div>
					<div class="item">
						<label for="end-time">End Time: </label>
						<input type="text" id="end-time" />
					</div>
					<div class="item">
						<label for="lock-board-time">Lock Board Time: </label>
						<input type="text" id="lock-board-time" />
					</div>
					<div class="item">
						<label for="type">Contest Type: </label>
						<input type="text" id="type" />
					</div>
					<div class="item">
						<label for="hide-others-status">Hide Others' Status: </label>
						<input type="text" id="hide-others-status" />
					</div>
					<div class="item">
						<label for="is-hidden">Is Hidden: </label>
						<input type="text" id="is-hidden" />
					</div>
					<div class="item">
						<label for="password">Password: </label>
						<input type="text" id="password" />
					</div>
					<div class="item">
						<label for="problems">Problems: </label>
						<input type="text" id="problems" />
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