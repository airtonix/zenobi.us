<template>
	<div class="activity-indicator">
		<div v-if="loading" class="activity-indicator__mask"></div>
		<div v-if="!loading" class="activity-indicator__content"><slot></slot></div>
	</div>
</template>

<script type="text/babel">
export default {
	props: {
		loading: true
	}
};
</script>