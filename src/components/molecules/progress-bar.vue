<template>
	<div ref="progress"
		class="mdl-progress mdl-js-progress mdl-progress__indeterminate"></div>
</template>

<script>
import Vue from 'vue';

export default {

	mounted () {
		Vue.nextTick(() => {
			componentHandler.upgradeElement(this.$refs.progress);
		});
	},
};
</script>