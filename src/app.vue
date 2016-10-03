<template lang="html">
	<div>
		<navigation :links="links"></navigation>
		<router-view></router-view>
	</div>
</template>

<style lang="sass" type="text/css">
@import "~app/styles/screen";
</style>

<script type="text/babel">
/* @flow */
import caseFilters from 'app/filters/case';
import markdownFilters from 'app/filters/markdown';

export default {

	filters: {
		...markdownFilters,
		...caseFilters
	},


	components: {
		Navigation: require('app/components/organisms/navigation')
	},

	data () : object {
		return {
			links: [
				{ route: 'root', text: 'home'},
				{ route: 'root.blog', text: 'blog'},
			]
		};
	},

};
</script>
