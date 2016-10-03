<template>
	<div :id="id">
		<card
			v-for="(post, index) in posts"
			class="mdl-cell mdl-cell--12-col-phone mdl-cell--12-col-tablet"
			:title="post.title"
			:content="post.content"
			:image="post.image"
			:class="{
				'mdl-cell--8-col': index === 0,
				'mdl-cell--4-col': index === 1,
				'mdl-cell--12-col': index >= 2
		}">
			<author slot="footer" :author="post.author" :when="post.changed"></author>
		</card>
	</div>
</template>

<script type="text/babel">
import debug from 'debug';
import api from 'app/api';
import changeCase from 'change-case';

const log = debug('app/components/pages/posts');

export default {
	components: {
		Card: require('app/components/molecules/card')
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