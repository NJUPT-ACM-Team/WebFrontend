<template>
    <div>
        <div class="layout-header">
            <div class="mod-header clearfix">
                <div class="header-main">
                    <div class="header-tit">
                        <h2>{{ contest.contest_id }}.{{ contest.title }}</h2>
                        <span class="status" :class="[contest.status]">{{ contest.status }}</span>
                        <span class="access" :class="[contest.access]">{{ contest.access }}</span>
                    </div>
                    <div class="header-txt">
                        <p>{{ contest.description }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="layout-sub-header">
            <div class="mod-progress">
                <div class="progress-bar" v-if="contest.status == 'in-progress'">
                    <div class="progress-bar-content">
                        <span class="start-time">Start Time: {{ parseTime(contest.start_time) }}</span>
                        <div class="progress-bar-item progress-bar-success" :style="{ transform: barStyle.processPersent }"></div>
                        <div class="progress-bar-item progress-bar-warning" :style="{ width: barStyle.lockTimePersent }">
                            lock board time
                            <span class="lock-time">Lock Time: {{ parseTime(contest.lock_board_time) }}</span>
                            <span class="end-time">End Time: {{ parseTime(contest.end_time) }}</span>
                        </div>
                    </div>
                </div>
                <div class="tips" v-else>
                    <p>{{ msg }}</p>
                    <p>Start Time: {{ parseTime(contest.start_time) }}</p>
                    <p>End Time: {{ parseTime(contest.end_time) }}</p>
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
    .mod-header .header-txt {
        padding-top: 10px;
    }
    .mod-header .header-tit span {
        display: inline-block;
        padding: 4px 8px;
        border-radius: 4px;
        font-size: 12px;
        color: #f3f3f3;
        transform: translateY(-2px);
        background: #a8adb1;
        margin-right: 10px;
    }
    .mod-header .header-tit .status.in-progress {
        background: #d6ab00;
    }
    .mod-header .header-tit .status.in-future {
        background: #22409a;
    }
    .mod-header .header-tit .status.ended {
        background: #a8adb1;
    }
    .mod-header .header-tit .access.private {
        background: #f26c68;
    }
    .mod-header .header-tit .access.public {
        background: #1f8d85;
    }
    .layout-sub-header {
        padding: 28px 0 20px 0;
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
import 'assets/css/mod-progress.css';

import { checkContestAccess, showContest } from 'src/api';
import { parseTime } from 'src/filters';

    export default{
        data(){
            return{
            	loading: false,
            	post: null,
            	error: null,
                hasAccess: false,
                contest: {},
                activeModule: 'detail',
                msg: '比赛还未开始，敬请期待',
                modules: [
                    {
                        router: 'detail',
                        tit: 'Problem List'
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
                ],
                barStyle: {
                    lockTimePersent: '0',
                    processPersent: 'scaleX(0)',
                },
                processing: true,
                timer: null,
            }
        },
        computed: {
            
        },
        created() {
            this.timer = null;
        	this.fetchData();
        },
        watch: {
            '$route':'fetchData'
        },
        methods: {
            fetchData: async function() {
                if(this.$route.name == 'contest-problem') {
                    this.activeModule = 'detail';
                }else {
                    this.activeModule = this.$route.name;
                }
        		this.error = this.post = null;
        		this.loading = true;
        		// get post
                try {
                    const res = await showContest(this.$route.params.contestId);
                    if(res.status == 200) {
                        let data = res.data.contest_show_response;
                        this.contest = data.contest;
                        // console.log(data);
                        if(this.contest.access == 'private') {
                            if(this.contest.has_access) {
                                this.hasAccess = true;
                            }else {
                                this.checkAccess();
                            }
                        }else {
                            this.hasAccess = true;
                        }
                        if(this.contest.status == 'in-progress') {
                            this.setProcess();
                        }else if(this.contest.status == 'in-future') {
                            this.msg = '比赛还未开始，敬请期待';
                        }else {
                            this.msg = '比赛已经结束';
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
            },
            parseTime: parseTime,
            setProcess: function() {
                // progress bar
                var s = new Date(this.contest.start_time),
                    l = new Date(this.lock_board_time), // lock board time
                    e = new Date(this.contest.end_time),
                    totalTime = e - s;
                this.barStyle.lockTimePersent = (e - l)/totalTime * 100 + '%';
                this.barStyle.processPersent = 'scaleX(' + (new Date() - s)/totalTime + ')';
                // var p = (new Date() - s)/totalTime;
                if(this.processing) {
                    this.timer = setInterval(() => {
                        let p = (new Date() - s)/totalTime;
                        // p += 0.05;
                        if( p >= 1) {
                            this.barStyle.processPersent = 'scaleX(1)';
                            this.processing = false;
                            clearInterval(this.timer);
                            this.timer = null;
                        }else {
                            this.barStyle.processPersent = 'scaleX(' + p + ')';
                        }
                        // console.log(p);
                    }, 1000);
                }
            }
        },
        beforeRouteLeave (to, from, next) {
            clearInterval(this.timer);
            next();
        }
    }
</script>
