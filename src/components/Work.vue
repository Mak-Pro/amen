<template>
	
	<div 
		class="works__item" 
		:class="{
		light: color == 'light', 
		dark: color == 'dark',
		'ankr-old': routeUrl == 'ankr-old',
		'ankr-new': routeUrl == 'ankr-new',
		'phantasma': routeUrl == 'phantasma',
		'nos': routeUrl == 'nos',
		'deepcloud': routeUrl == 'deepcloud',
		'alita': routeUrl == 'alita',
		}">
		<router-link :to="{name: routeUrl}" exact class="works__item_link" active-class="" exact-active-class=""></router-link>
		<div class="works__item_inner">
			<div class="works__item_bg" :style="[webp ? { backgroundImage: 'url(' + require(`@/assets/img/work-${id}.webp`) + ')' } : { backgroundImage: 'url(' + require(`@/assets/img/work-${id}.jpg`) + ')' }]"></div>
			<div class="works__item_video">
				<video class="video" loop muted v-if="videoUrl != ''">
					<source :src="require(`@/assets/img/${videoUrl}.mp4`)" type="video/mp4">
					<source :src="require(`@/assets/img/${videoUrl}.webm`)" type="video/webm">
				</video>
			</div>
			<div class="works__item_content">
				<div class="icon">
					<img :src="require(`@/assets/img/work-icon-${id}.svg`)" alt="icon">
				</div>
				<h5 class="title">Project name:</h5>
				<h2 class="name">{{name}}</h2>
			</div>
		</div>
	</div>

</template>

<script>


import { pageTransitionDuration } from '../App.vue';

let workAnimationTrigger = true;

export default {

  data () {
    return {
			webp: document.querySelector('html.webp') !== null ? true : false
    }
  },

  props: {
		id: Number,
		name: String,
		color: String,
		routeUrl: String,
		videoUrl: String
	},

	mounted() {

		if(workAnimationTrigger == true) {
			setTimeout(() => {
				this.$el.classList.add('show');
				workAnimationTrigger = false;
			}, pageTransitionDuration);
		}
		else {
			this.$el.classList.add('finished');
		}
	}
}
</script>

<style lang="scss">

