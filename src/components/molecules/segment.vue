<template>
	<div :id="id" class="segment mdl-card mdl-shadow--2dp">
		<div class="segment__title mdl-card__title" v-if="!noTitle">
	    <h2 class="mdl-card__title-text"><slot name="title">{{ Title }}</slot></h2>
	  </div>
		<div class="segment__content mdl-card__supporting-text"><slot name="content"><span v-if="Content" v-html="Content"></span></slot></div>
		<div class="segment__footer"><slot name="footer"></slot></div>
	  <div class="mdl-card__menu" v-if="actions"><slot name="actions"></slot></div>
	</div>
</template>

<script type="text/babel">
import cuid from 'cuid';

export default {
	props: {
		id: {
			default: () => `segment-${cuid()}`
		},
		data: Object,
		actions: Array,
	},

	computed: {
		noTitle () { return this.data && this.data.noTitle || false; },
		Title () { return this.data && this.data.title || null; },
		Content () { return this.data && this.data.content || null; },
	}
};
</script>