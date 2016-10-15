<template lang="html">
	<div :id="id" class="template-page">

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

		<div class="mdl-cell mdl-cell--12-col">
			<contact-form></contact-form>
		</div>

	</div>
</template>

<style lang="scss">
@import "~app/styles/mixins";
@import "~app/styles/settings";

.route--root {

	.mdl-layout__title { display: none; }
	.mdl-layout__header-row { border-bottom: 0; }
	.mdl-layout__header-row .mdl-navigation { display: none; }
	.mdl-page {
		margin-top: 3em;
	}
	.site-header {
		display: flex;
		flex-direction: column;
		height: 50vh;
		min-height: 50vh;
		color: #ccc;
		padding: 0;

		&__title {
			position: relative;
			height: calc(100% - 56px);
			width: 100%;
			color: white;

			&-text {
				position: absolute;
				bottom: 0;
				margin: 0;
				left: 50%;
				transform: translateX(-50%);
				text-align: center;

				a {
					display: flex;
					flex-direction: column;
					text-decoration: none;
				}
				&, a { color: settings-colour(gray); }
				small { color: settings-colour(gun-metal); }
			}

		}

		&__logo {
			position: absolute;
			left: 50%;
			transform: translateX(-50%);
			bottom: 5.5em;
			min-height: 10em;
			width: 12em;
		}

		.mdl-navigation {
			display: flex;
			justify-content: center;
			width: auto;
			margin: 0 -1em;
			box-shadow: inset 0 -1px 0 0px rgba(settings-colour(gun-metal), 0.2);

			a.mdl-navigation__link {
				color: settings-colour(gun-metal);
				padding: 1em 1.5em;
				&.router-link-active { color: settings-colour(gray); }
			}
		}
	}
}
</style>

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
		ContactForm: (resolve: Function) : any => require(['../organisms/contact-form'], resolve),
	},

	computed: {
		links () : array { return this.$store.state.navigation.global; },
	},

};
</script>