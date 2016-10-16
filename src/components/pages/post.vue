<template>
	<div :id="id">
		<segment :data="{title: Content.title}"></segment>
	</div>
</template>

<script type="text/babel">
export default {

	mounted () {
		window.scrollTo(0, 0);
	}

};
</script>