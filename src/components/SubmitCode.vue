<template>
	<div>
		<div class="layout-header">
			<div class="mod-header">
				<h2>Submit your code</h2>
			</div>
		</div>
		<div class="layout-body clearfix">
			<div class="layout-main">
				<div class="mod-txt">
					<ul>
						<li>
							<div class="txt-hd">
								<h3>Problem ID</h3>
							</div>
							<div class="txt-bd">
								{{ $route.params.problemId }}
							</div>
						</li>
						<li>
							<div class="txt-hd">
								<h3>Language</h3>
							</div>
							<div class="txt-bd">
								<a href="#" class="lan-item active">G++</a>
								<a href="#" class="lan-item">GCC</a>
								<a href="#" class="lan-item">Java</a>
								<a href="#" class="lan-item">Pascal</a>
							</div>
						</li>
						<li>
							<div class="txt-hd">
								<h3>Source code</h3>
							</div>
							<div class="txt-bd">
								
							</div>
						</li>
					</ul>
				</div>
				<div class="mod-btn">
        			<div class="btn btn-submit">
        				<a href="javascript:;">Submit</a>
        			</div>
        		</div>
			</div>
		</div>
	</div>
</template>

<style scoped>

	.layout-body {
        margin-top: 16px;
    }
    .layout-body .layout-main {
        width: 72%;
        float: left;
    }
	.mod-txt ul li {
		margin-bottom: 24px;
	}
	.mod-txt .txt-bd .lan-item {
		display: inline-block;
		color: #5b5b5b;
		margin-right: 25px;
	}
	.mod-txt .txt-bd .lan-item.active {
		color: #22409a;
		font-weight: bold;
	}
	.mod-txt .txt-bd .lan-item:hover {
		color: #22409a;
		text-decoration: underline;
	}

</style>

<script>
import 'assets/css/mod-header.css';
import 'assets/css/mod-txt.css';
import 'assets/css/mod-btn.css';

	export default{
        data(){
            return{
               
            }
        }
    }
</script>