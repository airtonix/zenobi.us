<template lang="html">
	<form
		class="contact-form"
		@submit.stop.prevent="submit">

			<template v-if="!sending">
				<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
					<input
						class="mdl-textfield__input"
						type="text"
						name="name"
						v-model="form.name">
					<label class="mdl-textfield__label" for="name">Your Name</label>
				</div>

				<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
					<input
						class="mdl-textfield__input"
						type="email"
						name="email"
						v-model="form.email">
					<label class="mdl-textfield__label" for="email">Your Email</label>
				</div>

				<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
					<textarea
						class="mdl-textfield__input"
						type="text"
						rows="2"
						maxrows="10"
						name="message"
						v-model="form.message"></textarea>
					<label class="mdl-textfield__label" for="message">Your Message</label>
				</div>

				<button
					ref="submit"
					type="submit"
					class="mdl-button mdl-js-button mdl-button--primary">Send</button>
			</template>

			<div v-if="sending"
				class="mdl-progress mdl-js-progress mdl-progress__indeterminate"></div>

	</form>
</template>

<style lang="scss">
@import "~bemify";

@include block(contact-form) {
	margin: 0 auto;
	max-width: 30em;
	clear: both;

	.mdl-textfield {
		width: 100%;
	}
}
</style>

<script>
import debug from 'debug';
import api from 'app/api';

const log = debug('app/components/organisms/contact-form');

export default {

	data () {
		return {
			form: {},
			sending: false,
		};
	},

	methods: {
		submit () {
			log('submit.before');
			this.$set('sending', true);
			api.contact
				.post(JSON.stringify(JSON.parse(this.form)))
				.then( (response) => {
					this.$set('sending', false);
					log('submit.response', response);
				});
		},
	},

};
</script>

