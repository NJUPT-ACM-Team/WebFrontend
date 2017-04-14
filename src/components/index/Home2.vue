<template>
	<div>
		<div class="layout-header">
			<div class="mod-slider" @mouseout="setTimer()" @mouseover="clearTimer()">
				<div class="slider-wrapper">
					<ul class="slider-list" :style="{ transform: 'translateX(-' + ( slider * 100 ) + '%)' }" >
						<li class="slider-item">
							<a href="#1" class="slider-pic">
								<img src="../../assets/img/acm.jpg" alt="acm" class="pic">
							</a>
							<div class="slider-txt">
								NOJ update!
							</div>
						</li>
						<li class="slider-item">
							<a href="#2" class="slider-pic">
								<img src="../../assets/img/news.jpg" alt="acm" class="pic">
							</a>
							<div class="slider-txt">
								我校学生在第36届ACM国际大学生程序设计竞赛亚洲区预赛取得佳绩1
							</div>
						</li>
						<li class="slider-item">
							<a href="#3" class="slider-pic">
								<img src="../../assets/img/news.png" alt="acm" class="pic">
							</a>
							<div class="slider-txt">
								我校学生在第36届ACM国际大学生程序设计竞赛亚洲区预赛取得佳绩2
							</div>
						</li>
						<li class="slider-item">
							<a href="#4" class="slider-pic">
								<img src="../../assets/img/news.jpg" alt="acm" class="pic">
							</a>
							<div class="slider-txt">
								我校学生在第36届ACM国际大学生程序设计竞赛亚洲区预赛取得佳绩3
							</div>
						</li>
					</ul>
					<div class="slider-act">
						<i class="icon icon-arrow-l" @click="slider <= 0? slider = (sliderNum - 1):slider--"></i>
						<i class="icon icon-arrow-r" @click="slider >= (sliderNum - 1)? slider = 0:slider++"></i>
					</div>
				</div>
			</div>
		</div>
		<div class="layout-body clearfix">
			<div class="layout-main">
				<div class="main-content">
					<div class="tit clearfix">
						<h3>News</h3>
						<router-link to="/news" class="more">more</router-link>
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
					<div class="tit clearfix">
						<h3>Contest</h3>
						<router-link to="/contest" class="more">more</router-link>
					</div>
					<div class="contest-list">
						<ul>
							<li>
								<div class="mod-info">
									<div class="info-hd">
										<div class="info-tag">
											<div class="tag-d">05</div>
											<div class="tag-ym">2017-04</div>
										</div>
										<div class="info-con">
											<a href="#">“青书杯”科技节之算法脑洞大赛 初级组</a>
										</div>
									</div>
								</div>
							</li>
							<li>
								<div class="mod-info">
									<div class="info-hd">
										<div class="info-tag">
											<div class="tag-d">05</div>
											<div class="tag-ym">2017-04</div>
										</div>
										<div class="info-con">
											<a href="#">“青书杯”科技节之算法脑洞大赛 初级组</a>
										</div>
									</div>
								</div>
							</li>
							<li>
								<div class="mod-info">
									<div class="info-hd">
										<div class="info-tag">
											<div class="tag-d">05</div>
											<div class="tag-ym">2017-04</div>
										</div>
										<div class="info-con">
											<a href="#">“青书杯”科技节之算法脑洞大赛 初级组</a>
										</div>
									</div>
								</div>
							</li>
							<li>
								<div class="mod-info">
									<div class="info-hd">
										<div class="info-tag">
											<div class="tag-d">05</div>
											<div class="tag-ym">2017-04</div>
										</div>
										<div class="info-con">
											<a href="#">“青书杯”科技节之算法脑洞大赛 初级组</a>
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
	data() {
		return {
			sliderNum: 4,
			slider: 0,
			timer: null
		}
	},
	mounted() {
		this.setTimer();
	},
	methods: {
		setTimer: function() {
			var that = this;
			if(!this.timer) {
				this.timer = setInterval(function() {
					if(that.slider < 0) {
						that.slider = that.sliderNum - 1;
					}else if(that.slider >= (that.sliderNum - 1)) {
						that.slider = 0;
					}else {
						that.slider++;
					}
				}, 3000);	
			}
		},
		clearTimer: function() {
			clearInterval(this.timer);
			this.timer = null;
		}
	},
	beforeRouteLeave(to, from, next) {
		this.clearTimer();
		next();
	}
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
    .layout-main .main-content .tit h3,
    .layout-aside .aside-content .tit h3 {
    	float: left;
    }
    .layout-main .main-content .tit .more,
    .layout-aside .aside-content .tit .more {
    	font-size: 14px;
    	color: rgba(51, 51, 51, 0.8);
    	float: right;
    }
    .layout-main .main-content .tit .more {
    	margin-right: 48px;
    }
    .layout-main .main-content .tit .more:hover,
    .layout-aside .aside-content .tit .more:hover {
    	color: rgba(51, 51, 51, 1);
    	/*text-decoration: underline;*/
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
    	background: #ededed;
    	border-top: 3px solid #22409a;
    }
    /*.layout-aside .aside-content .contest-list:hover {
    	box-shadow: 0 8px 20px #808080; 
    }*/
    .contest-list ul {
    	padding: 10px;
    }
    .contest-list ul li {
    	padding: 10px 0;
    	border-bottom: 1px solid rgba(51, 51, 51, 0.3);
    }
    .contest-list ul li:last-child {
    	border: none;
    }
</style>