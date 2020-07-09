<template>
	
	<section class="about ms" id="about" data-target="about">

		<lines></lines>

		<div class="content about__content">
			<div class="container">
				<div class="row">
					<div class="col-sm-12 col-lg-8 logo-col">
						<div class="am__logo_wrapper">
							<picture class="am__logo">
								<source :srcset="require(`@/assets/img/about-logo.webp`)" type="image/webp">
								<source :srcset="require(`@/assets/img/about-logo.png`)" type="image/png">
								<img :src="require(`@/assets/img/about-logo.png`)" alt="" class="am__logo">
							</picture>
							<!-- <img :src="require(`@/assets/img/about-logo.png`)" alt="" class="am__logo"> -->
						</div>
						<h2 class="section-title split chars animation">We Are Amen</h2>
					</div>
				</div>

				<div class="row align-items-start first-row">
					<div class="col-sm-12 col-lg-8">
						<div class="left-side animation">
							<!-- <h4 class="section__subtitle" style="max-width: 70rem;">Amen is a team of thinkers, striving to introduce unreal ideas into the real environment of the internet.</h4>
							<p class="slogan">What thrills us? Top-notch websites, and we’re the best for the job. As a team, oriented on the most impressive results possible, we strive for your true “Wow!” reaction. We go beyond design and development and bring into existence the most innovative and daring solutions.</p>
							<p class="slogan">Our main aim - to help you maximize your revenues, stay on the competitive edge, and keep your customers satisfied. We are perfectionists, dreamers, adventurers — you’ll be sure your site is in good hands. We provide the following services:</p> -->
							<p class="slogan">Our main aim - to help you maximize your revenues, stay on the competitive edge, and keep your customers satisfied. We are perfectionists, dreamers, adventurers — you’ll be sure your site is in good hands.</p>
						</div>
					</div>
					<div class="col-sm-12 col-lg-4">
						<div class="right-side buttons__wrapper animation desktop">
							<a href="javascript:void(0);" class="btn btn-3d full" @click.prevent="openModal('orderModal')"><span></span>start your project</a>
							<a :href="require(`@/assets/img/AMEN_HIGH.pdf`)" class="btn btn-3d full" target="_blank"><span></span>our presentation</a>
						</div>
					</div>
				</div>

				<div class="row align-items-start animation second-row">
					<div class="col-xs-12 col-lg-8">
						
						<p class="list__title"><strong>We provide the following services:</strong></p>

						<ul class="advantages__list clear designed">
							<li>User Expirience</li>
							<li>User Interface</li>
							<li>Branding</li>
							<li>Front-End Development</li>
							<li>Back-End Development</li>
							<li>Mobile Applications</li>
							<li>Technical Support</li>
							<li>3D Modeling</li>
							<li>Motion Design</li>
							<li>Digital Marketing</li>
						</ul>
						
						<div class="right-side buttons__wrapper animation mobile">
							<a href="javascript:void(0);" class="btn btn-3d full" @click.prevent="openModal('orderModal')"><span></span>start your project</a>
							<a :href="require(`@/assets/img/AMEN_HIGH.pdf`)" class="btn btn-3d full" target="_blank"><span></span>our presentation</a>
						</div>

					</div>
				</div>

				<div class="row align-items-start animation third-row">
					<div class="col-sm-12 col-md-4">
						<div class="left-side animation logo-side">
							<div class="logo__box">
								<picture>
									<source :srcset="require(`@/assets/img/a-letter.webp`)" type="image/webp">
									<source :srcset="require(`@/assets/img/a-letter.png`)" type="image/png">
									<img :src="require(`@/assets/img/a-letter.png`)" alt="">
								</picture>
								<!-- <img src="../../../assets/img/a-letter.png" alt=""> -->
							</div>
						</div>
					</div>
					<div class="col-sm-12 col-md-8">
						<div class="right-side animation">
							<h4 class="section-subtitle">Amen Clients</h4>
							<p>We take pride in every one of our clients and projects. Once our paths cross, together we can invent something truly unique.</p>
							<ul class="done__projects_list clear">
								<li>
									<div class="done__project ankr">
										<div class="inner-wrapper">
											<div class="rect"></div>
											<div class="rect__inner" :style="{ backgroundImage: 'url(' + require(`@/assets/img/done-project-rect.svg`) + ')' }"></div>
											<div class="inner-wrapper-content">
												<a href="javascript:void(0);"></a>
												<img src="../../../assets/img/ankr-icon.svg" alt="">
											</div>
										</div>
									</div>
									<div class="done__project nos">
										<div class="inner-wrapper">
											<div class="rect"></div>
											<div class="rect__inner" :style="{ backgroundImage: 'url(' + require(`@/assets/img/done-project-rect.svg`) + ')' }"></div>
											<div class="inner-wrapper-content">
												<a href="javascript:void(0);"></a>
												<img src="../../../assets/img/nos-icon.svg" alt="">
											</div>
										</div>
									</div>
									<div class="done__project dt">
										<div class="inner-wrapper">
											<div class="rect"></div>
											<div class="rect__inner" :style="{ backgroundImage: 'url(' + require(`@/assets/img/done-project-rect.svg`) + ')' }"></div>
											<div class="inner-wrapper-content">
												<a href="javascript:void(0);"></a>
												<img src="../../../assets/img/deeptransfer-icon.svg" alt="">
											</div>
										</div>
									</div>
									<div class="done__project ux">
										<div class="inner-wrapper">
											<div class="rect"></div>
											<div class="rect__inner" :style="{ backgroundImage: 'url(' + require(`@/assets/img/done-project-rect.svg`) + ')' }"></div>
											<div class="inner-wrapper-content">
												<a href="javascript:void(0);"></a>
												<img src="../../../assets/img/ux-icon.svg" alt="">
											</div>
										</div>
									</div>
								</li>
								<li>
									<div class="done__project dc">
										<div class="inner-wrapper">
											<div class="rect"></div>
											<div class="rect__inner" :style="{ backgroundImage: 'url(' + require(`@/assets/img/done-project-rect.svg`) + ')' }"></div>
											<div class="inner-wrapper-content">
												<a href="javascript:void(0);"></a>
												<img src="../../../assets/img/deepcloud-icon.svg" alt="">
											</div>
										</div>
									</div>
									<div class="done__project phantasma">
										<div class="inner-wrapper">
											<div class="rect"></div>
											<div class="rect__inner" :style="{ backgroundImage: 'url(' + require(`@/assets/img/done-project-rect.svg`) + ')' }"></div>
											<div class="inner-wrapper-content">
												<a href="javascript:void(0);"></a>
												<img src="../../../assets/img/phantasma-icon.svg" alt="">
											</div>
										</div>
									</div>
									<div class="done__project gem">
										<div class="inner-wrapper">
											<div class="rect"></div>
											<div class="rect__inner" :style="{ backgroundImage: 'url(' + require(`@/assets/img/done-project-rect.svg`) + ')' }"></div>
											<div class="inner-wrapper-content">
												<a href="javascript:void(0);"></a>
												<img src="../../../assets/img/gem4me-icon.svg" class="desktop" alt="">
												<img src="../../../assets/img/gem4me-icon-alt.svg" class="mobile" alt="">
											</div>
										</div>
									</div>
									<div class="done__project marshall">
										<div class="inner-wrapper">
											<div class="rect"></div>
											<div class="rect__inner" :style="{ backgroundImage: 'url(' + require(`@/assets/img/done-project-rect.svg`) + ')' }"></div>
											<div class="inner-wrapper-content">
												<a href="javascript:void(0);"></a>
												<img src="../../../assets/img/marshall.svg" alt="">
											</div>
										</div>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>

			</div>
		</div>
	</section>

