<template>
	
	<section id="contacts" class="contacts ms" data-target="contacts">

		<lines></lines>

		<div class="contacts__content">
			<div class="container">
				<div class="row">
					<div class="col-sm-12">
						<h2 class="section-title split chars animation">Say Hello :)</h2>
					</div>
				</div>
				<div class="row no-gutters">
					<div class="col-sm-12 col-md-4 animation info__items_col"> 

						<div class="contacts__info_item">
							<h5 class="location">USA Office</h5>
							<p class="address">1372 Summer st., suite 207 <br/> Stamford, CT, 06905</p>
							<a href="tel:+12032760987" class="phone-link" data-phone="+1-203-276-0987"><span>+1-203-276-0987</span></a>
							<a href="mailto:info@amen.team" class="mail-link" data-mail="hello@amen.team"><span>hello@amen.team</span></a>
						</div>

						<div class="contacts__info_item">
							<h5 class="location">Ukraine Office</h5>
							<p class="address">11 Denysa Lukiyanovycha st. <br/> Ukraine, Lviv, 79000</p>
							<a href="tel:+380633200990" class="phone-link" data-phone="+38-063-320-0990"><span>+38-063-320-0990</span></a>
							<a href="mailto:join@amen.team" class="mail-link" data-mail="join@amen.team"><span>join@amen.team</span></a>
						</div>

					</div>

					<div class="col-sm-12 col-md-8 animation">
						<form method="POST" class="contact__form" action="javascript:void(0);" enctype="multipart/form-data">
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
									placeholder="Phone"
									v-model="phone" 
									:class="{error: ($v.phone.$dirty && !$v.phone.required)}"
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
							<div class="field-wrapper textarea-wrapper">
								<textarea name="Message" placeholder="Message"></textarea>
							</div>
							<div class="submit-wrapper">
								<div class="row no-gutters align-items-center">
									<div class="col-xs-12 col-sm-6">
										<div class="upload-box">
											<div class="input-wrapper">
												<input type="file" name="file">
												<div class="input-wrapper-text">
													<span class="btn btn-action"><span></span></span>
													<span class="text">Attach your file</span>
												</div>
											</div>
											<span class="uploaded-file-name"></span>
										</div>
									</div>
									<div class="col-sm-12 col-md-6">
										<button type="submit" class="btn btn-3d full" @click.prevent="submitHandler"><span></span><i>send message</i></button>
									</div>
								</div>

							</div>
						</form>
					</div>

				</div>
			</div>
		</div>

	</section>

</template>

