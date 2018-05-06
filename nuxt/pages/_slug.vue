<template>
    <section class="section page-section">
      <div class="section__container">
        <div class="section__header">
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
      content: payload || await app.$content('/pages').get(route.path)
    }
  }
}
</script>
