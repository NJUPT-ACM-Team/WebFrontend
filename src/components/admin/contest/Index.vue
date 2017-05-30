<template>
	<div>
		<div class="layout-header">
			<div class="mod-header">
				<h2>Contest</h2>
				<div class="input-group">
	                <input type="text" placeholder="please input the word you want to search">
	                <button>Search</button>
	            </div>
			</div>
		</div>
		<div class="layout-body">
			<div class="layout-main">
				<div class="mod-media">
					<div class="media-hd">
                        <h3 class="tit">Contest List</h3>
                        <div class="input-group">
                        	<button @click="$router.push('/admin/management/contests/new')">New</button>
                        </div>
                    </div>
					<div class="media-bd">
	                    <ul class="contest-list">
	                        <li class="contest-item" v-for="c in contestList">
	                            <div class="contest-tit">
	                                <router-link :to="{name: 'detail', params: {contestId: c.contest_id} }">{{ c.contest_id }}. {{ c.title }}</router-link>
	                                <span class="contest-status" :class="[c.status]">{{ c.status }}</span>
	                                <span class="contest-access" :class="[c.access]">{{ c.access }}</span>
	                                <div class="contest-operate">
	                                	<a href="javascript:;">edit</a>
	                                	<a href="javascript:;">delete</a>
	                                </div>
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
			</div>
		</div>
	</div>
</template>

<style scoped>

	.layout-header .mod-header h2 {
		padding-left: 30px;
		color: #000000;
	}

	.layout-header .mod-header .input-group {
		margin-right: 27px;
	}

	.layout-body .layout-main {
		width: 90%;
		margin: 30px auto;
	}

	.layout-main .mod-media .media-hd {
		border: none;
	}

</style>

<script>

import 'assets/css/mod-header.css';
import 'assets/css/mod-media.css';

import { getContestList } from 'src/api';
import { parseTime } from 'src/filters';

	export default {
		data() {
			return {
				contestList: []
			}
		},
		created() {
            this.fetchData();
        },
		methods: {
			fetchData: async function() {
                try {
                    const res = await getContestList(undefined, this.currentPage);
                    this.loading = false;
                    if(res.status == 200) {
                        let data = res.data.list_contests_response;
                        this.contestList = data.lines;
                        this.currentPage = data.current_page;
                        this.totalPages = data.total_pages;
                        this.contestList.forEach((v) => { v.start_time = parseTime(v.start_time); v.end_time = parseTime(v.end_time) })
                        console.log(data);
                    }else {
                        console.error('getContestList error');
                    }
                } catch(err) {
                    console.error(err);
                }
            }
		}
	}

</script>