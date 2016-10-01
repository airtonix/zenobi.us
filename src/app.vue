<template lang="html">
	<div>
		<navigation :links="links"></navigation>
		<router-view></router-view>
	</div>
</template>

<style lang="css">
</style>

<script type="text/babel">
export default {
	components: {
		Navigation: require('app/components/organisms/navigation')
	},
	data () {
		return {
			links: [
				{ route: 'root.contact', text: 'contact me'},
				{ route: 'root.projects', text: 'projects'},
				{ route: 'root.posts', text: 'blog'},
			]
		};
	},
	computed: {
	}
}
</script>
