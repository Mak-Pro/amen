<template>
	
	<section class="other" :class="className">
		<app-lines></app-lines>
		

		<!-- Ank old -->
		<div class="other__content" v-if="className == 'ankr-old'">
			<div class="intro pin-wrapper">
				<div class="container">
					<div class="row">
						<div class="col-sm-12">
							<div class="inner">
								<h2 class="section__title" data-delay="0">Other</h2>
								<p class="text" data-delay="0.1">{{introText}}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="portfolio pin-scene">
				<div class="inner pin-scene-inner">
					<div class="media" :style="{ backgroundImage: 'url(' + require(`@/assets/img/${portfolioImage}`) + ')' }"></div>
				</div>
			</div>
			<div class="roadmap pin-wrapper">
				<div class="container">
					<div class="row">
						<div class="col-sm-12">
							<div class="inner">
								<h4 class="title" data-delay="0">Roadmap Section</h4>
								<p class="text" data-delay="0.1">{{roadmapText}}</p>
							</div>
						</div>
					</div>
				</div>
				<div class="media pin-scene" :class="darkClass">

					<video class="" loop muted autoplay="autoplay">
						<source :src="require(`@/assets/img/ANKR-old-road-map.mp4`)" type="video/mp4">
					</video>

					<div class="inner dark pin-scene-inner">
						<div class="content" :style="{ backgroundImage: 'url(' + require(`@/assets/img/${roadmapImage}`) + ')' }"></div>
					</div>
				</div>
			</div>
			<div class="team pin-wrapper">
				<div class="container">
					<div class="row">
						<div class="col-sm-12">
							<div class="text-inner">
								<h4 class="title" data-delay="0">{{teamTitleText}}</h4>
								<p class="text" data-delay="0.1">{{teamText}}</p>
								<p data-delay="0.2" v-if="teamTextTwo">{{teamTextTwo}}</p>
							</div>
							<div class="media pin-scene">
								<div class="inner pin-scene-inner">

									<video class="" loop muted autoplay="autoplay">
										<source :src="require(`@/assets/img/ankr-old-team.mp4`)" type="video/mp4">
									</video>

									<div class="content" :style="{ backgroundImage: 'url(' + require(`@/assets/img/${teamImage}`) + ')' }"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="map pin-wrapper">
				<div class="container">
					<div class="row">
						<div class="col-sm-12">
							<div class="text-inner">
								<h4 class="title" data-delay="0">{{mapTitleText}}</h4>
								<p class="text" data-delay="0.1">{{mapText}}</p>
							</div>
							<div class="media pin-scene">
								<div class="inner pin-scene-inner">
									<div class="content" :style="{ backgroundImage: 'url(' + require(`@/assets/img/${mapImage}`) + ')' }"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>


		<!-- Phantasma -->
		<div class="other__content" v-if="className == 'phantasma'">
			<div class="roadmap pin-wrapper">
				<div class="container">
					<div class="row">
						<div class="col-sm-12">
							<div class="text-inner">
								<h2 class="section__title" data-delay="0">Other</h2>
								<h4 class="title" data-delay="0.1">{{roadmapTitleText}}</h4>
								<p data-delay="0.2">{{roadmapText}}</p>
								<p data-delay="0.3" v-if="roadmapTextTwo">{{roadmapTextTwo}}</p>
							</div>
						</div>
					</div>
				</div>
				<div class="media pin-scene">
					<div class="inner pin-scene-inner">
						
						<video class="" loop muted autoplay="autoplay">
							<source :src="require(`@/assets/img/phantasma-roadmap.mp4`)" type="video/mp4">
						</video>

						<div class="content" :style="{ backgroundImage: 'url(' + require(`@/assets/img/${roadmapImage}`) + ')' }"></div>
					</div>
				</div>
			</div>
			<div class="team pin-wrapper">
				<div class="container">
					<div class="row">
						<div class="col-sm-12">
							<div class="text-inner">
								<h4 class="title" data-delay="0">{{teamTitleText}}</h4>
								<p data-delay="0.1">{{teamText}}</p>
							</div>
							<div class="media pin-scene">
								<div class="inner pin-scene-inner">
									<video class="" loop muted autoplay="autoplay">
										<source :src="require(`@/assets/img/phantasma-team.mp4`)" type="video/mp4">
									</video>

									<div class="content" :style="{ backgroundImage: 'url(' + require(`@/assets/img/${teamImage}`) + ')' }"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>


		<!-- ankr-new -->
		<div class="other__content" v-if="className == 'ankr-new'">
			<div class="roadmap pin-wrapper">
				<div class="container">
					<div class="row">
						<div class="col-sm-12">
							<div class="text-inner">
								<h2 class="section__title" data-delay="0">Other</h2>
								<h4 class="title" data-delay="0">Roadmap Section</h4>
								<p data-delay="0.1">{{roadmapText}}</p>
							</div>
						</div>
					</div>
				</div>
				<div class="media pin-scene">
					
					<video class="" loop muted autoplay="autoplay">
						<source :src="require(`@/assets/img/ANKR-road-map.mp4`)" type="video/mp4">
					</video>

					<div class="inner pin-scene-inner" :class="darkClass">
						<div class="content" :style="{ backgroundImage: 'url(' + require(`@/assets/img/${roadmapImage}`) + ')' }"></div>
					</div>
				</div>
			</div>
			<div class="icons pin-wrapper">
				<div class="container">
					<div class="row">
						<div class="col-sm-12">
							<div class="text-inner">
								<h4 class="title" data-delay="0">Custom icons</h4>
								<p data-delay="0.1">{{customIconsText}}</p>
							</div>
							<div class="media pin-scene">
								<div class="inner pin-scene-inner">
									<div class="content" :style="{ backgroundImage: 'url(' + require(`@/assets/img/${customIconsImage}`) + ')' }"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>


		<!-- Deepcloud -->
		<div class="other__content" v-if="className == 'deepcloud'">
			<div class="roadmap pin-wrapper">
				<div class="container">
					<div class="row">
						<div class="col-sm-12">
							<div class="text-inner">
								<h2 class="section__title" data-delay="0">Other</h2>
								<h4 class="title" data-delay="0">Roadmap Section</h4>
								<p data-delay="0.1">{{roadmapText}}</p>
							</div>
							<div class="media pin-scene">
								<div class="inner pin-scene-inner">
									<div class="content" :style="{ backgroundImage: 'url(' + require(`@/assets/img/${roadmapImage}`) + ')' }"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="portfolio-box pin-wrapper">
				<div class="container">
					<div class="row">
						<div class="col-sm-12">
							<div class="text-inner">
								<h4 class="title" data-delay="0">Portfolio Section</h4>
								<p data-delay="0.1">{{portfolioText}}</p>
							</div>
						</div>
					</div>
				</div>
				<div class="media pin-scene">

					<div class="video__wrapper">
						<video class="" loop muted autoplay="autoplay">
							<source :src="require(`@/assets/img/deepcloud-portfolio.mp4`)" type="video/mp4">
							</video>
						</div>

					<div class="inner pin-scene-inner">
						<div class="content" :style="{ backgroundImage: 'url(' + require(`@/assets/img/${portfolioImage}`) + ')' }"></div>
					</div>
				</div>
			</div>
			<div class="advantages pin-wrapper">
				<div class="container">
					<div class="row">
						<div class="col-sm-12">
							<div class="text-inner">
								<h4 class="title" data-delay="0">Advantages Section</h4>
								<p data-delay="0.1">{{advantagesTopText}} <br/> {{advantagesBottomText}}</p>
							</div>
							<div class="media pin-scene">
								<div class="inner pin-scene-inner">
									<div class="content" :style="{ backgroundImage: 'url(' + require(`@/assets/img/${advantagesImageUrl}`) + ')' }"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>


		<!-- alita -->
		<div class="other__content" v-if="className == 'alita'">
			<div class="intro pin-wrapper">
				<div class="container">
					<div class="row">
						<div class="col-sm-12">
							<div class="text-inner">
								<h2 class="section__title" data-delay="0">Other</h2>
								<h4 class="title" data-delay="0.1">{{roadmapTitleText}}</h4>
								<p data-delay="0.2">{{roadmapText}}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="allocation pin-scene">
				<div class="inner pin-scene-inner">
					<div class="video__wrapper">
						<video class="" loop muted autoplay="autoplay">
						<source :src="require(`@/assets/img/alita-token.mp4`)" type="video/mp4">
						</video>
					</div>
					
						<div class="media" :style="{ backgroundImage: 'url(' + require(`@/assets/img/${introImageUrl}`) + ')' }"></div>
					</div>
			</div>
			<div class="icons pin-wrapper">
				<div class="container">
					<div class="row">
						<div class="col-sm-12">
							<div class="text-inner">
								<h4 class="title" data-delay="0">Customized Icons</h4>
								<p data-delay="0.1">{{customIconsText}}</p>
							</div>
							<div class="media pin-scene">
								<div class="inner pin-scene-inner">
									<!-- <div class="content" :style="{ backgroundImage: 'url(' + require(`@/assets/img/${customIconsImage}`) + ')' }"></div> -->
									<ul class="icons__list">
										<li>
											<img :src="require(`@/assets/img/ai-1.svg`)" alt="">
										</li>
										<li>
											<img :src="require(`@/assets/img/ai-2.svg`)" alt="">
										</li>
										<li>
											<img :src="require(`@/assets/img/ai-3.svg`)" alt="">
										</li>
										<li>
											<img :src="require(`@/assets/img/ai-4.svg`)" alt="">
										</li>
										<li>
											<img :src="require(`@/assets/img/ai-5.svg`)" alt="">
										</li>
										<li>
											<img :src="require(`@/assets/img/ai-6.svg`)" alt="">
										</li>
									</ul>
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

