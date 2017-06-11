<template>
	<div>
		<div class="layout-header">
			<div class="mod-header">
				<h2>Problems</h2>
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
                        <h3 class="tit">Problem List</h3>
                        <div class="input-group">
                        	<button @click="$router.push('/admin/management/problems/new')">New</button>
                        </div>
                        <div class="list-header">
                            <div class="title">Title</div>
                            <div class="oj">OJ</div>
                            <div class="source">Source</div>
                            <div class="ratio">Ratio(AC/Submit)</div>
                            <div class="edit">Edit</div>
                            <div class="delete">Delete</div>
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
                                <div class="item-tab edit">
                                	<router-link to="">Edit</router-link>
                                </div>
                                <div class="item-tab delete">
                                	<a href="javascript:;">Delete</a>
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

	.list-header .edit,
	.list-header .delete,
	.problem-item .edit,
	.problem-item .delete {
		display: flex;
		flex: .5;
	}

	.problem-item .edit a,
	.problem-item .delete a {
		color: #22409a;
	}

	.problem-item .edit a:hover,
	.problem-item .delete a:hover {
		text-decoration: underline;
	}

</style>

<script>
	
import 'assets/css/mod-header.css';
import 'assets/css/mod-media.css';

import { getProblemList, getOJList } from 'src/api';

	export default {
		data() {
			return {
				loading: true,
                // source: [],
                activeSource: 'ALL',
                problemList: [],
                currentPage: 1,
                totalPages: 99
			}
		},
		created() {
			this.fetchData();
		},
		methods: {
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