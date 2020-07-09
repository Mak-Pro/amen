<template>
	
	<section class="isometric" :class="className">

		<!-- Ankr old -->
		<div class="isometric__content pin-wrapper" v-if="className == 'ankr-old'">
			<div class="container">
				<div class="row">
					<div class="col-sm-12 col-md-12 col-lg-6">
						<div class="isometric__content_inner">
							<h2 class="section__title" data-delay="0">Isometric Graphics</h2>
							<p class="section__subtitle" data-delay="0.1">{{subtitleText}}</p>
							<p data-delay="0.2">{{text}}</p>
						</div>
					</div>
					<div class="col-sm-12 col-lg-6 d-none d-xl-block">
						<div class="isometric__scheme scheme-1" data-delay="0.3">
							<img :src="require(`@/assets/img/${imageFirstUrl}`)" alt="image">
						</div>
					</div>
				</div>
				<div class="isometric__slider_old isometric__slider">
					<div class="row isometric__slider swiper-wrapper">
						<div class="col-sm-12 d-xl-none swiper-slide">
							<div class="isometric__scheme scheme-1" data-delay="0.3">
								<img :src="require(`@/assets/img/${imageFirstUrl}`)" alt="image">
							</div>
						</div>
						<div class="col-sm-12 swiper-slide">
							<div class="isometric__scheme scheme-2" data-delay="0.4">
								<img :src="require(`@/assets/img/${imageSecondUrl}`)" alt="image">
							</div>
						</div>
						<div class="col-sm-12 swiper-slide">
							<div class="isometric__scheme scheme-3" data-delay="0.5">
								<img :src="require(`@/assets/img/${imageThirdUrl}`)" alt="image">
							</div>
						</div>
					</div>
					<div class="swiper-pagination swiper-pagination-old"></div>
				</div>
				
			</div>
		</div>



		

		<!-- ankr-new -->
		<div class="isometric__content pin-wrapper" v-if="className == 'ankr-new'">
			<div class="container">
				<div class="row">
					<div class="col-md-12 col-lg-6">
						<div class="isometric__content_inner">
							<h2 class="section__title" data-delay="0">Isometric Graphics</h2>
							<p data-delay="0.1">{{text}}</p>
						</div>
					</div>
					<div class="col-md-12 col-lg-6 d-none d-xl-block">
						<div class="isometric__scheme scheme-1" data-delay="0.3">
							<img :src="require(`@/assets/img/${imageFirstUrl}`)" alt="image">
						</div>
					</div>
				</div>
				<div class="isometric__slider_new isometric__slider">
					<div class="row isometric__slider swiper-wrapper">
						<div class="col-lg-12 col-xl-6 d-xl-none swiper-slide">
							<div class="isometric__scheme scheme-1" data-delay="0.3">
								<img :src="require(`@/assets/img/${imageFirstUrl}`)" alt="image">
							</div>
						</div>
						<div class="col-lg-12 col-xl-6 swiper-slide">
							<div class="isometric__scheme scheme-2" data-delay="0.4">
								<img :src="require(`@/assets/img/${imageSecondUrl}`)" alt="image">
							</div>
						</div>
						<div class="col-lg-12 col-xl-6 swiper-slide">
							<div class="isometric__scheme scheme-3" data-delay="0.5">
								<img :src="require(`@/assets/img/${imageThirdUrl}`)" alt="image">
							</div>
						</div>
					</div>
					<div class="swiper-pagination swiper-pagination-new"></div>
				</div>
			</div>
		</div>





		<!-- Phantasma -->
		<div class="isometric__content pin-wrapper" v-if="className == 'phantasma'">
			<div class="container">
				<div class="row">
					<div class="col-sm-12">
						<div class="isometric__content_inner">
							<h2 class="section__title" data-delay="0">Isometric Graphics</h2>
							<p data-delay="0.2">{{text}}</p>
						</div>
					</div>
				</div>

				<div class="isometric__slider_phantasma isometric__slider">
					<div class="row align-items-center isometric__slider swiper-wrapper">
						<div class="col-sm-12 col-xl-4 swiper-slide">
							<div class="isometric__scheme" data-delay="0.3">
								<img :src="require(`@/assets/img/${imageFirstUrl}`)" alt="image">
							</div>
						</div>
						<div class="col-sm-12 col-xl-4 swiper-slide">
							<div class="isometric__scheme" data-delay="0.4">
								<img :src="require(`@/assets/img/${imageSecondUrl}`)" alt="image">
							</div>
						</div>
						<div class="col-sm-12 col-xl-4 swiper-slide">
							<div class="isometric__scheme" data-delay="0.5">
								<img :src="require(`@/assets/img/${imageThirdUrl}`)" alt="image">
							</div>
						</div>
						<div class="col-sm-12 col-xl-4 swiper-slide">
							<div class="isometric__scheme" data-delay="0.6">
								<img :src="require(`@/assets/img/${imageFourthUrl}`)" alt="image">
							</div>
						</div>
						<div class="col-sm-12 col-xl-4 swiper-slide">
							<div class="isometric__scheme" data-delay="0.7">
								<img :src="require(`@/assets/img/${imageFiveUrl}`)" alt="image">
							</div>
						</div>
						<div class="col-sm-12 col-xl-4 swiper-slide">
							<div class="isometric__scheme" data-delay="0.8">
								<img :src="require(`@/assets/img/${imageSixUrl}`)" alt="image">
							</div>
						</div>
					</div>
					<div class="swiper-pagination swiper-pagination-phantasma"></div>
				</div>
				
			</div>

			<div class="isometric__video_box">
				<video class="" loop muted autoplay="autoplay">
					<source :src="require(`@/assets/img/phantasma-shemes.mp4`)" type="video/mp4">
				</video>
			</div>

		</div>


	</section>

