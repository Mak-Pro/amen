<template>

	<section class="wallet">
		<div class="wallet__content pin-wrapper">
			<div class="container">
				<div class="row">
					<div class="col-sm-12">
						<div class="wallet__content_inner">
							<h2 class="section__title" data-delay="0">{{titleText}}</h2>
							<p data-delay="0.1">{{text}}</p>
						</div>
					</div>
				</div>
			</div>
			<div class="wallet__scene">
				<div class="wallet__scene_inner">
					<div class="wallet__scene_item pin-scene">
						<div class="infinite__ticker_wrapper">
							<div class="infinite__ticker_wrapper_inner">

								<div class="infinite__ticker">
									<div class="infinite__ticker_item">
										<img :src="require(`@/assets/img/nos-wallet-image-1.jpg`)" alt="">
									</div>
									<div class="infinite__ticker_item">
										<img :src="require(`@/assets/img/nos-wallet-image-2.jpg`)" alt="">
									</div>
									<div class="infinite__ticker_item">
										<img :src="require(`@/assets/img/nos-wallet-image-3.jpg`)" alt="">
									</div>
									<div class="infinite__ticker_item">
										<img :src="require(`@/assets/img/nos-wallet-image-4.jpg`)" alt="">
									</div>
								</div>

								<div class="infinite__ticker">
									<div class="infinite__ticker_item">
										<img :src="require(`@/assets/img/nos-wallet-image-1.jpg`)" alt="">
									</div>
									<div class="infinite__ticker_item">
										<img :src="require(`@/assets/img/nos-wallet-image-2.jpg`)" alt="">
									</div>
									<div class="infinite__ticker_item">
										<img :src="require(`@/assets/img/nos-wallet-image-3.jpg`)" alt="">
									</div>
									<div class="infinite__ticker_item">
										<img :src="require(`@/assets/img/nos-wallet-image-4.jpg`)" alt="">
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

import ScrollMagic from 'scrollmagic';

export default {

	props: {
		titleText: String,
		text: String,
		imageUrl: String,
	},

  data () {
    return {

    }
  },

  mounted() {

		/*var walletController = new ScrollMagic.Controller();

  	var walletMove = new TimelineMax()
		.fromTo('.infinite__ticker', 5, {x: "0%"}, {x: "-20%", ease: Linear.easeNone});

	var logoMoveScene = new ScrollMagic
			.Scene({
				triggerElement: document.querySelector('.wallet'),
				reverse: true,
				triggerHook: 0.4,
				duration: '120%'
			})
			// .setPin(thisBg)
			.setTween(walletMove)
			.addTo(walletController);*/
  }
}
</script>

<style lang="scss" scoped>
	
	@import '../../variables.scss';

	.wallet {
		// background: #f9fbfa;
		border-bottom: 0.4rem solid #C4C4C4;
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
		position: relative;
		z-index: 1;

		&__content {
			padding: 3rem 0 10rem;

			@media only screen and (max-width: 992px) {
				padding: 5.2rem 0 6.5rem;	
			}

			&_inner {
				max-width: 54rem;
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
			width: 100%;

			&_inner {
				background: $cases-gray-light;
			}

			&_item {
				box-shadow: none;

				&_inner {
					background-size: cover;
					background-repeat: no-repeat;
					background-position: center center;
					padding-top: 28.9%;
				}
			}
		}
	}


	.infinite__ticker_wrapper {
		display: flex;
		overflow: hidden;
		padding: 5rem 0;
		margin-left: 18px;

		@media only screen and (max-width: 1199px) {
			margin-left: 0;	
		}

		@media only screen and (max-width: 992px) {
			padding: 2rem 0;
		}

		@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
			padding: 1.5rem 0;	
		}

		@media only screen and (max-width: 599px) {
			padding: 0.5rem 0;	
		}

		&_inner {
			display: flex;
			clip-path: polygon(0 -20%, 100% -20%, 100% 120%, 0 120%);
		}
	}

	.infinite__ticker {
		display: flex;
		min-width: 126%;
		animation: tickerrun 40s infinite linear;

		@keyframes tickerrun {
			0%{transform: translate(0, 0);}
			100%{transform: translate(-100%, 0)}
		}

		&_item {
			margin-right: 2.8rem;
			box-shadow: 0 1rem 3rem 0 rgba(0,0,0,0.1);
			line-height: 0;

			@media only screen and (max-width: 992px) {
				margin-right: 2rem;
			}

			@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
				margin-right: 1.5rem;	
			}

			@media only screen and (max-width: 599px) {
				margin-right: 0.5rem;
				min-width: 24vw;
			}
		}
	}

</style>