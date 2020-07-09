<template>
	
	<section class="next" :class="className">
		<div class="next__preview pin-wrapper">
			<div class="next__preview__image pin-scene">
				<div class="next__preview__image_inner pin-scene-inner" :style="{ backgroundImage: 'url(' + require(`@/assets/img/${imageUrl}`) + ')' }"></div>
			</div>
			<div class="next__preview__content">
				<div class="next__preview__content_inner" data-delay="0">
					<h4 class="project__name_title">Next project:</h4>
					<h2 class="project__name">{{projectName}}</h2>
					<div class="divider"></div>
					<p class="project__description">{{projectDescription}}</p>
					<a :href="siteUrl" class="project__link" target="_blank">
						<svg class="project__link_icon" viewBox="0 0 200 200" version="1.1" xmlns="http://www.w3.org/2000/svg">
							<linearGradient id="svgLinkGradient" x1="0%" y1="21%" x2="100%" y2="79%">
								<stop offset="0%" stop-color="#00eded"></stop>
								<stop offset="100%" stop-color="#37c3fd"></stop>
							</linearGradient>
							<path fill="url(#svgLinkGradient)" d=" M 0.00 0.00 L 76.00 0.00 C 76.00 10.00 76.00 20.00 76.00 30.00 C 60.67 30.00 45.33 30.00 30.00 30.00 C 30.00 76.67 30.00 123.33 30.00 170.00 C 76.67 170.00 123.33 170.00 170.00 170.00 C 170.01 154.67 169.99 139.33 170.00 124.00 C 180.00 124.00 190.00 124.00 200.00 124.00 L 200.00 200.00 L 0.00 200.00 L 0.00 0.00 Z"></path>
							<path fill="url(#svgLinkGradient)" d=" M 107.36 0.00 L 200.00 0.00 L 200.00 92.53 C 197.89 91.16 196.00 89.48 194.32 87.62 C 184.77 78.03 175.11 68.54 165.58 58.93 C 152.23 71.81 139.11 84.92 125.76 97.80 C 124.95 98.67 123.84 99.58 124.02 100.92 C 123.93 108.61 124.04 116.30 124.00 124.00 C 108.00 124.00 92.00 124.00 76.00 124.00 C 76.00 108.00 76.00 92.00 76.00 76.00 C 85.84 75.76 95.78 76.47 105.55 75.67 C 118.37 62.94 130.86 49.84 143.55 36.95 C 133.49 26.82 123.40 16.72 113.33 6.60 C 111.15 4.57 109.09 2.42 107.36 0.00 Z"></path>
						</svg>
						{{linkText}}
					</a>
					<router-link :to="{name: nextCaseName}" class="btn btn-action btn-action-full show__case d-none d-lg-block" exact><span>go forward</span></router-link>
					<router-link :to="{name: nextCaseName}" class="btn btn-3d full d-lg-none show__case" exact><span>go forward</span></router-link>
				</div>
			</div>
		</div>
	</section>

</template>

<script>
export default {

	props: {
		className: String,
		imageUrl: String,
		projectName: String,
		projectDescription: String,
		linkText: String,
		siteUrl: String,
		nextCaseName: String
	},

  data () {
    return {

    }
  },
}
</script>

<style lang="scss" scoped>

	@import '../../variables.scss';

	h4 {
		font-family: inherit;
		font-size: 2.2rem;
		font-weight: 500;
		text-transform: none;
		line-height: 1.59;
		position: relative;

		@media only screen and (max-width: 992px) {
			font-size: 1.8rem;	
		}
	}

	.next {
		position: relative;
		// background: $white;

		.show__case {
			max-width: 30rem;
			height: 8rem;
			line-height: 8rem;
			font-size: 1.6rem;
			letter-spacing: 0.08rem;

			@media only screen and (max-width: 992px) {
				max-width: 100%;	
			}
		}

		&__content {
			padding-top: 11rem;
			position: relative;
			z-index: 1;

			&_inner {
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-bottom: 11.5rem;

				&_left {
					width: 66.6666666%;
					max-width: 56rem;
				}

				&_right {
					width: 33.3333333%;

					.btn {
						width: 101.2%;
						margin-left: -0.6%;
					}
				}
			}
		}

		.section__title {
			margin-bottom: 7.8rem;
		}

		.section__subtitle {
			margin-bottom: 2.5rem;
		}

		.telegram__link {
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 1.8rem;
			font-weight: 600;
			margin-bottom: 8.4rem;
			margin-top: 5rem;

			img {
				margin-right: 3rem;
			}
		}


		&__preview {
			display: flex;
			min-height: 100vh;

			@media only screen and (max-width: 992px) {
				min-height: 1px;
				flex-direction: column;	
			}

			&__image {
				width: 60.4%;
				position: relative;
				overflow: hidden;
				box-shadow: none;

				@media only screen and (max-width: 992px) {
					width: 100%;
					// order: 1;
					padding: 4rem 3.5rem 0;
					background: $cases-gray-light;
				}

				@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
					padding: 3rem 3rem 0;	
				}

				&_inner {
					position: absolute;
					left: 0;
					top: 0;
					right: 0;
					bottom: 0;
					background-size: cover;
					background-repeat: no-repeat;
					background-position: center center;

					@media only screen and (max-width: 992px) {
						position: relative;
						padding-top: 80%;
						// margin-bottom: 5rem;
					}
				}
			}

			&__content {
				display: flex;
				align-items: center;
				justify-content: center;
				position: relative;
				flex: 1;
				z-index: 1;
				background: #f4fafa;

				&_inner {
					width: 100%;
					max-width: 52rem;
					left: -1rem;

					@media only screen and (max-width: 1600px) {
						max-width: 48rem;	
					}

					@media only screen and (max-width: 1499px) {
						max-width: 42rem;	
					}

					@media only screen and (max-width: 1299px) {
						max-width: 38rem;	
					}

					@media only screen and (max-width: 1199px) {
						left: 0;
						padding-left: 1.5rem;
						padding-right: 1.5rem;
					}

					@media only screen and (max-width: 992px) {
						max-width: 100%;
						padding: 4rem 4rem 3rem;
						left: 0;	
					}

					@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
						padding: 3rem 3rem 3rem;	
					}
				}

				.project__name_title {
					margin-bottom: 1.5rem;
				}

				.project__name {
					font-weight: 600;
					margin-bottom: 4.4rem;
					line-height: 1.16;

					@media only screen and (max-width: 1499px) {
						letter-spacing: 0;	
					}

					@media only screen and (max-width: 992px) {
						margin-bottom: 2.5rem;	
					}
				}

				.divider {
					width: 100%;
					height: 1px;
					background: #000;
					margin-bottom: 3.8rem;

					@media only screen and (max-width: 992px) {
						margin-bottom: 2.5rem;	
					}
				}

				.project__description {
					font-size: 1.4rem;
					margin-bottom: 4rem;

					@media only screen and (max-width: 992px) {
						margin-bottom: 2.5rem;	
					}
				}

				.project__link {
					font-weight: 500;
					color: $blue-light;
					display: flex;
					align-items: center;
					margin-bottom: 3.8rem;
					display: none;

					@media only screen and (max-width: 992px) {
						margin-bottom: 0;	
					}

					&_icon {
						max-width: 1.3rem;
						min-width: 1.3rem;
						margin-right: 2rem;
						position: relative;
						top: 0.1rem;

						@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
							margin-right: 1.2rem;	
						}
					}
				}
			}
		}
	}

</style>