import Lines from '../../components/Lines.vue';

export default {

	props: {
		className: String,
		introText: String,
		introImageUrl: String,
		portfolioText: String,
		portfolioImage: String,
		roadmapTitleText: String,
		roadmapText: String,
		roadmapTextTwo: String,
		roadmapImage: String,
		teamTitleText: String,
		teamText: String,
		teamTextTwo: String,
		teamImage: String,
		mapTitleText: String,
		mapText: String,
		mapImage: String,
		customIconsText: String,
		customIconsImage: String,
		advantagesTopText: String,
		advantagesBottomText: String,
		advantagesImageUrl: String,
		darkClass: String
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

	.section__title {
		margin-bottom: 5.6rem;

		@media only screen and (max-width: 992px) {
			margin-bottom: 2.5rem;	
		}
	}

	.title {
		font-size: 2.2rem;
		text-transform: none;
		line-height: 1.59;
		font-weight: 600;
		margin-bottom: 2.6rem;

		@media only screen and (max-width: 992px) {
			margin-bottom: 1.8rem;	
		}
	}

	.media {
		position: relative;
	}

	.portfolio {
		max-width: 148rem;
		margin: 0 auto;
		padding: 5rem;
		background: $cases-gray-light;

		@media only screen and (max-width: 1600px) {
			max-width: 126rem;	
		}

		@media only screen and (max-width: 1499px) {
			max-width: 110rem;	
		}

		@media only screen and (max-width: 1399px) {
			max-width: 106rem;	
		}

		@media only screen and (max-width: 1199px) {
			max-width: 94rem;	
		}

		@media only screen and (max-width: 992px) {
			padding: 3rem;
			margin: 0 3.5rem;	
		}

		@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
			margin: 0;
			padding: 1.5rem;	
		}

		.inner {
			position: relative;
			padding-top: 52%;
			box-shadow: $cases-box-shadow;

			.media {
				min-width: 100%;
				min-height: 100%;
				position: absolute;
				left: 50%;
				top: 50%;
				transform: translate(-50%, -50%);
				background-size: cover;
				background-repeat: no-repeat;
				background-position: center center;
			}
		}
	}

	.roadmap {

		.media {
			position: relative;

			.inner {
				position: absolute;
				left: 0;
				top: 0;
				right: 0;
				bottom: 0;

				.content {
					min-width: 100%;
					min-height: 100%;
					position: absolute;
					left: 50%;
					top: 50%;
					transform: translate(-50%, -50%);
					background-size: cover;
					background-repeat: no-repeat;
					background-position: center center;
				}
			}
		}
	}

	.icons__list {
		list-style: none;
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		justify-content: space-between;
		margin: 0;
		padding: 0;
		line-height: 0;

		@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
			margin-bottom: -4rem;	
		}

		li {
			padding: 0;
			margin: 0;

			@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
				width: 33.3333333%;
				text-align: center;
				margin-bottom: 4rem;	
			}

			&::before {
				display: none;
			}
		}
	}

	.other {
		position: relative;
		background: $white;

		.other__content {
			position: relative;
			z-index: 1;

			.inner,
			.text-inner {

				@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
					padding-left: 1.5rem !important;
					padding-right: 1.5rem !important;	
				}
			}
		}


		// Ankr old
		&.ankr-old {

			.other__content {
				padding: 13.5rem 0 14rem;

				@media only screen and (max-width: 992px) {
					padding: 4.5rem 0 5rem;	
				}
			}

			.intro {

				.inner {
					max-width: 60rem;
					margin-bottom: 9rem;
					margin-left: 33.3333333%;

					@media only screen and (max-width: 992px) {
						margin-bottom: 3.5rem;	
					}

					@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
						margin-left: 0;	
					}
				}
			}

			.portfolio {
				box-shadow: none;
			}

			.roadmap {
				padding-top: 13.5rem;

				@media only screen and (max-width: 992px) {
					padding-top: 4rem;
				}

				.container {

					.inner {
						max-width: 38rem;
						margin-bottom: 9rem;

						@media only screen and (max-width: 992px) {
							margin-bottom: 4rem;	
						}
					}
				}

				.media {
					padding-top: 24.3%;
					box-shadow: none;

					video {
						position: absolute;
						left: 50%;
						top: 50%;
						transform: translate(-50%, -50%);
						min-width: 100%;
						max-width: 100%;
						min-height: 100%;
						z-index: 2;

						@media only screen and (max-width: 1199px) {
							max-width: 110%;	
						}
					}

					@media only screen and (max-width: 1199px) {
						padding-top: 28.6%;	
					}
				}
			}

			.team {
				padding-top: 13.5rem;
				padding-bottom: 8.5rem;

				@media only screen and (max-width: 992px) {
					padding-top: 4rem;
					padding-bottom: 4rem;	
				}

				.text-inner {
					max-width: 63rem;
					margin-bottom: 9rem;
					margin-left: 33.3333333%;

					@media only screen and (max-width: 992px) {
						margin-bottom: 4rem;	
					}

					@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
						margin-left: 0;	
					}
				}

				.media {
					width: calc(66.6666666% + 10rem);
					// max-width: calc(85rem - 1px);
					margin-left: -5rem;
					-webkit-box-shadow: none;
					box-shadow: none;
					padding: 5rem;
					background: #F3F7F7;
					line-height: 0;

					@media only screen and (max-width: 992px) {
						width: calc(100% - 2px);
						padding: 3rem;
						margin-left: 1px;	
					}

					@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
						width: calc(100% + 3rem);
						padding: 1.5rem;
						margin: 0 -1.5rem;	
					}

					.inner {
						position: relative;
						// padding-top: 66.8%;
						overflow: hidden;
						box-shadow: $cases-box-shadow;

						video {
							max-width: 100%;
							position: relative;
							top: 1px;

							@media only screen and (max-width: 599px) {
								// max-width: calc(100% + 4rem);	
							}
						}

						.content {
							min-width: 100%;
							min-height: 100%;
							position: absolute;
							left: 50%;
							top: 50%;
							transform: translate(-50%, -50%);
							-webkit-background-size: cover;
							background-size: cover;
							background-repeat: no-repeat;
							background-position: center center;
							opacity: 0.1;
							display: none;
						}
					}
				}
			}

			.map {

				.text-inner {
					max-width: 44rem;
					margin-bottom: 9rem;

					@media only screen and (max-width: 992px) {
						margin-bottom: 4rem;	
					}
				}

				.media {
					max-width: 111rem;
					margin: 0 auto;
					box-shadow: none;

					.inner {
						padding-top: 49.5%;
						position: relative;

						.content {
							min-width: 100%;
							min-height: 100%;
							position: absolute;
							left: 50%;
							top: 50%;
							transform: translate(-50%, -50%);
							background-size: cover;
							background-repeat: no-repeat;
							background-position: center center;
						}
					}
				}
			}
		}





		// Ankr new
		&.ankr-new {
			background: transparent;

			.other__content {
				padding: 13.5rem 0 14rem;

				@media only screen and (max-width: 992px) {
					padding: 4.5rem 0 5rem;	
				}
			}

			.roadmap {

				.text-inner {
					max-width: 65rem;
					margin-bottom: 9rem;

					@media only screen and (max-width: 992px) {
						margin-bottom: 3.5rem;	
					}
				}

				.media {
					padding-top: 28.6%;
					box-shadow: none;

					video {
						position: absolute;
						left: 50%;
						top: 50%;
						transform: translate(-50%, -50%);
						min-width: 100%;
						min-height: 100%;
						z-index: 2;

						@media only screen and (min-width: 1921px) {
							max-height: 106%;
						}

						@media only screen and (max-width: 1600px) {
							max-height: 106%;
						}

						@media only screen and (max-width: 1199px) {
							max-height: 110%;
						}
					}
				}
			}

			.icons {
				padding-top: 13.5rem;

				@media only screen and (max-width: 992px) {
					padding-top: 4rem;	
				}

				.text-inner {
					max-width: 56rem;
					margin-bottom: 9rem;
					margin-left: 33.3333333%;

					@media only screen and (max-width: 992px) {
						margin-bottom: 3.5rem;	
					}

					@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
						margin-left: 0;	
					}
				}

				.media {
					padding-top: 16%;
					box-shadow: none;

					.inner {
						position: absolute;
						left: 0;
						top: 0;
						right: 0;
						bottom: 0;

						.content {
							min-width: 100%;
							min-height: 100%;
							position: absolute;
							left: 50%;
							top: 50%;
							transform: translate(-50%, -50%);
							-webkit-background-size: cover;
							background-size: cover;
							background-repeat: no-repeat;
							background-position: center center;
						}
					}
				}
			}
		}
		



		// Phantasma
		&.phantasma {

			.other__content {
				padding: 13.5rem 0 5rem;

				@media only screen and (max-width: 992px) {
					padding: 4.5rem 0 5rem;	
				}
			}

			.roadmap {
				margin-bottom: 10rem;

				@media only screen and (max-width: 992px) {
					margin-bottom: 3.5rem;	
				}

				.text-inner {
					max-width: 74rem;
					margin-bottom: 9rem;

					@media only screen and (max-width: 992px) {
						margin-bottom: 3.5rem;	
					}
				}

				.media {
					max-width: 130rem;
					padding: 5rem;
					background: #F3F7F7;
					margin: 0 auto;
					box-shadow: none;
					line-height: 0;

					@media only screen and (max-width: 1499px) {
						max-width: calc(108rem - 2px);	
					}

					@media only screen and (max-width: 1399px) {
						max-width: calc(104rem - 2px);	
					}

					@media only screen and (max-width: 1299px) {
						max-width: calc(94rem - 2px);	
					}

					@media only screen and (max-width: 992px) {
						max-width: calc(100% - 2px);
						margin: 0 4rem;
						padding: 3rem;
					}

					@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
						margin: 0;
						padding: 1.5rem;	
					}

					.inner {
						position: relative;
						box-shadow: $cases-box-shadow;

						.content {
							opacity: 0.1;
							display: none;
						}

						video {
							max-width: 100%;

							@media only screen and (max-width: 1299px) {
								
							}

							@media only screen and (max-width: 992px) {
								
							}

							@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
								
							}


							@media only screen and (max-width: 599px) {
								
							}
						}
					}
				}
			}

			.team {
				margin-bottom: 8.5rem;

				@media only screen and (max-width: 992px) {
					margin-bottom: 0;	
				}

				.text-inner {
					max-width: 69rem;
					margin-bottom: 9rem;
					margin-left: 33.3333333%;

					@media only screen and (max-width: 992px) {
						margin-bottom: 0rem;	
					}

					@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
						margin-left: 0;	
					}
				}

				.media {
					width: calc(66.6666666% + 10rem);
					// max-width: calc(85rem - 1px);
					margin-left: -5rem;
					box-shadow: none;
					padding: 5rem;
					background: #F3F7F7;
					line-height: 0;

					@media only screen and (max-width: 992px) {
						width: calc(100% - 2px);
						margin-left: 1px;
						padding: 3rem;	
					}

					@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
						margin: 0 -1.5rem;
						padding: 1.5rem;
						width: calc(100% + 3rem);	
					}

					.inner {
						position: relative;
						box-shadow: $cases-box-shadow;

						video {
							max-width: 100%;

							@media only screen and (max-width: 599px) {
								
							}
						}

						.content {
							min-width: 100%;
							min-height: 100%;
							position: absolute;
							left: 50%;
							top: 50%;
							transform: translate(-50%, -50%);
							-webkit-background-size: cover;
							background-size: cover;
							background-repeat: no-repeat;
							background-position: center center;
							opacity: 0.1;
							display: none;
						}
					}
				}
			}
		}





		// Deepcloud
		&.deepcloud {

			.other__content {
				padding: 3.5rem 0 14rem;

				@media only screen and (max-width: 992px) {
					padding-top: 0;
					margin-top: -2rem;
					padding-bottom: 6rem;	
				}
			}

			.roadmap {
				margin-bottom: 13.5rem;

				@media only screen and (max-width: 992px) {
					margin-bottom: 4.5rem;	
				}

				.text-inner {
					max-width: 64rem;
					margin-bottom: 9rem;
					margin-left: 33.3333333%;

					@media only screen and (max-width: 992px) {
						margin-bottom: 4rem;	
					}

					@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
						margin-left: 0;	
					}
				}

				.media {
					margin-left: -9.2rem;
					padding-top: 38.7%;
					box-shadow: none;

					@media only screen and (max-width: 1399px) {
						margin-left: -5.2rem;	
					}

					@media only screen and (max-width: 599px) {
						margin-left: 0;	
					}

					.inner {

						.content {
							background-size: contain;
							min-width: 1px;
							width: 200%;
							max-width: 1222px;
							min-height: 1px;
							height: 100%;
							max-height: 45rem;

							@media only screen and (max-width: 1499px) {
								max-width: 1050px;	
							}

							@media only screen and (max-width: 1299px) {
								max-width: 958px;	
							}

							@media only screen and (max-width: 992px) {
								max-width: 690px;	
							}

							@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
								max-width: 590px;	
							}

							@media only screen and (max-width: 599px) {
								max-width: 100%;	
							}
						}
					}
				}
			}

			.portfolio-box {
				margin-bottom: 13.5rem;

				@media only screen and (max-width: 992px) {
					margin-bottom: 4.5rem;	
				}

				.text-inner {
					max-width: 56rem;
					margin-bottom: 9rem;

					@media only screen and (max-width: 992px) {
						margin-bottom: 4rem;	
					}
				}

				.media {
					box-shadow: none;
					max-width: 148rem;
					margin: 0 auto;
					padding: 5rem;
					background: $cases-gray-light;
					line-height: 0;

					@media only screen and (max-width: 1600px) {
						max-width: 126rem;	
					}

					@media only screen and (max-width: 1499px) {
						max-width: 110rem;	
					}

					@media only screen and (max-width: 1399px) {
						max-width: 106rem;	
					}

					@media only screen and (max-width: 1199px) {
						max-width: 94rem;	
					}

					@media only screen and (max-width: 992px) {
						padding: 3rem;
						margin: 0 3.5rem;	
					}

					@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
						padding: 1.5rem;
						margin: 0;	
					}

					.video__wrapper {
						overflow: hidden;
						box-shadow: $cases-box-shadow;
					}

					video {
						max-width: calc(100% + 2px);
						min-width: calc(100% + 2px);
						margin-left: -1px;
					}

					.inner {
						padding-top: 51.5%;
						position: relative;
						box-shadow: $cases-box-shadow;
						display: none;

						.content {
							min-width: 100%;
							min-height: 100%;
							position: absolute;
							left: 50%;
							top: 50%;
							transform: translate(-50%, -50%);
							background-size: cover;
							background-repeat: no-repeat;
							background-position: center center;
						}
					}
				}
			}

			.advantages {

				.text-inner {
					max-width: 64rem;
					margin-bottom: 9rem;
					margin-left: 33.333333333%;

					@media only screen and (max-width: 992px) {
						margin-bottom: 4rem;	
					}

					@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
						margin-left: 0;	
					}
				}

				.media {
					max-width: 148rem;
					margin: 0 auto;
					box-shadow: none;

					.inner {
						padding-top: 35.6%;
						position: relative;
						margin-left: -0.9rem;
						margin-right: -0.5rem;

						.content {
							min-width: 100%;
							min-height: 100%;
							position: absolute;
							left: 50%;
							top: 50%;
							transform: translate(-50%, -50%);
							-webkit-background-size: cover;
							background-size: cover;
							background-repeat: no-repeat;
							background-position: center center;
						}
					}
				}
			}
		}




		// Alita
		&.alita {
			background: $cases-gray-light;
			// background: transparent;
			z-index: 2;

			.lines-wrapper {
				display: none;
			}

			.other__content {
				padding: 12.7rem 0 10rem;
				overflow: hidden;

				@media only screen and (max-width: 992px) {
					padding-top: 5rem;	
				}

				@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
					padding-bottom: 5rem;	
				}

				.text-inner {
					max-width: 48rem;
				}
			}

			.intro {
				margin-bottom: 8.2rem;
				position: relative;
				z-index: 1;

				@media only screen and (max-width: 992px) {
					margin-bottom: 4rem;	
				}

				@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
					margin-bottom: 2rem;	
				}
			}

			.allocation {
				box-shadow: none;
				overflow: visible !important;
				clip-path: none !important;

				.inner {
					position: relative;
					overflow: hidden;
					max-width: 148rem;
					margin: 0 auto;
					padding: 5rem;
					background: #EAF3F2;
					line-height: 0;

					@media only screen and (max-width: 1600px) {
						max-width: 126rem;	
					}

					@media only screen and (max-width: 1499px) {
						max-width: 110rem;	
					}

					@media only screen and (max-width: 1399px) {
						max-width: 106rem;	
					}

					@media only screen and (max-width: 1199px) {
						max-width: 94rem;	
					}

					@media only screen and (max-width: 992px) {
						max-width: 100%;
						margin: 0 3.5rem;
						padding: 3rem;
					}

					@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
						margin: 0;
						padding: 1.5rem;	
					}

					.video__wrapper {
						overflow: hidden;
						box-shadow: $cases-box-shadow;
					}

					video {
						max-width: calc(100% + 2px);
						min-width: calc(100% + 2px);
						margin-left: -1px;

						@media only screen and (max-width: 1199px) {
							
						}

						@media only screen and (max-width: 992px) {
							
						}

						@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
								
						}

						@media only screen and (max-width: 599px) {
								
						}
					}

					.media {
						min-width: 100%;
						min-height: 100%;
						position: absolute;
						left: 50%;
						top: 50%;
						transform: translate(-50%, -50%);
						background-size: cover;
						background-repeat: no-repeat;
						background-position: center center;
						opacity: 0.1;
						display: none;
					}
				}
			}

			.icons {
				padding-top: 13rem;
				overflow: hidden;

				@media only screen and (max-width: 992px) {
					padding-top: 2.5rem;	
				}

				.text-inner {
					max-width: 56rem;
					margin-bottom: 9rem;
					margin-left: 33.3333333%;

					@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
						margin-bottom: 4rem;
						margin-left: 0;	
					}
				}

				.media {
					box-shadow: none;
					overflow: visible !important;
					clip-path: none !important;

					.inner {
						position: relative;
						overflow: visible !important;

						.content {
							min-width: 100%;
							min-height: 100%;
							position: absolute;
							left: 50%;
							top: 50%;
							transform: translate(-50%, -50%);
							-webkit-background-size: cover;
							background-size: cover;
							background-repeat: no-repeat;
							background-position: center center;
						}
					}
				}
			}
		}
	}

</style>