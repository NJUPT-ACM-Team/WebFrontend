<template>
	<div>
		<div class="mod-media">
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
	</div>	
</template>

<style scoped>
	
</style>

<script>
import 'assets/css/mod-media.css';

	export default {
		data() {
			return {
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
                ],
			}
		}
	}
</script>