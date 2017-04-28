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
                <div class="mod-box">
                    <div class="box-bd">
                        <ul class="list">
                            <li class="item" v-for="item in modules" :class="item.tit == activeModule? 'active' : ''">
                                <router-link :to="{name: item.router, params: {contestId: contest.id} }">
                                    <span class="item-tit">{{ item.tit }}</span>
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="layout-main">
                <router-view></router-view>
                <!-- <div class="mod-pagination" v-show="totalPages != 1">
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
                </div> -->
            </div>
        </div>
    </div>
</template>
<style scoped>
	.mod-header {
		padding: 20px 0 5px 0;
	}
	.mod-header h2 {
		padding-bottom: 12px;
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
                activeModule: 'Contest Details',
                modules: [
                    {
                        router: 'contest-introduce',
                        tit: 'Contest Details'
                    },
                    {
                        router: 'contest-status',
                        tit: 'Status'
                    },
                    {
                        router: 'contest-rank',
                        tit: 'Rank List'
                    },
                    {
                        router: 'contest-discussion',
                        tit: 'Discussion'
                    }
                ]
            }
        },
        computed: {
            
        },
        created() {
        	this.fetchData();
        },
        watch: {
            '$route':'fetchData'
        },
        methods: {
            fetchData: function() {
        		this.error = this.post = null;
        		this.loading = true;
        		// get post
        		this.contest.id = this.$route.params.contestId;
        	},
        }
    }
</script>
