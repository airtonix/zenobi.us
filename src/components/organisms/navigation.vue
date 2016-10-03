<template>
	<nav class="mdl-navigation">
		<router-link
			class="mdl-navigation__link"
			v-for="link in links"
			:to="{ name: link.route }"
			:alt="link.label">{{ link.text }}</router-link>
	</div>
</template>

<style>
	.navigation {
		display: flex;
		justify-content: space-around;
	}
	.navigation__link {
		display: flex;
		padding: 0.5em 1em;
		border: 1px solid silver;
	}
</style>

<script>
export default {
	props: {
		links: true
	},
};
</script>