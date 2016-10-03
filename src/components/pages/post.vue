<template>
	<div :id="id">
		<segment :data="{title: Content.title}"></segment>
	</div>
</template>

<script type="text/babel">
import api from 'app/api';

export default {
	route: {
		data ({to}) {
			return api.post
				.get(to.params.slug)
				.then( (post) => {
					to.data.post = post;
				});
		}
	}
};
</script>