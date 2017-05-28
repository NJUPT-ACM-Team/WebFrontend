<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>

import { mapGetters } from 'vuex';

export default {
    name: 'app',
    data() {
        return {

        }
    },
    created() {
        this.$store.dispatch('getAllOj', [{'all':1}]);
    },
    computed: mapGetters({
        ojList: 'allOj'
    }),
    methods: {
        
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
#app>div {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}
.nav {
    flex: 0 0 auto;
}
.router-view {
    flex: 1 0 auto;
}
.footer {
    flex: 0 0 auto;
}
</style>
