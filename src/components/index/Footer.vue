<template>
	<div class="footer">
		<div class="footer-inner clearfix">
			<div class="copyright">
				<span>&copy; 2017 NOJ</span>
				<span class="link">
					<a href="#">Blog</a>
					<a href="#">Contact us</a>
					<a href="#">About</a>
					<a href="#">Help</a>
				</span>
			</div>
			<div class="footer-logo">
				<a href="/">NOJ</a>
			</div>
			<div class="friend-link">
				<a href="#">POJ</a>
				<a href="#">ZOJ</a>
				<a href="#">HOJ</a>
				<a href="#">RQNOJ</a>
			</div>
		</div>
	</div>
</template>

<style scoped>
.footer {
    width: 980px;
    margin-top: 64px;
    margin-left: auto;
    margin-right: auto;
    border-top: 1px solid #e0e0e0;
}
.footer .footer-inner {
    padding: 32px 12px;
    font-size: 14px;
    position: relative;
}
.footer .copyright {
    float: left;
}
.footer .link a,
.footer .friend-link a {
    display: inline-block;
    margin: 0 5px;
    font-size: 14px;
    color: #22409a;
}
.footer .footer-logo {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    font-size: 16px;
}
.footer .footer-logo a {
    color: #22409a;
}
.footer .friend-link {
    float: right;
}
</style>