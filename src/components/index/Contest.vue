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
            <div class="layout-aside">
                <div class="mod-box">
                    <div class="box-bd">
                        <ul class="list">
                            <li class="item" v-for="item in status" :class="item.sname == activeStatus?'active':''" @click="setStatus(item.sname)">
                                <a href="javscript:;" class="clearfix">
                                    <span class="item-tit">{{ item.sname }}</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="layout-loading" v-if="loading">
                <div class="mod-loading">
                    <div class="loading-pic">
                        <i class="icon icon-loading"></i>
                    </div>
                </div>
            </div>
            <div class="layout-main" v-else>
                <div class="mod-media">
                    <div class="media-hd">
                        <h3 class="tit">{{ activeStatus }}</h3>
                    </div>
                    <div class="media-bd">
                        <ul class="contest-list">
                            <li class="contest-item" v-for="c in contestList">
                                <div class="contest-tit">
                                    <router-link :to="{name: 'detail', params: {contestId: c.contest_id} }">{{ c.contest_id }}. {{ c.title }}</router-link>
                                    <span class="contest-status" :class="[c.status]">{{ c.status }}</span>
                                    <span class="contest-access" :class="[c.access]">{{ c.access }}</span>
                                </div>
                                <div class="contest-txt">
                                    <p class="txt-date">
                                        <span class="start-time">{{ parseTime(c.start_time) }}</span> —— 
                                        <span class="end-time">{{ parseTime(c.end_time) }}</span>
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

    /* 异化 */
    .mod-header h2 {
        color: #333333;
    }
    
    .layout-body {
        margin-top: 20px;
    }
    .layout-body .layout-aside {
        width: 25%;
        float: left;
    }
    .layout-body .layout-main,
    .layout-body .layout-loading {
        width: 75%;
        float: right;
    }

</style>
<script>
import 'assets/css/mod-header.css';
import 'assets/css/mod-media.css';
import 'assets/css/mod-box.css';
import 'assets/css/mod-pagination.css';
import 'assets/css/mod-loading.css';

import { getContestList } from 'src/api';
import { parseTime } from 'src/filters';

    export default{
        data(){
            return{
                loading: true,
                status: [
                    {
                        sname: 'All'
                    },{
                        sname: 'VIRTUAL'
                    },{
                        sname: 'FORMAL'
                    }
                ],
                activeStatus: 'All',
                contestList: [],
                currentPage: 1,
                totalPages: 99
            }
        },
        created() {
            this.fetchData();
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
            setStatus: function(s) {
                if(this.activeStatus != s) {
                    this.activeStatus = s;
                    // this.loading = true;
                    this.fetchData();
                }
            },
            setPage: function(n) {
                if(this.currentPage != n) {
                    this.currentPage = n;
                    this.loading = true;
                }
            },
            fetchData: async function() {
                try {
                    var isVirtual;
                    if(this.activeStatus != 'All') {
                        isVirtual = this.activeStatus;
                    }
                    const res = await getContestList(undefined, this.currentPage, isVirtual);
                    this.loading = false;
                    if(res.status == 200) {
                        let data = res.data.list_contests_response;
                        this.contestList = data.lines;
                        this.currentPage = data.current_page;
                        this.totalPages = data.total_pages;
                        console.log(data);
                    }else {
                        console.error('getContestList error');
                    }
                } catch(err) {
                    console.error(err);
                }
            },
            parseTime: parseTime
        }
    }
</script>
