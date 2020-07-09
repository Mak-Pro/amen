<template>
	
	<nav class="main__nav" :class="{active: displayNav.show}">

		<div class="main__nav_bg left"></div>
		<div class="main__nav_bg right"></div>

		<lines-wrapper></lines-wrapper>

		<div class="letters__overlay">
			<svg version="1.1" class="overlay-logo" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 216.6 45.3" style="enable-background:new 0 0 216.6 45.3;" xml:space="preserve">

				<filter id="dropshadow" height="120%">
					<feGaussianBlur in="SourceAlpha" stdDeviation="2"/>
					<feOffset dx="0" dy="1.5" result="offsetblur"/>
					<feComponentTransfer>
						<feFuncA type="linear" slope="0.7"/>
					</feComponentTransfer>
					<feMerge> 
						<feMergeNode/>
						<feMergeNode in="SourceGraphic"/>
					</feMerge>
				</filter>

				<g>
					<path style="filter:url(#dropshadow)" class="letter" d="M17.6,0h10.4l17.3,45.3H34.1L30.7,36h-16l-3.5,9.3H0l6.9-18.2l10.4,0H28L17.6,0z"/>
					<path style="filter:url(#dropshadow)" class="letter" d="M60.4,0h10.4l12.3,28.1L95.5,0h10.3v45.3H95.7V22.6L85.6,45.3h-4.9L70.6,22.6v22.8H60.4V0z"/>
					<path style="filter:url(#dropshadow)" class="letter" d="M123,18.2h35.3v9H123V18.2z M123,9.7V0h35.3v9.7H123z M158.2,35.7v9.7H123v-9.7"/>
					<path style="filter:url(#dropshadow)" class="letter" d="M176.3,0h11.6l17,27V0h11.7v45.3h-11.5l-17.1-27v27h-11.7V0z"/>
				</g>
			</svg>
		</div>

		<div class="main__nav_inner">
			<div class="container">
				<div class="row no-gutters">
					<div class="col-sm-12 col-lg-4">
						<h2 class="section-title">Menu</h2>
					</div>
					<div class="col-sm-12 col-lg-4">
						<ul class="main__menu clear">
							<router-link :to="{name: 'Main'}" tag="li" class="active"><a @click="moveTo(1, undefined, 'intro')" data-src="intro"><span class="pos">01</span>Home</a></router-link>
							<router-link :to="{name: 'AllWorks'}" tag="li"><a @click="toggleNav({delay: 2000})"><span class="pos">02</span>Our Works</a></router-link>
							<router-link :to="{name: 'Main'}" tag="li"><a @click="moveTo(3, 'about', 'about')" data-src="about"><span class="pos">03</span>About Us</a></router-link>
							<router-link :to="{name: 'Main'}" tag="li"><a @click="moveTo(3, 'team', 'team')" data-src="team"><span class="pos">04</span>Our Team</a></router-link>
							<router-link :to="{name: 'Main'}" tag="li"><a @click="moveTo(3, 'contacts', 'contacts')" data-src="contacts"><span class="pos">05</span>Contacts</a></router-link>
						</ul>
					</div>
					<div class="col-sm-12 col-lg-4">
						<div class="main__nav_actions">
							<a href="javascript:void(0);" class="btn full order btn-base btn-base-invert" @click.prevent="openModal('orderModal')">order now</a>
							<a :href="require(`@/assets/img/AMEN_HIGH.pdf`)" class="btn full btn-base btn-base-invert presentation" target="_blank">our presentation</a>
							<a href="javascript:void(0);" class="btn full join btn-base btn-base-invert modal-open" @click.prevent="openModal('teamModal')">join team</a>
							<socials></socials>
						</div>
					</div>
				</div>
			</div>
		</div>
	</nav>

</template>








