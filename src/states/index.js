import debug from 'debug';
import Vue from 'vue';
import VueRouter from 'vue-router';

const log = debug('app.states');

import * as names from './names';
import * as paths from './paths';

export const routes = [
  {
    name: names.HOME,
    path: paths.HOME,
    component: resolve => require(['../components/pages/home'], resolve),
  },
  {
    name: names.BLOG,
    path: paths.BLOG,
    component: resolve => require(['../components/pages/posts'], resolve),
  },
  {
    name: names.ABOUT,
    path: paths.ABOUT,
    meta: {
      title: 'About',
      sources: [
        require('promise?global!app/content/resume/about.md'),
        require('promise?global!app/content/resume/experience.md')
      ]
    },
    component: resolve => require(['../components/templates/page'], resolve),
  },
  {
    name: names.PROJECTS,
    path: paths.PROJECTS,
    meta: {
      title: 'Projects',
      sources: [require('promise?global!app/content/resume/projects.md')]
    },
    component: resolve => require(['../components/templates/page'], resolve),
  },
  {
    name: names.BLOG_DETAIL,
    path: paths.BLOG_DETAIL,
    component: resolve => require(['../components/pages/post'], resolve),
  },
  {
    path: '*',
    redirect: paths.HOME
  }

];

Vue.use(VueRouter);
export const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehaviour(to: object, from: object, saved: object) : object {
    log('VueRouter.scrollBehaviour', {
      to,
      from,
      saved
    });
    return {x: 0, y: 0};

    // if (saved) {
    //   // saved is only available for popstate navigations.
    //   return saved;
    // } else {
    //   const position = {};
    //   // new navigation.
    //   // scroll to anchor by returning the selector
    //   if (to.hash) {
    //     position.selector = to.hash;
    //   }
    //   // check if any matched route config has meta that requires scrolling to top
    //   if (to.matched.some(m => m.meta.scrollToTop)) {
    //     // cords will be used if no selector is provided,
    //     // or if the selector didn't match any element.
    //     position.x = 0;
    //     position.y = 0;
    //   }
    //   // if the returned position is falsy or an empty object,
    //   // will retain current scroll position.
    //   return position;
    // }

  }
});

const redirect = sessionStorage.redirect;
delete sessionStorage.redirect;
if (redirect && redirect !== location.href) {
  router.replace(redirect);
}
