<template>
	<div :id="id" class="segment">
		<h1 v-if="!data.noTitle"><slot name="title">{{ data.title }}</slot></h1>
		<div class="segment__content"><slot name="content"><span v-if="content" v-html="content"></span></slot></div>
		<div class="segment__footer"><slot name="footer"></slot></div>
	</div>
</template>

<script type="text/babel">
import cuid from 'cuid';
import tinydown from 'tinydown';

export default {
	props: {
		id: {
			default: () => `segment-${cuid()}`
		},

		data: {
			coerce (value) {
				return Object.assign({
					noTitle: false,
					title: ''
				}, value);
			}
		}
	},

	computed: {
		content () { return tinydown(this.data.content); }
	}
};
</script>