<script>
	
	import * as types from '../store/types.js';
	import { mapGetters, mapActions } from 'vuex';

	import { TimelineMax, SplitText, ScrollToPlugin } from 'gsap';
	import Lines from './Lines.vue';
	import Socials from './Socials.vue';

	const plugins = [ TimelineMax, SplitText, ScrollToPlugin ];


	import { preventTouchScroll } from '../App.vue';

	export default {

		components: {
			'lines-wrapper': Lines,
			'socials': Socials
		},

		computed: {
			...mapGetters({
				'displayNav': types.TOGGLE_NAVIGATION
			})
		},

		methods: {
			...mapActions({
				'openModal': types.TOGGLE_MODAL_ACTION,
				'toggleNav': types.TOGGLE_NAVIGATION_ACTION
			}),

			moveTo(num, sectionId, target) {
				console.log(this.toggleNav);

				this.toggleNav({delay: 2000});

				if(window.innerWidth > 1199) {
					
					fullpage_api.setAllowScrolling(true);

					setTimeout(() => {

						if(sectionId !== undefined) {
							let sectionOffset = parseFloat(document.querySelector(`#${sectionId}`).offsetTop),
							lastScrollPosition = document.querySelector('.page-wrapper.auto .inner .ss-content').scrollTop;
							setTimeout(() => {
								TweenMax.to(document.querySelector('.page-wrapper.auto .inner .ss-content'), 1, {scrollTo: sectionOffset});
							}, 800);
						}

						fullpage_api.moveTo(num);
					}, 1100);
				}
				else {

					let el = document.querySelector(`.${target}`),
							rect = el.getBoundingClientRect(),
					    scrollTop = window.pageYOffset || document.documentElement.scrollTop,
							headerHeight =  document.querySelector('.main__header').offsetHeight,
							elOffset = (rect.top + scrollTop) - headerHeight;
							setTimeout(() => {
								TweenMax.to(window, 1, {scrollTo: elOffset});
							}, 800);

					setTimeout(() => {
						document.querySelector('.main__header').classList.remove('no-sticky');
						document.querySelector('.main__header').classList.add('mob-sticky');
					}, 800);
				}
			}
		},

		mounted() {

			preventTouchScroll('.main__nav_inner');

			new SplitText('.main__nav .section-title', {type:"chars", charsClass:"char"});
			document.querySelectorAll('.main__nav .section-title .char').forEach((char) => {
				let oldHTML = char.innerHTML,
				newHTML = `<span>${oldHTML}</span>`;
				char.innerHTML = newHTML;
			});


			document.querySelectorAll('.main__menu li').forEach((li) => {
				li.addEventListener('click', () => {
					document.querySelectorAll('.main__menu li').forEach((item) => {
						item.classList.remove('active');
					});
					li.classList.add('active');
				});
				
			});


			document.querySelectorAll('.main__menu li a').forEach((link) => {
				link.addEventListener('click', function() {
					document.querySelector('.hamburger').classList.remove('menu-opened');
					document.querySelector('.main__header_logo').classList.remove('menu-active');
					document.querySelector('.main__nav').classList.remove('active');

					document.querySelector('.hamb-wrapper').classList.add('menu-active');
					setTimeout(() => {
						document.querySelector('.hamb-wrapper').classList.remove('menu-active');
					}, 2000);

				});
			});


			if(window.innerWidth < 1200) {
				document.querySelector('.hamburger').addEventListener('click', () => {
					document.querySelector('.main__header').classList.toggle('no-sticky');
				});
			}

		}
	}
</script>






