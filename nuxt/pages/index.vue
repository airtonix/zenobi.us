<template>
    <section class="section">
      <div class="section__content">
      <ul>
        <li v-for="post in posts" :key="post.id">{{post.title}}</li>
      </ul>
      </div>
    </section>
</template>

<script>
export default {

  layout: 'hero',

  async asyncData ({ app, payload }) {
    return {
      // pages: await app.$content('/pages').getAll(),
      posts: payload || await app.$content('posts').getAll()
    }
  }

};
</script>