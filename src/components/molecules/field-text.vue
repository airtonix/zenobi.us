<template>
	<div
		class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label"
		:class="{ 'is-invalid': valdiation.has(name) }">
		<input
			class="mdl-textfield__input"
			:type="type"
			:name="name"
			ref="input"
			v-model="model">
		<label
			class="mdl-textfield__label"
			:for="name">Your Name</label>
		<span
			v-if="valdiation.has(name)"
			class="mdl-textfield__error">
				<div v-for="error in valdiation.collect(name)"><i class="material-icons">error</i> {{ error }}</div>
		</span>
	</div>
</template>

<script>
import debug from 'debug';
const log = debug('app/components/molecules/field-text');

export default {

	props: {
		type: {
			default () { return 'text'; }
		},
		valdiation: true,
		name: true,
		value: true,
	},

	events: {
		update () {}
	},

	data () {
		return {
			model: null
		};
	},

	watch: {
		model (value) {
			this.$emit('update', { name: this.name, value});
		}
	},

	methods: {
	},

	created () {
		if (this.value) {
			this.model = this.value;
		}
	},

	activated () {
		this.$nextTick( () => {
			componentHandler.upgradeElement(this.$refs.input);
		})
	}

};
</script>