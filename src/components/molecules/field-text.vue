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
			:for="name">{{ label }}</label>

		<span
			v-if="valdiation.has(name)"
			class="mdl-textfield__error">
				<span v-for="error in valdiation.collect(name)">{{ error }}</span>
		</span>

	</div>
</template>

<script>
/*global componentHandler*/
import debug from 'debug';
const log = debug('app/components/molecules/field-text');

export default {

	props: {
		type: {
			default () { return 'text'; }
		},
		label: true,
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
		prepare () {
			this.$nextTick( () => {
				componentHandler.upgradeDom('foo');
				log('componentHandler.upgradeElement', this.name, this.$refs.input);
			});
		}
	},

	created () {
		if (this.value) {
			this.model = this.value;
		}
		this.prepare();
		log('created', this.name);
	},

	mounted () {
		log('mounted', this.name);
	},

	activated () {
		log('activated', this.name);
	},

	updated () {
		log('updated', this.name);
	}

};


</script>