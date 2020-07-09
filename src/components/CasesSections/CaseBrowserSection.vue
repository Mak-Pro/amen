<template>

	<section class="browser">
		<app-lines></app-lines>
		<div class="browser__content pin-wrapper">
			<div class="container">
				<div class="row">
					<div class="col-sm-12">
						<div class="browser__content_inner">
							<h2 class="section__title" data-delay="0">{{titleText}}</h2>
							<p data-delay="0.1">{{text}}</p>
						</div>
					</div>
				</div>
			</div>
			<div class="browser__scene">
				<div class="browser__scene_inner">
					<div class="browser__scene_item pin-scene">
						<div class="browser__scene_item_inner pin-scene-inner" :style="{ backgroundImage: 'url(' + require(`@/assets/img/${imageUrl}`) + ')' }"></div>
					</div>
				</div>
				<span class="overlay" :style="{ backgroundImage: 'url(' + require(`@/assets/img/${overlayUrl}`) + ')' }"></span>
			</div>
		</div>
	</section>

</template>

<script>

import Lines from '../../components/Lines.vue';

export default {

	props: {
		titleText: String,
		text: String,
		imageUrl: String,
		overlayUrl: String,
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
			margin-bottom: 3rem;	
		}
	}
	
	.browser {
		position: relative;
		// background: $white;
		overflow: hidden;

		&__content {
			padding: 13rem 0 0;

			@media only screen and (max-width: 992px) {
				padding-top: 5rem;	
			}

			&_inner {
				margin-left: 33.3333%;
				max-width: 64rem;
				margin-bottom: 9rem;

				@media only screen and (max-width: 992px) {
					margin-bottom: 4rem;	
				}

				@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
					margin-left: 0;
					padding-left: 1.5rem;
					padding-right: 1.5rem;	
				}
			}

			&.animated {

				.browser__scene {

					.overlay {
						opacity: 1;
						transition-delay: 1.8s;
					}
				}
			}
		}

		&__scene {
			width: 100%;
			max-width: 154rem;
			padding: 0 3rem;
			margin: 0 auto;
			position: relative;

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
				max-width: 100%;
				padding: 0 4.2rem;	
			}

			@media only screen and (max-width: 992px) {
				padding: 0 3.5rem;	
			}

			@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
				padding: 0;	
			}

			.overlay {
				display: block;
				width: 48.8%;
				height: 59.3%;
				position: absolute;
				left: 67.75%;
				top: -24.1%;
				background-size: contain;
				background-repeat: no-repeat;
				background-position: center;
				z-index: 0;
				opacity: 0;
				-webkit-transition: all 0.5s ease 0s;
				-moz-transition: all 0.5s ease 0s;
				transition: all 0.5s ease 0s;

				@media only screen and (max-width: 1499px) {
					left: 67.3%;	
				}

				@media only screen and (max-width: 1399px) {
					left: 67.6%;
					width: 47.8%;	
				}

				@media only screen and (max-width: 1199px) {
					left: 66.9%;
					width: 46.8%;	
				}

				@media only screen and (max-width: 992px) {
					width: 45.6%;	
				}

				@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
					top: -24%;
					width: 47.6%;
					left: 69.1%;
				}
			}

			&_inner {
				position: relative;
				background-color: $cases-gray-light;
				overflow: hidden;
				z-index: 1;
			}

			&_item {
				box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
				position: relative;
				z-index: 1;

				&_inner {
					box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
					background-size: cover;
					background-repeat: no-repeat;
					background-position: center center;
					padding-top: 69.7%;
				}
			}
		}
	}

</style>