<template>
	<div
		class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label"
		:class="{ 'is-invalid': valdiation.has(name) }">
		<textarea
			class="mdl-textfield__input"
			:type="type"
			:rows="rows"
			:maxrows="maxrows"
			:name="name"
			v-model="model"></textarea>
		<label
			class="mdl-textfield__label"
			:for="name">{{ label }}</label>
		<span
			v-if="valdiation.has(name)"
			class="mdl-textfield__error">
				<div v-for="error in valdiation.collect(name)">{{ error }}</div>
		</span>
	</div>
</template>

<script>
export default {

	props: {
		type: {
			default () { return 'text'; }
		},
		label: true,
		valdiation: true,
		rows: { default () { return 2; } },
		maxrows: { default () { return 10; } },
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
	}

};
</script>