@import '../variables.scss';

	.works__item {
			position: relative;
			width: 50%;
			-webkit-transition: all 0.7s cubic-bezier(.29,.01,.39,1) 0s;
			-moz-transition: all 0.7s cubic-bezier(.29,.01,.39,1) 0s;
			transition: all 0.7s cubic-bezier(.29,.01,.39,1) 0s;
			overflow: hidden;

			.works__item_video {

				@media only screen and (max-width: 1199px) {
					display: none !important;	
				}
			}


			&.small {

				.works__item_video {

					video {
						max-width: 130%;
					}
				}
			}


			&.ankr-old {

				.works__item_video {


					video {
						top: 0px;
						max-width: 170%;
						transform: translate(-50%, 0);
						width: 86vw;
						max-width: 2000%;

						@media only screen and (max-width: 1600px) {
							width: 87vw;	
						}

						@media only screen and (max-width: 1499px) {
							width: 104vw;	
						}

						@media only screen and (max-width: 1299px) {
							width: 101vw;	
						}

						@media only screen and (max-width: 992px) {
							width: 152vw;	
						}

						@media only screen and (max-width: 599px) {
							width: 300vw;	
						}
					}
				}
			}


			&.ankr-new {

				.works__item_video {


					video {
						max-width: 110%;
						min-height: 100%;

						@media only screen and (max-width: 1600px) {
							
						}

						@media only screen and (max-width: 1499px) {
							max-width: 130%;
						}

						@media only screen and (max-width: 1299px) {
								
						}

						@media only screen and (max-width: 992px) {
								
						}

						@media only screen and (max-width: 599px) {
							max-width: 160%;	
						}

						@media only screen and (max-width: 599px) {
							max-width: 180%;	
						}
					}
				}

				.icon {

					img {
						max-width: 5rem;
					}
				}
			}


			&.phantasma {

				.works__item_video {


					video {

						@media only screen and (max-width: 1600px) {
							
						}

						@media only screen and (max-width: 1499px) {
							max-width: 120%;	
						}

						@media only screen and (max-width: 1299px) {
							
						}

						@media only screen and (max-width: 992px) {
							
						}

						@media only screen and (max-width: 599px) {
							
						}
					}
				}

				&.small {

					.works__item_video {

						video {

							@media only screen and (max-width: 1600px) {

							}

							@media only screen and (max-width: 1499px) {
								max-width: 150%;	
							}

							@media only screen and (max-width: 1299px) {

							}

							@media only screen and (max-width: 992px) {

							}

							@media only screen and (max-width: 599px) {

							}
						}
					}
				}
			}



			&.deepcloud {

				.works__item_video {


					video {

						@media only screen and (max-width: 1600px) {
							
						}

						@media only screen and (max-width: 1499px) {
							max-width: 125%;	
						}

						@media only screen and (max-width: 1299px) {
							
						}

						@media only screen and (max-width: 992px) {
							
						}

						@media only screen and (max-width: 599px) {
							
						}
					}
				}

				&.small {

					.works__item_video {

						video {

							@media only screen and (max-width: 1600px) {

							}

							@media only screen and (max-width: 1499px) {
								max-width: 160%;	
							}

							@media only screen and (max-width: 1299px) {

							}

							@media only screen and (max-width: 992px) {

							}

							@media only screen and (max-width: 599px) {

							}
						}
					}
				}
			}




			&_link {
				display: block;
				position: absolute;
				left: 0;
				top: 0;
				right: 0;
				bottom: 0;
				z-index: 2;
			}

			&_inner {
				position: relative;
				display: flex;
				align-items: center;
				justify-content: center;
				height: 23.7vw;
				z-index: 0;

				@media only screen and (max-width: 1499px) {
					height: 27.7vw;	
				}

				@media only screen and (max-width: 992px) {
					height: auto;
					padding: 7rem 0;	
				}
			}

			&_bg {
				position: absolute;
				left: -2px;
				top: -2px;
				right: -2px;
				bottom: -2px;
				background-size: cover;
				background-repeat: no-repeat;
				background-position: center center;
				z-index: 0;
				opacity: 0;
				-webkit-transition: all 0.5s ease 0s;
				-moz-transition: all 0.5s ease 0s;
				transition: all 0.5s ease 0s;
			}

			&_video {
				position: absolute;
				left: 0;
				top: 0;
				right: 0;
				bottom: 0;
				opacity: 0;
				-webkit-transition: all 0.5s ease 0s;
				-moz-transition: all 0.5s ease 0s;
				transition: all 0.5s ease 0s;

				video {
					max-width: 100%;
					position: absolute;
					left: 50%;
					top: 50%;
					transform: translate(-50%, -50%);
					-webkit-transition: max-width 0.5s ease 0s;
					-moz-transition: max-width 0.5s ease 0s;
					transition: max-width 0.5s ease 0s;
				}
			}

			&_content {
				width: 100%;
				position: absolute;
				left: 50%;
				top: 50%;
				transform: translate(-50%, -50%);
				z-index: 1;
				text-align: center;
				padding: 0 1.5rem;
				margin-top: -1.2rem;

				.icon {
					text-align: center;
					line-height: 0;
					margin-bottom: 3.6rem;
					position: relative;
					top: 2rem;
					opacity: 0;
					-webkit-transition: all 0.5s ease 0.2s;
					-moz-transition: all 0.5s ease 0.2s;
					transition: all 0.5s ease 0.2s;

					img {
						display: inline-block;
					}

					@media only screen and (min-width: 2600px) {
						margin-bottom: 5.6rem;	
					}

					@media only screen and (max-width: 1199px) {
						margin-bottom: 2.6rem;	
					}
				}

				.title {
					font-weight: 600;
					font-size: 1.8rem;
					line-height: 1.3;
					margin-bottom: 2.2rem;
					position: relative;
					top: 2rem;
					opacity: 0;
					-webkit-transition: all 0.5s ease 0.3s;
					-moz-transition: all 0.5s ease 0.3s;
					transition: all 0.5s ease 0.3s;

					@media only screen and (min-width: 2600px) {
						margin-bottom: 4.2rem;	
					}
				}

				.name {
					line-height: 1.2;
					position: relative;
					top: 2rem;
					opacity: 0;
					-webkit-transition: all 0.5s ease 0.4s;
					-moz-transition: all 0.5s ease 0.4s;
					transition: all 0.5s ease 0.4s;
				}

				@media only screen and (min-width: 1921px) {
					margin-top: -3.8rem;	
				}

				@media only screen and (min-width: 2600px) {
					margin-top: -6.8rem;	
				}

				@media only screen and (max-width: 1600px) {
					margin-top: -0.3rem;	
				}

				@media only screen and (max-width: 1199px) {
					margin-top: 0.5rem;	
				}

				@media only screen and (max-width: 992px) {
					margin-top: 0;
					position: relative;
					left: 0;
					top: 0;
					transform: translate(0, 0);	
				}
			}

			&:hover {
				width: 60.5%;
			}

			&.small {
				width: 39.5%;

				@media only screen and (max-width: 992px) {
					width: 100%;	
				}
			}

			&.show,
			&.finished {

				.works__item_bg {
					opacity: 1;
				}

				.works__item_video {
					opacity: 1;
				}

				.icon {
					top: 0;
					opacity: 1;
				}

				.title {
					top: 0;
					opacity: 1;
				}

				.name {
					top: 0;
					opacity: 1;
				}
			}

			&.light {

				.works__item_content {
					color: $white;
				}
			}

			&.dark {

				.works__item_content {
					color: $black;
				}
			}

			@media only screen and (max-width: 992px) {
				width: 100%;

				&:hover {
					width: 100%;
				}	
			}
		}

</style>