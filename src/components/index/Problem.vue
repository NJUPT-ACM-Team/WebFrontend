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
                </div>
            </div>
            <div class="layout-main">
                <div class="mod-media">
                    <div class="media-hd">
                        <div class="list-header">
                            <div class="title">Title</div>
                            <div class="source">Source</div>
                            <div class="ratio">Ratio(AC/Submit)</div>
                        </div>
                    </div>
                    <div class="media-bd">
                        <ul class="problem-list">
                            <li class="problem-item" v-for="item in problemList">
                                <div class="item-tab problem-tit">
                                    <router-link :to="{name: 'problem', params: {problemId: item.pid} }">{{ item.pid }}.{{ item.title }}</router-link>
                                </div>
                                <div class="item-tab problem-source">{{ item.source }}</div>
                                <div class="item-tab problem-ratio">
                                    <p class="p-r">{{ (item.ac_submission/item.total_submission*100).toFixed(2) }}%</p>&nbsp;(
                                    <p class="p-ac">{{ item.ac_submission }}</p>/
                                    <p class="p-sb">{{ item.total_submission }}</p>)
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
import 'assets/css/mod-box.css';
import 'assets/css/mod-media.css';
import 'assets/css/mod-pagination.css';

import { getProblemList } from 'src/api';

    export default{
        data(){
            return{
                source: [
                    {
                        sname: 'All',
                        snum: 120
                    },{
                        sname: 'NUPT',
                        snum: 30
                    },{
                        sname: 'BUPT',
                        snum: 90
                    }
                ],
                activeSource: 'All',
                problemList: [],
                currentPage: 1,
                totalPages: 99
            }
        },
        created() {
            var $this = this,
                res = getProblemList(2,1,0,true,'zoj',0);
            res.then(function(response) {
                var data = response.data.list_problems_response,
                    lines = data.lines;
                $this.currentPage = data.current_page;
                $this.totalPages = data.total_pages;
                $this.problemList = lines;
            })
            .catch(function(err) {
                console.log(err);
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
        watch: {
            
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
            }
        }
    }
</script>
