<template>
	<div>
		<div class="mod-exp">
            <div class="exp-refresh clearfix">
                <p>The Countdown of Refresh: {{ countdown }}</p>
                <a href="javascript:;" @click="fetchData">
                    <i class="icon icon-refresh"></i>
                </a>
            </div>
        </div>
		<div class="mod-media status-media">
			<div class="media-hd">
				<div class="list-header">
					<div class="status-tit run-id">Run ID</div>
					<div class="status-tit user-name">Username</div>
					<div class="status-tit s-id">Problem ID</div>
					<div class="status-tit result">Result</div>
					<div class="status-tit lan">Language</div>
					<div class="status-tit submit-time">Submit Time</div>
				</div>
			</div>
			<div class="media-bd">
				<ul class="status-list">
					<li class="status-item" v-for="item in statusList">
						<div class="item-tab run-id">{{ item.run_id }}</div>
						<div class="item-tab user-name">{{ item.username }}</div>
						<div class="item-tab s-id">
							<router-link :to="{name: 'contest-problem', params: {problemId: item.label} }">{{ item.label }}</router-link>	
						</div>
						<div class="item-tab status" :class="item.status_code">
							<a href="javascript:;" v-if="item.status_code == 'se'" title="rejudge" @click="rejudge(item.run_id)">{{ item.status }} <i class="icon icon-reload"></i></a>
							<a href="javascript:;" v-else-if="item.status_code == 'ce'" @click="showCeInfo(item.ce_info)">{{ item.status }} <i class="icon icon-mark"></i></a>
							<span v-else>{{ item.status }}</span>
						</div>
						<div class="item-tab lan">{{ item.language.compiler }}</div>
						<div class="item-tab submit-time">{{ parseTime(item.submit_time) }}</div>
					</li>
				</ul>
			</div>
		</div>
		<div class="mod-pagination" v-show="totalPages != 1">
			<ul class="pagination-list" v-if="totalPages > 10">
				<li class="pagination-item" :class="currentPage <= 1?'disabled':''">
					<span v-if="currentPage<=1">&lt;&lt;</span>
					<a href="javascript:;" v-else @click="currentPage = 1">&lt;&lt;</a>
				</li>
				<li class="pagination-item" :class="currentPage <= 1?'disabled':''">
					<span v-if="currentPage<=1">prev</span>
					<a href="javascript:;" v-else @click="currentPage--">prev</a>
				</li>
				<li class="pagination-item" v-for="n in setPageRange" :class="n == currentPage?'active':''" @click="setPage(n)">
					<a href="javascript:;">{{ n }}</a>
				</li>
				<li class="pagination-item" :class="currentPage >= totalPages?'disabled':''">
					<span v-if="currentPage>=totalPages">next</span>
					<a href="javascript:;" v-else @click="currentPage++">next</a>
				</li>
				<li class="pagination-item" :class="currentPage >= totalPages?'disabled':''">
					<span v-if="currentPage>=totalPages">&gt;&gt;</span>
					<a href="javascript:;" v-else @click="currentPage = totalPages">&gt;&gt;</a>
				</li>
			</ul>
			<ul class="pagination-list" v-else>
				<li class="pagination-item" :class="currentPage <= 1?'disabled':''">
					<span v-if="currentPage<=1">prev</span>
					<a href="javascript:;" v-else @click="currentPage--">prev</a>
				</li>
				<li class="pagination-item" v-for="n in totalPages" :class="n == currentPage?'active':''" @click="setPage(n)">
					<a href="javascript:;">{{ n }}</a>
				</li>
				<li class="pagination-item" :class="currentPage >= totalPages?'disabled':''">
					<span v-if="currentPage>=totalPages">next</span>
					<a href="javascript:;" v-else @click="currentPage++">next</a>
				</li>
			</ul>
		</div>
	</div>
</template>

<style scoped>
	
	.mod-media .media-bd .s-id a {
		color: #22409a;
	}
	.mod-media .media-bd .s-id a:hover {
		text-decoration: underline;
	}

	.mod-media .media-hd .run-id,
	.mod-media .media-bd .run-id {
		flex: 0.4;
	}
	.mod-media .media-hd .s-id,
	.mod-media .media-bd .s-id {
		flex: 0.6;
	}

	.mod-media.status-media .status, 
	.mod-media.status-media .submit-time {
		flex: 1;
	}
	
	.status-media .status .icon.icon-mark {
		background-image: url('../../../assets/img/mark.png');
	}

	.status-media .status .icon.icon-reload {
		background-image: url('../../../assets/img/reload.png');
	}

	.mod-exp {
        margin-bottom: 12px;
    }

    .mod-exp .exp-refresh .icon {
        float: left;
        display: block;
        width: 20px;
        height: 20px;
        background-image: url('../../../assets/img/refresh.png');
        background-size: cover;
        margin: -4px 0 0 6px;
    }

    .mod-exp .exp-refresh p {
        float: left;
        line-height: 16px;
    }
</style>

<script>

import 'assets/css/mod-media.css';
import 'assets/css/mod-pagination.css';

import { getContestListSubmissions, rejudge } from 'src/api';
import { parseTime } from 'src/filters';

	export default {
		data() {
			return {
				statusList: [],
				currentPage: 1,
            	totalPages: 99,
            	contestId: 0,
            	count: 5,
            	countdown: 5,
	            refreshing: false,
	            timer: null
			}
		},
		created() {
			this.contestId = this.$route.params.contestId;
			this.fetchData();
			this.timer = setInterval(() => {
	            if(!this.refreshing) {
	               if(this.countdown <= 0) {
	                    this.refreshing = true;
	                    this.fetchData();
	                }else {
	                    this.countdown--;
	                } 
	            }
	        }, 1000);
		},
		watch: {
			'currentPage': 'fetchData'
		},
		computed: {
			setPageRange: function() {
	            var arr = [],
	                tol = this.totalPages,
	                cur = this.currentPage;
	            if(cur > 6 && cur < (tol - 4)) {
	                for(var i = (cur - 5); i < (cur + 5); i++)
	                    arr.push(i);
	            }else if(cur <= 6) {
	                for(var i = 1; i <= 10; i++)
	                    arr.push(i);
	            }else {
	                for(var i = tol; i > (tol - 10); i--)
	                    arr.unshift(i);
	            }
	            return arr;
	        }
		},
		methods: {
			setPage: function(n) {
	            if(this.currentPage != n) {
	                this.currentPage = n;
	            }
	        },
	        showCeInfo: function(msg) {
	        	alert(msg);
	        },
	        fetchData: async function() {
	        	try {
					const res = await getContestListSubmissions(undefined,this.currentPage, this.contestId);
					// console.log(res);
					if(res.status == 200) {
						this.countdown = this.count;
                    	this.refreshing = false;
						let data = res.data.contest_list_submissions_response;
						this.statusList = data.lines;
						this.currentPage = data.current_page;
						this.totalPages = data.total_pages;
					}else {
						console.log('error');
					}
				} catch(err) {
					console.log(err);
				}
	        },
	        parseTime: parseTime,
	        rejudge: async function(run_id) {
	            try {
	                const res = await rejudge(run_id);
	                if(res.status == 200) {
	                    let data = res.data.re_judge_response;
	                    if(data.error) {
	                        alert('error');
	                    }else {
	                        alert('success');
	                        this.fetchData();
	                    }
	                }
	            }catch(err) {
	                console.log(err);
	            }
	        }
		},
		beforeRouteLeave(to, from, next) {
	        clearInterval(this.timer);
	        next();
	    }
	}
</script>