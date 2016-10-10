<template lang="html">
	<div :id="id">
		<div class="mdl-cell mdl-cell--12-col">
			<segment
				:id="projects"
				v-if="Content.projects"
				:content="Content.projects"></segment>
		</div>
		<div class="mdl-cell mdl-cell--12-col">
			<segment
				:id="experience"
				v-if="Content.experience"
				:content="Content.experience"></segment>
		</div>
		<div class="mdl-cell mdl-cell--12-col">
			<contact-form></contact-form>
		</div>
	</div>
</template>

<script>
import {PageMixins, } from './mixins';
import api from 'app/api';

export default {

	mixins: [
		PageMixins
	],

	data () {
		return {
			Content: {}
		};
	},

	components: {
		Card: resolve => require(['../molecules/card'], resolve),
		Segment: resolve => require(['../molecules/segment'], resolve),
		ContactForm: resolve => require(['../organisms/contact-form'], resolve),
	},

	created () {
		api.content.get('resume/projects.md')
			.then( (page) => {
				this.Content.projects = page;
			});
		api.content.get('resume/experience.md')
			.then( (page) => {
				this.Content.experience = page;
			});

	}
};
</script>