<template>
    <section class="section page-section">
      <div class="section__container">
        <div class="section__header">
          <div class="section__header-container">
            <h1 class="section__heading">Posts</h1>
          </div>
        </div>
        <div class="section__body">
          <div class="section__body-container">

            <div class="blog-list">
              <div class="link-list blog-list__years"
                   v-for="(months, year) in grouped"
                   :key="year">
                <h3 class="blog-list__year">{{year}}</h3>
                <div class="link-list blog-list__months"
                    v-for="(items, month) in months"
                    :key="month">
                  <h4 class="block-list__month">{{$dates.monthNames[month]}}</h4>
                  <ul class="link-list blog-list__posts">
                    <li v-for="post in items"
                        :key="post.id">
                      <nuxt-link :to="post.permalink">{{post.title}}</nuxt-link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
</template>

<script>
import Vue from 'vue';
import _ from 'lodash';

export default {

  layout: 'standard',

  components: {
      SectionCard: () => import('~/components/sections/section-card.vue')
  },

  methods: {
    orderBy: _.orderBy,
  },

  async asyncData ({ app, params, payload }) {
    const posts = payload || await app.$content('/posts')
        .query({ exclude: ['body'] })
        .getAll();

    return {
      posts: posts,
      grouped: posts
        .filter(post => Vue.$colophon.isPublished(post))
        .reduce((collection, post) => {
          const date = new Date(post.date);
          const yearKey = date.getFullYear();
          const monthKey = date.getMonth()+1;

          collection[yearKey] = collection[yearKey] || {};
          collection[yearKey][monthKey] = collection[yearKey][monthKey] || [];
          collection[yearKey][monthKey] = collection[yearKey][monthKey].concat(post);
          return collection;
        }, {})
    };

  },

}
</script>
