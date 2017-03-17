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
                        <ul class="status-list">
                            <li class="status-item" v-for="value, key in status">
                                <a href="#" class="clearfix">
                                    <span class="item-tit">{{ key }}</span>
                                    <span class="item-num">{{ value }}</span>
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
                        <ul class="contest-list">
                            <li class="contest-item" v-for="c in contestList">
                                <div class="contest-tit">
                                    <a href="#">{{ c.cid }}. {{ c.cname }}</a>
                                    <span class="contest-status" v-bind:class="[c.status]">{{ c.status }}</span>
                                    <span class="contest-access" v-bind:class="[c.access]">{{ c.access }}</span>
                                </div>
                                <div class="contest-txt">
                                    <p class="txt-date">
                                        <span class="start-time">{{ c.stime }}</span> —— 
                                        <span class="end-time">{{ c.etime }}</span>
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
import 'assets/css/mod-pagination.css';

    export default{
        data(){
            return{
                status: {
                    all: 12,
                    past: 8,
                    current: 3,
                    future: 1
                },
                contestList: [
                    {
                        cid: '1001',
                        cname: '“青书杯”科技节之算法脑洞大赛 初级组 ',
                        stime: '2017.03.03 09:00',
                        etime: '2017.03.03 12:00',
                        status: 'in-progress',
                        access: 'private'
                    },{
                        cid: '1002',
                        cname: '“青书杯”科技节之算法脑洞大赛',
                        stime: '2017.03.03 09:00',
                        etime: '2017.03.03 12:00',
                        status: 'in-future',
                        access: 'public'
                    },{
                        cid: '1003',
                        cname: '“青书杯”科技节之算法脑洞大赛',
                        stime: '2017.03.03 09:00',
                        etime: '2017.03.03 12:00',
                        status: 'ended',
                        access: 'public'
                    }
                ]
            }
        }
    }
</script>
