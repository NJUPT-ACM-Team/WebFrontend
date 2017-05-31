<template>
	<div>
		<div class="layout-header">
            <div class="mod-header">
                <h2>Search</h2>
                <div class="input-group">
                    <input type="text" placeholder="please input the word you want to search">
                    <button>Search</button>
                </div>
            </div>
        </div>
        <div class="layout-body clearfix">
        	<div class="layout-loading" v-if="loading">
        		<div class="mod-loading">
        			<div class="loading-pic">
        				<i class="icon icon-loading"></i>
        			</div>
        		</div>
        	</div>
        	<div class="layout-main" v-else>
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
                            <div class="status-tit run-id">ID</div>
                            <div class="status-tit user-name">User Name</div>
                            <div class="status-tit s-id">SID</div>
                            <div class="status-tit status">Status</div>
							<div class="status-tit time-used">Time Used</div>
							<div class="status-tit memory-used">Memory Used</div>
							<div class="status-tit code-length">Code Length</div>
							<div class="status-tit lan">Language</div>
							<div class="status-tit submit-time">Submit Time</div>
                        </div>
                    </div>
                    <div class="media-bd">
                        <ul class="status-list">
                            <li class="status-item" v-for="item in statusList">
                                <div class="item-tab run-id">
                                    {{ item.run_id }}
                                </div>
                                <div class="item-tab user-name">{{ item.username }}</div>
                                <div class="item-tab s-id">
                                    <router-link :to="{name: 'problem', params: {problemId: item.sid} }">{{ item.sid }}</router-link>    
                                </div>
                                <div class="item-tab status" :class="item.status_code">
                                	<a href="javascript:;" v-if="item.status_code == 'se'" title="rejudge" @click="rejudge(item.run_id)">{{ item.status }} <i class="icon icon-reload"></i></a>
                                    <a href="javascript:;" v-else-if="item.status_code == 'ce'" @click="showCeInfo(item.ce_info)">{{ item.status }} <i class="icon icon-mark"></i></a>
                                    <span v-else>{{ item.status }}</span>
                                </div>
                                <div class="item-tab time-used">{{ item.time_used }}</div>
                                <div class="item-tab memory-used">{{ item.memory_used }}</div>
								<div class="item-tab code-length">{{ item.code_length }}</div>
								<div class="item-tab lan">
                                    <span v-if="item.code">
                                        <router-link :to="{name: 'code', params: {runId: item.run_id}}">{{ item.language.compiler }}</router-link>
                                    </span>
                                    <span v-else>{{ item.language.compiler }}</span>
                                </div>
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
        </div>
	</div>
</template>

<style scoped>

	/* 异化 */
    .mod-header h2 {
        color: #333333;
    }

    .layout-body {
        margin-top: 20px;
    }

    .mod-media .media-bd .s-id a {
        color: #22409a;
    }
    .mod-media .media-bd .s-id a:hover,
    .mod-media .media-bd .lan a:hover {
        text-decoration: underline;
    }

    .mod-exp {
        margin-bottom: 12px;
    }

    .mod-exp .exp-refresh .icon {
        float: left;
        display: block;
        width: 20px;
        height: 20px;
        background-image: url('../../assets/img/refresh.png');
        background-size: cover;
        margin: -4px 0 0 6px;
    }

    .mod-exp .exp-refresh p {
        float: left;
        line-height: 16px;
    }

</style>

<script>

import 'assets/css/mod-header.css';
import 'assets/css/mod-media.css';
import 'assets/css/mod-pagination.css';
import 'assets/css/mod-loading.css';

import { getStatus, rejudge } from 'src/api';
import { parseTime } from 'src/filters';

export default {
	data() {
		return {
			loading: true,
			statusList: [],
			currentPage: 1,
            totalPages: 99,
            count: 5,
            countdown: 5,
            refreshing: false,
            timer: null
		}
	},
	created() {
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
                this.loading = true;
            }
        },
        showCeInfo: function(msg) {
        	alert(msg);
        },
        fetchData: async function() {
        	try {
				const res = await getStatus(undefined,this.currentPage);
				this.loading = false;
				if(res.status == 200) {
                    this.countdown = this.count;
                    this.refreshing = false;
					let data = res.data.list_submissions_response;
					this.statusList = data.lines;
					this.currentPage = data.current_page;
					this.totalPages = data.total_pages;
                    console.log(data);
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