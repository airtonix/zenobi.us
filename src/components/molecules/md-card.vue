<template>
	<div class="demo-card-square mdl-card mdl-shadow--4dp">
		<div class="mdl-card__title mdl-card--expand">
			<h2 class="mdl-card__title-text">
				<slot name="title">{{ Title }}</slot>
			</h2>
		</div>
		<div class="mdl-card__supporting-text">
			<slot name="content"><span :v-html="Content"></span></slot>
		</div>
		<div class="mdl-card__actions mdl-card--border" v-if="Actions">
			<a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"
				v-for="action in actions">{{ Actions.text }}</a>
		</div>
	</div>
</template>

<style lang="sass">
@import "~material-design-lite/src/card/card";
</style>

<script type="text/babel">
export default {
	props: {
		Actions: Array,
		Title: String,
		Content: String
	}
};
</script>