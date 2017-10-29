<template>
<div class="page">
    <div class="section-group section-group--vertical">
        <section class="section section--fullscreen hero-section">
            <div class="section__heading hero-section__heading">
                <h1>zenobi.us</h1>

                <navigation
                    :exclude="['/']"
                    class="navigation--thick navigation--hero navigation--rounded navigation--horizontal"
                    shade="dark">
                </navigation>

            </div>
        </section>
        <nuxt/>
    </div>
</div>
</template>
  
<script>

export default {
    layout: 'default',

    components: {
        navigation: () => import('~/components/navigation.vue'),
    },
}
</script>

<style>

</style>
