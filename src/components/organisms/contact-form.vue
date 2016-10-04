<template lang="html">
	<form
		class="contact-form"
		@submit.stop.prevent="submit">

			<h4><slot name="title">Contact Me</slot></h4>

			<template v-if="isIdle || hasError">
				<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
					<input
						class="mdl-textfield__input"
						type="text"
						name="name"
						v-model="form.name">
					<label class="mdl-textfield__label" for="name">Your Name</label>
					<span
						v-if="errors.has('name')"
						class="mdl-textfield__error">{{ errors.collect('name') }}</span>
				</div>

				<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
					<input
						class="mdl-textfield__input"
						type="email"
						name="email"
						v-model="form.email">
					<label class="mdl-textfield__label" for="email">Your Email</label>
					<span
						v-if="errors.has('email')"
						class="mdl-textfield__error">{{ errors.collect('email') }}</span>
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
					<span
						v-if="errors.has('name')"
						class="mdl-textfield__error">{{ errors.collect('message') }}</span>
				</div>

				<button
					ref="submit"
					type="submit"
					class="mdl-button mdl-js-button mdl-button--primary">Send</button>
			</template>

			<div v-if="isSending"
				class="mdl-progress mdl-js-progress mdl-progress__indeterminate"></div>

			<div v-if="isSent"
				class="mdl-card">
				<h4>Thanks</h4>
				<i class="material-icons">sentiment_satisfied</i>
			</div>

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
import { Validator } from 'vee-validate';

const log = debug('app/components/organisms/contact-form');
const STATUS_CODES = {
	IDLE: 'idle',
	SENDING: 'sending',
	SENT: 'sent',
	ERROR: 'error',
};

export default {

	validator: null,

	data () {
		return {
			form: {},
			status: STATUS_CODES.IDLE,
			STATUS_CODES,
			errors: {}
		};
	},

	methods: {
		submit () {
			log('submit.before');
			this.validator.validateAll({
						email: this.form.email,
						name: this.form.name,
						message: this.form.message
				});
			// Promise.resolve(
			// 	)
			// 	.then(() => {
			// 		this.status = STATUS_CODES.SENDING;
			// 		return api.contact.post(this.form);
			// 	})
			// 	.then((response) => {
			// 		this.status = STATUS_CODES.SENT;
			// 		log('submit.response', response);
			// 	})
			// 	.catch((err) => {
			// 		log('submit.err', err);
			// 		this.status = STATUS_CODES.ERROR;
			// 	});
		},

		clearErrors() {
				this.errors.clear();
		}
	},

	computed: {
		isIdle () { return this.status === STATUS_CODES.IDLE; },
		isSending () { return this.status === STATUS_CODES.SENDING; },
		isSent () { return this.status === STATUS_CODES.SENT; },
		hasError () { return this.status === STATUS_CODES.ERROR; },
	},

	created () {
		this.validator = new Validator({
			email: 'required|email',
			name: 'required',
			message: 'required'
		});
		this.errors = this.validator.errorBag;
	}

};
</script>

