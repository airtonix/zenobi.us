<template lang="html">
	<div :id="id">

		<div class="site-header mdl-cell mdl-cell--12-col">

				<span class="site-header__title">
					<logo
						class="site-header__logo"
						:animates="true"></logo>
					<h3 class="site-header__title-text">
						<a href="//zenobi.us">zenobi.us <small>web developer</small></a></h3>
				</span>

				<div class="mdl-layout-spacer"></div>

				<navigation :links="links"></navigation>

		</div>

		<segment class="mdl-cell mdl-cell--6-col">
			<h4 slot="title">Contact Me</h4>
			<contact-form slot="content"></contact-form>
		</segment>

	</div>
</template>


<script type="text/babel">
/* @flow */
import {PageMixins, } from './mixins';

export default {

	mixins: [
		PageMixins
	],

	components: {
		Logo: (resolve: Function) : any => require(['app/components/molecules/logo'], resolve),
		Navigation: (resolve: Function ) : any => require(['app/components/organisms/navigation'], resolve),
		Segment: (resolve: Function ) : any => require(['app/components/molecules/segment'], resolve),
		ContactForm: (resolve: Function) : any => require(['../organisms/contact-form'], resolve),
	},

	computed: {
		links () : array { return this.$store.state.navigation.global; },
	},

};
</script>