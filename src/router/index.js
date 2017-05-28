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
          path: '/problems',
          component: resolve => require(['components/index/Problem'], resolve)
        },
        {
          path: '/problems/:problemId',
          name: 'problem',
          component: resolve => require(['components/index/ProblemDetail'], resolve)
        },
        {
          path: '/status',
          component: resolve => require(['components/index/Status'], resolve)
        },
        {
          path: '/contests',
          component: resolve => require(['components/index/Contest'], resolve)
        }, 
        {
          path: '/contests/:contestId',
          name: 'contest',
          component: resolve => require(['components/index/ContestDetail'], resolve),
          children: [
            {
              path: '/contests/:contestId/detail',
              name: 'detail',
              component: resolve => require(['components/index/contest/ContestIntroduce'], resolve)
            },
            {
              path: '/contests/:contestId/status',
              name: 'status',
              component: resolve => require(['components/index/contest/ContestStatus'], resolve)
            },
            {
              path: '/contests/:contestId/rank',
              name: 'rank',
              component: resolve => require(['components/index/contest/ContestRank'], resolve)
            },
            {
              path: '/contests/:contestId/discussion',
              name: 'discussion',
              component: resolve => require(['components/index/contest/ContestDiscussion'], resolve)
            },
            {
              path: '/contest/:contestId/:problemId',
              name: 'contest-problem',
              component: resolve => require(['components/index/contest/ContestProblemDetail'], resolve)
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
      component: resolve => require(['views/admin/Index'], resolve),
      children: [
        {
          path: '/admin',
          component: resolve => require(['components/admin/Home'], resolve)
        },
        // {
        //   path: '/admin/'
        // }
      ]
    },
    {
      path: '*',
      component: resolve => require(['components/404'], resolve)
    }
  ]
});