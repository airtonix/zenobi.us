<template>
	<div :id="id" class="template-page">
		<segment class="mdl-cell mdl-cell--12-col" :data="{title:Title}">
			<template slot="content">
				<div v-for="content in Contents" v-html="content"></div>
			</template>
		</segment>
	</div>
</template>

<script type="text/babel">
import Vue from 'vue';
import debug from 'debug';
import changeCase from 'change-case';
const log = debug('app/components/templates/page');

const load = (sources) => {
	return Promise.all(sources.map(item => Function.prototype.call.bind(item)()));
		// .then( items => items.map(content => ({content}) ));
	};

export default {

	components: {
		Segment: resolve => require(['../molecules/segment'], resolve),
	},

	data () {
		return {
			Title: null,
			Contents: []
		};
	},

	computed: {
		id() {
			return changeCase.paramCase(this.$route.name);
		}
	},

	watch: {
		$route () {
			this.Contents = null;
			load(this.$route.meta.sources)
				.then( (contents) => {
					this.Title = this.$route.meta.title;
					this.Contents = contents;
				});
		}
	},

	beforeRouteEnter (to, from, next) {
		log('route.beforeRouteEnter', {from, to});
		if (!to.meta) { return; }
		let { sources, } = to.meta;

		load(sources)
			.then( (contents) => {
				return next( vm => {
					Vue.nextTick( () => {
						vm.Title = to.meta.title;
						vm.Contents = contents;
					});
				});
			})
			.catch( () => next(false));
	},

	mounted () {
		window.scrollTo(0, 0);
	}

};
</script>