<template>
    <div class="page page--hero">
        <div class="page__container">
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
