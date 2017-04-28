import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

export default new VueRouter({
	mode: 'history',
	routes: [
    {
      path: '/',
      component: resolve => require(['views/index/Index'], resolve),
      children: [
        {
          path: '/',
          component: resolve => require(['components/index/Home2'], resolve)
        },
        {
          path: '/news',
          component: resolve => require(['components/index/News'], resolve)
        },
        {
          path: '/problem',
          component: resolve => require(['components/index/Problem'], resolve)
        },
        {
          path: '/problem/:problemId',
          name: 'problem',
          component: resolve => require(['components/index/ProblemDetail'], resolve)
        },
        {
          path: '/contest',
          component: resolve => require(['components/index/Contest'], resolve)
        }, 
        {
          path: '/contest/:contestId',
          name: 'contest',
          component: resolve => require(['components/index/ContestDetail'], resolve),
          children: [
            {
              path: '/contest/:contestId/detail',
              name: 'contest-introduce',
              component: resolve => require(['components/index/contest/ContestIntroduce'], resolve)
            },
            {
              path: '/contest/:contestId/status',
              name: 'contest-status',
              component: resolve => require(['components/index/contest/ContestStatus'], resolve)
            },
            {
              path: '/contest/:contestId/rank',
              name: 'contest-rank',
              component: resolve => require(['components/index/contest/ContestRank'], resolve)
            },
            {
              path: '/contest/:contestId/discussion',
              name: 'contest-discussion',
              component: resolve => require(['components/index/contest/ContestDiscussion'], resolve)
            }
          ]
        },
        {
          path: '/user-rank',
          component: resolve => require(['components/index/UserRank'], resolve)
        },
        {
          path: '/about',
          component: resolve => require(['components/index/About'], resolve)
        }
      ]
    },
    {
      path: '/signin',
      component: resolve => require(['components/SignIn'], resolve)
    },
    {
      path: '/signup',
      component: resolve => require(['components/SignUp'], resolve)
    },
    {
      path: '/admin',
      component: resolve => require(['components/admin/Index'], resolve),
      children: [

      ]
    },
    {
      path: '*',
      component: resolve => require(['components/404'], resolve)
    }
  ]
});