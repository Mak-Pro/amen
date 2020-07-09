<template>

	<form method="POST" class="message__form order-form">
		<h2 class="form__title">Let’s Move Forward!</h2>
		<ul class="fields__list">
			<li>
				<div class="fields__box">
					<h4 class="form__subtitle">Your budget up to:</h4>
					<div class="field-wrapper">
						<range-slider 
							v-model="value"
							:min="min" 
							:max="max" 
							:formatter="formatter"
							@drag-end="setminimal"
							@drag-start="setminimal"	 
						></range-slider>
					</div>
					<div class="upload-box">
						<div class="input-wrapper">
							<input type="file" name="file">
							<div class="input-wrapper-text">
								<span class="btn btn-action"><span></span></span>
								<span class="text">Attach file</span>
							</div>
						</div>
						<span class="uploaded-file-name">file size must be less than 10mb</span>
					</div>
				</div>
			</li>
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
							type="text" 
							name="Phone" 
							placeholder="Phone or Telegram"
							v-model="phone" :class="{error: ($v.phone.$dirty && !$v.phone.required)}"
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
						<textarea name="Message" placeholder="Message"></textarea>
					</div>
				</div>

			</li>
		</ul>
		<div class="submit-wrapper">
			<button type="submit" class="btn btn-3d" @click.prevent="submitHandler"><span></span><i>submit</i></button>
		</div>
	</form>
	
</template>


<script>

	import axios from 'axios';
	
	import RangeSlider from 'vue-range-component/dist/vue-range-slider.js';

	import { uploadFileEvent, resetUploadFileEvent } from '../../App.vue';

	import { email, required } from 'vuelidate/lib/validators';


	export default {

		data () {
			return {
				value: 15,
				name: '',
				phone: '',
				email: '',
			}
		},

		components: {
			'range-slider': RangeSlider
		},

		validations: {
			name: {required},
			phone: {required},
			email: {email,required},
		},

		methods: {
			setminimal() {
				if(this.value < 15) {
					setTimeout(() => {
						this.value = 15;
					}, 100);
					
				}
			},

			submitHandler() {
				if(this.$v.$invalid) {
					this.$v.$touch();
					return;
				}

				const resetAllValues = () => {
					this.value = 15;
					this.name = '';
					this.phone = '';
					this.email = '';
				}
				var formData = new FormData(this.$el);

				this.$v.$reset();

				axios
							.post('order.php', formData)
							.then(function (response) {
								resetAllValues();
								resetUploadFileEvent('.order-form', 'Attach file', 'file size must be less than 10mb');
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

		created() {
			this.min = 0,
			this.max = 150,
			this.minrange = 15,
			this.formatter = value => `from $ ${value} 000`
		},

		mounted() {

			document.querySelector('input[type="range"]').setAttribute('name', 'Price');

			uploadFileEvent('.order-form', 'Attach file');

			document.querySelector('.vue-range-slider').addEventListener('click', () => {
				if(this.value < 15) {
					this.value = 15;
				}
			});
		}


	}

	

	

</script>




<style lang="scss" scoped>


	form {
		width: 100%;
		font-weight: 300;
	}

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

	.form__subtitle {
		font-family: inherit;
		font-size: 2.2rem;
		font-weight: 500;
		text-transform: none;
		line-height: 1.2;
		color: #181818;
		position: relative;
		height: 8rem;
		line-height: 8rem;
		margin-bottom: 2.1rem;

		@media only screen and (max-width: 1600px) {
			height: 7rem;
			line-height: 7rem;
			font-size: 2rem;	
		}

		@media only screen and (max-width: 1399px) {
			height: 6rem;
			line-height: 6rem;	
		}

		@media only screen and (max-width: 992px) {
			margin-bottom: 1.5rem;
			font-size: 1.8rem;	
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
			display: flex;
			width: 66.6666666%;

			@media only screen and (max-width: 599px) {
				display: block;
				width: 100%;	
			}

			&:first-child {
				width: 33.3333333%;

				@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
					width: 100%;
					order: 1;	
				}

				.fields__box {
					width: 100%;
				}
			}

			&:last-child {

				@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
					width: 100%;	
				}

				.fields__box {
					
					&:last-child {

						.field-wrapper {
							height: calc(100% - 2rem);
							margin-bottom: 0;

							textarea {
								height: 100%;

								@media only screen and (max-width: 992px) {
									height: calc(100% - 1.5rem);
									margin: 0;
								}

								@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
									height: 18rem;	
								}
							}
						}
					}
				}
			}

			.fields__box {
				display: flex;
				width: 50%;
				flex-direction: column;

				@media only screen and (max-width: 599px) {
					width: 100%;	
				}

				.field-wrapper {
					width: calc(100% - 1px);
					height: auto;

					@media only screen and (max-width: 1199px) {
						width: 100%;	
					}
				}
			}
		}
	}

	.upload-box {
		height: 8rem;
		line-height: 8rem;
		display: flex;
		align-items: center;

		@media only screen and (max-width: 1600px) {
			height: 7rem;
			line-height: 7rem;	
		}

		@media only screen and (max-width: 1399px) {
			height: 6rem;
			line-height: 6rem;	
		}

		@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
			margin-bottom: 2rem;	
		}
	}

	.submit-wrapper {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		margin-top: 2.5rem;

		@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
			justify-content: flex-start;	
		}
	}

	textarea {
		margin-left: 1px;
		height: calc(100% - 2rem);

		@media only screen and (max-width: 992px) {
			height: calc(100% - 1.5rem);	
		}

		@media only screen and (max-width: 599px) {
			height: 16rem;	
		}
	}

	button[type="submit"] {
		width: calc(33.3333333% + .4rem);
		margin: 0 -.2rem;

		@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
			margin: 0;
			width: 50%;	
		}

		@media only screen and (max-width: 599px) {
			width: 100%;	
		}
	}

</style>