<style lang="scss">

	@import '../variables.scss';

	.main__nav {
		position: fixed;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		z-index: 99;
		// opacity: 0;
		visibility: hidden;
		transform: translateX(100%);
		-webkit-transition: all 1s cubic-bezier(0.77, 0, 0.175, 1) 0.5s;
    -moz-transition: all 1s cubic-bezier(0.77, 0, 0.175, 1) 0.5s;
    transition: all 1s cubic-bezier(0.77, 0, 0.175, 1) 0.5s;

		.main__nav_bg {
			position: absolute;
			left: 0;
			top: 0;
			right: 0;
			bottom: 0;
			z-index: 0;
			overflow: hidden;
			background: -moz-linear-gradient(80deg, rgba(0,189,243,1) 0%, rgba(0,220,221,1) 50%, rgba(0,220,221,1) 56%, rgba(0,189,243,1) 100%);
				background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, rgba(0,189,243,1)), color-stop(44%, rgba(0,220,221,1)), color-stop(50%, rgba(0,220,221,1)), color-stop(100%, rgba(0,189,243,1)));
				background: -webkit-linear-gradient(80deg, rgba(0,189,243,1) 0%, rgba(0,220,221,1) 50%, rgba(0,220,221,1) 56%, rgba(0,189,243,1) 100%);
				background: -o-linear-gradient(80deg, rgba(0,189,243,1) 0%, rgba(0,220,221,1) 50%, rgba(0,220,221,1) 56%, rgba(0,189,243,1) 100%);
				background: -ms-linear-gradient(80deg, rgba(0,189,243,1) 0%, rgba(0,220,221,1) 50%, rgba(0,220,221,1) 56%, rgba(0,189,243,1) 100%);
				background: linear-gradient(10deg, rgba(0,189,243,1) 0%, rgba(0,220,221,1) 50%, rgba(0,220,221,1) 56%, rgba(0,189,243,1) 100%);
				filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00bdf3', endColorstr='#00bdf3',GradientType=0 );

			&::after {
				// content: '';
				display: block;
				position: absolute;
				left: 0;
				top: 0;
				right: 0;
				bottom: 0;
				background: -moz-linear-gradient(80deg, rgba(0,189,243,1) 0%, rgba(0,220,221,1) 50%, rgba(0,220,221,1) 56%, rgba(0,189,243,1) 100%);
				background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, rgba(0,189,243,1)), color-stop(44%, rgba(0,220,221,1)), color-stop(50%, rgba(0,220,221,1)), color-stop(100%, rgba(0,189,243,1)));
				background: -webkit-linear-gradient(80deg, rgba(0,189,243,1) 0%, rgba(0,220,221,1) 50%, rgba(0,220,221,1) 56%, rgba(0,189,243,1) 100%);
				background: -o-linear-gradient(80deg, rgba(0,189,243,1) 0%, rgba(0,220,221,1) 50%, rgba(0,220,221,1) 56%, rgba(0,189,243,1) 100%);
				background: -ms-linear-gradient(80deg, rgba(0,189,243,1) 0%, rgba(0,220,221,1) 50%, rgba(0,220,221,1) 56%, rgba(0,189,243,1) 100%);
				background: linear-gradient(10deg, rgba(0,189,243,1) 0%, rgba(0,220,221,1) 50%, rgba(0,220,221,1) 56%, rgba(0,189,243,1) 100%);
				filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00bdf3', endColorstr='#00bdf3',GradientType=0 );
				-webkit-transition: all 0.3s ease-in-out 0.5s;
				-moz-transition: all 0.3s ease-in-out 0.5s;
				transition: all 0.3s ease-in-out 0.5s;
				backface-visibility: hidden;
			}

			&.left {
				clip-path: polygon(0 0, 100% 0, 100% 100%, 99.9% 100%, 0 0.1%);

				&::after {
					transform: translateY(100%);
				}
			}

			&.right {
				clip-path: polygon(0 0, 100% 100%, 0 100%);

				&::after {
					transform: translateY(-100%);
				}
			}
		}


		.lines-wrapper {
			overflow: hidden;

			span {
				background: #3de4e7;
				transform: translateY(-100%);
				-webkit-transition: all 0.5s ease 0s;
				-moz-transition: all 0.5s ease 0s;
				transition: all 0.5s ease 0s;
			}

			@media only screen and (max-width:1199px) {
				max-width: 100%;	
			}
		}

		&_inner {
			height: 100%;
			display: flex;
			align-items: center;
			position: relative;
			z-index: 5;

			.container {
				margin-top: -12rem;
				width: 100%;

				@media only screen and (max-width:1600px) {
					margin-top: -16rem;
				}

				@media only screen and (max-width:1199px) {
					max-width: 100%;
					padding: 0;
					margin-top: -14rem;
				}

				@media only screen and (max-width:992px) {
					margin-top: 0;	
				}
			}

			@media only screen and (max-width:992px) {
				display: block;
				overflow-y: auto;
				padding-top: 6rem;	
			}
		}

		.section-title {
			position: relative;
			font-size: 9rem;
			font-weight: 600;
			color: #fff;
			text-align: center;
			opacity: 0;
			line-height: 0.95;
			letter-spacing: .3rem;
			-webkit-transition: all 0.1s ease 0.3s;
			-moz-transition: all 0.1s ease 0.3s;
			transition: all 0.1s ease 0.3s;

			@media only screen and (max-width:1600px) {
				top: 0.8rem;
			}

			@media only screen and (max-width: 1499px) {
				font-size: 8rem;	
			}

			@media only screen and (max-width:1299px) {
				top: 1.2rem;
			}

			@media only screen and (max-width:992px) {
				border: 0 none;
				margin-bottom: 4rem;
				font-size: 5rem;
			}

			.char {
				overflow: hidden;

				span {
					display: inline-block;
					transform: translateX(-100%);
					-webkit-transition: all 0.5s ease 0s;
					-moz-transition: all 0.5s ease 0s;
					transition: all 0.5s ease 0s;
				}
			}
		}

		.main__menu {
			max-width: 60%;
			margin: 1rem auto 0;
			line-height: 1;

			li {
				overflow: hidden;
				margin-left: -0.5rem;

				&.active {

					a {

						.pos {
							color: #fff;
						}

						&::after {
							width: 5rem;
						}
					}
				}

				a {
					display: inline-block;
					height: 4.8rem;
					line-height: 4.8rem;
					font-size: 2.8rem;
					font-weight: 600;
					color: #fff;
					position: relative;
					padding-left: 6rem;
					letter-spacing: 0.18rem;
					transform: translateY(-100%);
					-webkit-transition: transform 0.75s ease 0s, padding-left 0.3s ease 0s;
					-moz-transition: transform 0.75s ease 0s, padding-left 0.3s ease 0s;
					transition: transform 0.75s ease 0s, padding-left 0.3s ease 0s;
					margin-left: 0.5rem;


					@media only screen and (max-width: 1499px) {
						font-size: 2.4rem;	
					}

					@media only screen and (max-width: 1399px) {
						font-size: 2.2rem;	
					}

					&:hover {

						.pos {
							color: #fff;
						}

						&::after {
							width: 5rem;
						}
					}


					.pos {
						display: inline-block;
						font-size: 0.9rem;
						font-weight: 500;
						color: #46ECF5;
						position: absolute;
						left: 0;
						top: 1.5rem;
						line-height: 1;
						-webkit-transition: all 0.3s ease 0s;
						-moz-transition: all 0.3s ease 0s;
						transition: all 0.3s ease 0s;


						@media only screen and (max-width: 992px) {
							display: none;	
						}
					}

					&::after {
						content: '';
						display: block;
						height: 1px;
						background: #fff;
						position: absolute;
						width: 0;
						right: calc(100% - 4.5rem);
						bottom: 1.5rem;
						-webkit-transition: all 0.3s ease 0s;
						-moz-transition: all 0.3s ease 0s;
						transition: all 0.3s ease 0s;

						@media only screen and (max-width:992px) {
							display: none;	
						}
					}

				@media only screen and (max-width:992px) {
					padding: 0;	
				}

				@media only screen and (max-width:767px) {
					font-size: 1.5rem;	
				}
			}

			&:not(:last-child) {
				margin-bottom: 3.2rem;

				@media only screen and (max-width:1600px) {
					margin-bottom: 2rem;
				}

				@media only screen and (max-width:1399px) {
					margin-bottom: 1.5rem;
				}
			}
		}

		@media only screen and (max-width:992px) {
			margin: 0 auto 4rem;
			max-width: 100%;
			text-align: center;	
		}
	}

	.btn {
		color: #fff !important;
		border-color: #3de4e7;
		animation: none;
		border-width: 1px;
		overflow: visible;

		&:last-of-type {
			border-bottom: 1px solid #3de4e7;
		}

		&.order {
			z-index: 3;
		}

		&.presentation {
			z-index: 2;
		}

		&.order,
		&.presentation {
			border-bottom: 0 none;
		}

		&::before {
			display: none;
		}

		&::after {
			content: '';
			display: block;
			height: 2px;
			background: #fff;
			position: absolute;
			bottom: -1px;
			left: 51%;
			right: 51%;
			-webkit-transition: all 0.3s ease 0s;
			-moz-transition: all 0.3s ease 0s;
			transition: all 0.3s ease 0s;
		}

		&:hover {
			animation: none;

			&::after {
				left: 0;
				right: 0;
			}
		}
	}

	&_actions {
		line-height: 0;
		text-align: center;
		opacity: 0;
		transform: translateY(-50px);
		-webkit-transition: all 0.5s ease 0s;
		-moz-transition: all 0.5s ease 0s;
		transition: all 0.5s ease 0s;

		@media only screen and (max-width:992px) {
			margin: 0 auto 5rem;
			width: 33.3333%;	
		}

		@media only screen and (max-width:599px) {
			width: 100%;	
		}
	}

	.socials {
		margin-top: 3rem;

		li {

			a {
				color: #fff;

				img {
					filter: grayscale(0%) brightness(0) invert(1);
				}

				&::after {
					color: #fff;
				}
			}
		}
	}


	.overlay-logo {

		path {
			fill: rgba(255,255,255,0.1);
		}
	}

	.letters__overlay {
		width: 100%;
		bottom: 0;
		line-height: 0;
		max-width: 145rem;
		position: absolute;
		right: 5.2rem;
		z-index: 0;

		@media only screen and (max-width:1600px) {
			max-width: 128rem;
		}

		@media only screen and (max-width:1499px) {
			max-width: 110rem;
		}

		@media only screen and (max-width:1399px) {
			max-width: 104rem;
		}

		@media only screen and (max-width:1199px) {
			max-width: 85rem;
			right: 1.5rem;
		}

		@media only screen and (max-width:992px) {
			max-width: 100%;
			padding: 0 1.5rem;
			right: 50%;
			transform: translateX(50%);
		}
	}


	.overlay-logo {

		.letter {
			transform: translateX(-5%);
			opacity: 0;
			-webkit-transition: all 0.5s ease 0s;
			-moz-transition: all 0.5s ease 0s;
			transition: all 0.5s ease 0s;
		}

		@media only screen and (max-width:599px) {
			max-width: 1000rem;
			width: 460%;
			position: relative;
			left: .5rem;	
		}
	}


	&.active {
		opacity: 1;
		visibility: visible;
		transition-delay: 0s;
		transform: translateX(0);

		.main__nav_bg {

			&::after {
				transform: translateY(0) !important;
				transition-delay: 0s;
			}
		}


		.lines-wrapper {

			span {
				transform: translateY(0);

				&:nth-child(1) {
					transition-delay: 0.4s;
				}

				&:nth-child(2) {
					transition-delay: 0.5s;
				}

				&:nth-child(3) {
					transition-delay: 0.6s;
				}

				&:nth-child(4) {
					transition-delay: 0.7s;
				}
			}
		}


		.section-title {
			opacity: 1;
			transition-delay: 0.5s;

			.char {

				span {
					transform: translateX(0);
				}

				&:nth-child(1) {

					span {
						transition-delay: 0.8s;
					}
				}

				&:nth-child(2) {

					span {
						transition-delay: 0.85s;
					}
				}

				&:nth-child(3) {

					span {
						transition-delay: 0.9s;
					}
				}

				&:nth-child(4) {

					span {
						transition-delay: 0.95s;
					}
				}
			}
		}


		.main__menu {

			li {

				a {
					transform: translateY(0);
				}

				&:nth-child(5) {

					a {
						-webkit-transition: transform 0.75s ease 0.8s, padding-left 0.3s ease 0s;
						-moz-transition: transform 0.75s ease 0.8s, padding-left 0.3s ease 0s;
						transition: transform 0.75s ease 0.8s, padding-left 0.3s ease 0s;
					}
				}

				&:nth-child(4) {

					a {
						-webkit-transition: transform 0.75s ease 0.95s, padding-left 0.3s ease 0s;
						-moz-transition: transform 0.75s ease 0.95s, padding-left 0.3s ease 0s;
						transition: transform 0.75s ease 0.95s, padding-left 0.3s ease 0s;
					}
				}

				&:nth-child(3) {

					a {
						-webkit-transition: transform 0.75s ease 1.1s, padding-left 0.3s ease 0s;
						-moz-transition: transform 0.75s ease 1.1s, padding-left 0.3s ease 0s;
						transition: transform 0.75s ease 1.1s, padding-left 0.3s ease 0s;
					}
				}

				&:nth-child(2) {

					a {
						-webkit-transition: transform 0.75s ease 1.25s, padding-left 0.3s ease 0s;
						-moz-transition: transform 0.75s ease 1.25s, padding-left 0.3s ease 0s;
						transition: transform 0.75s ease 1.25s, padding-left 0.3s ease 0s;
					}
				}

				&:nth-child(1) {

					a {
						-webkit-transition: transform 0.75s ease 1.4s, padding-left 0.3s ease 0s;
						-moz-transition: transform 0.75s ease 1.4s, padding-left 0.3s ease 0s;
						transition: transform 0.75s ease 1.4s, padding-left 0.3s ease 0s;
					}
				}
			}
		}

		.main__nav_actions {
			transform: translateY(0);
			opacity: 1;
			transition-delay: 1.5s;
		}

		.overlay-logo {

			.letter {
				transform: translateX(0);
				opacity: 1;

				&:nth-child(1) {
					transition-delay: 1s;
				}

				&:nth-child(2) {
					transition-delay: 1.1s;
				}

				&:nth-child(3) {
					transition-delay: 1.2s;
				}

				&:nth-child(4) {
					transition-delay: 1.3s;
				}
			}
		}
	}
}

</style>