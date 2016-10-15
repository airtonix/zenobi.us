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

<style lang="scss">
	.mdl-layout__header-row {
		height: 48px;
		border-bottom: 1px solid #eee;

		.mdl-navigation {
			display: flex;
			justify-content: space-around;


			a.mdl-navigation__link {
				display: flex;
				line-height: 48px;
				color: #83979d;
				&.router-link-active {
					background: #eee;
					color: black;
				}
			}


		}

	}
</style>

<script>
export default {
	props: {
		links: true
	},
};
</script>