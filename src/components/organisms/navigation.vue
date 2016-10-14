<template>
	<nav class="mdl-navigation">
		<template v-for="link in links">
			<router-link
				v-if="link.route"
				class="mdl-navigation__link"
				:to="{ name: link.route }"
				:alt="link.label">{{ link.text }}</router-link>
			<a v-if="link.uri" :href="link.uri">{{ link.text }}</a>
		</template>
	</div>
</template>

<style>
	.mdl-navigation {
		display: flex;
		justify-content: space-around;
	}

	.mdl-navigation__link {
		display: flex;
	}

	.mdl-navigation a.mdl-navigation__link.router-link-active {
		background: silver;
		color: black;
	}
</style>

<script>
export default {
	props: {
		links: true
	},
};
</script>