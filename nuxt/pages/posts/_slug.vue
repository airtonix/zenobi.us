<template>
    <section class="section post-section">
      <div class="section__container post-section__container">
        <div class="section__header post-section__header"
             v-background="banner.url">
          <div class="section__header-container post-section__header-container">
            <h1 class="section__heading post-section__heading"> {{ content.title }} </h1>
          </div>
          <a class="post-section__credit"
             target="_blank"
             :title="'Image credit ' + banner.credit"
             :href="banner.credit"
             v-if="banner.credit">{{banner.credit}}</a>
        </div>
        <div class="section__body post-section__body">
          <div class="section__body-container post-section__body-container">
            <nuxtent-body
              class="wysiwyg-area post-section__wysiwyg-area"
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
    const content = payload || await app.$content('/posts').get(route.path);

    const bannerUrl = content.banner &&
                      content.banner.url ||
                      content.banner;

    const bannerCredit = content.banner &&
                         content.banner.credit ||
                         bannerUrl;
    return {
      banner: {
        url: bannerUrl,
        credit: bannerCredit
      },
      content
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
