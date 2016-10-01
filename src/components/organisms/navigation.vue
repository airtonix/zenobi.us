<template>
	<div class="navigation">
		<router-link
			class="navigation__link"
			v-for="link in links"
			:to="link.route"
			:alt="link.label">{{ link.text }}</router-link>
	</div>
</template>

<style type="text/css">
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

<script type="text/babel">
export default {
	props: {
		links: true
	},
	components: {
	}
};
</script>