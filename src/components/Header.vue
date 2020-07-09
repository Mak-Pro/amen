<template>
	
	<header class="main__header">
		<div class="main__header_content">

			<router-link :to="{name: 'Main'}" exact class="main__header_logo" active-class="" exact-active-class="" :class="{'menu-active': displayNav.show}">

				<svg version="1.1" class="logo" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
					viewBox="0 0 216.6 45.3" style="enable-background:new 0 0 216.6 45.3;" xml:space="preserve">
					<g class="letter-wrapper first">
						<path class="letter" d="M17.6,0h10.4l17.3,45.3H34.1L30.7,36h-16l-3.5,9.3H0l6.9-18.2l10.4,0H28L17.6,0z"/>
					</g>
					<g class="letter-wrapper">
						<path class="letter" d="M60.4,0h10.4l12.3,28.1L95.5,0h10.3v45.3H95.7V22.6L85.6,45.3h-4.9L70.6,22.6v22.8H60.4V0z"/>
					</g>
					<g class="letter-wrapper">
						<path class="letter" d="M123,18.2h35.3v9H123V18.2z M123,9.7V0h35.3v9.7H123z M158.2,35.7v9.7H123v-9.7"/>
					</g>	
					<g class="letter-wrapper">
						<path class="letter" d="M176.3,0h11.6l17,27V0h11.7v45.3h-11.5l-17.1-27v27h-11.7V0z"/>
					</g>	
						
					
				</svg>
			</router-link>

		<div class="hamb-wrapper" :class="{'menu-active': displayNav.hamburgerPreventClick}">

			<get-started-link></get-started-link>

			<div class="hamburger mobile-menu-button" @click="toggleNav({delay: 2000})" :class="{'menu-opened': displayNav.show}">
				<div class="inner">
					<div class="hamburger-box-wrapper">
						<div class="hamburger-box">
							<div class="hamburger-inner">
								<span class="line top"></span>
								<span class="line bottom"></span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<ul class="languages-list" :class="{'menu-opened': displayNav.show}">
				<li class="ua active" data-lang="ua"><a href="http://amen-vue-ua.1pls1.com/">UA</a></li>
			</ul>
		</div>
		

	</div>
</header>


</template>

<script>

import getStartedLink from '../components/GetStartedLink.vue';

import { TimelineMax, SplitText } from 'gsap';
import { mapActions, mapGetters } from 'vuex';
import * as types from '../store/types.js';

export function headerAnimation() {

	let logoIconLetters = document.querySelectorAll('.main__header_logo .logo .letter'),
			hamb = document.querySelector('.hamb-wrapper'),
			lang = document.querySelector('.languages-list'),
			gs = document.querySelector('.main__header .get__started');

	const htl = new TimelineMax();

	htl
		.set([logoIconLetters, hamb, lang], {visibility: "visible", opacity: 1})
		.from(logoIconLetters, 1.8, {y:"-150%", ease: Power4.easeOut})
		.from(hamb, 1.8, {x:"200%", ease: Power4.easeOut, onComplete: function() {
			document.querySelector('.main__header_logo .logo').classList.add('show-letters');
		}}, '-=1.8');


		if(window.innerWidth < 1200) {
			gs.classList.add('show');
		}

}


export default {

	components: {
		'get-started-link': getStartedLink,
	},

	computed: {
		...mapGetters({
			'displayNav': types.TOGGLE_NAVIGATION
		})
	},

  methods: {
		...mapActions({
			'toggleNav': types.TOGGLE_NAVIGATION_ACTION
		}),

		setLocale(data) {
			import(`../langs/${data}.json`).then(msgs => {
				this.$i18n.setLocaleMessage(data.locale, msgs);
				this.$i18n.locale = data.locale;
			});
		},
	},

	mounted() {
		
		if(window.innerWidth < 1200) {

			let lst = window.pageYOffset;
			if(lst > 0) { document.querySelector('.main__header').classList.add('mob-sticky'); }

			window.addEventListener('scroll', (e) => {
				let st = window.pageYOffset;
				st > 0 ? document.querySelector('.main__header').classList.add('mob-sticky') : document.querySelector('.main__header').classList.remove('mob-sticky');
			});
		}
		

		document.querySelectorAll('.languages-list li a').forEach((link) => {
			let thisLang = link.closest('li').getAttribute('data-lang');
			link.addEventListener('click', () => {
				document.querySelectorAll('.languages-list li').forEach((li) => {
					if(li.classList.contains('active')) {
						li.classList.remove('active');
					}
					else {
						li.classList.add('active');
					}
				});
				
			});
			
		});

	}
}
</script>

