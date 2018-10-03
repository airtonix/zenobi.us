<template>
  <div class="section-group section-group--columns">

    <section class="section section--card section--hero section--large section--theme-fieryrose">
      <div class="section__container">
          <colour-mapped-image
            class="section__header-image-layer"
            src="https://images.unsplash.com/photo-1472457897821-70d3819a0e24"
            colour="#f45d69"></colour-mapped-image>
          <div class="section__header hero-section__header">
              <h1 class="section__heading">Hi my name is Zenobius</h1>
              <h3 class="section__meta">Frontend developer, NodeJs, Docker protagonist</h3>
          </div>
      </div>
    </section>

    <section-card
      :page="resume"
      :show-date="false"></section-card>

    <section-card
      class="section--post"
      v-for="post in posts"
      v-if="$colophon.isPublished(post)"
      :key="post.id"
      :page="post"></section-card>

  </div>
</template>

<script>
import Vue from 'vue';

export default {

  layout: 'hero',

  components: {
    ColourMappedImage: () => import('~/components/image/colour-mapped-image'),
    SectionCard: () => import('~/components/sections/section-card')
  },

  async asyncData ({ app }) {
    const posts = await app.$content('posts')
        .query({ exclude: ['body'] })
        .getAll();

    const resume = await app.$content('/pages')
        .query({exclude: 'body'})
        .get('resume');

    const mode = process.env.mode;

    return {
      mode,
      resume,
      posts: posts
        .reduce((posts, post) => {
            post.theme = '';
            return posts;
          }, posts)
    }
  }

};
</script>