<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>

import { mapGetters } from 'vuex';
import { getOJList } from 'src/api';

export default {
    name: 'app',
    data() {
        return {

        }
    },
    async created() {
        try {
            const res = await getOJList();
            if(res.status == 200) {
                console.log(res);
                let data = res.data.about_response;
                if(data.username != '') {
                    let userInfo = {
                        nickname: data.username,
                    }
                    this.$store.dispatch('login', userInfo);
                }
                this.$store.dispatch('getAllOj', data.ojs_list);
            }
        }catch(err) {
            console.log(err);
        }
        console.log(this.ojList);
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
