<template>
	<div>
		<div class="layout-header">
            <div class="mod-header">
                <h2>{{ problem.id }}.{{ problem.tit }}</h2>
                <div class="header-txt">
                	<p>
                		Time limit : <span class="time-limit">{{ problem.tlimit }}ms</span>
                		Memory limit : <span class="memory-limit">{{ problem.mlimit }}KByte</span>
                	</p>
                </div>
            </div>
        </div>
        <div class="layout-body clearfix">
        	<div class="layout-main">
        		<div class="mod-txt">
        			<ul>
        				<li>
        					<div class="txt-hd">
        						<h3><a name="description">Description</a></h3>
        					</div>
        					<div class="txt-bd">
        						<p>{{ problem.dec }}</p>
        					</div>
        				</li>
        				<li>
        					<div class="txt-hd">
        						<h3><a name="input">Input</a></h3>
        					</div>
        					<div class="txt-bd">
        						<p>{{ problem.input }}</p>
        					</div>
        				</li>
        				<li>
        					<div class="txt-hd">
        						<h3><a name="output">Output</a></h3>
        					</div>
        					<div class="txt-bd">
        						<p>{{ problem.output }}</p>
        					</div>
        				</li>
        				<li>
        					<div class="txt-hd">
        						<h3><a name="sampleInput">Sample input</a></h3>
        					</div>
        					<div class="txt-bd">
        						<p>{{ problem.sinput }}</p>
        					</div>
        				</li>
        				<li>
        					<div class="txt-hd">
        						<h3><a name="sampleOutput">Sample output</a></h3>
        					</div>
        					<div class="txt-bd">
        						<p>{{ problem.soutput }}</p>
        					</div>
        				</li>
        				<li>
        					<div class="txt-hd">
        						<h3><a name="hint">Hint</a></h3>
        					</div>
        					<div class="txt-bd">
        						<p>{{ problem.hint }}</p>
        					</div>
        				</li>
        				<li name="source">
        					<div class="txt-hd">
        						<h3><a name="source">Source</a></h3>
        					</div>
        					<div class="txt-bd">
        						<p>{{ problem.source }}</p>
        					</div>
        				</li>
        			</ul>
        		</div>
        		<div class="mod-btn">
        			<div class="btn btn-submit">
        				<router-link :to="{name: 'submit', params: { problemId: problem.id }}" name="submit">Submit</router-link>
        			</div>
        		</div>
        	</div>
        	<div class="layout-aside">
        		<div class="mod-menu">
        			<ul class="menu-list">
        				<li class="menu-item active">
        					<a href="#description">Description</a>
        				</li>
        				<li class="menu-item">
        					<a href="#input">Input</a>
        				</li>
        				<li class="menu-item">
        					<a href="#output">Output</a>
        				</li>
        				<li class="menu-item">
        					<a href="#sampleInput">Sample input</a>
        				</li>
        				<li class="menu-item">
        					<a href="#sampleOutput">Sample output</a>
        				</li>
        				<li class="menu-item">
        					<a href="#hint">Hint</a>
        				</li>
        				<li class="menu-item">
        					<a href="#source">Source</a>
        				</li>
        				<li class="menu-item">
        					<a href="#submit">Submit</a>
        				</li>
        				<li class="menu-item back-to-top">
        					<a href="#">Back to top</a>
        				</li>
        			</ul>
        		</div>
        	</div>
        </div>
	</div>
</template>

<style scoped>


	.mod-header {
		padding: 20px 0 5px 0;
	}
	.mod-header h2 {
		padding-bottom: 20px;
	}
	.layout-body {
		margin-top: 20px;
	}
	.layout-body .layout-aside {
        width: 25%;
        float: right;
    }
    .layout-body .layout-main {
        width: 72%;
        float: left;
    }
	.mod-txt ul li {
		margin-bottom: 20px;
	}

</style>

<script>
import 'assets/css/mod-header.css';
import 'assets/css/mod-txt.css';
import 'assets/css/mod-menu.css';
import 'assets/css/mod-btn.css';

	export default{
        data(){
            return{
            	loading: false,
            	post: null,
            	error: null,
                problem: {
                	id: '',
                	tit: '整数求和',
                	tlimit: '1000',
                	mlimit: '65536',
                	dec: '给定两个整数，求它们之和。',
                	input: '两个整数A，B.',
                	output: '两个整数的和。',
                	sinput: '1 2',
                	soutput: '3',
                	hint: '给定两个整数，求它们之和。',
                	source: 'NUAA'
                }
            }
        },
        created() {
        	this.fetchData();
        },
        watch: {
        	'$route':'fetchData'
        },
        methods: {
        	fetchData() {
        		this.error = this.post = null;
        		this.loading = true;
        		// get post
        		this.problem.id = this.$route.params.problemId;
        	}
        }
    }
</script>