import debug from 'debug';
import Vue from 'vue';
import VueRouter from 'vue-router';
import analytics from 'universal-ga';

const log = debug('app/states');

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
});

router.beforeEach( (to, from, next) => {
  var container = document.querySelector('.mdl-layout');
  if (container) {
    log('beforeEach.scrollTop');
    container.scrollTop = 0;
  }
  next();
});

router.afterEach((to, from) => {
  analytics.pageview(to.path);
});

const redirect = sessionStorage.redirect;
delete sessionStorage.redirect;
if (redirect && redirect !== location.href) {
  router.replace(redirect);
}
