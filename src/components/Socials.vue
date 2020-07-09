<template>
	<ul class="socials clear">
		<li><a href="https://www.facebook.com/we.amen.team" class="facebook-link" target="_blank"><i class="fab fa-facebook-f"></i></a></li>
		<li><a href="https://twitter.com/AmenTeam" class="twitter-link" target="_blank"><i class="fab fa-twitter"></i></a></li>
		<li><a href="https://t.me/AlexShpylovyi" class="telegram-link" target="_blank"><i class="fab fa-telegram-plane"></i></a></li>
		<li>
			<a href="https://www.instagram.com/we.amen.team/?hl=uk" class="instagram-link" target="_blank">
				<img :src="require(`@/assets/img/instagram-icon.svg`)" class="base" alt="">
				<img :src="require(`@/assets/img/instagram-icon-blue.svg`)" class="alt" alt="">
			</a>
		</li>
		<li><a href="https://www.linkedin.com/company/amen-team" class="linkedin-link" target="_blank"><i class="fab fa-linkedin-in"></i></a></li>
	</ul>
</template>



<script>

	import { TimelineMax } from 'gsap';

	
	export function sideSocialsAnimation() {

		let sideSocialLinks = document.querySelectorAll('.socials.side a');

		const sstl = new TimelineMax();
		
		sstl
		.set(sideSocialLinks, {visibility: "visible"})
		.staggerTo(sideSocialLinks, 1, {y:"0%", ease: Power4.easeOut}, 0.1);

	}

	
	export default {
		
		mounted() {

			
		}

	}

</script>



<style lang="scss" scoped>
	
	@import '../variables.scss';
	
	.socials {
		display: inline-flex;
		align-items: center;

		li {
			margin: 0 1rem;
			overflow: hidden;

			a {
				display: flex;
				align-items: center;
				justify-content: center;
				color: $gray-dark;
				text-align: center;
				width: 3rem;
				height: 3rem;
				position: relative;
				overflow: hidden;
				-webkit-transition: none;
				-moz-transition: none;
				transition: none;

				img {
					-webkit-transition: all 0.3s ease 0s;
					-moz-transition: all 0.3s ease 0s;
					transition: all 0.3s ease 0s;

					&.base {
						position: relative;
						top: 0;
					}

					&.alt {
						position: absolute;
						left: 50%;
						top: 4rem;
						transform: translateX(-50%);
					}
				}

				&::after {
					content: '';
					display: block;
					font-family: 'Font Awesome 5 Brands';
					-moz-osx-font-smoothing: grayscale;
					-webkit-font-smoothing: antialiased;
					font-style: normal;
					font-variant: normal;
					text-rendering: auto;
					line-height: 1;
					position: absolute;
					left: 0;
					top: 0;
					right: 0;
					bottom: 0;
					transform: translateY(100%);
					display: flex;
					align-items: center;
					justify-content: center;
					-webkit-transition: all 0.3s ease 0s;
					-moz-transition: all 0.3s ease 0s;
					transition: all 0.3s ease 0s;
					color: $blue-light;
				}

				i {
					position: absolute;
					left: 0;
					top: 0;
					right: 0;
					bottom: 0;
					line-height: 3rem;
					-webkit-transition: all 0.3s ease 0s;
					-moz-transition: all 0.3s ease 0s;
					transition: all 0.3s ease 0s;

					&.fa-facebook-f {
						font-size: 1.5rem;
					}

					&.fa-twitter {
						font-size: 1.4rem;
					}

					&.fa-telegram-plane {
						font-size: 1.6rem;
					}
				}

				&:hover {

					img {

						&.base {
							top: -3rem;
						}

						&.alt {
							top: 0.9rem;
						}
					}

					i {
						transform: translateY(-100%) !important;
					}

					&::after {
						transform: translateY(0);
					}

				}

				&.facebook-link {

					&::after {
						content: '\f39e';
					}
				}

				&.twitter-link {

					&::after {
						content: '\f099';
					}
				}

				&.telegram-link {

					&::after {
						content: '\f3fe';
					}
				}

				&.instagram-link {

					&::after {
						content: '\f16d';
						display: none;
					}
				}

				&.linkedin-link {

					&::after {
						content: '\f0e1';
					}
				}
			}
		}

		&.side {
			display: block;
			position: fixed;
			top: 50%;
			transform: translateY(-50%);
			right: 4.5rem;
			z-index: 50;

			li {
				margin: 0;

				a {
					visibility: hidden;
					transform: translateY(-100%);
				}

				&:not(:last-child) {
					margin-bottom: 2.7rem;

					@media only screen and (max-width:1399px) {
						margin-bottom: 2rem;
					}
				}
			}

			&.white {

				li {

					a {
						color: #fff;

						img {

							&.base {
								filter: grayscale(0%) brightness(0) invert(1);
							}
						}

						@media only screen and (max-width: 1199px) {
							color: $black;	
						}
					}
				}

				&.cs {

					li {

						a {

							@media only screen and (max-width: 1199px) {
								color: #fff;	
							}

							img {

								&.base {

									@media only screen and (max-width: 1199px) {
										filter: grayscale(0%) brightness(0) invert(1);	
									}
								}
							}
						}
					}
				}
			}

			@media only screen and (max-width:1600px) {
				right: 2.5rem;
			}

			@media only screen and (max-width:1399px) {
				right: 1.5rem;
			}

			@media only screen and (max-width:1199px) {
				right: 0.5rem;
				display: none;
			}
		}
	}

</style>