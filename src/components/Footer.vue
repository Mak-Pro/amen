<template>
	
	<footer class="main__footer">

		<lines></lines>

		<div class="container">
			<div class="row">
				<div class="col-sm-12">
					<div class="main__footer_content">
						<div class="row no-gutters align-items-center">
							<div class="col-sm-12 col-md-4">
								<socials></socials>
								<p class="copy">Copyright © AMEN. All rights reserved.</p>
							</div>
							<div class="col-sm-12 col-md-4">
								<a :href="require(`@/assets/img/AMEN_HIGH.pdf`)" class="btn full btn-base presentation" target="_blank">Amen presentation</a>
							</div>
							<div class="col-sm-12 col-md-4 form-col">
								<div class="sign__box">
									<form method="POST" class="sign__form" action="javascript:void(0);" enctype="multipart/form-data" novalidate="novalidate">
										<div class="field-wrapper">
											<input 
												type="email" 
												name="Email" 
												placeholder="Enter your email"
												v-model="email" :class="{error: ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email)}"
											>
										</div>
										<button type="submit" @click.prevent="submitHandler">
											<i class="fas fa-envelope"></i>
										</button>
									</form>
									<button class="ok">Ok</button>
									<!-- <a href="javascript:void(0);" class="btn btn-base full form__activate">play showreel</a> -->
									<a href="javascript:void(0);" class="btn btn-base full footer__play__showreel_btn" @click.prevent="openShowReel('showreel')">play showreel</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</footer>

</template>

<script>

import Lines from '../components/Lines.vue';
import Socials from '../components/Socials.vue';

import { pageTransitionDuration } from '../App.vue';

import axios from 'axios';

import { email, required } from 'vuelidate/lib/validators';

import * as types from '../store/types.js';
import { mapActions } from 'vuex';

export default {

  data () {
    return {
			email: '',
    }
  },

  components: {
  	'lines': Lines,
  	'socials': Socials
  },

  validations: {
  	email: {email,required},
  },

  methods: {

  	...mapActions({
			'openShowReel': types.TOGGLE_SHOWREEL_ACTION
		}),

  	submitHandler() {
  		if(this.$v.$invalid) {
  			this.$v.$touch();
  			return;
  		}

  		const resetAllValues = () => {
  			this.email = '';
  		}

  		var formData = new FormData(this.$el.children[1].children[0].children[0].children[0].children[0].children[2].children[0].children[0]);

  		this.$v.$reset();

  		axios
  		.post('sign.php', formData)
  		.then(function (response) {
  			resetAllValues();
  			document.querySelector('form').reset();
  			document.querySelector('.sign__form').classList.add('sended');
  		})
  		.catch(function (error) {
  			console.log('Error', error);
  		});
  	}
  },


  mounted() {

  	/*setTimeout(() => {
  		document.querySelector('.form__activate').addEventListener('click', (e) => {
  			e.target.closest('.sign__box').classList.add('form-show');
  		});
  	}, pageTransitionDuration);*/

  	

		document.querySelector('.sign__box .ok').addEventListener('click', (e) => {
			document.querySelector('.sign__form').classList.remove('sended');
  	});
		
		document.addEventListener("click", function(event){
			if(document.querySelector('.sign__form') !== null) {
				if (event.target.closest('.sign__box') == null) {
					if(!document.querySelector('.sign__form').classList.contains('sended')) {
						document.querySelector('.sign__box').classList.remove('form-show');
					}
				}
			}
			
		});
		
  },
}
</script>

<style lang="scss" scoped>

@import '../variables.scss';


.main__footer {
	background: #F3F7F7;
	position: relative;

	@media (max-height: 499px) and (max-width: 899px) {
		div[class^="col"] {
			width: 100%;
			max-width: 100%;
			flex: 0 1 auto;
		}	
	}

	@media only screen and (max-width: 599px) {
		border: 1px solid #EBEFEF;	
	}

	&_content {
		line-height: 0;
		padding: 5.8rem 0;
		position: relative;
		z-index: 1;

		@media only screen and (max-width:1600px) {
			padding: 4.5rem 0;	
		}

		@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
			padding: 3rem 0;
			margin: 0 -1.5rem;

			& > .row > div[class^="col"]:nth-of-type(1) {
				order: 2;
			}	
		}

		@media only screen and (max-width: 599px) {
			padding-top: 0;
			padding-bottom: 6rem;	
		}
	}


	.socials {
		display: none;

		@media only screen and (max-width: 599px) {
			display: inline-flex;
			width: 100%;
			justify-content: center;
			margin-top: 3.5rem;
			margin-bottom: 4.5rem;	
		}
	}
}

