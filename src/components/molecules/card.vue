<template>
	<div class="mdl-card mdl-shadow--2dp">

		<div
			class="mdl-card__title mdl-color-text--grey-50"
			v-if="!noTitle">
				<h3 class="mdl-card__title-text">{{ Title }}</h3>
		</div>

		<div class="mdl-card__supporting-text">
			<slot name="content"></slot>
		</div>

		<div class="mdl-card__actions "
			v-if="!noActions">
			<slot name="footer"></slot>
		</div>

		<div class="mdl-card__menu"
			v-if="!noMenu">
			<slot name="menu"></slot>
		</div>

	</div>
</template>

<style lang="css">

</style>

<script type="text/babel">
export default {
	props: {
		Title: String,
		noTitle: { default () { return false; } },

		Image: String,
		noImage: { default () { return false; } },

		Content: String,
		noMenu: { default () { return false; } },
	}
};
</script>