<script>

	import Lines from '../../../components/Lines.vue';

	import axios from 'axios';

	import { uploadFileEvent, resetUploadFileEvent } from '../../../App.vue';

	import { email, required } from 'vuelidate/lib/validators';

	export default {

		data () {
			return {
				name: '',
				phone: '',
				email: '',
			}
		},

		validations: {
			name: {required},
			phone: {required},
			email: {email,required},
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
				}

				var formData = new FormData(this.$el.children[1].children[0].children[1].children[1].children[0]);

				this.$v.$reset();

				axios
							.post('contact.php', formData)
							.then(function (response) {
								resetAllValues();
								resetUploadFileEvent('.contact__form', 'attach your file', 'file size must be less than 10mb');
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
			uploadFileEvent('.contact__form', 'attach your file');
		},

		components: {
			'lines': Lines
		}
	}
</script>

<style lang="scss" scoped>

@import '../../../variables.scss';

	.contacts {
		margin-top: 0.5rem;


		@media (max-height: 499px) and (max-width: 899px) {
			div[class^="col"] {
				width: 100%;
				max-width: 100%;
				flex: 0 1 auto;
			}	
		}

		&__content {
			padding-top: 12.5rem;
			padding-bottom: 12rem;

			@media only screen and (max-width:1600px) {
				padding-top: 10rem;
				padding-bottom: 10rem;	
			}

			@media only screen and (max-width:1399px) {
				padding-top: 8rem;
				padding-bottom: 8rem;	
			}

			@media only screen and (max-width: 992px) {
				padding-top: 6rem;
				padding-bottom: 5rem;	
			}

			@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
				padding-top: 4rem;	
			}

			@media only screen and (max-width: 599px) {
				padding-top: 10rem;
				padding-left: 1.5rem;
				padding-right: 1.5rem;
				padding-bottom: 8.4rem;
			}
		}


		.info__items_col {

			@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
				display: flex;		
			}

			@media only screen and (max-width: 599px) {
				display: block;	
			}
		}

		&__info_item {
			margin-bottom: 7.8rem;
			padding-right: 1.5rem;

			.location {
				font-size: 2.2rem;
				font-weight: 600;
				line-height: 1.59;
				margin-bottom: 2.4rem;

				@media only screen and (max-width: 992px) {
					font-size: 1.8rem;
					margin-bottom: 2rem;	
				}

				@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
					margin-bottom: 1rem;	
				}

				@media only screen and (max-width: 599px) {
					font-size: 2.2rem;
					margin-bottom: 1.6rem;	
				}
			}

			.address {

				@media only screen and (max-width: 992px) {
					font-size: 1.2rem;	
				}

				@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
					margin-bottom: 1rem;	
				}

				@media only screen and (max-width: 599px) {
					font-size: 1.6rem;
					line-height: 1.9;	
				}
			}

			a {
				font-size: 1.8rem;

				&.phone-link {

					@media only screen and (max-width: 599px) {
						font-size: 2.4rem;
						letter-spacing: 0.15rem;
					}
				}

				&.mail-link {

					@media only screen and (max-width: 599px) {
						font-size: 2.2rem;
					}
				}
			}

			@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
				width: 50%;
				margin-bottom: 3rem;	
			}

			@media only screen and (max-width: 599px) {
				width: 100%;
				margin-bottom: 5.2rem;	
			}
		}
	}

	.section-title {
		margin-bottom: 4.4rem;
		line-height: 1.12;

		@media only screen and (max-width:1600px) {
			margin-bottom: 5rem;	
		}

		@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
			margin-bottom: 3rem;	
		}
	}

	a.phone-link {
		display: block;
		font-size: 2rem;
		font-weight: 600;
		color: $black;
		line-height: 1.75;
		margin-bottom: 1.4rem;

		&:hover {
			color: $blue-light;
		}

		@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
			margin-bottom: 0.5rem;	
		}
	}

	a.mail-link {
		display: block;
		font-size: 1.8rem;
		font-weight: 400;
		line-height: 1.94;
		color: $blue-light;
		letter-spacing: 0.3px;
	}

	.contact__form {
		padding-left: 2px;

		@media only screen and (max-width: 599px) {
			width: calc(100% + 6rem);
			left: -3rem;
			right: -3rem;	
		}

		.field-wrapper {
			margin-bottom: 2rem;

			&.textarea-wrapper {
				margin-bottom: 5rem;
			}
		}

		input,
		select,
		textarea {
			border-bottom: 1px solid #c1c1c1;
			margin-bottom: 0;

			&:focus {
				border-width: 2px;
				border-color: $black;
			}

			@media only screen and (max-width: 599px) {
				padding-left: 3rem;	
				padding-right: 3rem;
				margin-bottom: 2rem;
			}
		}

		textarea {

			@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
				margin-bottom: 3rem;	
			}
		}

		.btn {
			width: calc(100% + 0.5rem);
			position: relative;
			left: -0.2rem;
		}

		.upload-box {

			@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
				display: block;
				margin-bottom: 3rem; 
			}

			.input-wrapper {

				@media only screen and (max-width: 599px) {
					width: 100%;	
				}

				.input-wrapper-text {

					@media only screen and (max-width: 599px) {
						display: flex;
						align-items: center;
						justify-content: space-between;
						position: relative;

						&::after {
							content: '';
							display: block;
							width: 21vw;
							height: 1px;
							background: #C1C1C1;
							position: absolute;
							top: 50%;
							transform: translateY(-50%);
							left: 50%;
							margin-left: -2.2vw;
						}

						.btn {
							order: 1;
							margin: 0;
						}

						.text {
							order: 0;
							letter-spacing: 0.03rem;
						}	
					}
				}
			}
		}


		.submit-wrapper {

			@media only screen and (max-width: 599px) {
				padding: 0 2.5rem;	
			}
		}
	}

</style>