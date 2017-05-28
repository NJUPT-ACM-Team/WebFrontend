<template>
	<div class="nav">
		<div class="nav-container clearfix">
			<div class="nav-logo">
				<a href="/">
					<h1>NOJ</h1>
				</a>
			</div>
			<div class="nav-user">
				<div>
					admin
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.nav {
    width: 100%;
    height: 54px;
    border-bottom: 1px solid #e0e0e0;
    line-height: 54px;
}
.nav .nav-container {
    width: 1200px;
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
</style>

<script>
	
</script>