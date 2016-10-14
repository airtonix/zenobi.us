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
      sources: [require('promise?global!app/content/resume/experience.md')]
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
  routes,
  scrollBehaviour(to: object, from: object, saved: object) : object {
    log('VueRouter.scrollBehaviour', {
      to,
      from,
      saved
    });
    if (saved) {
      return saved;
    }
    return {
      x: 0,
      y: 0
    };
  }
});

const redirect = sessionStorage.redirect;
delete sessionStorage.redirect;
if (redirect && redirect !== location.href) {
  router.replace(redirect);
}
