<template lang="html">
	<div>
		<navigation :links="links"></navigation>
		<router-view></router-view>
	</div>
</template>

<style lang="sass">
@import "./styles/screen";
</style>

<script type="text/babel">
import caseFilters from 'app/filters/case';
import markdownFilters from 'app/filters/markdown';

export default {
	components: {
		Navigation: require('app/components/organisms/navigation')
	},
	data () {
		return {
			links: [
				{ route: 'root.blog', text: 'blog'},
			]
		};
	},
	computed: {
	}
}
</script>
