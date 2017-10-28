<template>
    <div class="page">
        <div class="section-group section-group--vertical">
            <navigation
                class="navigation--toolbar navigation--horizontal"></navigation>
            <nuxt class="section" />
        </div>
    </div>
</template>

<script>
import navigation from '~/components/navigation';

export default {
    layout: 'default',

    components: {
        navigation
    }
}
</script>

<style>

</style>
