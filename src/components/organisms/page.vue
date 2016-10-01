<template>
	<div class="page">
		<network-activity-indicator :status="loadStatus">

			<div class="page__content"
				v-if="content">
				<segment
					v-for="segment in content.segments"
					:id="segment.id"
					:data="segment"></segment>
			</div>

		</network-activity-indicator>
	</div>
</template>

<script type="text/babel">
import cuid from 'cuid';

export default {

	props: {
		id: {
			default: () => `page-${cuid()}`
		},
		content: true,
	},

	components: {
		NetworkActivityIndicator: require('app/components/molecules/network-activity-indicator'),
		Segment: require('app/components/molecules/segment'),
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

	methods: {
		cuid,
	},

	computed: {
		isIdle () { return this.loadStatus === 'idle'; },
		isLoading () { return this.loadStatus === 'loading'; },
		isLoaded () { return this.loadStatus === 'loaded'; },
		hasFailed () { return this.loadStatus === 'error'; },
	}

};
</script>