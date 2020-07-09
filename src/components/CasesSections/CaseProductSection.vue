<template>
	
	<section class="product" :class="className">
		<app-lines v-if="className == 'nos nos-overview'"></app-lines>
		<app-lines v-if="className == 'nos nos-store'"></app-lines>
		<app-lines v-if="className == 'deppcloud-scrolling'"></app-lines>
		<app-lines v-if="className == 'alita-testnet'"></app-lines>
		<app-lines v-if="className == 'mobydick-animation'"></app-lines>

		<div class="product__content pin-wrapper">
			<div class="container">
				<div class="row">
					<div class="col-sm-12">
						<div class="product__content_inner">
							<h2 class="section__title" data-delay="0">{{titleText}}</h2>
							<p data-delay="0.1">{{text}}</p>
							<p data-delay="0.2" v-if="textTwo">{{textTwo}}</p>
							<p data-delay="0.2" v-if="textStrong" class="strong">{{textStrong}}</p>
						</div>
					</div>
				</div>
			</div>
			<div class="product__scene pin-scene">
				<div class="product__scene_inner pin-scene-inner">
					<div class="product__scene_inner_overlay" :style="{ backgroundImage: 'url(' + require(`@/assets/img/${imageUrl}`) + ')' }"></div>
					<div class="product__scene_inner_image" :style="{ backgroundImage: 'url(' + require(`@/assets/img/${imageUrl}`) + ')' }"></div>
					<div class="video__wrapper">
						<video v-if="videoUrl" loop muted autoplay="autoplay">
							<source :src="require(`@/assets/img/${videoUrl}`)" type="video/mp4">
							</video>
						</div>
					
				</div>
			</div>
		</div>
	</section>

</template>

<script>

import Lines from '../../components/Lines.vue';

export default {

	props: {
		className: String,
		titleText: String,
		text: String,
		textTwo: String,
		textStrong: String,
		imageUrl: String,
		videoUrl: String
	},

  data () {
    return {

    }
  },

  components: {
  	'app-lines': Lines
  }
}
</script>

