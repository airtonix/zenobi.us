<template>
	<div :id="id">
		<page :content="content"></page>
	</div>
</template>

<script>
import debug from 'debug';
import api from 'app/api';
import changeCase from 'change-case';

const log = debug('app/components/pages/home');

export default {
	components: {
		Page: require('../organisms/page'),
	},

	data () {
		return {
			content: null,
		};
	},

	computed: {
		id () { return changeCase.paramCase(this.$route.name); }
	},

	beforeRouteEnter (to, from, next) {
			log('beforeRouteEnter', to);
			api.pages
				.get(to.name)
				.then( response => {
					next( vm => { vm.content = response; })
				})
				.catch( err => next(false))
	},

};
</script>