<template>
	<div>
		<div class="layout-header">
            <div class="mod-header">
                <router-link :to="{name: 'detail', params: {contestId: contestId} }">Contest Detail</router-link> / 
                <h2>{{ problem.id }}.{{ problem.title }}</h2>
                <div class="header-txt">
                	<p v-for="item in problem.limits">
                		({{ item.language }})Time limit : <span class="time-limit">{{ item.time_limit }}ms</span>
                		Memory limit : <span class="memory-limit">{{ item.memory_limit }}KByte</span>
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
        						<h3>Description</h3>
        					</div>
        					<div class="txt-bd">
        						<p v-html="problem.description"></p>
        					</div>
        				</li>
        				<li>
        					<div class="txt-hd">
        						<h3>Input</h3>
        					</div>
        					<div class="txt-bd">
        						<p v-html="problem.input"></p>
        					</div>
        				</li>
        				<li>
        					<div class="txt-hd">
        						<h3>Output</h3>
        					</div>
        					<div class="txt-bd">
        						<p v-html="problem.output"></p>
        					</div>
        				</li>
        				<li>
        					<div class="txt-hd">
        						<h3>Sample input</h3>
        					</div>
        					<div class="txt-bd">
        						<p v-html="problem.sample_input"></p>
        					</div>
        				</li>
        				<li>
        					<div class="txt-hd">
        						<h3>Sample output</h3>
        					</div>
        					<div class="txt-bd">
        						<p v-html="problem.sample_output"></p>
        					</div>
        				</li>
        				<li>
        					<div class="txt-hd">
        						<h3>Hint</h3>
        					</div>
        					<div class="txt-bd">
        						<p v-html="problem.hint"></p>
        					</div>
        				</li>
        				<li name="source">
        					<div class="txt-hd">
        						<h3>Source</h3>
        					</div>
        					<div class="txt-bd">
        						<p v-html="problem.source"></p>
        					</div>
        				</li>
                        <li>
                            <div class="txt-hd">
                                <h3>Source code</h3>
                            </div>
                            <div class="txt-bd">
                                <a href="javascript:;" class="lan-item" v-for="item in supportLan" :class="item.language_id == usedLanID?'active':''" @click="setLan(item)">{{ item.language }}</a>
                                <div class="mod-codemirror">
                                    <!-- <div class="cm-hd clearfix">
                                        <div class="cm-btn">
                                            <a href="javascript:;" class="btn-clear" @click="code = ''">clear</a>
                                        </div>
                                    </div> -->
                                    <div class="cm-bd">
                                        <!-- <codemirror v-model="code" :options="editorOption"></codemirror> -->
                                        <textarea name="code" id="code" v-model="code"></textarea>
                                    </div>
                                </div>
                            </div>
                        </li>
        			</ul>
        		</div>
        		<div class="mod-btn">
        			<div class="btn btn-submit">
        				<a href="javascript:;" name="submit" @click="submitCode()">Submit</a>
        			</div>
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
		padding-bottom: 12px;
        font-weight: bold;
	}
    .mod-header a {
        font-weight: bold;
        color: #22409a;
    }
    .mod-header a:hover {
        text-decoration: underline;
    }
	.layout-body {
		margin-top: 20px;
	}
    .layout-body .layout-main {
        width: 100%;
    }
	.mod-txt ul li {
		margin-bottom: 20px;
	}
    .mod-codemirror {
        margin-top: 8px;
    }

</style>

<script>
import 'assets/css/mod-header.css';
import 'assets/css/mod-txt.css';
import 'assets/css/mod-menu.css';
import 'assets/css/mod-btn.css';
import 'assets/css/mod-codemirror.css';

import { getContestProblemDetail, postContestCode } from 'src/api';

	export default{
        data(){
            return{
            	loading: false,
            	post: null,
            	error: null,
                problem: {},
                supportLan: [],
                usedLanID: 2,
                code: '',
                lanMode: [
                    {
                        language: 'c++',
                        mode: 'text/x-c++src'
                    },{
                        language: 'c',
                        mode: 'text/x-csrc',
                    },{
                        language: 'java',
                        mode: 'text/x-java'
                    },{
                        language: 'pascal',
                        mode: 'text/x-pascal'
                    }
                ],
                editorOption: {
                    tabSize: 4,
                    styleActiveLine: true,
                    lineNumbers: true,
                    line: true,
                    foldGutter: false,
                    styleSelectedText: true,
                    gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
                    highlightSelectionMatches: { showToken: /w/, annotateScrollbar: true },
                    mode: 'text/x-c++src',
                    hintOptions:{
                      completeSingle: false
                    },
                    keyMap: "sublime",
                    matchBrackets: true,
                    showCursorWhenSelecting: true,
                    theme: "default"
                },
            }
        },
        created() {
        	this.fetchData();
        },
        mounted() {

        },
        watch: {
        	'$route':'fetchData'
        },
        methods: {
        	fetchData: async function() {
        		this.error = this.post = null;
        		this.loading = true;
        		// get post
        		this.contestId = this.$route.params.contestId;
                try {
                	const res = await getContestProblemDetail(this.contestId, this.$route.params.problemId);
                	if(res.status == 200) {
                		console.log(res);
                		let data = res.data.show_problem_response;
                		this.problem = data.problem;
                		this.supportLan = data.languages;
                		this.problem.id = data.problem_sid;
                        let lanId = localStorage.getItem(data.languages[0].oj_name);
                        if(lanId) {
                            this.usedLanID = lanId;
                        }else {
                            this.usedLanID = this.supportLan[0].language_id;
                        }
                	}else {
                		console.log('get error');
                	}
                }catch(err) {
                	console.log(err);
                }
        	},
            setLan: function(l) {
                console.log(l);
                if(l.language_id != this.usedLanID) {
                    this.usedLan = l.language;
                    this.usedLanID = l.language_id;
                    localStorage.setItem(l.oj_name, l.language_id);
                    // this.editorOption.mode = l.mode;
                }
            },
            submitCode: async function() {
                var data = {
                	contest_id: this.contestId,
                    problem_sid: this.problem.id,
                    code: this.code,
                    language_id: this.usedLanID,
                }
                try {
                	const res = await postContestCode(data.contest_id, data.problem_sid, data.code, data.language_id);
                	if(res.status == 200) {
                		let resData = res.data.submit_response;
                		if(resData.error) {
                			alert(resData.error.debug);
                		}else {
                			alert('success');
                            this.$router.push('/contest/' + data.contest_id + '/status');
                		}
                	}else {
                		console.log('post error');
                	}
                }catch(err) {
                	console.log(err);
                }
            }
        }
    }
</script>