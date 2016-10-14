<template>
	<div :id="id" class="template-page">
		<nav>
			<router-link
				class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect mdl-navigation__link"
				:to="{ name: 'root' }"
				alt="Return home">
	      <i class="material-icons">home</i>
			</router-link>
		</nav>
		<segment class="mdl-cell mdl-cell--12-col" :data="{title}">
			<template slot="content">
				<div v-for="content in Contents" v-html="content"></div>
			</template>
		</segment>
	</div>
</template>

<script type="text/babel">
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
			title: null,
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
					this.Contents = contents;
				});
		}
	},

	beforeRouteEnter (to, from, next) {
		log('route.beforeRouteEnter', {from, to});
		if (!to.meta) { return; }
		let {sources } = to.meta;

		load(sources)
				.then( (contents) => {
					return next( vm => {
						vm.title = to.meta.title;
						vm.Contents = contents;
					});
				})
				.catch( () => next(false));
	},

};
</script>