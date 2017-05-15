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
                                    <span class="item-tab">{{ item.snum }}</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="layout-main">
                <div class="mod-media">
                    <!-- <div class="media-hd">
                        <h3 class="tit">{{ activeStatus }}</h3>
                    </div> -->
                    <div class="media-bd">
                        <ul class="contest-list">
                            <li class="contest-item" v-for="c in contestList">
                                <div class="contest-tit">
                                    <router-link :to="{name: 'contest-introduce', params: {contestId: c.contest_id} }">{{ c.contest_id }}. {{ c.title }}</router-link>
                                    <span class="contest-status" :class="[c.status]">{{ c.status }}</span>
                                    <span class="contest-access" :class="[c.access]">{{ c.access }}</span>
                                </div>
                                <div class="contest-txt">
                                    <p class="txt-date">
                                        <span class="start-time">{{ c.start_time }}</span> —— 
                                        <span class="end-time">{{ c.end_time }}</span>
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
    .layout-body .layout-main {
        width: 75%;
        float: right;
    }

</style>
<script>
import 'assets/css/mod-header.css';
import 'assets/css/mod-media.css';
import 'assets/css/mod-box.css';
import 'assets/css/mod-pagination.css';

import { getContestList } from 'src/api';

    export default{
        data(){
            return{
                status: [
                    {
                        sname: 'All',
                        snum: 12
                    },{
                        sname: 'Past',
                        snum: 8
                    },{
                        sname: 'Current',
                        snum: 3
                    },{
                        sname: 'Future',
                        snum: 1
                    }

                ],
                activeStatus: 'All',
                contestList: [],
                currentPage: 1,
                totalPages: 99
            }
        },
        created() {
            var $this = this,
                contestList = getContestList();
            contestList.then(function(response) {
                var data = response.data.list_contests_response,
                    lines = data.lines;
                $this.contestList = lines;
                $this.currentPage = data.current_page;
                $this.totalPages = data.total_pages;
                console.log(data);
            })
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
                }
            },
            setPage: function(n) {
                if(this.currentPage != n) {
                    this.currentPage = n;
                }
            }
        }
    }
</script>
