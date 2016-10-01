<template>
	<segment title=""></segment>
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