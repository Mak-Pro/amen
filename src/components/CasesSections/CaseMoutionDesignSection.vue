<template>
	
	<section class="moution__design" :class="className">
		<app-lines></app-lines>
		<div class="moution__design_content pin-wrapper">
			<div class="container">
				<div class="row">
					<div class="col-sm-12">
						<div class="moution__design_content_inner">
							<h2 class="section__title" data-delay="0">Motion Design</h2>
							<p data-delay="0.1">{{text}}</p>
							<p data-delay="0.2" class="strong">{{ textStrong }}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="video__box pin-scene" :class="darkClass">
			<div class="video__box_inner pin-scene-inner">
				<video class="video" autoplay="autoplay" loop muted>
					<source :src="require(`@/assets/img/${videoUrl}.mp4`)" type="video/mp4">
					<source :src="require(`@/assets/img/${videoUrl}.webm`)" type="video/webm">
				</video>
			</div>
		</div>
	</section>

</template>

<script>

import Lines from '../../components/Lines.vue';

export default {

	props: {
		className: String,
		text: String,
		textStrong: String,
		videoUrl: String,
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

	.moution__design {
		position: relative;

		&_content {
			padding-top: 13.2rem;
			position: relative;
			z-index: 1;

			@media only screen and (max-width: 992px) {
				padding-top: 5.2rem;	
			}

			&_inner {
				margin-left: 33.333333%;
				margin-bottom: 8.8rem;
				padding-right: 6rem;

				@media only screen and (max-width: 992px) {
					margin-bottom: 4.5rem;
					padding-right: 2rem;	
				}

				@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
					margin-left: 0;
					padding-left: 1.5rem !important;
					padding-right: 1.5rem !important;	
				}
			}
		}

		.section__title {
			margin-bottom: 5.5rem;

			@media only screen and (max-width: 992px) {
				margin-bottom: 3rem;	
			}
		}

		.video__box {
			position: relative;
			z-index: 1;

			&_inner {
				position: relative;
				overflow: hidden !important;

				.video {
					min-width: 100%;
					min-height: 100%;
					position: absolute;
					left: 50%;
					top: 0;
					transform: translate(-50%, 0);
				}
			}
		}

		&.ankr-old {
			background: $cases-bg;

			.moution__design_content_inner {
				padding-right: 0;
				max-width: 64rem;
			}

			.video__box_inner {
				padding-top: 47.9%;

				@media only screen and (max-width: 599px) {
					padding-top: 88%;	
				}
			}
		}

		&.ankr-new {

			.video__box_inner {
				padding-top: 47.9%;

				@media only screen and (max-width: 599px) {
					padding-top: 88%;	
				}
			}
		}

		&.deepcloud {
			background: $white;

			.moution__design_content_inner {
				padding-right: 0;
				max-width: 69rem;

				@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
					padding-right: 0;
				}
			}

			.video__box {
				box-shadow: none;
			}

			.video__box_inner {
				padding-top: 30.7%;

				@media only screen and (max-width: 599px) {
					padding-top: 88%;	
				}

				.video {
					top: 50%;
					transform: translate(-50%, -50%);

					@media only screen and (max-width: 1199px) {
						max-height: 180%;	
					}
				}
			}
		}
	}

</style>