<template>
	<div :id="id">
		<md-card v-for="post in posts">
			<span slot="title">{{ post.title }}</span>
		</md-card>
	</div>
</template>

<script type="text/babel">
import debug from 'debug';
import api from 'app/api';
import changeCase from 'change-case';

const log = debug('app/components/pages/posts');

export default {
	components: {
		MdCard: require('app/components/molecules/md-card')
	},

	data () {
		return {
			posts: null,
			content: {
				title: 'Blog',
			}
		};
	},

	computed: {
		id () { return changeCase.paramCase(this.$route.name); }
	},

	beforeRouteEnter (to, from, next) {
			log('beforeRouteEnter', to);

			api.posts.all()
				.then( response => {
					next( vm => {
						log('next.vm', vm);
						vm.posts = response;
					});
				})
				.catch( () => next(false));
	},

	ready () {
		log('ready');
	}
};
</script>