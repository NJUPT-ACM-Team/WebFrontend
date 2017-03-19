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
        						<h3><a name="description" href="#description">Description</a></h3>
        					</div>
        					<div class="txt-bd">
        						<p>{{ problem.dec }}</p>
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
        						<p>{{ problem.sinput }}</p>
        					</div>
        				</li>
        				<li>
        					<div class="txt-hd">
        						<h3><a name="sampleOutput" href="#sampleOutput">Sample output</a></h3>
        					</div>
        					<div class="txt-bd">
        						<p>{{ problem.soutput }}</p>
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
                        <li>
                            <div class="txt-hd">
                                <h3><a name="language" href="#language">Language</a></h3>
                            </div>
                            <div class="txt-bd">
                                <a href="#" class="lan-item active">G++</a>
                                <a href="#" class="lan-item">GCC</a>
                                <a href="#" class="lan-item">Java</a>
                                <a href="#" class="lan-item">Pascal</a>
                            </div>
                        </li>
                        <li>
                            <div class="txt-hd">
                                <h3><a name="sourceCode" href="#sourceCode">Source code</a></h3>
                            </div>
                            <div class="txt-bd">
                                <div class="mod-codemirror">
                                    <div class="cm-hd clearfix">
                                        <div class="cm-btn">
                                            <a href="javascript:;" class="icon icon-trash"></a>
                                        </div>
                                    </div>
                                    <div class="cm-bd">
                                        <codemirror v-model="code" :options="editorOption"></codemirror>
                                    </div>
                                </div>
                            </div>
                        </li>
        			</ul>
        		</div>
        		<div class="mod-btn">
        			<div class="btn btn-submit">
        				<a href="javascript:;">Submit</a>
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
    .mod-codemirror {
        margin-top: 16px;
    }

</style>

<script>
import 'assets/css/mod-header.css';
import 'assets/css/mod-txt.css';
import 'assets/css/mod-menu.css';
import 'assets/css/mod-btn.css';
import 'assets/css/mod-codemirror.css';

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
                },
                code: '',
                lan: {
                    g: 'text/x-c++src',
                    gcc: 'text/x-csrc',
                    java: 'text/x-java',
                    pascal: 'text/x-pascal'
                },
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
                console.log(this.problem.id);
        	}
        }
    }
</script>