.copy {
	font-size: 1.2rem;
	margin-bottom: 0;
	line-height: 1.5;

	@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
		text-align: center;		
	}
}

.presentation {
	margin-left: 1px;
	height: 8rem;
	line-height: 7.8rem;
	border-top:0 none;

	@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
		height: 6rem;
		line-height: 5.8rem;	
	}

	@media only screen and (max-width: 599px) {
		height: 7.4rem;
		line-height: 7.4rem;	
	}
}

.footer__play__showreel_btn {
	height: 8rem;
	line-height: 7.8rem;

	@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
		height: 6rem;
		line-height: 5.8rem;	
	}

	@media only screen and (max-width: 599px) {
		height: 7.4rem;
		line-height: 7.4rem;	
	}
}

.form-col {
	overflow: hidden;
	padding: 1.5rem 0;

	@media only screen and (max-width: 599px) {
		padding: 0;	
	}
}

.sign__box {
	line-height: 0;
	position: relative;
	margin-left: 2px;

	&.form-show {
		
		.sign__form {
			transform: translateX(calc(100% - 8rem));
			margin-right: 0;

			button[type="submit"] {
				opacity: 1;
				visibility: visible;
			}

			@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
				transform: translateX(calc(100% - 6rem));	
			}
		}

		.form__activate {
			transform: translateX(calc(100% - 8rem));

			@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
				transform: translateX(calc(100% - 6rem));	
			}
		}
	}

	@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
		margin: 0 0 1.8rem;	
	}
}


.sign__form {
	padding-left: 8rem;
	position: absolute;
	right: 100%;
	margin-right: 3px;
	bottom: 0;
	transform: translateX(0);
	transition: all .3s cubic-bezier(.77,0,.175,1) 0s;
	z-index: 1;

	&::after {
		content: 'Thank you!';
		display: inline-block;
		position: absolute;
		left: 8rem;
		top: 0;
		right: 0;
		bottom: 0;
		background: #24d2f6;
		z-index: 2;
		color: #fff;
		padding: 0 3rem;
		line-height: 8rem;
		text-align: left;
		opacity: 0;
		visibility: hidden;
		-webkit-transition: all .3s ease 0s;
		-o-transition: all .3s ease 0s;
		transition: all .3s ease 0s;
	}

	.field-wrapper {
		margin-right: 1px;
		position: relative;

		&::after {
			content: '';
			display: block;
			position: absolute;
			top: 0;
			bottom: 0;
			width: 1px;
			background: #fff;
			left: 100%;
			border-bottom: 2px solid $blue-light;
			z-index: -1;
		}
	}

	input {
		margin: 0;
		padding-right: 0.5rem;
		border-bottom: 2px solid $blue-light !important;

		@media only screen and (max-width: 599px) {
			height: 7.4rem;	
		}
	}

	button[type="submit"] {
		width: 8rem;
		height: 8rem;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		z-index: 1;
		left: 100%;
		font-size: 2rem;
		color: $blue-light;
		opacity: 0;
		visibility: hidden;
		transition: all .3s ease 0s;
		background: #fff;
		border-bottom: 2px solid $blue-light;

		i {
			position: absolute;
			left: 50%;
			top: 50%;
			transform: translate(-50%,-50%);
		}

		@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
			width: 6rem;
			height: 6rem;	
		}

		@media only screen and (max-width: 599px) {
			height: 7.4rem;
			line-height: 7.4rem;	
		}
	}

	& + .ok {
		text-transform: uppercase;
		width: 8rem;
		height: 100%;
		font-size: 1.8rem;
		font-weight: 900;
		color: #fff;
		display: flex;
		align-items: center;
		justify-content: center;
		background: #15ddf3;
		position: absolute;
		right: 0;
		top: 0;
		z-index: 3;
		opacity: 0;
		visibility: hidden;

		@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
			width: 6rem;
			font-size: 1.4rem;	
		}
	}

	&.sended {

		&::after {
			opacity: 1;
			visibility: visible;
		}

		& + .ok {
			opacity: 1;
			visibility: visible;
		}
	}

	@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
		padding-left: 6rem;		
	}
}

.form__activate {
	height: 8rem;
	border-top: 0 none;
	line-height: 7.8rem;

	@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
		height: 6rem;
		line-height: 5.8rem;
	}

	@media only screen and (max-width: 599px) {
		height: 7.4rem;
		line-height: 7.4rem;	
	}
}

</style>