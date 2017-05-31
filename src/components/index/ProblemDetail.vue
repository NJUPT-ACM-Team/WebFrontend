<template>
	<div>
		<div class="layout-header">
            <div class="mod-header">
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
        						<h3><a name="description" href="#description">Description</a></h3>
        					</div>
        					<div class="txt-bd">
        						<p>{{ problem.description }}</p>
        					</div>
        				</li>
        				<li>
        					<div class="txt-hd">
        						<h3><a name="input" href="#input">Input</a></h3>
        					</div>
        					<div class="txt-bd">
        						<p>{{ problem.input }}</p>
        					</div>
        				</li>
        				<li>
        					<div class="txt-hd">
        						<h3><a name="output" href="#output">Output</a></h3>
        					</div>
        					<div class="txt-bd">
        						<p>{{ problem.output }}</p>
        					</div>
        				</li>
        				<li>
        					<div class="txt-hd">
        						<h3><a name="sampleInput" href="#sampleInput">Sample input</a></h3>
        					</div>
        					<div class="txt-bd">
        						<p>{{ problem.sample_input }}</p>
        					</div>
        				</li>
        				<li>
        					<div class="txt-hd">
        						<h3><a name="sampleOutput" href="#sampleOutput">Sample output</a></h3>
        					</div>
        					<div class="txt-bd">
        						<p>{{ problem.sample_output }}</p>
        					</div>
        				</li>
        				<li>
        					<div class="txt-hd">
        						<h3><a name="hint" href="#hint">Hint</a></h3>
        					</div>
        					<div class="txt-bd">
        						<p>{{ problem.hint }}</p>
        					</div>
        				</li>
        				<li name="source">
        					<div class="txt-hd">
        						<h3><a name="source" href="#source">Source</a></h3>
        					</div>
        					<div class="txt-bd">
        						<p>{{ problem.source }}</p>
        					</div>
        				</li>
                        <!-- <li>
                            <div class="txt-hd">
                                <h3><a name="language" href="#language">Language</a></h3>
                            </div>
                            <div class="txt-bd">
                                <a href="javascript:;" class="lan-item" v-for="item in supportLan" :class="item.language_id == usedLanID?'active':''" @click="setLan(item)">{{ item.language }}</a>
                            </div>
                        </li> -->
                        <li>
                            <div class="txt-hd">
                                <h3><a name="sourceCode" href="#sourceCode">Source code</a></h3>
                            </div>
                            <div class="txt-bd">
                                <a href="javascript:;" class="lan-item" v-for="item in supportLan" :class="item.language_id == usedLanID?'active':''" @click="setLan(item)">{{ item.language }}</a>
                                <div class="mod-radio">
                                    <input type="radio" id="shared" value="true" v-model="isShared"><label for="shared">Shared</label>
                                    <input type="radio" id="no-shared" value="false" v-model="isShared"><label for="no-shared">No Shared</label>
                                </div>
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
                            <a href="#language">Language</a>
                        </li>
                        <li class="menu-item">
                            <a href="#sourceCode">Source Code</a>
                        </li>
        				<li class="menu-item">
        					<a href="#submit">Submit</a>
        				</li>
        				<li class="menu-item back-to-top">
        					<a href="javascript: window.scroll(0,0)">Back to top</a>
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
		padding-bottom: 12px;
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
    .mod-codemirror {
        margin-top: 8px;
    }
    .layout-aside .fix {
        position: fixed;
        top: 20px;
    }

    .mod-radio {
        margin: 10px 0 10px -5px;
    }

    .mod-radio label {
        font-size: 14px;
    }

</style>

<script>
import 'assets/css/mod-header.css';
import 'assets/css/mod-txt.css';
import 'assets/css/mod-menu.css';
import 'assets/css/mod-btn.css';
import 'assets/css/mod-codemirror.css';

import { getProblemDetail, postCode } from 'src/api';
import { mapGetters } from 'vuex';

	export default{
        data(){
            return{
            	loading: false,
            	post: null,
            	error: null,
                problem: {
                	
                },
                supportLan: [],
                usedLanID: 0,
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
                isShared: 'false'
            }
        },
        created() {
        	this.fetchData();
            // console.log(this.isShared);
        },
        computed: mapGetters({
            isLogin: 'checkStatus'
        }),
        mounted() {
            var aside = document.querySelector('.mod-menu');
            var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame ||function(callback) {setTimeout(callback, 1000 / 60);};
            var isScrolling = false;
            window.addEventListener('scroll', function(){
                if(!isScrolling) {
                    if(window.scrollY > 130) {
                        requestAnimationFrame(function() {
                            aside.className = 'mod-menu fix';
                            isScrolling = false;
                        });
                    }else {
                        requestAnimationFrame(function() {
                            aside.className = 'mod-menu';
                            isScrolling = false;
                        });
                        
                    }
                    isScrolling = true;
                }
            })
        },
        watch: {
        	'$route':'fetchData'
        },
        methods: {
        	fetchData: async function() {
        		this.error = this.post = null;
        		this.loading = true;
        		// get post
                try {
                    const res = await getProblemDetail(this.$route.params.problemId);
                    if(res.status == 200) {
                        let data = res.data.show_problem_response;
                        console.log(data);
                        if(data.error) {
                            console.log(data.error.debug);
                        }else {
                            this.problem = data.problem;
                            this.problem.id = data.problem_sid;
                            this.supportLan = data.languages;
                            console.log(this.supportLan);
                            let lanId = localStorage.getItem(data.languages[0].oj_name);
                            if(lanId) {
                                this.usedLanID = lanId;
                            }else {
                                this.usedLanID = this.supportLan[0].language_id;
                            }
                        }
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
                if(this.isLogin) {
                    if(this.code == '') {
                        alert('code cannot empty');
                    }else {
                        try {
                            let isShared = (this.isShared == 'true');
                            const res = await postCode(this.problem.id, this.code, this.usedLanID, isShared);
                            if(res.status == 200) {
                                let data = res.data;
                                if(data.error) {
                                    console.log(data.error);
                                    alert('error');
                                }else {
                                    alert('success');
                                    this.$router.push('/status');
                                }
                            }
                        }catch(err) {
                            console.log(err);
                        }
                    }
                }else {
                    alert('login first');
                }
            }
        }
    }
</script>