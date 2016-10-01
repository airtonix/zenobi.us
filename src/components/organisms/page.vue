<template>
	<div
		:id="id"
		class="page">
		<network-activity-indicator :status="loadStatus">

			<div class="page__content">
				<component
					v-for="block in blocks"
					:id="block.id"
					:class="block.class"
					:is="block.component"
					:data="block.data"></component>
			</div>

		</network-activity-indicator>
	</div>
</template>

<script type="text/babel">
import cuid from 'cuid';

export default {

	props: {
		id: {
			default () { return cuid(); }
		},
		content: true,
	},

	data () {
		return {
			loadStatus: {
				validator (value) {
					return [
						'idle',
						'loading',
						'ready',
						'error',
					]
				}
			}
		};
	},

	computed: {
		isIdle () { return this.loadStatus === 'idle'; },
		isLoading () { return this.loadStatus === 'loading'; },
		isLoaded () { return this.loadStatus === 'loaded'; },
		hasFailed () { return this.loadStatus === 'error'; },
	}

};
</script>