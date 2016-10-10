<template lang="html">
	<div class="mdl-layout mdl-js-layout has-drawer is-upgraded">

  	<header class="mdl-layout__header mdl-layout__header--transparent">
	    <div class="mdl-layout__header-row">

        <span class="mdl-layout__title">
        	<logo :animates="true"></logo>
        	<h3 class="mdl-layout__title-text">
        		<a href="//zenobi.us">zenobi.us <small>web developer</small></a></h3>
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
import 'material-design-lite/material.js';
import caseFilters from 'app/filters/case';
import markdownFilters from 'app/filters/markdown';

export default {

	filters: {
		...markdownFilters,
		...caseFilters
	},

	components: {
		Logo: (resolve: Function) : any => require(['app/components/molecules/logo'], resolve),
		Navigation: (resolve: Function ) : any => require(['app/components/organisms/navigation'], resolve),
	},

	data () : object {
		return {
			links: [
				{ route: 'root', text: 'home'},
				{ route: 'root.blog', text: 'blog'},
			]
		};
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
	}
};
</script>
