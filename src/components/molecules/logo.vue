<template>
	<div
		class="site-logo"
		:class="[ animates?'site-logo--animates':'' ]">
		<img src="~app/images/cube-blue.png" class="site-logo__detail">
		<img src="~app/images/cube-shadow.png" class="site-logo__shadow">
	</div>
</template>


<style lang="scss">

@keyframes floating {
  from { bottom: 1em; }
  50% { bottom: 1.5em; }
  to { bottom: 1em; }
}

@keyframes blurring {
  from { opacity: 1; transform: scale(1); }
  55% { opacity: 0.65; }
  65% { transform: scale(0.96); }
  to { opacity: 1; transform: scale(1); }
}

.site-logo {
  margin: 0 auto;
  display: block;
  position: relative;

	&__detail {
    position: absolute;
    left: 0;
    bottom: 5%;
    width: 100%;
    z-index: 100;
	}

	&__shadow {
		position: absolute;
    left: 0;
    bottom: 0em;
    width: 100%;
    z-index: 50;
	}

	&--animates {

		.site-logo__detail {
	    animation-name: floating;
	    animation-duration: 3s;
	    animation-timing-function: ease-in-out;
	    animation-iteration-count: infinite;
		}
		.site-logo__shadow {
	    animation-name: blurring;
	    animation-duration: 3s;
	    animation-timing-function: ease-in-out;
	    animation-iteration-count: infinite;
		}

	}

}

</style>

<script>
export default {
	props: {
		animates: Boolean,
		size: {
			default () { return 'large'; },
			validator (value) {
				return ['small', 'medium', 'large'].includes(value);
			}
		}
	}
};
</script>