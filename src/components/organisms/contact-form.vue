<template lang="html">
	<form
		novalidate
		class="contact-form"
		@submit.stop.prevent="submit">

		<segment class="mdl-cell mdl-cell--12-col"
			:data="{
				noFooter: !(isIdle || hasError || isSent)
			}">
			<h4 slot="title">{{ title }}</h4>
			<div
				slot="content">

				<div v-if="isIdle || hasError">
					<field-text
						name="name"
						type="text"
						label="Your Name"
						:valdiation="errors"
						@update="update"></field-text>
					<field-text
						name="email"
						type="email"
						label="Your Email"
						:valdiation="errors"
						@update="update"></field-text>
					<field-textarea
						name="message"
						type="text"
						label="Your Message"
						:valdiation="errors"
						@update="update"></field-textarea>
				</div>

				<div
					v-if="isSending"
					ref="progress"
					class="mdl-progress mdl-js-progress mdl-progress__indeterminate"></div>

				<div v-if="isSent"
					class="mdl-card__icon">
					<div class="mdl-card__media	">
						<i class="material-icons md-48">sentiment_satisfied</i>
					</div>
					<div class="mdl-card__title">
						<div class="mdl-card__title-text">Thanks</div>
						<div class="mdl-card__subtitle-text">I'll be in touch soon.</div>
					</div>
				</div>

				<div v-if="isDev">
					<button type="button" class="mdl-button mdl-js-button"
						@click="testStatus(STATUS_CODES.VALIDATING)">STATUS_CODES.VALIDATING</button>
					<button type="button" class="mdl-button mdl-js-button"
						@click="testStatus(STATUS_CODES.SENDING)">STATUS_CODES.SENDING</button>
					<button type="button" class="mdl-button mdl-js-button"
						@click="testStatus(STATUS_CODES.SENT)">STATUS_CODES.SENT</button>
					<button type="button" class="mdl-button mdl-js-button"
						@click="testStatus(STATUS_CODES.IDLE)">STATUS_CODES.IDLE</button>
				</div>

			</div>
			<div
				v-if="isIdle || hasError || isSent"
				slot="footer">
				<button
					v-if="isIdle || hasError"
					ref="submit"
					type="submit"
					class="mdl-button mdl-js-button mdl-button--primary mdl-js-ripple-effect">Send</button>

		    <div class="mdl-layout-spacer"></div>

				<a href="http://github.com/airtonix/"
					v-if="isIdle || hasError || isSent"
					class="mdl-button mdl-button--icon mdl-color-text--blue-grey-300">
					<i class="mdi mdi-github-circle"></i></a>
				<a href="https://au.linkedin.com/in/zenobiusjiricek"
					v-if="isIdle || hasError || isSent"
					class="mdl-button mdl-button--icon mdl-color-text--blue-grey-300">
					<i class="mdi mdi-linkedin"></i></a>
			</div>
		</segment>
	</form>

</template>

<style lang="scss">

.contact-form {
	margin: 0 auto;
	max-width: 30em;
	clear: both;

	.mdl-textfield {
		width: 100%;
	}
}

.mdl-card__icon {
	margin: 0 auto;

	.mdl-card__media {
		background: none;
		height: 100%;
		display: flex;
		flex-grow: 2;
		align-items: center;
		justify-content: center;
	}

	.mdl-card__title {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		align-content: center;
		text-align: center;
	}
	.mdl-card__title-text {
		align-self: center;
	}
}
</style>

<script>
/*global componentHandler*/
/* @flow */

import Vue from 'vue';
import debug from 'debug';

import { Validator } from 'vee-validate';

import api from 'app/api';

const log = debug('app/components/organisms/contact-form');
const STATUS_CODES = {
	IDLE: 'idle',
	VALIDATING: 'validating',
	SENDING: 'sending',
	SENT: 'sent',
	ERROR: 'error',
};

export default {
	props: {
		title: true,
		menu: true,
	},

	validator: null,

	filters: {
		json (value, indent = 2) {
			return JSON.stringify(value, null, indent);
		}
	},

	components: {
		FieldText: (resolve: Function ) : any => require(['app/components/molecules/field-text'], resolve),
		FieldTextarea: (resolve: Function ) : any => require(['app/components/molecules/field-textarea'], resolve),
		Segment: (resolve: Function ) : any => require(['app/components/molecules/segment'], resolve),
	},

	data () {
		return {
			form: {
				name: null,
				email: null,
				message: null
			},
			status: STATUS_CODES.IDLE,
			STATUS_CODES,
			isDev: false,
			errors: []
		};
	},

	computed: {
		isIdle () { return this.status === STATUS_CODES.IDLE; },
		isValidating () { return this.status === STATUS_CODES.VALIDATING; },
		isSending () { return this.status === STATUS_CODES.SENDING; },
		isSent () { return this.status === STATUS_CODES.SENT; },
		hasError () { return this.status === STATUS_CODES.ERROR; },
	},

	watch: {
		['form.name'] (value) {
			this.validator.validate('name', value);
		},
		['form.email'] (value) {
			this.validator.validate('email', value);
		},
		['form.message'] (value) {
			this.validator.validate('message', value);
		},

		status (value) {
			Vue.nextTick( () => {
				if (this.isSending) {
					log(`statusChange:${value}`, this.$refs);
					componentHandler.upgradeElement(this.$refs.progress);
				}
			});
		}
	},

	methods: {
		validate (data) {
			log('validate.before', data);
			return new Promise( (resolve, reject) => {
				if (!data) { reject(new Error('Missing data to validate')); }
				this.validator.validateAll(data);
				if (this.errors.any()) {
					debug('validation.failed');
					reject(this.errors.all());
				} else {
					debug('validation.success');
					resolve();
				}
			});
		},

		update ({name, value}) {
			log('update', name, value);
			this.form[name] = value;
		},

		submit () {
			log('submit.before');
			this.status = STATUS_CODES.VALIDATING;
			this.validate(this.toJson(this.form))
				.then(() => {
					log('submit.sending');
					this.status = STATUS_CODES.SENDING;
					return api.contact.post(this.form);
				})
				.then( (response) => {
					log('submit.sent');
					this.status = STATUS_CODES.SENT;
					log('submit.response', response);
				})
				.catch((err) => {
					log('submit.err', err);
					this.status = STATUS_CODES.ERROR;
				});
		},

		clearErrors() {
				this.errors.clear();
		},

		testStatus (code) {
			this.status = code;
		}
	},

	created () {
		this.validator = Validator.create({
			email: 'required|email',
			name: 'required',
			message: 'required'
		});
		this.errors = this.validator.errorBag;
		this.isDev = this.Context('isDev');
	}

};
</script>