<style lang="scss" scoped>

	@import '../../variables.scss';
	
	.product {
		position: relative;
		background: $cases-gray-light;

		.video__wrapper {
			overflow: hidden;
			box-shadow: $cases-box-shadow;

			video {
				max-width: 100%;
				min-width: 100%;
			}
		}

		&__content {
			padding: 13.2rem 0 10rem;

			@media only screen and (max-width: 992px) {
				padding: 5.2rem 0 6.5rem;	
			}

			&_inner {
				max-width: 77rem;
				margin-bottom: 14rem;

				@media only screen and (max-width: 992px) {
					margin-bottom: 4.5rem;	
				}

				@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
					padding-left: 1.5rem !important;
					padding-right: 1.5rem !important;
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
			width: 100%;
			max-width: 154rem;
			padding: 0 3rem;
			margin: 0 auto;
			box-shadow: none;

			@media only screen and (max-width: 1600px) {
				max-width: 132rem;	
			}

			@media only screen and (max-width: 1499px) {
				max-width: 116rem;	
			}

			@media only screen and (max-width: 1399px) {
				max-width: 112rem;	
			}

			@media only screen and (max-width: 1199px) {
				max-width: 94rem;
				padding: 0;	
			}

			@media only screen and (max-width: 992px) {
				padding: 0 3.5rem;	
			}

			@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
				padding: 0;	
			}


			&_inner {
				position: relative;
				padding-top: 64.4%;
				overflow: hidden !important;

				&::after {
					content: '';
					display: block;
					position: absolute;
					top: 0;
					bottom: 0;
					right: 0;
					width: 37.5%;
					z-index: 1;
				}

				&_overlay {
					position: absolute;
					left: 0;
					top: 0;
					right: 0;
					bottom: 0;
					z-index: 0;
					background-size: cover;
					background-repeat: no-repeat;
					background-position: center center;
					filter: blur(10px);
					opacity: 0.5;
					z-index: 0;
				}

				&_image {
					position: absolute;
					left: 5rem;
					top: 5rem;
					right: 5rem;
					bottom: 5rem;
					z-index: 1;
					background-size: cover;
					background-repeat: no-repeat;
					background-position: center center;
					z-index: 2;
					box-shadow: $cases-box-shadow;

					@media only screen and (max-width: 992px) {
						left: 3rem;
						top: 3rem;
						right: 3rem;
						bottom: 3rem;	
					}

					@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
						left: 1.5rem;
						top: 1.5rem;
						right: 1.5rem;
						bottom: 1.5rem;	
					}
				}

				video {
					box-shadow: $cases-box-shadow;
				}
			}
		}

		&.ankr-old {
			background: #F3F7F7;

			.product__content {
				padding-bottom: 14rem;

				@media only screen and (max-width: 992px) {
					padding-bottom: 6rem;
				}
			}

			.product__content_inner {
				max-width: 68rem;
				margin-bottom: 11.5rem;

				@media only screen and (max-width: 992px) {
					margin-bottom: 4.5rem;
				}
			}

			.product__scene_inner {
				padding-top: 69.4%;

				&::after {
					background: #29388b;
					display: none;
				}

				&_overlay {
					display: none;
				}

				&_image {
					box-shadow: none;
					left: 10rem;
					right: auto;
					top: 0;
					width: calc(100% + 5rem);
					bottom: 0;

					@media only screen and (max-width: 1600px) {
						left: 0;	
					}

					@media only screen and (max-width: 1499px) {
						width: calc(100% + 4rem);	
					}

					@media only screen and (max-width: 1199px) {
						width: calc(100% + 3rem);	
					}

					@media only screen and (max-width: 992px) {
						width: calc(100% + 2rem);
						left: 2rem;
					}

					@media only screen and (max-width: 599px) {
						width: 100%;	
					}
				}
			}
		}

		&.ankr-new {

			.product__content {
				padding-bottom: 14rem;

				@media only screen and (max-width: 992px) {
					padding-bottom: 5rem;	
				}
			}

			.product__content_inner {
				max-width: 64rem;
				margin-bottom: 7.5rem;

				@media only screen and (max-width: 992px) {
					margin-bottom: 2rem;
				}
			}

			.product__scene_inner {
				padding-top: 84%;

				&_overlay {
					display: none;
				}

				&::after {
					background: -moz-linear-gradient(0deg, rgba(2,182,224,1) 0%, rgba(71,90,167,1) 100%);
					background: -webkit-gradient(linear, left top, right top, color-stop(0%, rgba(2,182,224,1)), color-stop(100%, rgba(71,90,167,1)));
					background: -webkit-linear-gradient(0deg, rgba(2,182,224,1) 0%, rgba(71,90,167,1) 100%);
					background: -o-linear-gradient(0deg, rgba(2,182,224,1) 0%, rgba(71,90,167,1) 100%);
					background: -ms-linear-gradient(0deg, rgba(2,182,224,1) 0%, rgba(71,90,167,1) 100%);
					background: linear-gradient(90deg, rgba(2,182,224,1) 0%, rgba(71,90,167,1) 100%);
					filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#02B6E0', endColorstr='#475AA7',GradientType=1 );
					display: none;
				}

				&_image {
					box-shadow: none;
					left: 0;
					top: 0;
					right: 0;
					bottom: 0;
				}
			}
		}

		&.phantasma {

			.product__content {
				padding-bottom: 5rem;

				@media only screen and (max-width: 992px) {
					padding-bottom: 3rem;	
				}

				@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
					padding-bottom: 5.5rem;
				}

				&_inner {
					max-width: 74rem;
					margin-bottom: 4.5rem;

					@media only screen and (max-width: 992px) {
						margin-bottom: 0;	
					}

					@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
						margin-bottom: 4rem;	
					}
				}
			}

			.product__scene_inner {
				padding-top: 80%;

				&::after {
					background: #2479E4;
					display: none;
				}

				&_overlay {
					display: none;
				}

				&_image {
					box-shadow: none;

					@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
						left: 0;
						top: 0;
						right: 0;
						bottom: 0;	
					}
				}
			}
		}

		&.nos-intro {

			.product__content {
				padding-bottom: 0;

				@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
					padding-bottom: 4rem;
				}

				&_inner {
					max-width: 74rem;
					margin-bottom: 4rem;
				}
			}

			.product__scene_inner::after {
				background: -moz-linear-gradient(0deg, rgba(99,188,70,1) 0%, rgba(182,212,55,1) 100%);
				background: -webkit-gradient(linear, left top, right top, color-stop(0%, rgba(99,188,70,1)), color-stop(100%, rgba(182,212,55,1)));
				background: -webkit-linear-gradient(0deg, rgba(99,188,70,1) 0%, rgba(182,212,55,1) 100%);
				background: -o-linear-gradient(0deg, rgba(99,188,70,1) 0%, rgba(182,212,55,1) 100%);
				background: -ms-linear-gradient(0deg, rgba(99,188,70,1) 0%, rgba(182,212,55,1) 100%);
				background: linear-gradient(90deg, rgba(99,188,70,1) 0%, rgba(182,212,55,1) 100%);
				filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#63BC46', endColorstr='#B6D437',GradientType=1 );
				display: none;
			}

			.product__scene {

				&_inner {
					padding-top: 81%;

					&_overlay {
						display: none;
					}

					&_image {
						box-shadow: none;

						@media only screen and (max-width: 1199px) {
							left: 0;
							top: 0;
							right: 0;
							bottom: 0;	
						}
					}
				}
			}
		}

		&.nos-overview {
			background: $white;

			.product__content {
				padding-bottom: 0;
			}

			.product__content_inner {
				margin-bottom: 9rem;
				max-width: 64rem;

				@media only screen and (max-width: 992px) {
					margin-bottom: 4rem;	
				}
			}

			.product__scene_inner_overlay {
				background-image: none !important;
			}

			.product__scene_inner {
				background: $cases-gray-light;
				padding-top: 72.4%;

				&::after {
					display: none;
				}
			}
		}

		&.nos-store {
			background: transparent;
			z-index: 1;

			.product__content {
				padding-bottom: 0;
			}

			.product__scene_inner {
				background: $cases-gray-light;
				padding-top: 70%;
			}

			.product__content_inner {
				max-width: 65rem;
				margin-bottom: 9rem;

				@media only screen and (max-width: 992px) {
					margin-bottom: 4rem;	
				}
			}

			.product__scene_inner_overlay {
				background-image: none !important;
			}

			.product__scene_inner::after {
				display: none;
			}
		}

		&.deepcloud {

			.product__content {
				padding-bottom: 14rem;

				@media only screen and (max-width: 992px) {
					padding-bottom: 6rem;
				}
			}

			.product__content_inner {
				max-width: 74rem;
				margin-bottom: 11.5rem;

				@media only screen and (max-width: 992px) {
					margin-bottom: 4.5rem;
				}
			}

			.product__scene_inner {
				padding-top: 68.5%;

				&::after {
					background: -moz-linear-gradient(0deg, rgba(66,229,224,1) 0%, rgba(11,68,198,1) 100%);
					background: -webkit-gradient(linear, left top, right top, color-stop(0%, rgba(66,229,224,1)), color-stop(100%, rgba(11,68,198,1)));
					background: -webkit-linear-gradient(0deg, rgba(66,229,224,1) 0%, rgba(11,68,198,1) 100%);
					background: -o-linear-gradient(0deg, rgba(66,229,224,1) 0%, rgba(11,68,198,1) 100%);
					background: -ms-linear-gradient(0deg, rgba(66,229,224,1) 0%, rgba(11,68,198,1) 100%);
					background: linear-gradient(90deg, rgba(66,229,224,1) 0%, rgba(11,68,198,1) 100%);
					filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#42E5E0', endColorstr='#0B44C6',GradientType=1 );
					display: none;
				}

				&_overlay {
					display: none;
				}

				&_image {
					box-shadow: none;
					left: 10rem;
					right: auto;
					top: 0;
					width: calc(100% + 5rem);
					bottom: 0;

					@media only screen and (max-width: 1600px) {
						left: 0;	
					}

					@media only screen and (max-width: 1499px) {
						width: calc(100% + 4rem);	
					}

					@media only screen and (max-width: 1199px) {
						width: calc(100% + 3rem);	
					}

					@media only screen and (max-width: 992px) {
						width: calc(100% + 2rem);
						left: 2rem;
					}

					@media only screen and (max-width: 599px) {
						width: 100%;	
					}
				}
			}
		}

		&.deppcloud-scrolling {
			background: $white;

			.product__scene_inner_overlay {
				display: none;
			}

			.product__scene_inner {
				background: $cases-gray-light;
				padding: 5rem;
				line-height: 0;

				@media only screen and (max-width: 992px) {
					padding: 3rem;	
				}

				@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
					padding: 1.5rem;	
				}

				&_image {
					display: none;
				}

				video {
					margin-top: -2px;
				}
			}

			.product__content_inner {
				max-width: 64rem;
				margin-bottom: 9rem;

				@media only screen and (max-width: 992px) {
					margin-bottom: 4rem;	
				}
			}
		}

		&.alita {

			.product__content {
				padding-bottom: 14rem;

				@media only screen and (max-width: 992px) {
					padding-bottom: 5rem;	
				}

				&_inner {
					max-width: 68rem;
					margin-bottom: 7.5rem;

					@media only screen and (max-width: 992px) {
						margin-bottom: 3rem;	
					}
				}
			}

			.product__scene_inner {
				padding-top: 84%;

				&_overlay {
					display: none;
				}

				&::after {
					background: -moz-linear-gradient(0deg, rgba(97,30,209,1) 0%, rgba(41,111,249,1) 100%);
					background: -webkit-gradient(linear, left top, right top, color-stop(0%, rgba(97,30,209,1)), color-stop(100%, rgba(41,111,249,1)));
					background: -webkit-linear-gradient(0deg, rgba(97,30,209,1) 0%, rgba(41,111,249,1) 100%);
					background: -o-linear-gradient(0deg, rgba(97,30,209,1) 0%, rgba(41,111,249,1) 100%);
					background: -ms-linear-gradient(0deg, rgba(97,30,209,1) 0%, rgba(41,111,249,1) 100%);
					background: linear-gradient(90deg, rgba(97,30,209,1) 0%, rgba(41,111,249,1) 100%);
					filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#611ED1', endColorstr='#296FF9',GradientType=1 );
					display: none;
				}

				&_image {
					box-shadow: none;
					left: 0;
					top: 0;
					right: 0;
					bottom: 0;
				}
			}
		}

		&.alita-testnet {
			background: $cases-bg;

			.product__content {
				padding-bottom: 14rem;

				@media only screen and (max-width: 992px) {
					padding-bottom: 6.5rem;	
				}
			}

			.product__content_inner {
				max-width: 56rem;
				margin-left: 33.33333333%;

				@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
					margin-left: 0;
				}
			}
			
			.product__scene_inner_overlay {
				display: none;
			}

			.product__scene_inner {
				background: $cases-gray-light;
				padding: 5rem;
				line-height: 0;

				@media only screen and (max-width: 992px) {
					padding: 3rem;		
				}

				@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
					padding: 1.5rem;	
				}

				&_image {
					opacity: 0.1;
					display: none;
				}

				.video__wrapper {
					position: relative;
					box-shadow: $cases-box-shadow;
				}


				video {
					max-width: 100%;

					@media only screen and (max-width: 992px) {
						
					}

					@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
						
					}
				}
			}
		}

		&.mobydick-animation {
			background: transparent;
			
			.product__scene_inner {
				padding-top: 53%;
				background: $cases-gray-light;
			}

			.product__scene_inner_overlay {
				display: none;
			}
		}
	}

</style>