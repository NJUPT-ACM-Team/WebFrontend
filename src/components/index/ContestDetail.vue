<template>
    <div>
        <div class="layout-header">
            <div class="mod-header">
                <h2>{{ contest.contest_id }}.{{ contest.title }}</h2>
                <div class="header-txt">
                	<p>
                		Status : <span class="status">{{ contest.status }}</span>
                		Access : <span class="access">{{ contest.access }}</span>
                	</p>
                </div>
            </div>
        </div>
        <div class="layout-body clearfix" v-if="hasAccess">
            <div class="layout-aside">
                <div class="mod-box">
                    <div class="box-bd">
                        <ul class="list">
                            <li class="item" v-for="item in modules" :class="item.router == activeModule? 'active' : ''" @click="setModule(item.router)">
                                <router-link :to="{name: item.router, params: {contestId: contest.contest_id} }">
                                    <span class="item-tit">{{ item.tit }}</span>
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="layout-main" v-if="hasAccess">
                <router-view></router-view>
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

import { checkContestAccess, showContest } from 'src/api';

    export default{
        data(){
            return{
            	loading: false,
            	post: null,
            	error: null,
                hasAccess: false,
                contest: {},
                activeModule: 'detail',
                modules: [
                    {
                        router: 'detail',
                        tit: 'Contest Details'
                    },
                    {
                        router: 'status',
                        tit: 'Status'
                    },
                    {
                        router: 'rank',
                        tit: 'Rank List'
                    },
                    {
                        router: 'discussion',
                        tit: 'Discussion'
                    }
                ]
            }
        },
        computed: {
            
        },
        created() {
        	this.fetchData();
            this.activeModule = this.$route.name;
        },
        watch: {
            '$route':'fetchData'
        },
        methods: {
            fetchData: async function() {
        		this.error = this.post = null;
        		this.loading = true;
        		// get post
                try {
                    const res = await showContest(this.$route.params.contestId);
                    if(res.status == 200) {
                        let data = res.data.contest_show_response;
                        this.contest = data.contest;
                        if(this.contest.access == 'private') {
                            if(this.contest.has_access) {
                                this.hasAccess = true;
                            }else {
                                this.checkAccess();
                            }
                        }else {
                            this.hasAccess = true;
                        }
                    } else {
                        console.log('get error');
                    }
                } catch(err) {
                    console.log(err);
                }
        	},
            setModule: function(m) {
                if(this.activeModule != m) {
                    this.activeModule = m;
                }
            },
            checkAccess: async function() {
                var pwd = prompt('Contest is private, please input the password', '');
                if(pwd) {
                    try {
                        const res = await checkContestAccess(this.contest.contest_id, pwd);
                        if(res.status == 200) {
                            if(res.error) {
                                console.log('login require');
                            }else {
                                let data = res.data.contest_auth_response;
                                if(data.success) {
                                    this.hasAccess = true;
                                }else {
                                    this.hasAccess = false;
                                    alert('wrong password');
                                    this.checkAccess();
                                }
                            }
                        }else {
                            console.log('check error');
                        }
                    } catch(err) {
                        console.log(err);
                    }
                }else {
                    this.$router.go(-1);
                }
            }
        },

    }
</script>
