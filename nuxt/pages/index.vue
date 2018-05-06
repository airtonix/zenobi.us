<template>
  <div class="section-group section-group--columns">

    <section class="section section--card hero-section section--large section--theme-fieryrose">
      <div class="section__container">
          <div class="section__header hero-section__header">
              <h1 class="section__heading">Hi my name is Zenobius</h1>
              <small class="section__meta">check out my <nuxt-link to="resume">resume</nuxt-link></small>
          </div>
      </div>
    </section>

    <section-card
      v-for="post in posts"
      :key="post.id"
      :page="post"></section-card>

  </div>
</template>

<script>
// import {colours} from '@uikit/settings/_colours.scss';
export default {

  layout: 'hero',

  components: {
    SectionCard: () => import('~/components/section-card.vue')
  },

  async asyncData ({ app, payload }) {
    const posts = payload || await app.$content('posts').getAll();

    return {
      posts: posts.reduce((posts, post) => {
        post.theme = '';
        return posts;
      }, posts)
    }
  }

};
</script>