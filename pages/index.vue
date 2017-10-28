<template>
    <section class="section">
        <div class="section__content" v-html="content"></div>
    </section>
</template>

<style>
</style>

<script>
import content from './index.md';


export default {
    layout: 'hero',


    data () {
        return {
            content
        };
    }
};
</script>