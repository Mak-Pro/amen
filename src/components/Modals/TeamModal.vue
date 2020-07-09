<template>
	<form method="POST" class="message__form team-form" action="javascript:void(0);" enctype="multipart/form-data">

		<h2 class="form__title">Join Us</h2>

		<ul class="fields__list">
			<li>
				<div class="fields__box">
					<div class="field-wrapper">
						<input 
							type="text" 
							name="Name" 
							placeholder="Your name"
							v-model="name" 
							:class="{error: ($v.name.$dirty && !$v.name.required)}"
						>
					</div>
					<div class="field-wrapper">
						<input 
							type="email" 
							name="Email" 
							placeholder="Email"
							v-model="email" :class="{error: ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email)}"
						>
					</div>
				</div>

				<div class="fields__box">
					<div class="field-wrapper">
						<input 
							type="text" 
							name="Phone" 
							placeholder="Phone"
							v-model="phone" :class="{error: ($v.phone.$dirty && !$v.phone.required)}"
						>
					</div>
					<div class="field-wrapper">
						<select name="Position"
							v-model="position" :class="{error: ($v.position.$dirty && !$v.position.required)}"
						>
							<option value="" disabled selected>Your position</option>
							<option value="Designer">Designer</option>
							<option value="SEO">SEO</option>
							<option value="Front-end Developer">Front-end Developer</option>
							<option value="Back-end developer">Back-end developer</option>
							<option value="Manager">Manager</option>
							<option value="Other">Other</option>
						</select>
					</div>
				</div>

				<div class="fields__box">
					<div class="field-wrapper">
						<input type="text" name="Telegram" placeholder="Telegram">
					</div>
					<div class="field-wrapper">
						<input type="text" name="Linkedin" placeholder="Linkedin profile link">
					</div>
				</div>

			</li>
			<li>
				<div class="field-wrapper">
					<textarea name="Message" placeholder="Message"></textarea>
				</div>
			</li>
		</ul>
		<div class="submit-wrapper">
			<div class="upload-box">
				<div class="input-wrapper">
					<input type="file" name="file">
					<div class="input-wrapper-text">
						<span class="btn btn-action"><span></span></span>
						<span class="text">Attach your resume</span>
					</div>
				</div>
				<span class="uploaded-file-name"></span>
			</div>
			<button type="submit" class="btn btn-3d" @click.prevent="submitHandler"><span></span><i>send request</i></button>
		</div>
	</form>
</template>

<script>

	import axios from 'axios';

	import { uploadFileEvent, resetUploadFileEvent } from '../../App.vue';

	import { email, required } from 'vuelidate/lib/validators';

	export default {

		data () {
			return {
				name: '',
				phone: '',
				email: '',
				position: '',
			}
		},

		validations: {
			name: {required},
			phone: {required},
			email: {email,required},
			position: {required},
		},

		methods: {

			submitHandler() {
				if(this.$v.$invalid) {
					this.$v.$touch();
					return;
				}

				const resetAllValues = () => {
					this.name = '';
					this.phone = '';
					this.email = '';
					this.position = '';
				}
				var formData = new FormData(this.$el);

				this.$v.$reset();

				axios
							.post('team.php', formData)
							.then(function (response) {
								resetAllValues();
								resetUploadFileEvent('.team-form', 'Attach your resume', 'file size must be less than 10mb');
								document.querySelector('form').reset();
								let submitButtonText = document.querySelector('[type="submit"] i').textContent;
								document.querySelector('[type="submit"] i').textContent = 'Thank You'
								setTimeout(() => {
									document.querySelector('[type="submit"] i').textContent = submitButtonText;
								}, 2000);
							})
							.catch(function (error) {
								console.log('Error', error);
							});
			}
		},

		mounted() {
			uploadFileEvent('.team-form', 'Attach your resume');
		}
	}
</script>

<style lang="scss" scoped>

	.form__title {
		margin-bottom: 8rem;

		@media only screen and (max-width: 1600px) {
			margin-bottom: 6rem;	
		}

		@media only screen and (max-width: 1399px) {
			margin-bottom: 5rem;	
		}

		@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
			margin-bottom: 3rem;	
		}
	}

	.fields__list {
		display: flex;
		flex-wrap: wrap;
		margin: 0 1px;
		padding: 0;
		list-style: none;

		@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
			flex-direction: column;	
		}

		li {
			width: 33.333333%;

			@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
				display: block;
				width: 100%;	
			}

			&:first-child {
				width: 66.666666%;

				@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
					width: 100%;	
				}

				.field-wrapper {
					width: 50%;

					@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
						width: 100%;	
					}
				}
			}

			&:last-child {

				.field-wrapper {
					height: calc(100% - 2rem);
				}
			}
		}
	}

	.fields__box {
		display: flex;

		@media only screen and (max-width: 599px) {
			display: block;	
		}
	}

	.field-wrapper {
		position: relative;
		height: 100%;
		margin-left: 1px;
		margin-right: 1px;

		@media only screen and (max-width: 599px) {
			margin-right: 0;
			margin-left: 0;	
		}
	}

	textarea {
		height: 100%;

		@media only screen and (max-width: 992px) {
			height: calc(100% - 1.5rem);	
		}

		@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
			height: 16rem;	
		}
	}

	.submit-wrapper {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-top: 2.5rem;

		@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
			flex-direction: column;
			align-items: flex-start;	
		}
	}

	.upload-box {

		@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
			margin-top: 1rem;
			margin-bottom: 5rem;
		}
	}

	button[type="submit"] {
		margin: 0 -.2rem;
		width: calc(33.3333333% + .4rem);

		@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
			margin: 0;
			width: 50%;	
		}

		@media only screen and (max-width: 599px) {
			width: 100%;	
		}
	}

</style>