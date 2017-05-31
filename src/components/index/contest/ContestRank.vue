<template>
	<div>
		<div class="layout-exp">
			<div class="exp-item is-ac is-fb">First solve problem</div>
			<div class="exp-item is-ac">Solved problem</div>
			<div class="exp-item is-attempt">Attempted problem</div>
		</div>
		<div class="mod-media">
			<div class="media-hd">
				<div class="list-header">
					<div class="rank-tit rank-id">Rank</div>
					<div class="rank-tit user-name">Username</div>
					<div class="rank-tit ac-num">AC Numbers</div>
					<div class="rank-tit total-mins">Total minutes</div>
					<div class="rank-tit label" v-for=" label in labelList ">{{ label }}</div>
				</div>
			</div>
			<div class="media-bd">
				<ul class="rank-list">
					<li class="rank-item" v-for="item in lines">
						<div class="item-tab rank-id">{{ item.rank }}</div>
						<div class="item-tab user-name">{{ item.username }}</div>
						<div class="item-tab ac-num">{{ item.ac_num }}</div>
						<div class="item-tab total-mins">{{ item.total_mins }}</div>
						<div class="item-tab cols" v-for="c in item.cols" v-bind:class="{ 'is-ac': c.is_ac, 'is-fb': c.is_fb, 'is-attempt': c.attempt }">
							<p>{{ c.minutes }}/{{ c.attempt }}</p>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<style scoped>

	.layout-exp {
		margin-bottom: 12px;
	}
	.layout-exp .exp-item {
		display: inline-block;
		padding: 5px;
		font-size: 14px;
	}

	.mod-media {
		overflow: auto;
		padding-bottom: 48px;
	}

	.mod-media .media-hd .rank-tit,
	.mod-media .media-bd .item-tab {
		display: flex;
		min-width: 100px;
		flex: 1;
		justify-content: center;
	}

	.mod-media .media-bd .rank-list .rank-item:hover {
		background-color: #e7e7e7;
	}

	.mod-media .list-header .rank-tit.user-name,
	.mod-media .rank-item .item-tab.user-name,
	.mod-media .list-header .rank-tit.ac-num,
	.mod-media .rank-item .item-tab.ac-num,
	.mod-media .list-header .rank-tit.total-mins,
	.mod-media .rank-item .item-tab.total-mins {
		flex: 1.5;
		min-width: 120px;
	}
	.mod-media .list-header .rank-tit.rank-id,
	.mod-media .rank-item .item-tab.rank-id {
		min-width: 54px;
		flex: .4;
	}

	.cols.is-ac,
	.exp-item.is-ac {
		background-color: #e1ffb5;
	}
	.cols.is-ac.is-fb,
	.exp-item.is-fb {
		background-color: #080;
		color: #fff;
	}
	.is-attempt {
		background-color: #ffdada;
	}
	
</style>

<script>

import 'assets/css/mod-media.css';
import { getContestRankList } from 'src/api';

	export default {
		data() {
			return {
				contestId: 0,
				labelList: ['A','B','A','B','A','B'],
				lines: [
					{
						'rank': 1,
						'username': 'kevince',
						'ac_num': 1,
						'total_mins': '6986',
						'cols': [
							{
								'label': 'A',
								'minutes': '0',
								'attempt': 2,
								'is_fb': true,
								'is_ac': true
							},
							{
								'label': 'B',
								'minutes': '0',
								'attempt': 1,
								'is_fb': false,
								'is_ac': true
							},
							{
								'label': 'A',
								'minutes': '0',
								'attempt': 0,
								'is_fb': false,
								'is_ac': false
							},
							{
								'label': 'B',
								'minutes': '0',
								'attempt': 1,
								'is_fb': false,
								'is_ac': true
							},
							{
								'label': 'A',
								'minutes': '0',
								'attempt': 2,
								'is_fb': true,
								'is_ac': true
							},
							{
								'label': 'B',
								'minutes': '0',
								'attempt': 1,
								'is_fb': false,
								'is_ac': false
							}
						],
					}
				]
				
			}
		},
		created() {
			this.contestId = this.$route.params.contestId;
			this.fetchData();
		},
		methods: {
			fetchData: async function() {
				try {
					const res = await getContestRankList(this.contestId, 'icpc');
					if(res.status == 200) {
						console.log(res);
						let data = res.data.contest_ranklist_response;
						this.labelList = data.rank_icpc.labels;
						this.lines = data.rank_icpc.lines;
					}
				}catch(err) {
					console.log(err);
				}
			}
		}
	}
</script>