<template>
	
	<section class="exchange" :class="className">

		<div class="adaptive__bg_trigger"></div>

		<div class="exchange__overlay" :style="{ backgroundImage: 'url(' + require(`@/assets/img/${overlayImageUrl}`) + ')' }"></div>
		<div class="exchange__content pin-wrapper">
			<div class="container">
				<div class="row">
					<div class="col-sm-12">
						<div class="exchange__content_inner">
							<h2 class="section__title" data-delay="0">{{titletext}}</h2>
							<p data-delay="0.1">{{text}}</p>
							<p data-delay="0.1">{{textTwo}}</p>
						</div>
					</div>
				</div>
			</div>
			<div class="exchange__scene">
				<div class="container">
					<div class="row">
						<div class="col-sm-12">
							<div class="exchange__scene_inner">
								<div class="exchange__scene_item pin-scene">
									<div class="exchange__scene_item_inner pin-scene-inner">
										<div class="scheme transparent" :style="{ backgroundImage: 'url(' + require(`@/assets/img/${schemeTransparentImageUrl}`) + ')' }"></div>
										<div class="scheme white" :style="{ backgroundImage: 'url(' + require(`@/assets/img/${schemeWhiteImageUrl}`) + ')' }"></div>
									</div>
								</div>
							</div>
						</div>
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
		overlayImageUrl: String,
		titletext: String,
		text: String,
		textTwo: String,
		schemeTransparentImageUrl: String,
		schemeWhiteImageUrl: String,
	},

  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>

	@import '../../variables.scss';

	.exchange {
		margin-top: -24rem;
		position: relative;

		@media only screen and (max-width: 992px) {
			margin-top: -14rem;	
		}

		.adaptive__bg_trigger {
			position: absolute;
			left: 0;
			right: 0;
			top: 14rem;
			height: 70%;
			z-index: -1;

			@media only screen and (max-width: 992px) {
				top: 5rem;
				height: 40%;	
			}

			@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
				height: 80%;	
			}

			@media only screen and (max-width: 599px) {
				height: 50%;	
			}
		}

		&__overlay {
			position: absolute;
			left: 0;
			top: -540px;
			right: 0;
			bottom: 0;
			background-size: auto;
			background-repeat: no-repeat;
			background-position: right top;
			z-index: 0;

			@media only screen and (max-width: 1600px) {
				top: -448px;
				background-size: 50%;
			}

			@media only screen and (max-width: 1499px) {
				top: -380px;
			}

			@media only screen and (max-width: 1439px) {
				top: -364px;
			}

			@media only screen and (max-width: 1399px) {
				top: -345px;
			}

			@media only screen and (max-width: 1299px) {
				top: -315px;
				background-position: right -25px top;	
			}

			@media only screen and (max-width: 1199px) {
				top: -192px;
				background-position: right -75px top;	
			}

			@media only screen and (max-width: 992px) {
				background-position: right -53px top 8px;	
			}

			@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
				background-position: right 0px top 65px;	
			}

			@media only screen and (max-width: 599px) {
				background-position: right 0px top 180px;	
			}
		}

		&__content {
			// color: #FFFFFF;
			padding-top: 37rem;
			padding-bottom: 10rem;
			position: relative;
			z-index: 1;

			@media only screen and (max-width: 992px) {
				padding-top: 19.5rem;
				padding-bottom: 6.5rem;	
			}

			@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
				padding-bottom: 2rem;	
			}

			&_inner {
				max-width: 56rem;
				margin-bottom: 9rem;

				@media only screen and (max-width: 992px) {
					margin-bottom: 5.2rem;	
				}

				@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
					padding-left: 1.5rem;
					padding-right: 1.5rem;	
				}
			}
		}

		.section__title {
			margin-bottom: 5.6rem;

			@media only screen and (max-width: 992px) {
				margin-bottom: 3rem;	
			}
		}

		&__scene {

			&_inner {
				position: relative;
			}

			&_item {
				position: relative;
				z-index: 1;

				&_inner {
					padding-top: 107.4%;

					.scheme {
						background-size: cover;
						background-repeat: no-repeat;
						background-position: center center;
						position: absolute;
						left: 0;
						top: 0;
						right: 0;
						bottom: 0;
						-webkit-transition: all 1.2s ease 0s;
						-moz-transition: all 1.2s ease 0s;
						transition: all 1.2s ease 0s;

						&.transparent {
							opacity: 1;
							z-index: 1;
						}

						&.white {
							opacity: 0;
							box-shadow: 0 1rem 3rem 0 rgba(0,0,0,0.2);
							z-index: -1;

							&.show-sheme {
								opacity: 1;
								z-index: 2;
								transition-delay: 1s;
							}
						}
					}

					&:hover {

						.scheme {

							&.transparent {
								// opacity: 0;
							}

							&.white {
								// opacity: 1;
							}
						}
					}
				}

				&.no-clip {
					overflow: visible;

					.pin-scene-inner {
						overflow: visible;
					}

					.scheme {

						&.white {
							transition-delay: 0s;
						}
					}
				}
			}
		}
	}

</style>