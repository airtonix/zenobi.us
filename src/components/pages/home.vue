<template>
	<div class="page">
		<h1>Home</h1>
		<pre v-if="content">{{ content }}</pre>
	</div>
</template>

<script>
import debug from 'debug';
import api from 'app/api';

const log = debug('app/components/pages/home');

export default {
	components: {
		Page: require('../organisms/page')
	},

	data () {
		return {
			content: null,
		};
	},

	created () {
		this.fetchData();
	},

	watch: {
		'$route': 'fetchData'
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
	methods: {
		fetchData () {
		}
	}
};
</script>