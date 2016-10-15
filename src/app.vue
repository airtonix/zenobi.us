<template lang="html">
	<div class="mdl-layout mdl-js-layout has-drawer is-upgraded">

		<header class="mdl-layout__header mdl-layout__header--transparent">
			<div class="mdl-layout__header-row">

				<span class="mdl-layout__title">
					<div class="mdl-layout__title-text">
						<a href="//zenobi.us">zenobi.us</a></div>
				</span>
				<div class="mdl-layout-spacer"></div>
				<navigation :links="links"></navigation>

			</div>
		</header>

		<div class="mdl-layout__drawer" ref="drawer" @click="closeDrawer">
				<span class="mdl-layout__title">zenobi.us</span>
				<navigation :links="links"></navigation>
		</div>

		<main class="mdl-layout__content">
			<router-view class="mdl-grid mdl-page"></router-view>
		</main>

	</div>
</template>

<style lang="scss">@import "~app/styles/screen";</style>

<script type="text/babel">
/* @flow */
import debug from 'debug';
import 'material-design-lite/material.js';

import caseFilters from 'app/filters/case';
import markdownFilters from 'app/filters/markdown';

const log = debug('app/root');

export default {

	filters: {
		...markdownFilters,
		...caseFilters
	},

	components: {
		Navigation: (resolve: Function ) : any => require(['app/components/organisms/navigation'], resolve),
	},

	computed: {
		links () : array { return this.$store.state.navigation.global; },
	},

	methods: {

		closeDrawer () {
			let selectors = [
				'.mdl-layout__obfuscator.is-visible',
				'.mdl-layout__drawer.is-visible'
			];

			document
				.querySelectorAll(selectors.join(', '))
				.forEach( (el: string) : void => el.classList.remove('is-visible') );
		}

	},

	mounted () {
		log('mounted', this.$store);
	}
};
</script>
