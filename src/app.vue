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
/* @flow */
import caseFilters from 'app/filters/case';
import {markdown, } from 'app/filters/markdown';

export default {

	filters: {
		markdown,
	},


	components: {
		Navigation: require('app/components/organisms/navigation')
	},

	data () : object {
		return {
			links: [
				{ route: 'root.blog', text: 'blog'},
			]
		};
	},

};
</script>
