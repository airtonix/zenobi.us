<template>
    <section class="section">
      <div class="section__content">
        <nav class="link-list link-list--vertical">
          <ul class="link-list__container">
            <li class="list-list__item"
                v-for="post in posts"
                :key="post.id">
              <nuxt-link class="link-list__link"
                :to="post.permalink">{{ post.title }}</nuxt-link>
            </li>
          </ul>
        </nav>
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