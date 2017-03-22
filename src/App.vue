<template>
    <div id="app">
        <div class="nav">
            <div class="nav-container clearfix">
                <div class="nav-logo">
                    <a href="/">
                        <h1>NUPT Online Judge</h1>
                    </a>
                </div>
                <div class="nav-tabs">
                    <ul class="tabs">
                        <li class="tabs-item">
                            <router-link to="/news">News</router-link>
                        </li>
                        <li class="tabs-item">
                            <router-link to="/problem">Problem</router-link>
                        </li>
                        <li class="tabs-item">
                            <router-link to="/contest">Contest</router-link>
                        </li>
                        <li class="tabs-item">
                            <router-link to="/user-rank">User Rank</router-link>
                        </li>
                        <li class="tabs-item">
                            <router-link to="/about">About</router-link>
                        </li>
                      </ul>
                </div>
                <div class="nav-user">
                    <div v-if="isSignin">
                        user
                    </div>
                    <div v-else>
                        <p>
                            <router-link to="/signin" class="sign-in">Sign in</router-link>/
                            <router-link to="/signup" class="sign-up">Sign up</router-link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="router-view">
            <router-view></router-view>
        </div>
        <div class="footer">
            <div class="footer-inner clearfix">
                <div class="copyright">
                    <span>&copy; 2017 NOJ</span>
                    <span class="link">
                        <a href="#">Blog</a>
                        <a href="#">Contact us</a>
                        <a href="#">About</a>
                        <a href="#">Help</a>
                    </span>
                </div>
                <div class="footer-logo">
                    <a href="/">NOJ</a>
                </div>
                <div class="friend-link">
                    <a href="#">POJ</a>
                    <a href="#">ZOJ</a>
                    <a href="#">HOJ</a>
                    <a href="#">RQNOJ</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'app',
    components: {

    },
    data() {
        return {
            isSignin: false
        }
    }
}
</script>

<style>
@import './assets/css/reset.css';
body {
    background: #fafafa;
}
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.nav {
    width: 100%;
    height: 54px;
    border-bottom: 1px solid #e0e0e0;
    line-height: 54px;
}
.nav .nav-container {
    width: 980px;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
}
.nav .nav-logo {
    float: left;
    height: 100%;
}
.nav-logo h1{
    color: #22409a;
    font-size: 18px;
}

.nav-tabs {
    float: left;
    margin-left: 120px;
}
.nav-tabs .tabs li {
    display: inline-block;
    padding: 0 12px;
}

.nav-user {
    float: right;
}
.nav-user p {
    font-size: 18px;
}
.nav-user a {
    color: #22409a;
    font-size: 16px;
    margin: 0 10px;
}
.nav-user a:hover {
    text-decoration: underline;
}

.tabs li a {
    color: rgba(0,0,0,0.8);
}
.tabs li a:hover {
    color: rgba(0,0,0,1);
}
.router-view {
    width: 980px;
    margin: 0 auto;
}
.footer {
    width: 980px;
    margin-top: 64px;
    margin-left: auto;
    margin-right: auto;
    border-top: 1px solid #e0e0e0;
}
.footer .footer-inner {
    padding: 32px 12px;
    font-size: 14px;
    position: relative;
}
.footer .copyright {
    float: left;
}
.footer .link a,
.footer .friend-link a {
    display: inline-block;
    margin: 0 5px;
    font-size: 14px;
    color: #22409a;
}
.footer .footer-logo {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    font-size: 16px;
}
.footer .footer-logo a {
    color: #22409a;
}
.footer .friend-link {
    float: right;
}

</style>
