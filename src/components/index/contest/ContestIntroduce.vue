<template>
	<div>
		<div class="mod-media">
			<div class="media-hd">
				<div class="list-header">
					<div class="title">Title</div>
					<div class="ratio">Ratio(AC/Submit)</div>
				</div>
			</div>
			<div class="media-bd">
				<ul class="problem-list">
					<li class="problem-item" v-for="item in problemList">
						<div class="item-tab problem-tit">
							<router-link :to="{name: 'contest-problem', params: {problemId: item.label} }">{{ item.label }}.{{ item.alias }}</router-link>
						</div>
						<div class="item-tab problem-ratio">
							<p class="p-r">{{ (item.ac_submission/item.total_submission*100).toFixed(2) }}%</p>&nbsp;(
							<p class="p-ac">{{ item.ac_submission }}</p>/
							<p class="p-sb">{{ item.total_submission }}</p>)
						</div>
					</li>
				</ul>
			</div>
	    </div>	
	</div>	
</template>

<style scoped>
	
</style>

<script>
import 'assets/css/mod-media.css';

import { getContestProblemsList } from 'src/api';

	export default {
		data() {
			return {
				problemList: [],
			}
		},
		created() {
			this.fetchData();
		},
		methods: {
			fetchData: async function() {
                try {
                	var contestId = this.$route.params.contestId;
                    const res = await getContestProblemsList(contestId);
                    if(res.status == 200) {
                    	console.log(res);
                        let data = res.data.contest_list_problems_response;
                        if(data.error) {
                        	alert(data.error.debug);
                        }else {
                        	this.problemList = data.lines;
                        }
                    }else {
                        console.log('getProblemList error');
                    }
                } catch(err) {
                    console.error(err);
                }
            }
		}
	}
</script>