</template>

<script>


import Swiper from 'swiper';


export default {

	props: {
		className: String,
		subtitleText: String,
		text: String,
		imageFirstUrl: String,
		imageSecondUrl: String,
		imageThirdUrl: String,
		imageFourthUrl: String,
		imageFiveUrl: String,
		imageSixUrl: String
	},

  data () {
    return {

    }
  },

  mounted() {

  	if(window.innerWidth < 1200) {

  		new Swiper('.isometric__slider_old', {
  			slidesPerView: 1,
  			loop: true,
  			pagination: {
  				el: '.swiper-pagination-old',
  			},
  		});
  		new Swiper('.isometric__slider_new', {
  			slidesPerView: 1,
  			loop: true,
  			pagination: {
  				el: '.swiper-pagination-new',
  			},
  		});
  		new Swiper('.isometric__slider_phantasma', {
  			slidesPerView: 1,
  			loop: true,
  			pagination: {
  				el: '.swiper-pagination-phantasma',
  			},
  		});
  	}

  	
  }
}
</script>

<style lang="scss" scoped>

	@import '../../variables.scss';

	.isometric {
		background: $cases-gray-light;
		border-bottom: 0.4rem solid #C4C4C4;
		box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.2);
		position: relative;
		z-index: 2;

		&__content_inner {

			@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
				padding-left: 1.5rem !important;
				padding-right: 1.5rem !important;		
			}
		}

		&__video_box {
			overflow: hidden;
			line-height: 0;
		}

		.section__title {
			margin-bottom: 5rem;

			@media only screen and (max-width: 992px) {
				margin-bottom: 2.5rem;	
			}
		}

		.section__subtitle {
			font-size: 2.2rem;
			font-weight: 600;
			margin-bottom: 2rem;

			@media only screen and (max-width: 992px) {
				line-height: 1.4;	
			}
		}



		// Ankr old

		&.ankr-old {

			.isometric__content {
				padding: 18.2rem 0 16rem;

				@media only screen and (max-width: 992px) {
					padding: 4rem 0 4.5rem;	
				}

				&_inner {
					
					@media only screen and (max-width: 1199px) {
						margin-bottom: 3.5rem;	
					}
				}
			}

			.section__subtitle {

				@media only screen and (max-width: 992px) {
					margin-bottom: 2rem;	
				}

				& + p {
					// max-width: 46rem;
				}
			}

			.isometric__scheme {
				position: relative;
				display: inline-block;

				@media only screen and (max-width: 992px) {
					display: block;
					text-align: center;	
				}

				img {

					@media only screen and (max-width: 992px) {
						display: inline-block;	
					}
				}

				&.scheme-1 {
					display: flex;
					justify-content: flex-end;
					top: -1.6rem;

					@media only screen and (max-width: 1199px) {
						margin-bottom: 0;
						top: 0;
						justify-content: center;
						width: 100%;
					}

					@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
						max-width: 32rem;
						margin: 0 auto;	
					}
				}

				&.scheme-2 {
					margin-bottom: 9rem;

					@media only screen and (max-width: 1199px) {
						margin-bottom: 0;	
					}
				}
			}
		}




		// Ankr new

		&.ankr-new {

			.isometric__content {
				padding: 12.6rem 0 11rem;

				@media only screen and (max-width: 992px) {
					padding: 4rem 0 4.5rem;	
				}

				&_inner {
					margin-right: -8rem;
					
					@media only screen and (max-width: 1199px) {
						margin-bottom: -3rem;	
					}

					@media only screen and (max-width: 992px) {
						margin-right: 0;	
					}

					@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
						margin-bottom: -1rem;	
					}
				}
			}

			.isometric__scheme {

				@media only screen and (max-width: 1199px) {
					display: flex;
					align-items: center;
					justify-content: center;
					width: 100%;
					top: 0 !important;
					margin-top: 0 !important;	
				}

				@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
					max-width: 32rem;
					margin: 0 auto;	
				}

				&.scheme-1 {
					margin-top: 8rem;
					padding-left: 7rem;

					@media only screen and (max-width: 1199px) {
						justify-content: center;
						padding-left: 0;
						margin-top: 0;	
					}

					img {
						max-width: 49rem;
						position: relative;

						@media only screen and (max-width: 1199px) {
							left: 2rem;	
						}
					}
				}

				&.scheme-2 {
					margin-top: -10rem;

					img {
						max-width: 45rem;
					}
				}

				&.scheme-3 {
					margin-top: 8rem;

					img {
						max-width: 51rem;
					}
				}
			}
		}





		// Phantasma

		&.phantasma {

			.isometric__content {
				padding: 13rem 0 14.5rem;

				@media only screen and (max-width: 1199px) {
					padding-bottom: 16rem;	
				}

				@media only screen and (max-width: 992px) {
					padding-top: 4rem;
					padding-bottom: 5.5rem;	
				}

				&_inner {
					margin-left: 33.33333333%;
					max-width: 72rem;
					margin-bottom: 7rem;

					@media only screen and (max-width: 992px) {
						margin-bottom: 4rem;	
					}

					@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
						margin-left: 0;
						max-width: 100%;
					}
				}

				.isometric__video_box {
					overflow: hidden;
					max-width: 148rem;
					margin: 0 auto;
					padding: 5rem;
					background: #EAF3F2;

					@media only screen and (max-width: 1499px) {
						max-width: calc(100% - 36px);	
					}

					@media only screen and (max-width: 1199px) {
						max-width: 100%;	
					}

					@media only screen and (max-width: 992px) {
						padding: 3rem;	
					}

					@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
						padding: 1.5rem;	
					}

					video {
						min-width: 100%;
						max-width: 100%;
						box-shadow: $cases-box-shadow;
					}
				}


				.isometric__slider_phantasma {
					display: none;
				}
			}

			.isometric__scheme {
				position: relative;
				margin-bottom: 8rem;

				@media only screen and (max-width: 1199px) {
					margin: 0;
					width: 100%;
					display: flex;
					justify-content: center;	
				}
			}
		}

	}

</style>