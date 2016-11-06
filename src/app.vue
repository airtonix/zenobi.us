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
				<transition name="fade">
					<router-view class="mdl-grid mdl-page"></router-view>
				</transition>
				<div class="site-credits">
					<a href="https://unsplash.com/?photo=2154YiDnVJU">photo credit</a>
				</div>
			</main>

		</div>
</template>

<style lang="scss">
.site-header {
	transition: opacity 10ms;
}
.fade-enter-active {
  transition: opacity .5s
}

.fade-leave-active {
  transition: opacity .02s
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}
.fade-leave {
	display: none;
}
</style>

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

	data () : object {
		return {
			transitionName: 'slide-left'
		};
	},

	computed: {
		links () : array { return this.$store.state.navigation.global; },
	},

	methods: {
		beforeEnter () { log('beforeEnterTransition'); },
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

	watch: {
		['$route'] (to: any, from: any) {
			const toDepth = to.path
				.split('/')
				.filter( (bit: string) : any => bit.length > 0)
				.length;
			const fromDepth = from.path
				.split('/')
				.filter( (bit: string) : any => bit.length > 0)
				.length;
			this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left';
			log('$routeChange', to.path, from.path, {toDepth, fromDepth}, this.transitionName);
		}
	},

	mounted () {
		log('mounted', this.$store);
	}
};
</script>
