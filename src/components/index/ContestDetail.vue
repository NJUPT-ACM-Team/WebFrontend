<template>
    <div>
        <div class="layout-header">
            <div class="mod-header">
                <h2>{{ contest.id }}.{{ contest.tit }}</h2>
                <div class="header-txt">
                	<p>
                		Status : <span class="status">{{ contest.status }}</span>
                		Access : <span class="access">{{ contest.access }}</span>
                	</p>
                </div>
            </div>
        </div>
        <div class="layout-body clearfix">
            <div class="layout-aside">
                <!-- <div class="mod-box">
                    <div class="box-hd">
                        <h3 class="tit">Source</h3>
                    </div>
                    <div class="box-bd">
                        <ul class="source-list">
                            <li class="source-item" v-for="item in source" :class="item.sname == activeSource?'active':''" @click="setSource(item.sname)">
                                <a href="javascript:;" class="clearfix">
                                    <span class="item-tit">{{ item.sname }}</span>
                                    <span class="item-num">{{ item.snum }}</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div> -->
            </div>
            <div class="layout-main">
                <div class="mod-media">
                    <!-- <div class="media-hd">
                        <h3 class="tit">{{ activeSource }}</h3>
                    </div> -->
                    <div class="media-bd">
                        <ul class="problem-list">
                            <li class="problem-item" v-for="item in problemList">
                                <div class="problem-tit">
                                    <router-link :to="{name: 'problem', params: {problemId: item.pid} }">{{ item.pid }}.{{ item.ptit }}</router-link>
                                </div>
                                <div class="problem-txt">
                                    <p class="txt-decs">{{ item.pdec }}</p>
                                    <p class="txt-data">
                                        AC : <span class="data-ac">{{ item.pac }}</span>
                                        Submit : <span class="data-submit">{{ item.psubmit }}</span>
                                        <span class="data-date">{{ item.pdate }}</span>
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="mod-pagination" v-show="totalPages != 1">
                    <ul class="pagination-list" v-if="totalPages > 10">
                        <li class="pagination-item" :class="currentPage <= 1?'disabled':''">
                            <span v-if="currentPage<=1">&lt;&lt;</span>
                            <a href="#" v-else @click="currentPage = 1">&lt;&lt;</a>
                        </li>
                        <li class="pagination-item" :class="currentPage <= 1?'disabled':''">
                            <span v-if="currentPage<=1">prev</span>
                            <a href="#" v-else @click="currentPage--">prev</a>
                        </li>
                        <li class="pagination-item" v-for="n in setPageRange" :class="n == currentPage?'active':''" @click="setPage(n)">
                            <a href="#">{{ n }}</a>
                        </li>
                        <li class="pagination-item" :class="currentPage >= totalPages?'disabled':''">
                            <span v-if="currentPage>=totalPages">next</span>
                            <a href="#" v-else @click="currentPage++">next</a>
                        </li>
                        <li class="pagination-item" :class="currentPage >= totalPages?'disabled':''">
                            <span v-if="currentPage>=totalPages">&gt;&gt;</span>
                            <a href="#" v-else @click="currentPage = totalPages">&gt;&gt;</a>
                        </li>
                    </ul>
                    <ul class="pagination-list" v-else>
                        <li class="pagination-item" :class="currentPage <= 1?'disabled':''">
                            <span v-if="currentPage<=1">prev</span>
                            <a href="#" v-else @click="currentPage--">prev</a>
                        </li>
                        <li class="pagination-item" v-for="n in totalPages" :class="n == currentPage?'active':''" @click="setPage(n)">
                            <a href="#">{{ n }}</a>
                        </li>
                        <li class="pagination-item" :class="currentPage >= totalPages?'disabled':''">
                            <span v-if="currentPage>=totalPages">next</span>
                            <a href="#" v-else @click="currentPage++">next</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
	.mod-header {
		padding: 20px 0 5px 0;
	}
	.mod-header h2 {
		padding-bottom: 20px;
	}
    .layout-body {
        margin-top: 20px;
    }
    .layout-body .layout-aside {
        width: 25%;
        float: left;
    }
    .layout-body .layout-main {
        width: 75%;
        float: right;
    }
</style>
<script>
import 'assets/css/mod-header.css';
import 'assets/css/mod-box.css';
import 'assets/css/mod-media.css';
import 'assets/css/mod-pagination.css';

    export default{
        data(){
            return{
            	loading: false,
            	post: null,
            	error: null,
                contest: {
                	id: '',
                	tit: '“青书杯”科技节之算法脑洞大赛 初级组 ',
                	status: 'ended',
                	access: 'public'
                },
                problemList: [
                    {
                        pid: '1001',
                        ptit: '整数求和',
                        pdec: '给定两个整数，求它们之和。',
                        psource: 'NUPT',
                        pac: '4552',
                        psubmit: '10000',
                        pdate: '2017-01-25'
                    },{
                        pid: '1002',
                        ptit: '整数求和',
                        pdec: '给定两个整数，求它们之和。',
                        psource: 'NUPT',
                        pac: '4552',
                        psubmit: '10000',
                        pdate: '2017-01-25'
                    }
                ],
                currentPage: 1,
                totalPages: 99
            }
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
        created() {
        	this.fetchData();
        },
        watch: {
            '$route':'fetchData'
        },
        methods: {
            setSource: function(s) {
                if(this.activeSource != s) {
                    this.activeSource = s;
                }
            },
            setPage: function(n) {
                if(this.currentPage != n) {
                    this.currentPage = n;
                }
            },
            fetchData: function() {
        		this.error = this.post = null;
        		this.loading = true;
        		// get post
        		this.contest.id = this.$route.params.contestId;
        	},
        }
    }
</script>