<style lang="scss" scoped>
	@import '../variables.scss';

	/* ---------- languages ---------- */

	.languages-list {
		position: relative;
		list-style: none;
		margin: 0.8rem 0 0;
		padding: 0;
		font-size: 1.2rem;
		font-weight: 300;
		text-align: center;
		-webkit-transition: all 0.3s ease 0.3s;
		-moz-transition: all 0.3s ease 0.3s;
		transition: all 0.3s ease 0.3s;
		visibility: hidden;
		opacity: 0;
		display: none;

		@media only screen and (max-width: 1199px) {
			margin-top: 0;
			order: 0;
			margin-right: 0.9rem;
			min-width: 2.2rem;
			margin-left: 2rem;
		}

		&.menu-opened {
			transition-delay: 0s;
			opacity: 0 !important;
			visibility: hidden !important;
			filter: grayscale(0) brightness(0) invert(1);
		}

		&.white {

			li {

				a {
					color: #fff;
				}
			}
		}

		li {
			left: 0;
			width: 100%;

			&.active {
				position: relative;
				opacity: 1;
				visibility: visible;
			}

			a {
				color: $black;
			}
		}
	}




	/* ---------- hamburger ---------- */

	.hamburger {
		width: 40px;
		height: 40px;
		line-height: 0;
		position: relative;
		margin-top: -1px;
		z-index: 2;
		cursor: pointer;
		filter: none;
		-webkit-transition: all 0.3s ease 0.3s;
		-moz-transition: all 0.3s ease 0.3s;
		transition: all 0.3s ease 0.3s;
		overflow: hidden;

		@media only screen and (max-width: 1199px) {
			order: 1;	
		}

		.inner {
			position: absolute;
			left: 50%;
			top: 50%;
			transform: translate(-50%, -50%);
			margin-top: 0.2rem;
		}

		.hamburger-box {
			width: 20px;
			height: 13px;
			display: inline-block;
			position: relative;

			.hamburger-inner {
				display: block;
				width: 20px;
				height: 1px;
				top: 50%;
				margin-top: -2px;
				background-color: $black;
				position: absolute;
				transition-property: transform;
				transition-duration: 0.15s;
				transition-timing-function: ease;
				transition: margin-top 1s ease 0s, transform 0.075s 0.15s cubic-bezier(0.55, 0.055, 0.675, 0.19), background-color 0s 0s linear;

				.line {
					display: block;
					width: 20px;
					height: 1px;
					background-color: $black;
					position: absolute;
					transition-property: transform;
					transition-duration: 0.15s;
					transition-timing-function: ease;

					&.top {
						top: -6px;
						transition: top 0.075s 0.075s ease-in, transform 0.075s 0s cubic-bezier(0.55, 0.055, 0.675, 0.19);
					}

					&.bottom {
						width: 15px;
						bottom: -6px;
						transition: bottom 0.075s 0.075s ease-in, transform 0.075s 0s cubic-bezier(0.55, 0.055, 0.675, 0.19);
					}
				}
			}


			@keyframes lineone {
				0% {
					width: 0;
				}
				100% {
					width: 100%;
				}
			}

			@-webkit-keyframes lineone {
				0% {
					width: 0;
				}
				100% {
					width: 100%;
				}
			}

			@keyframes linetwo {
				0% {
					width: 0;
				}
				30% {
					width: 0;
				}
				100% {
					width: 100%;
				}
			}

			@-webkit-keyframes linetwo {
				0% {
					width: 0;
				}
				30% {
					width: 0;
				}
				100% {
					width: 100%;
				}
			}

			@keyframes linethree {
				0% {
					width: 0;
				}
				40% {
					width: 0;
				}
				100% {
					width: 15px;
				}
			}

			@-webkit-keyframes linethree {
				0% {
					width: 0;
				}
				40% {
					width: 0;
				}
				100% {
					width: 15px;
				}
			}
		}


		&.menu-opened {
			filter: grayscale(0) brightness(0) invert(1);

			.hamburger-inner {
				height: 0;
				margin-top: -5px;
				transform: rotate(90deg);
				background-color: transparent;
				transition: margin-top 1s ease 0s, transform 0.075s 0s cubic-bezier(0.215, 0.61, 0.355, 1), background-color 0s 0s linear;
				animation: none !important;

				.line {

					&.top {
						width: 30px;
						top: -1px;
						transform: rotate(-45deg);
						transition: width 0.075s ease 0s, top 0.075s 0.1s ease-out, transform 0.075s 0.15s cubic-bezier(0.215, 0.61, 0.355, 1);
						animation: none !important;
					}

					&.bottom {
						width: 30px;
						bottom: 0px;
						transform: rotate(45deg);
						transition: width 0.075s ease 0s, bottom 0.075s 0.1s ease-out, transform 0.075s 0.15s cubic-bezier(0.215, 0.61, 0.355, 1);
						animation: none !important;
					}
				}
			}
		}


		&:hover {

			.hamburger-inner {
				animation: linetwo 0.6s ease;

				.top {
					animation: lineone 0.4s ease;
				}

				.bottom {
					animation: linethree 0.8s ease;
				}
			}
		}

		&.white,
		&.half-white {
			.hamburger-box {

				.hamburger-inner {
					background-color: $white;

					.line {
						background-color: $white;
					}
				}
			}
		}
	}




	/* ---------- Header ---------- */

	.main__header {
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		z-index: 100;

		@media only screen and (max-width:1199px) {
			background: #fff;
			border-bottom: 1px solid #EBEFEF;
			-webkit-transition: all 0.3s ease 1s;
			-moz-transition: all 0.3s ease 1s;
			transition: all 0.3s ease 1s;
		}

		&_content {
			display: flex;
			align-items: flex-start;
			justify-content: space-between;
			padding: 3.8rem 5rem;

			@media only screen and (min-width: 1200px) {
				max-height: 0;
				float: left;
				width: 100%;
				padding-bottom: 0;
			}

			@media only screen and (max-width:1600px) {
				padding: 1.5rem 3rem;
			}

			@media only screen and (max-width:1399px) {
				padding: 1rem 2rem;
			}

			@media only screen and (max-width:1199px) {
				padding: 1.5rem 3rem;
			}
		}

		&_logo {
			position: relative;
			display: block;
			width: 100%;
			max-width: 6.2rem;
			line-height: 1.2;
			overflow: hidden;
			top: 1rem;

			@media only screen and (min-width: 1200px) {
				float: left;	
			}

			.logo {

				&.show-letters {

					.letter {
						visibility: visible;
					}
				}
			}
			

			.logo {
				position: relative;
				transform: translateY(0);
				-webkit-transition: all 0.3s ease 0s;
				-moz-transition: all 0.3s ease 0s;
				transition: all 0.3s ease 0s;
				transition-delay: 0.8s;

				path {
					-webkit-transition: all 0.3s ease 0s;
					-moz-transition: all 0.3s ease 0s;
					transition: all 0.3s ease 0s;
				}

				.letter-wrapper {
					-webkit-transition: all 0.3s ease 0s;
					-moz-transition: all 0.3s ease 0s;
					transition: all 0.3s ease 0s;
				}

				.letter {
					visibility: hidden;

					@media only screen and (max-width: 1199px) {
						fill: $black !important;	
					}
				}
			}


			&.short {
				overflow: visible;
				
				.logo {

					.letter-wrapper {

						&:not(.first) {
							transform: translateX(-2rem);
							opacity: 0;
						}

						&.first {
							transform: translateX(-0.4rem) translateY(-1.2rem) scale(1.5) !important;
						}
					}
				}

			}

			&.menu-active {

				.logo {
					transform: translateY(-120%);
					transition-delay: 0s;

					path {
						fill: #fff;
					}
				}
			}

			&.white {

				.logo {

					path {
						fill: #fff;

						@media only screen and (max-width: 1199px) {
							// fill: $black;	
						}
					}
				}
			}

			&:hover {

				.logo {

					.letter-wrapper {
						
						.letter {
							animation: lettersshow 0.5s ease-out 0s forwards;
						}

						&:nth-child(2) {
							.letter {
								animation-delay: 0.05s;
							}
						}
						&:nth-child(3) {
							.letter {
								animation-delay: 0.1s;
							}
						}
						&:nth-child(4) {
							.letter {
								animation-delay: 0.15s;
							}
						}
					}
				}
			}

			@keyframes lettersshow {
				0% {
					opacity: 0;
					transform: translateY(-100%);
				}

				20% {
					opacity: 0;
					transform: translateY(-100%);
				}

				100% {
					opacity: 1;
					transform: translateY(0);
				}
			}

			@-webkit-keyframes lettersshow {
				0% {
					opacity: 0;
					transform: translateY(-100%);
				}

				20% {
					opacity: 0;
					transform: translateY(-100%);
				}

				100% {
					opacity: 1;
					transform: translateY(0);
				}
			}

			@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
				position: relative;
				top: 1.2rem;	
			}

		}


		.get__started {
			font-size: 0;
			position: relative;
			width: 2.4rem;
			letter-spacing: 0;
			right: 0;
			bottom: 0;
			display: none;

			@media only screen and (max-width: 1199px) {
				display: block;
				transform: translateY(0) !important;
				margin-right: 1rem;
			}



			&.show {
				opacity: 1;
				visibility: visible;
			}
		}

		.hamb-wrapper {
			position: relative;
			right: -1rem;
			overflow: hidden;
			visibility: hidden;

			@media only screen and (min-width: 1200px) {
				float: right;	
			}

			@media only screen and (max-width: 1199px) {
				display: flex;
				align-items: center;
				right: -0.5rem;
			}

			&::after {
				content: '';
				display: block;
				position: absolute;
				left: 0;
				top: 0;
				right: 0;
				bottom: 0;
				z-index: 2;
				visibility: hidden;
			}

			&.menu-active {

				&::after {
					visibility: visible;
				}
			}
		}

		&.no-sticky {
			background: transparent !important;
			border-color: transparent;
			transition-delay: 0s !important;
		}

		&.mob-sticky {
			background: #FFFFFF;

			.logo {

				path {
					fill: $black !important;
				}
			}

			.hamburger-box {

				.hamburger-inner {
					background-color: $black !important;

					.line {
						background-color: $black !important;
					}
				}
			}

			&.no-sticky {
				background: transparent !important;
			}
		}
	}


</style>