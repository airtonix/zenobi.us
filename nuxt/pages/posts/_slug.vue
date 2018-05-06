<template>
    <section class="section post-section">
      <div class="section__container">
        <div class="section__header" v-background="content.banner">
          <div class="section__header-container">
            <h1 class="section__heading"> {{ content.title }} </h1>
          </div>
        </div>
        <div class="section__body">
          <div class="section__body-container">
            <nuxtent-body
              class="wysiwyg-area"
              :body="content.body" />
          </div>
        </div>
      </div>
    </section>
</template>

<script>
export default {
  layout: 'standard',

  async asyncData ({ app, params, payload, route }) {
    return {
      content: payload || await app.$content('/posts').get(route.path)
    }
  },

  directives: {
    background (node, {value}) {
      if (!value) { return; }

      node.style.backgroundImage = `url(${value})`;
      node.style.backgroundPosition = 'center center';
      node.style.backgroundSize = 'cover';

      node.classList.toggle('has--banner-bg');
    }
  }
}
</script>
