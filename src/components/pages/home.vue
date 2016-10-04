<template lang="html">
	<div :id="id">
		<div class="mdl-cell mdl-cell--12-col">
			<contact-form></contact-form>
		</div>
	</div>
</template>

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