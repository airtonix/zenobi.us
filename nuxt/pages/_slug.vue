<template>
    <section class="section">
      <div class="section__content">
        <div class="section__heading">
          <h1 class="section__header"> {{ content.title }} </h1>
          <nuxtent-body :body="content.body" />
        </div>
      </div>
    </section>
</template>

<script>
export default {
  async asyncData ({ app, params, payload }) {
    return {
      content: payload || await app.$content('/pages').get(params.slug)
    }
  }
}
</script>
