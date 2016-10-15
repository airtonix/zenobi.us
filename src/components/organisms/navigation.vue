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

<script>
export default {
	props: {
		links: true
	},
};
</script>