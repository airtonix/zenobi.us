<template>
    <nuxt-link class="section section--card section--link"
             :class="{
               ['section--theme-' + page.theme]: page.theme
             }"
             :to="page.permalink">
      <div class="section__container">

        <div class="section__header hero-section__header">
          <small class="section__meta"
                    v-if="showDate && page.date">{{ page.date | date }}</small>
          <h3 class="section__heading">
            {{ page.title }}
          </h3>
        </div>

        <span class="section__icon material-icons" v-if="page.icon">{{page.icon}}</span>
      </div>
    </nuxt-link>
</template>

<script>
export default {
    props: {
        page: Object,
        showDate: {
          default: () => true
        }
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