</template>

<script>

import * as types from '../../../store/types.js';
import { mapActions } from 'vuex';

import Lines from '../../../components/Lines.vue';

import ScrollMagic from 'scrollmagic';

export default {

  data () {
    return {

    }
  },

  components: {
  	'lines': Lines
  },

  methods: {
  	...mapActions({
  		'openModal': types.TOGGLE_MODAL_ACTION
  	}),
  },

  mounted() {

		var logoController = new ScrollMagic.Controller();

  	var logoMove = new TimelineMax()
		.fromTo('.am__logo', 1, {x: "20%"}, {x: "-55%", ease: Linear.easeNone});

	var logoMoveScene = new ScrollMagic
			.Scene({
				triggerElement: document.querySelector('.am__logo_wrapper'),
				reverse: true,
				triggerHook: 1,
				duration: '120%'
			})
			// .setPin(thisBg)
			.setTween(logoMove)
			.addTo(logoController);
  }
}
</script>

<style lang="scss" scoped>

@import '../../../variables.scss';

	.first-row {
		margin-bottom: -9.5rem;
		position: relative;
		z-index: 2;

		@media only screen and (max-width: 1199px) {
			margin-bottom: -4.5rem;	
		}

		@media only screen and (max-width: 992px) {
			margin-bottom: 1.5rem;	
		}

		@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
			margin-bottom: 0;	
		}
	}

	.about {

		@media (max-height: 499px) and (max-width: 899px) {
			div[class^="col"] {
				width: 100%;
				max-width: 100%;
				flex: 0 1 auto;
			}	
		}


		@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
			padding: 0 1.5rem;	
		}



		&__content {
			padding: 13rem 0 0;
			// overflow: hidden;

			@media only screen and (max-width:1600px) {
				padding-top: 10rem;	
			}

			@media only screen and (max-width:1399px) {
				padding-top: 8rem;	
			}

			@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
				padding-top: 5.5rem;
				overflow: visible;
			}
		}
	}


	.am__logo_wrapper {

		@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
			overflow: hidden;
			margin: 0 -3rem;	
		}
	}


	.am__logo {
		display: none;

		@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
			display: block;
			margin: 0 -18rem 2.5rem;
			width: calc(100% + 36rem);
			max-width: 1000%;
		}

		@media only screen and (max-width: 599px) {
			margin: 0 -8.2rem 2.5rem;
			width: calc(100% + 59rem);
		}
	}


	.section-title {
		margin-bottom: 4.4rem;

		@media only screen and (max-width:1600px) {
			margin-bottom: 5rem;
		}

		@media only screen and (max-width:1399px) {
			margin-bottom: 4rem;
		}

		@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
			margin-bottom: 3rem;	
		}
	}

	.section-subtitle {
		margin-bottom: 2.1rem;
	}

	.slogan {
		max-width: 60rem;

		@media only screen and (max-width: 599px) {
			font-size: 1.6rem;
			line-height: 1.9;

			span {
				display: block;
				margin-top: 2.8rem;
			}	
		}
	}

	.list__title {
		margin-bottom: 4rem;
	}

	.advantages__list {
		font-weight: 400;
		column-count: 2;
		position: relative;
		left: -0.2rem;
		padding-right: 0.5rem;
		margin-bottom: 19rem;

		li {
			margin-bottom: 4rem;

			@media only screen and (max-width:1600px) {
				margin-bottom: 3rem;	
			}

			@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
				margin-bottom: 1.8rem;	
			}

			@media only screen and (max-width: 599px) {
				margin-bottom: 2.5rem;	
			}
		}

		@media only screen and (max-width:1600px) {
			margin-bottom: 10rem;
		}

		@media only screen and (max-width:1399px) {
			margin-bottom: 8rem;
		}

		@media only screen and (max-width: 992px) {
			margin-bottom: 3rem;	
		}

		@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
			margin-bottom: 1rem;	
		}

		@media only screen and (max-width: 599px) {
			column-count: 1;
			margin-left: 1rem;
			margin-bottom: 2.2rem;	
		}
	}

	.logo__box {
		margin-left: -29rem;
		position: relative;
		left: -4rem;
		margin-top: -5.5rem;

		@media only screen and (max-width:1600px) {
			margin-left: -18rem;
			left: -2rem;
			margin-top: -3.5rem;	
		}

		@media only screen and (max-width:1499px) {
			left: 0;
		}

		@media only screen and (max-width: 1199px) {
			margin-left: -5rem;
			margin-top: 0rem;	
		}
	}

	.section-subtitle {
		font-size: 2.2rem;
		font-weight: 600;
		letter-spacing: 0.2px;

		@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
			margin-bottom: 0.5rem;	
		}

		& + p {
			max-width: 51%;
			letter-spacing: 0.2px;

			@media only screen and (max-width: 1199px) {
				max-width: 100%;	
			}

			@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
				margin-bottom: 4.6rem;	
			}
		}
	}

	.left-side {

		@media only screen and (max-width: 992px) {
			margin-bottom: 5rem;	
		}

		@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
			margin-bottom: 4rem;	
		}

		&.logo-side {
			
			@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
				display: none;
			}
		}
	}

	.right-side {
		margin-left: -0.9rem;
		// overflow: hidden;

		&.buttons__wrapper {
			margin-left: -2rem;
			overflow: visible;

			&.mobile {
				display: none;

				@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
					display: block;	
				}
			}

			&.desktop {

				@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
					display: none;	
				}
			}

			.btn {
				width: calc(100% + 0.4rem);
				position: relative;
				left: -0.2rem;

				&:first-of-type {
					margin-bottom: 6rem;

					@media only screen and (max-width:1600px) {
						margin-bottom: 5rem;	
					}

					@media only screen and (max-width:1399px) {
						margin-bottom: 4rem;	
					}

					@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
						margin-bottom: 2.5rem;	
					}
				}

				@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
					left: 0;
					width: 100%;	
				}
			}

			@media only screen and (max-width: 992px) {
				margin-left: 0;
				max-width: 100%;
				margin-bottom: 5rem;
			}

			@media only screen and (max-width: 599px) {
				margin-bottom: 6rem;	
			}
		}

		@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
			margin-left: 0;	
		}
	}


	.done__projects_list {
		margin-right: -5px;
		margin-top: 8.5rem;
		// overflow: hidden;

		&::after {
			content: '';
			display: table;
			clear: both;
		}

		li {
			display: flex;
			flex-wrap: wrap;
			width: 50%;
			float: left;
			position: relative;
			top: 1px;

			@media only screen and (max-width: 599px) {
				width: 100%;	
			}
			

			&:last-child {
				left: -2px;
				right: -1px;

				@media only screen and (max-width: 599px) {
					left: 0;
					right: 0;	
				}
			}
		}

		@media only screen and (max-width: 1600px) {
			margin-right: -4px;	
		}

		@media only screen and (max-width: 992px) {
			margin-top: 0;
		}

		@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
			margin-right: 0;
			margin-left: 1px;
			overflow: visible;
			margin-bottom: 1px;
		}
	}

	.done__project {
		position: relative;
		width: 50%;
		border: 1px solid rgba($lines-color, 0.4);
		margin-left: -1px;
		margin-top: -1px;
		z-index: 2;

		.inner-wrapper {
			position: relative;
			padding-top: 100%;

			.rect {
				position: absolute;
				left: 0;
				top: 0;
				right: 0;
				bottom: 0;
				z-index: 2;

				&:hover {

					& + .rect__inner {
						opacity: 1;
						visibility: visible;
						-webkit-transition: all 0.4s ease 0s;
						-moz-transition: all 0.4s ease 0s;
						transition: all 0.4s ease 0s;
					}
				}
			}

			.rect__inner {
				background-size: cover;
				background-repeat: no-repeat;
				background-position: center center;
				position: absolute;
				left: 50%;
				top: -2rem;
				height: 273.8%;
				transform: translateX(-50%);
				width: 273.8%;
				opacity: 0;
				visibility: hidden;
				-webkit-transition: all 0.05s ease 0s;
				-moz-transition: all 0.05s ease 0s;
				transition: all 0.05s ease 0s;

				@media only screen and (max-width: 1499px) {
					height: 277%;
				}

				@media only screen and (max-width: 1199px) {
					display: none;	
				}
			}

			&-content {
				width: 100%;
				position: absolute;
				left: 50%;
				top: 50%;
				-webkit-transform: translate(-50%,-50%);
				-ms-transform: translate(-50%,-50%);
				transform: translate(-50%,-50%);
			}
		}

		a {
			display: block;
			position: absolute;
			left: 0;
			top: 0;
			right: 0;
			bottom: 0;
			z-index: 1;
			pointer-events: none;
		}

		img {
			display: block;
			width: 100%;

			@media only screen and (min-width: 1200px) {
				filter: url("data:image/svg+xml;utf8,&lt;svg xmlns='http://www.w3.org/2000/svg'&gt;&lt;filter id='grayscale'&gt;&lt;feColorMatrix type='matrix' values='0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0'/&gt;&lt;/filter&gt;&lt;/svg&gt;#grayscale");
				filter: gray;
				-webkit-filter: grayscale(100%);
			}
			-webkit-transition: all .5s ease 0s;
			-o-transition: all .5s ease 0s;
			transition: all .5s ease 0s;
			margin: 0 auto;
		}

		&:hover {

			img {

				@media only screen and (min-width: 1200px) {
					filter: url("data:image/svg+xml;utf8,&lt;svg xmlns=\'http://www.w3.org/2000/svg\'&gt;&lt;filter id=\'grayscale\'&gt;&lt;feColorMatrix type=\'matrix\' values=\'1 0 0 0 0, 0 1 0 0 0, 0 0 1 0 0, 0 0 0 1 0\'/&gt;&lt;/filter&gt;&lt;/svg&gt;#grayscale");
					-webkit-filter: grayscale(0%);	
				}
			}
		}

		&.ankr {

			img {
				max-width: 5.2rem;

				@media only screen and (max-width: 992px) {
					max-width: 4.5rem;	
				}
			}
		}

		&.nos {

			img {
				max-width: 5.5rem;

				@media only screen and (max-width: 992px) {
					max-width: 5rem;	
				}
			}
		}

		&.dc {

			img {
				max-width: 9.4rem;

				@media only screen and (max-width: 992px) {
					max-width: 8.2rem;	
				}
			}
		}

		&.phantasma {

			img {
				max-width: 8.2rem;

				@media only screen and (max-width: 992px) {
					max-width: 7.6rem;	
				}
			}
		}

		&.dt {

			img {
				max-width: 10.3rem;

				@media only screen and (max-width: 992px) {
					max-width: 9.2rem;	
				}
			}
		}

		&.ux {

			img {
				max-width: 9.1rem;

				@media only screen and (max-width: 992px) {
					max-width: 6.8rem;	
				}
			}
		}

		&.gem {

			img {
				max-width: 13rem;

				@media only screen and (max-width: 992px) {
					max-width: 7.8rem;	
				}

				&.desktop {

					@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
						display: none;		
					}
				}

				&.mobile {
					display: none;

					@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
						display: block;
						max-width: 6.4rem;		
					}
				}
			}
		}

		&.marshall {

			img {
				max-width: 7.6rem;

				@media only screen and (max-width: 992px) {
					max-width: 6.2rem;	
				}
			}
		}

	}



</style>