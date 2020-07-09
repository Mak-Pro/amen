<template>
	
	<section class="project__overview" :class="className">
		<app-lines></app-lines>
		<div class="project__overview_content pin-wrapper">
			<div class="container">
				<div class="row">
					<div class="col-sm-12">
						<div class="project__overview_content_inner">
							<h2 class="section__title" data-delay="0">Project Overview</h2>
							<p data-delay="0.1">{{text}}</p>
							<p data-delay="0.1" v-if="listStaff"><strong>{{listStaff}}</strong></p>
							<ul v-if="listItemFirst" data-delay="0.2">
								<li v-if="listItemFirst">{{ listItemFirst }}</li>
								<li v-if="listItemSecond">{{ listItemSecond }}</li>
								<li v-if="listItemThird">{{ listItemThird }}</li>
								<li v-if="listItemFourth">{{ listItemFourth }}</li>
								<li v-if="listItemFifth">{{ listItemFifth }}</li>
							</ul>
							<p data-delay="0.2" v-if="textTwo">{{ textTwo }}</p>
							<p data-delay="0.3" class="strong">{{ textStrong }}</p>
						</div>
					</div>
				</div>
			</div>

			<div class="project__overview_scene">
				<div class="project__overview_scene_inner">
					<div class="project__overview_scene_item pin-scene">
						<div class="project__overview_scene_item_inner pin-scene-inner" :style="{ backgroundImage: 'url(' + require(`@/assets/img/${imageFirstUrl}`) + ')' }"></div>
					</div>
					<div class="project__overview_scene_item pin-scene">
						<div class="project__overview_scene_item_inner pin-scene-inner" :style="{ backgroundImage: 'url(' + require(`@/assets/img/${imageSecondUrl}`) + ')' }"></div>
					</div>
					<div class="project__overview_scene_item pin-scene">
						<div class="project__overview_scene_item_inner pin-scene-inner" :style="{ backgroundImage: 'url(' + require(`@/assets/img/${imageThirdUrl}`) + ')' }"></div>
					</div>
					<div class="project__overview_scene_item pin-scene">
						<div class="project__overview_scene_item_inner pin-scene-inner" :style="{ backgroundImage: 'url(' + require(`@/assets/img/${imageFourthUrl}`) + ')' }"></div>
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
		text: String,
		textTwo: String,
		textStrong: String,
		imageFirstUrl: String,
		imageSecondUrl: String,
		imageThirdUrl: String,
		imageFourthUrl: String,
		listStaff: String,
		listItemFifth: String,
		listItemFirst: String,
		listItemSecond: String,
		listItemThird: String,
		listItemFourth: String
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
	
	.project__overview {
		position: relative;
		z-index: 1;

		ul {
			font-weight: 400;
		}


		&_content {
			padding: 13.2rem 0 0;
			position: relative;
			z-index: 1;

			@media only screen and (max-width: 992px) {
				padding: 5.2rem 0 0;	
			}

			&_inner {
				max-width: 77rem;
				margin-bottom: 9rem;

				@media only screen and (max-width: 992px) {
					margin-bottom: 4rem;	
				}

				@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
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


		&_scene {
			width: 100%;
			max-width: 154rem;
			padding: 0 3rem;
			margin: 0 auto;

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
				background: $cases-gray-light;
				padding: 5rem;

				@media only screen and (max-width: 992px) {
					padding: 3rem;	
				}

				@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
					padding: 1.5rem;	
				}

				&::after {
					content: '';
					display: table;
					clear: both;
				}
			}

			&_item {
				width: calc(50% - 1.5rem);
				margin-bottom: 3rem;

				@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
					width: calc(50% - 0.8rem);
					margin-bottom: 1.5rem;	
				}

				@media only screen and (max-width: 599px) {
					width: 100%;
				}

				&_inner {
					background-size: cover;
					background-repeat: no-repeat;
					background-position: center center;
				}

				&.shadow {
					box-shadow: $cases-box-shadow;
				}

				&:nth-child(1),
				&:nth-child(4) {
					float: left;

					@media only screen and (max-width: 599px) {
						float: none;	
					}
				}

				&:nth-child(2),
				&:nth-child(3) {
					float: right;

					@media only screen and (max-width: 599px) {
						float: none;	
					}
				}

				&:nth-child(3),
				&:nth-child(4) {
					margin-bottom: 0;
				}

				&:nth-child(3) {
					@media only screen and (max-width: 599px) {
						margin-bottom: 1.5rem;	
					}
				}

				&:nth-child(4) {
					@media only screen and (max-width: 599px) {
						margin-bottom: 0;	
					}
				}
			}
		}
		



		// Ankr old
		&.ankr-old {
			background: $cases-bg;

			.project__overview_content_inner {
				max-width: 64.5rem;
			}

			.project__overview_scene_item {
				
				&:nth-child(odd) {

					.project__overview_scene_item_inner {
						padding-top: 147.5%;
					}
				}

				&:nth-child(even) {

					.project__overview_scene_item_inner {
						padding-top: 57.1%;
					}
				}
			}
		}


		

		// Ankr new
		&.ankr-new {
			background: $white;

			.project__overview_content {
				padding: 13.2rem 0 0;

				@media only screen and (max-width: 992px) {
					padding-top: 4.5rem;	
				}
			}

			.project__overview_scene_item {

				&:nth-child(odd) {

					.project__overview_scene_item_inner {
						padding-top: 116.1%;
					}
				}

				&:nth-child(even) {
					
					.project__overview_scene_item_inner {
						padding-top: 59.8%;
					}
				}
			}
		}



		&.phantasma {
			background: $white;

			.project__overview_content {
				padding: 13.2rem 0 15rem;

				@media only screen and (max-width: 992px) {
					padding-top: 4.5rem;
					padding-bottom: 6rem;	
				}

				&_inner {
					max-width: 68rem;
				}
			}

			.project__overview_scene_item {
				
				&:nth-child(1) {

					.project__overview_scene_item_inner {
						padding-top: 129.6%;
					}
				}

				&:nth-child(2) {

					.project__overview_scene_item_inner {
						padding-top: 51.5%;
					}
				}

				&:nth-child(3) {

					.project__overview_scene_item_inner {
						padding-top: 126.3%;
					}
				}

				&:nth-child(4) {

					.project__overview_scene_item_inner {
						padding-top: 48.1%;
					}
				}
			}
		}


		&.deepcloud {
			background: $white;

			.project__overview_content_inner {
				max-width: 66rem;
			}

			.project__overview_scene_item {

				&:nth-child(odd) {

					.project__overview_scene_item_inner {
						padding-top: 122.9%;
					}
				}

				&:nth-child(even) {
					
					.project__overview_scene_item_inner {
						padding-top: 51.8%;
					}
				}
			}
		}

		&.alita {
			background: $cases-bg;

			.project__overview_content_inner {
				max-width: 66rem;
			}

			.project__overview_scene_item {
				
				&:nth-child(odd) {

					.project__overview_scene_item_inner {
						padding-top: 136%;
					}
				}

				&:nth-child(even) {

					.project__overview_scene_item_inner {
						padding-top: 49.4%;
					}
				}
			}
		}

		&.mobydick {

			.project__overview_scene_item {
				
				&:nth-child(odd) {

					.project__overview_scene_item_inner {
						padding-top: 128.8%;
					}
				}

				&:nth-child(even) {

					.project__overview_scene_item_inner {
						padding-top: 49.4%;
					}
				}
			}
		}
	}

</style>