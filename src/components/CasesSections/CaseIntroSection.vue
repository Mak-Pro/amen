<template>
	
	<section class="intro pin-wrapper" :class="className">
		<div class="intro__bg" :style="{ backgroundImage: 'url(' + require(`@/assets/img/${backgroundImage}`) + ')' }"></div>
		<div v-if="className == 'darkbox nos'" class="intro__graph" :style="{ backgroundImage: 'url(' + require(`@/assets/img/${backgroundOverlay}`) + ')' }"></div>
		<div class="intro__content pin-wrapper">
			<div class="container">
				<div class="row">
					<div class="col-sm-12">
						<div class="intro__content_logo" data-delay="0.3">
							<img :src="require(`@/assets/img/${logo}`)" alt="logo">
						</div>
						<p class="intro__content_nametitle" data-delay="0.4">Project name:</p>
						<h1 class="intro__content_name" data-delay="0.5">{{projectName}}</h1>
						<div class="divider" data-delay="0.2"></div>
						<p class="intro__content_text" data-delay="0.6">{{text}}</p>
					</div>
				</div>
			</div>
		</div>

	</section>

</template>

<script>


export default {

	props: {
		className: String,
		backgroundImage: String,
		backgroundOverlay: String,
		logo: String,
		projectName: String,
		text: String
	},

  data () {
    return {

    }
  },

  mounted() {
  	
  }
}

</script>

