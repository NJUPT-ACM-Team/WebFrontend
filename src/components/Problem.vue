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
                            <li class="source-item" v-for="item in source">
                                <a href="#" class="clearfix">
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
                        <h3 class="tit">All</h3>
                    </div>
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
                <div class="mod-pagination">
                    <ul class="pagination-list">
                        <li class="pagination-item disabled">
                            <span>prev</span>
                        </li>
                        <li class="pagination-item active">
                            <a href="#">1</a>
                        </li>
                        <li class="pagination-item">
                            <a href="#">2</a>
                        </li>
                        <li class="pagination-item disabled">
                            <span>...</span>
                        </li>
                        <li class="pagination-item">
                            <a href="#">98</a>
                        </li>
                        <li class="pagination-item">
                            <a href="#">99</a>
                        </li>
                        <li class="pagination-item">
                            <a href="#">next</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>

@import '../assets/css/mod-header.css';
@import '../assets/css/mod-box.css';
@import '../assets/css/mod-media.css';
@import '../assets/css/mod-pagination.css';
    
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
                ]
            }
        }
    }
</script>
