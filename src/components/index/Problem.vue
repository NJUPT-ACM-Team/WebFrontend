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
                            <li class="source-item" v-for="item in source" :class="item.oj_name == activeSource?'active':''" @click="setSource(item.oj_name)">
                                <a href="javascript:;" class="clearfix">
                                    <span class="item-tit">{{ item.oj_name.toUpperCase() }}</span>
                                    <span class="item-num">{{ item.problem_num }}</span>
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
                        <div class="list-header">
                            <div class="title">Title</div>
                            <div class="oj">OJ</div>
                            <div class="source">Source</div>
                            <div class="ratio">Ratio(AC/Submit)</div>
                        </div>
                    </div>
                    <div class="media-bd">
                        <ul class="problem-list">
                            <li class="problem-item" v-for="item in problemList">
                                <div class="item-tab problem-tit">
                                    <router-link :to="{name: 'problem', params: {problemId: item.sid} }">{{ item.pid }}.{{ item.title }}</router-link>
                                </div>
                                <div class="item problem-oj">{{ item.oj.toUpperCase() }}</div>
                                <div class="item-tab problem-source">{{ item.source }}</div>
                                <div class="item-tab problem-ratio">
                                    <p class="p-r">{{ item.total_submission == 0?0:(item.ac_submission/item.total_submission*100).toFixed(2) }}%</p>&nbsp;(
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
    .layout-body .layout-main,
    .layout-body .layout-loading {
        width: 75%;
        float: right;
    }
</style>
<script>

import 'assets/css/mod-header.css';
import 'assets/css/mod-box.css';
import 'assets/css/mod-media.css';
import 'assets/css/mod-pagination.css';
import 'assets/css/mod-loading.css';

import { getProblemList, getOJList } from 'src/api';
import { mapGetters } from 'vuex';

    export default{
        data(){
            return{
                loading: true,
                // source: [],
                activeSource: 'ALL',
                problemList: [],
                currentPage: 1,
                totalPages: 99
            }
        },
        created() {
            // try {
            //    const res = await getOJList();
            //     if(res.status == 200) {
            //         let data = res.data.about_response;
            //         let num = 0;
            //         this.source = data.ojs_list;
            //         this.source.forEach((v) => { num += v.problem_num });
            //         this.source.unshift({oj_name: 'ALL', problem_num: num});
            //         this.fetchData();
            //     }else {
            //         console.log('getOJList error');
            //     } 
            // } catch(err) {
            //     console.error(err);
            // }
            this.fetchData();
        },
        computed: mapGetters({
            source: 'allOj'  
        }),
        watch: {
            'currentPage': 'fetchData'
        },
        methods: {
            setSource: function(s) {
                if(this.activeSource != s) {
                    this.activeSource = s;
                    // this.loading = true;
                    this.fetchData(s);
                }
            },
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
            },
            setPage: function(n) {
                if(this.currentPage != n) {
                    this.currentPage = n;
                    this.loading = true;
                }
            },
            fetchData: async function(filter_oj) {
                console.log(this.source);
                try {
                    if(filter_oj == 'ALL') filter_oj = undefined;
                    const res = await getProblemList(undefined, this.currentPage, undefined, undefined, filter_oj);
                    this.loading = false;
                    if(res.status == 200) {
                        let data = res.data.list_problems_response;
                        this.problemList = data.lines;
                        this.currentPage = data.current_page;
                        this.totalPages = data.total_pages;
                        console.log(data);
                    }else {
                        console.log('getProblemList error');
                    }
                } catch(err) {
                    console.log(err);
                }
            }
        }
    }
</script>
