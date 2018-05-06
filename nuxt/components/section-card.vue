<template>
    <nuxt-link class="section section--card section--link"
             :class="{
               ['section--theme-' + page.theme]: page.theme
             }"
             :to="page.permalink">
      <div class="section__container">
        <small class="section__meta"
                  v-if="page.date">{{ page.date | date }}</small>
        <div class="section__header hero-section__header">
            <h3 class="section__heading">
              {{ page.title }}
            </h3>
        </div>

      </div>
    </nuxt-link>
</template>

<script>
export default {
    props: {
        page: Object
    },

  filters: {
    date (str) {
      if (!Date.prototype.toLocaleDateString) { return str; }

      return (new Date(str)).toLocaleDateString('en-AU', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      });
    }
  },
}
</script>