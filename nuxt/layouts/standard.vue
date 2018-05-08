<template>
    <div class="page">
        <div class="page__container">
            <navigation
                class="navigation--toolbar navigation--horizontal"></navigation>
            <nuxt class="section" />
        </div>
    </div>
</template>

<script>

export default {
    layout: 'default',

    components: {
        navigation: () => import('~/components/navigation/component.vue')
    }
}
</script>
