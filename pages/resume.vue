<template>
    <div class="section">
        <div class="section__content" v-html="content"></div>
    </div>
</template>

<script>
import content from './resume.md';

export default {

    layout: 'standard',

    data () {
        return {
            content
        }
    }
}
</script>
