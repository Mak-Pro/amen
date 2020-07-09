<template>
	
	<section class="short__info animation" :class="className">
		<app-lines></app-lines>
		<div class="short__info_content pin-wrapper">
			<div class="container">
				<div class="row">
					<div class="col-sm-12">
						<h2 class="section__title" data-delay="0">{{titleTextTop}} <br/> {{titleTextBottom}}</h2>
					</div>
				</div>
				<div class="row">
					<div class="col-sm-12 inner">
						<div class="short__info_content_left">
							<ul class="short__info_list" data-delay="0.1">
								<li>
									<div class="info__item">
										<span class="info__item_title">Client</span>
										<span class="info__item_description">{{client}}</span>
									</div>
								</li>
								<li>
									<div class="info__item">
										<span class="info__item_title">Location</span>
										<span class="info__item_description">{{location}}</span>
									</div>
								</li>
								<li>
									<div class="info__item">
										<span class="info__item_title">Work</span>
										<span class="info__item_description">{{workTopLine}} <br/>{{workBottomLine}}</span>
									</div>
								</li>
								<li>
									<div class="info__item">
										<span class="info__item_title">Type</span>
										<span class="info__item_description">{{type}}</span>
									</div>
								</li>
								<li>
									<div class="info__item">
										<span class="info__item_title">Developed</span>
										<span class="info__item_description">{{developedDate}}</span>
									</div>
								</li>
								<li>
									<div class="info__item">
										<span class="info__item_title">Hours Tracked</span>
										<span class="info__item_description">{{hoursTracked}}</span>
									</div>
								</li>
							</ul>
						</div>
						<div class="short__info_content_right">
							<div class="short__info_content_right_text" data-delay="0">
								<p>{{rightTextOne}}</p>
								<p>{{rightTextTwo}}</p>
								<p>{{rightTextThree}}</p>
							</div>
							<div class="button__wrapper" data-delay="0.1">
								<a :href="siteUrl" class="launch__btn" target="_blank"><span>launch website</span></a>
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
		titleTextTop: String,
		titleTextBottom: String,
		client: String,
		location: String,
		workTopLine: String,
		workBottomLine: String,
		type: String,
		developedDate: String,
		hoursTracked: String,
		rightTextOne: String,
		rightTextTwo: String,
		rightTextThree: String,
		siteUrl: String
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

	.short__info {
		position: relative;
		background: $white;
		padding: 13.5rem 0 14rem;

		@media only screen and (max-width: 992px) {
			padding: 5rem 0 4.5rem;	
		}

		&_content {

			@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
				padding-left: 1.5rem;
				padding-right: 1.5rem;	
			}

			.inner {
				display: flex;

				@media only screen and (max-width: 992px) {
					display: block;	
				}
			}


			&_left {
				width: 33.33333%;

				@media only screen and (max-width: 992px) {
					width: 100%;
					margin-bottom: 2rem;	
				}
			}

			&_right {
				width: 66.666666666%;
				// display: flex;
				// flex-direction: column;
				// justify-content: space-between;

				@media only screen and (max-width: 992px) {
					width: 100%;	
				}

				&_text {
					max-width: 72rem;

					@media only screen and (max-width: 992px) {
						margin-bottom: 1.5rem;	
					}

					@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
						margin-bottom: 2rem;	
					}
				}
			}
		}

		&_list {
			list-style: none;
			margin: 0;
			padding: 0;
			position: relative;
			top: 0.5rem;

			@media only screen and (max-width: 992px) {
				display: flex;
				flex-wrap: wrap;	
			}

			li {
				margin-bottom: 2.8rem;

				@media only screen and (max-width: 992px) {
					margin-bottom: 1.5rem;
					width: 50%;	
				}

				@media only screen and (max-width: 599px) {
					width: 100%;	
				}

				&:last-child {
					margin-bottom: 0;
				}
			}
		}

		.button__wrapper {
			// display: none;
		}

		.btn {
			width: 50.9%;
			margin-left: -0.3%;

			@media only screen and (max-width: 599px) {
				margin-left: 0;
				width: 100%;
			}

			&::before, 
			&::after {
				width: 50.4%;
			}
		}

		.section__title {
			margin-bottom: 5.5rem;

			@media only screen and (max-width: 992px) {
				margin-bottom: 3.5rem;	
			}

			br {
				@media only screen and (max-width: 599px) {
					display: none;
				}
			}
		}

		.info__item {


			&_title {
				display: block;
				font-size: 1.2rem;
				font-weight: 300;
			}

			&_description {
				font-weight: 400;
			}
		}




		// Nos

		&.nos {

			.short__info_content_right_text {
				max-width: 74rem;
			}

			.launch__btn {
				display: none;
			}
		}
	}

</style>