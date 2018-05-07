<template>
  <div class="section-group section-group--columns">

    <section class="section section--card section--hero section--large section--theme-fieryrose">
      <div class="section__container">
          <div class="section__header hero-section__header">
              <h1 class="section__heading">Hi my name is Zenobius</h1>
              <h3 class="section__meta">Frontend developer, NodeJs, Docker protagonist</h3>
          </div>
      </div>
    </section>

    <section-card
      :page="resume"
      :date="false"></section-card>

    <section-card
      class="section--post"
      v-for="post in posts"
      :key="post.id"
      :page="post"></section-card>

  </div>
</template>

<script>
export default {

  layout: 'hero',

  components: {
    SectionCard: () => import('~/components/section-card.vue')
  },

  async asyncData ({ app }) {
    const posts = await app.$content('posts')
        .query({ exclude: ['body'] })
        .getAll();

    const resume = await app.$content('/pages')
        .query({exclude: 'body'})
        .get('resume');

    return {
      resume,
      posts: posts.reduce((posts, post) => {
          post.theme = '';
          return posts;
        }, posts)
    }
  }

};
</script>