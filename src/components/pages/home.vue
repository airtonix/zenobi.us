<template lang="html">
	<div>
		<div class="mdl-cell mdl-cell--12-col">
			<contact-form></contact-form>
		</div>
	</div>
</template>

<style lang="scss">
@import "~app/styles/_settings";

.route--root {
	.mdl-layout__header {
		display: flex;

		.mdl-layout__header-row {
			display: flex;
			flex-direction: column;
			height: 50vh;
			min-height: 50vh;
			border-bottom: 1px solid #eee;
			color: #ccc;
			padding: 0;
		}

		.mdl-layout__title {

		}
		.site-logo {
		  min-height: 10em;
		  width: 8em;
		}
		.mdl-layout-spacer {
		}
		.mdl-navigation a { color: #aaa;}
	}
}
</style>

<script>
import {PageMixins, } from './mixins';

export default {
	mixins: [
		PageMixins
	],

	components: {
		Card: resolve => require(['../molecules/card'], resolve),
		ContactForm: resolve => require(['../organisms/contact-form'], resolve),
	}
};
</script>