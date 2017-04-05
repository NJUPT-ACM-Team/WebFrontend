<template>
	<div>
		<div class="layout-header">
			<div class="mod-slider">
				<div class="slider-wrapper">
					<ul class="slider-list">
						<li class="slider-item">
							<a href="#" class="slider-pic">
								<img src="../../assets/img/acm.jpg" alt="acm" class="pic">
							</a>
							<div class="slider-txt">
								NOJ update!
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="layout-body clearfix">
			<div class="layout-main">
				<div class="main-content">
					<div class="tit">
						<h3>News</h3>
					</div>
					<ul class="clearfix">
						<li>
							<a href="#">
								<div class="mod-thumbnail">
									<div class="thumbnail-img">
										<img src="../../assets/img/news.jpg" alt="">
									</div>
									<div class="thumbnail-content">
										<h4 class="content-tit">我校学生在第36届ACM国际大学生程序设计竞赛亚洲区预赛取得佳绩</h4>
										<div class="content-txt">
											<p class="content-date">2011-01-10</p>
											<p class="content-dec">近日，第36届ACM国际大学生程序设计竞赛（简称ACM/ICPC）亚洲区预赛落下帷幕，我校代表队分别参加了北京、成都、福州、上海、大连5个中国大陆赛区现场赛，获得2个银奖和4个铜奖</p>
										</div>
									</div>
								</div>
							</a>
						</li>
						<li>
							<a href="#">
								<div class="mod-thumbnail">
									<div class="thumbnail-img">
										<img src="../../assets/img/news.jpg" alt="">
									</div>
									<div class="thumbnail-content">
										<h4 class="content-tit">我校学生在第36届ACM国际大学生程序设计竞赛亚洲区预赛取得佳绩</h4>
										<div class="content-txt">
											<p class="content-date">2011-01-10</p>
											<p class="content-dec">近日，第36届ACM国际大学生程序设计竞赛（简称ACM/ICPC）亚洲区预赛落下帷幕，我校代表队分别参加了北京、成都、福州、上海、大连5个中国大陆赛区现场赛，获得2个银奖和4个铜奖</p>
										</div>
									</div>
								</div>
							</a>
						</li>
						<li>
							<a href="#">
								<div class="mod-thumbnail">
									<div class="thumbnail-img">
										<img src="../../assets/img/news.jpg" alt="">
									</div>
									<div class="thumbnail-content">
										<h4 class="content-tit">我校学生在第36届ACM国际大学生程序设计竞赛亚洲区预赛取得佳绩</h4>
										<div class="content-txt">
											<p class="content-date">2011-01-10</p>
											<p class="content-dec">近日，第36届ACM国际大学生程序设计竞赛（简称ACM/ICPC）亚洲区预赛落下帷幕，我校代表队分别参加了北京、成都、福州、上海、大连5个中国大陆赛区现场赛，获得2个银奖和4个铜奖</p>
										</div>
									</div>
								</div>
							</a>
						</li>
						<li>
							<a href="#">
								<div class="mod-thumbnail">
									<div class="thumbnail-img">
										<img src="../../assets/img/news.jpg" alt="">
									</div>
									<div class="thumbnail-content">
										<h4 class="content-tit">我校学生在第36届ACM国际大学生程序设计竞赛亚洲区预赛取得佳绩</h4>
										<div class="content-txt">
											<p class="content-date">2011-01-10</p>
											<p class="content-dec">近日，第36届ACM国际大学生程序设计竞赛（简称ACM/ICPC）亚洲区预赛落下帷幕，我校代表队分别参加了北京、成都、福州、上海、大连5个中国大陆赛区现场赛，获得2个银奖和4个铜奖</p>
										</div>
									</div>
								</div>
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div class="layout-aside">
				<div class="aside-content">
					<div class="tit">
						<h3>Announce</h3>
					</div>
					<div class="contest-list">
						<ul>
							<li>
								<div class="mod-info">
									<div class="info-hd">
										<div class="info-tag in-progress">
											<span>in progress</span>
										</div>
										<div class="info-con">
											<span>xxxx</span>
										</div>
										<div class="info-act">
											<span></span>
										</div>
									</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

import 'assets/css/mod-slider.css';
import 'assets/css/mod-thumbnail.css';
import 'assets/css/mod-info.css';

export default {

}

</script>

<style scoped>
	.layout-body {
		margin-top: 30px;
	}
	.layout-body .layout-aside {
        width: 30%;
        float: right;
    }
    .layout-body .layout-main {
        width: 70%;
        float: left;
    }
    .layout-main .main-content .tit,
    .layout-aside .aside-content .tit {
    	font-size: 18px;
    	color: #333333;
    	margin-bottom: 10px;
    }
    .layout-main .main-content ul {
    	margin-left: -15px;
    }
    .layout-main .main-content ul li {
    	float: left;
    	width: 320px;
    	margin-right: 25px;
    	margin-bottom: 10px;
    }

    .layout-aside .aside-content .contest-list {
    	width: 100%;
    	height: 100px;
    	background: #e0e0e0;
    	border-top: 3px solid #333333;
    }
    .contest-list ul {
    	padding: 10px;
    }
    .contest-list ul li {
    	padding: 10px 0;
    	border-bottom: 1px solid #333333;
    }
</style>