<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>

export default {
    name: 'app',
    data() {
        return {

        }
    },
    created() {
        
    },
    methods: {
        setCookie: function(name, val, expiredays) {
            var exdate = new Date();
            exdate.setDate(exdate.getDate() + expiredays);
            document.cookie = name + '=' + escape(val) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString());
        },
        getCookie: function(name) {
            var arr, 
            reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
            if (arr = document.cookie.match(reg)) {
                return unescape(arr[2]);  
            }else {
                return null; 
            }
        },
        deleteCookie: function(name) {
            this.setCookie(name, '', -1);
        }
    }
}
</script>

<style>
@import 'assets/css/reset.css';
body {
    background: #fafafa;
}
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>
