<template>
    <div>
        <div class="layout-header">
            <div class="mod-header">
                <h2>Welcome to NOJ</h2>
            </div>
        </div>
        <div class="layout-body clearfix">
            <div class="layout-main">
                <div class="mod-txt">
                    <div class="txt-bd">
                        <p>2016-06-04 12:34:30<br/>
                            <a href="#">http://acm.njupt.edu.cn/acmhome/download/codeblocks-13.12mingw-setup.exe</a><br/><br/>
                            NOJ升级演示版发布！该版本目前不支持上传题目、发信息（邮件），不支持IE8以下浏览器。你可以利用Virtual Judge举办自己的比赛，注意比赛要用的部分题目需要自己添加（如果找不到）。<br/><br/>
                            如果页面显示有问题，下载试试Chrome浏览器绿色版。<br/><br/>
                            更多的南邮ACM新闻，请点击。<br/><br/>
                            在ACM-ICPC中获得很好成绩的人，现在都在干什么？请点击。<br/><br/>
                            如果你是南邮学生，想提高编程水平、有编程问题寻求帮助，或希望加入南邮ACM竞赛队，可申请加入南邮ACM程序设计交流群（QQ群号为225811372，请提供你的学号+姓名实名认证）。
                        </p>
                    </div>
                </div>
            </div>
            <div class="layout-aside">
                <div class="mod-box">
                    <div class="box-bd">
                        <ul class="table-list">
                            <li class="table-item table-contest">
                                <div class="table-header">{{ contest.name }}</div>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>{{ contest.champion }}</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>{{ contest.runnerUp }}</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>{{ contest.thirdRunner }}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </li>
                          <li class="table-item">
                              <div class="table-header">Top User</div>
                              <table>
                                  <tbody>
                                      <tr>
                                          <td>User</td>
                                          <td>Number of Solved</td>
                                      </tr>
                                      <tr v-for="usr in topUser">
                                          <td>{{ usr.name }}</td>
                                          <td>{{ usr.solveNum }}</td>
                                      </tr>
                                  </tbody>
                              </table>
                          </li>
                        </ul>
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
    .layout-body .layout-aside {
        width: 25%;
        float: right;
    }
    .layout-body .layout-main {
        width: 72%;
        float: left;
    }
</style>
<script>
import 'assets/css/mod-header.css';
import 'assets/css/mod-txt.css';
import 'assets/css/mod-box.css';

    export default{
        data() {
            return {
                contest: {
                  name: '“青书杯”科技节之算法脑洞大赛 初级组',
                  champion: 'oast_2016_24',
                  runnerUp: 'oast_2016_23',
                  thirdRunner: 'oast_2016_25'
                },
                topUser: [
                  {
                    name: '18168035513',
                    solveNum: 50
                  },{
                    name: 'B14030429',
                    solveNum: 30
                  },{
                    name: 'B14030412',
                    solveNum: 10
                  }
                ]
            }
        },
        created() {
          
        },
        method() {
            return {
              beforeLeave: function(el) {
                alert('hello');
              }
            }
        }
    }
</script>