<style lang="scss" scoped>

	@import '../../variables.scss';

	
	h1 {
		font-family: inherit;
		font-size: 10rem;
		font-weight: 600;
		text-transform: none;
		line-height: 1;
		position: relative;
	}

	
	.intro {
		min-height: 100vh;
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;

		@media only screen and (max-width: 992px) {
			min-height: 1px;	
		}

		@media only screen and (max-width: 599px) {
			min-height: 100vh;	
		}

		&__bg {
			position: absolute;
			left: 0;
			top: 0;
			right: 0;
			bottom: 0;
			background-size: cover;
			background-repeat: no-repeat;
			background-position: center center;
			transition: all 0.5s ease 0s;
			opacity: 0;
		}

		&__graph {
			opacity: 0;
			transition: all 0.5s ease 0s;
		}

		&__content {
			position: relative;
			font-size: 2.2rem;
			font-weight: 600;
			color: #fff;
			width: 100%;
			text-align: center;

			@media only screen and (max-width: 992px) {
				padding: 12rem 0;	
			}

			@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
				padding: 7rem 0px 6rem;
				font-size: 1.8rem;	
			}

			&_logo {
				line-height: 0;
				margin-bottom: 7rem;

				@media only screen and (max-width: 1600px) {
					margin-bottom: 5rem;	
				}

				@media only screen and (max-width: 1399px) {
					margin-bottom: 3rem;	
				}

				@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
					margin-bottom: 1.5rem;	
				}

				@media only screen and (max-width: 599px) {
					margin-bottom: 3.5rem;	
				}

				img {
					display: inline-block;
				}
			}

			&_nametitle {
				line-height: 1;
				margin-bottom: 3.8rem;

				@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
					margin-bottom: 1.8rem;	
				}

				@media only screen and (max-width: 599px) {
					margin-bottom: 3rem;	
				}
			}

			&_name {
				margin-bottom: 3.5rem;

				@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
					margin-bottom: 2rem;	
				}

				@media only screen and (max-width: 599px) {
					margin-bottom: 3rem;	
				}
			}

			.divider {
				height: 1px;
				background: #fff;
				width: 13rem;
				margin: 0 auto 3rem;

				@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
					width: 8rem;
					margin: 0 auto 0.8rem;	
				}

				@media only screen and (max-width: 599px) {
					margin: 0 auto 2.8rem;	
				}
			}

			&_text {
				margin-bottom: 0;

				@media only screen and (max-width: 599px) {
					line-height: 1.8;
					padding: 0 1.5rem;
				}
			}
		}

		&.animated {

			.intro__bg {
				opacity: 1;
			}

			.intro__graph {
				opacity: 1;
			}
		}

		&.finished {
			.intro__bg {
				opacity: 1 !important;
			}

			.intro__graph {
				opacity: 1 !important;
			}
		}
		


		// Ankr old
		&.ankr-old {

			.intro__content_logo {
				margin-top: -15rem;
				
				@media only screen and (max-width: 1600px) {
					margin-bottom: 5rem;
					margin-top: -7rem;	
				}

				@media only screen and (max-width: 1499px) {
					margin-top: -5rem;	
				}

				@media only screen and (max-width: 1399px) {
					margin-top: -3rem;
					margin-bottom: 3rem;	
				}

				@media only screen and (max-width: 1199px) {
					margin-top: -8.5rem;	
				}

				@media only screen and (max-width: 992px) {
					margin-top: 0;	
				}

				@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
					margin-top: 0rem;
					margin-bottom: 1.5rem;	
				}

				@media only screen and (max-width: 599px) {
					margin-bottom: 5rem;
					margin-top: -3.8rem;	
				}

				@media only screen and (max-width: 369px) {
					margin-top: -1rem;	
				}

				img {

					@media only screen and (max-width: 992px) {
						max-width: 6rem;	
					}

					@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
						max-width: 4rem;	
					}

					@media only screen and (max-width: 599px) {
						max-width: 6rem;	
					}
				}
			}
		}

		



		// Ankr new
		&.ankr-new {

			.intro__content_logo {

				img {

					@media only screen and (max-width: 992px) {
						max-width: 6rem;	
					}

					@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
						max-width: 4rem;	
					}

					@media only screen and (max-width: 599px) {
						max-width: 6rem;	
					}
				}
			}
		}


		// Phantasma
		&.phantasma {

			.intro__content_name {

				@media only screen and (max-width: 599px) {
					font-size: 4.7rem !important;
					line-height: 1.2;	
				}
			}
		}





		// nos

		&.nos {

			.intro__bg {
				// display: none;
			}

			.intro__graph {
				width: 100%;
				height: 100%;
				position: absolute;
				left: 0;
				top: 0;
				background-size: 40%;
				background-repeat: no-repeat;
				background-position: right top;

				@media only screen and (max-width: 1600px) {
					background-size: 46%;
					background-position: right -18px top -18px;
				}

				@media only screen and (max-width: 1499px) {
					background-size: 46%;
					background-position: right -13px top -12px;	
				}

				@media only screen and (max-width: 1399px) {
					background-position: right -20px top -14px;	
				}

				@media only screen and (max-width: 1199px) {
					background-position: right -12px top -8px;	
				}

				@media only screen and (max-width: 992px) {
					background-position: right -3px top 0px;	
				}

				@media only screen and (max-width: 767px) {
					background-position: right -3px top 0px;
					background-size: 55%;	
				}

				@media (max-height: 499px) and (max-width: 899px) {
					background-position: right -10px top -5px;
					background-size: 55%;	
				}



				@media only screen and (max-width: 599px) {
					background-position: right -2px top 0px;
					background-size: 88%;	
				}

				@media only screen and (max-width: 369px) {
					background-position: right -1px top 0px;
					background-size: 90%;	
				}

			}
		}





		// deepcloud
		&.deepcloud {

			.intro__content {
				color: $black;

				&_name {

					@media only screen and (max-width: 992px) {
						font-size: 8rem !important;	
					}

					@media only screen and (max-width: 599px) {
						font-size: 4.6rem !important;	
					}
				}
			}

			.divider {
				background: $black;
			}
		}





		// Mobydick

		&.mobydick {

			.intro__content_name {

				@media only screen and (max-width: 1299px) {
					font-size: 9rem;	
				}
			}
		}
	}

</style>