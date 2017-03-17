<template>
	<div>
		<div class="layout-header">
			<div class="mod-header">
				<h2>Submit your code</h2>
			</div>
		</div>
		<div class="layout-body clearfix">
			<div class="layout-main">
				<div class="mod-txt">
					<ul>
						<li>
							<div class="txt-hd">
								<h3>Problem ID</h3>
							</div>
							<div class="txt-bd">
								{{ $route.params.problemId }}
							</div>
						</li>
						<li>
							<div class="txt-hd">
								<h3>Language</h3>
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
								<h3>Source code</h3>
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
		</div>
	</div>
</template>

<style scoped>

	.layout-body {
        margin-top: 16px;
    }
    .layout-body .layout-main {
        width: 72%;
        float: left;
    }
	.mod-txt ul li {
		margin-bottom: 24px;
	}
	.mod-txt .txt-bd .lan-item {
		display: inline-block;
		color: #5b5b5b;
		margin-right: 25px;
	}
	.mod-txt .txt-bd .lan-item.active {
		color: #22409a;
		font-weight: bold;
	}
	.mod-txt .txt-bd .lan-item:hover {
		color: #22409a;
		text-decoration: underline;
	}

	.CodeMirror.cm-s-default {
		background: #fafafa;
	}

</style>

<script>
import 'assets/css/mod-header.css';
import 'assets/css/mod-txt.css';
import 'assets/css/mod-btn.css';
import 'assets/css/mod-codemirror.css';

	export default{
        data(){
            return{
      			code: 'const a = 10',
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
        }
    }
</script>