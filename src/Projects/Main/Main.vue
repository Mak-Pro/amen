<template>
	<div id="main">
		<full-page ref="fullpage" :options="options" v-if="showFullPage">
			<hero-section></hero-section>
			<slider-section></slider-section>
			<div id="page-wrapper-2" class="page-wrapper auto" data-anchor="3" data-tooltip-text="03">
				<div class="inner">
					<about-section></about-section>
					<ourteam-section></ourteam-section>
					<contactus-section></contactus-section>
					<footer-section></footer-section>
				</div>
			</div>
		</full-page>
		<hero-section v-if="!showFullPage"></hero-section>
		<slider-section v-if="!showFullPage"></slider-section>
		<div id="page-wrapper-2" class="page-wrapper auto" data-anchor="3" data-tooltip-text="03" v-if="!showFullPage">
			<div class="inner">
				<about-section></about-section>
				<ourteam-section></ourteam-section>
				<contactus-section></contactus-section>
				<footer-section></footer-section>
			</div>
		</div>
	</div>
</template>

<script>

import HeroSection from './Sections/Hero.vue';
import SliderSection from './Sections/Slider/Slider.vue';
import AboutSection from './Sections/AboutUs.vue';
import OurTeamSection from './Sections/OurTeam.vue';
import ContactUsSection from './Sections/ContactUs.vue';
import Footer from '../../components/Footer.vue';

import { TimelineMax, SplitText, MorphSVGPlugin } from 'gsap';
import SimpleScrollbar from 'simple-scrollbar';

import { phantasmaAnimation, slideStructureAnimation, setSliderComponentsVisible } from './Sections/Slider/Phantasma-slide.vue';

let pageAnchors = [];

let scrollCount = 0;

import * as types from '../../store/types.js';
import { mapGetters } from 'vuex';

import { pageTransitionDuration } from '../../App.vue';
import { heroContentAnimation } from './Sections/Hero.vue';

const plugins = [ TimelineMax, SplitText ];

let heroAnimationTrigger = true;

function pageNumsAnimation() {
	let pageNums = document.querySelectorAll('#fp-nav ul a');
	const pntl = new TimelineMax();
	pntl
		.set(pageNums, {visibility: "visible"})
		.to(pageNums, 1, {y:"0%", ease: Power4.easeOut});
}



export default {

	created() {
		if(window.innerWidth < 1200) {
			this.showFullPage = false;
		}
	},

  data () {

    return {
    	showFullPage: true,
			options: {
				sectionSelector: '.page-wrapper',
				// navigation: true,
				menu: '#main-menu',
				showActiveTooltip: true,
				anchors: pageAnchors,
				scrollingSpeed: 1000,
				autoScrolling: true,
				slidesNavigation: false,
				scrollHorizontally: true,
				scrollOverflow: false,
				easingcss3: 'cubic-bezier(.6,0,.4,1)',
				afterRender: function(index, nextIndex, direction){
					document.querySelector('.project__slide_image').style.visibility = 'hidden';
					document.querySelector('.project__slide_text').style.visibility = 'hidden';
					document.querySelector('.projects__info').style.visibility = 'hidden';


					// hamburger
					document.querySelector('.hamburger').addEventListener('click',(e) => {
						if(document.querySelector('.hamburger').classList.contains('menu-opened')) {
							fullpage_api.setAllowScrolling(false);
						}
						else {
							fullpage_api.setAllowScrolling(true);
						}
					});

					document.querySelector('.play__showreel_btn').addEventListener('click',(e) => {
						fullpage_api.setAllowScrolling(false);
					});


					// dots
					document.querySelectorAll('.page-wrapper').forEach(function(item, index) {
						var tooltipText = item.getAttribute('data-tooltip-text');
						var anchorUrl = item.getAttribute('data-anchor');
						document.querySelectorAll('#fp-nav li').forEach(function(li, liindex) {
							if(liindex == index) {
								li.querySelector('span').textContent = tooltipText;
							}
						});
					});
					

					// scroll bar
					var scrollContainer = document.querySelector('.auto .inner');
					SimpleScrollbar.initEl(scrollContainer);

					document.querySelector('.page-wrapper.auto .inner .ss-content').addEventListener('scroll', function() {
						let thisScrollTop = document.querySelector('.page-wrapper.auto .inner .ss-content').scrollTop;

						if(thisScrollTop > 0) {
							fullpage_api.setAllowScrolling(false, 'up');
						}
						else {
							fullpage_api.setAllowScrolling(true);
						}
						// if(thisScrollTop > 100) {
						// 	document.querySelector('#fp-nav').classList.add('hide');
						// }
						// else {
						// 	document.querySelector('#fp-nav').classList.remove('hide');
						// }

						if(window.innerWidth > 719) {
							document.querySelectorAll('.ss-content section').forEach(function(section) {
								var thisAttrOfset = section.getAttribute('data-offset') - window.innerHeight/2;
								if(thisScrollTop > thisAttrOfset) {
									section.classList.add('animated');
								}
							});
						}
					});


				},
				afterLoad: function(anchorLink, index) {
					history.pushState(null, null, window.location.href.split('#')[0]);
				},
				onLeave: function(index, nextIndex, direction) {
					
					// var splashVideo = document.querySelector('#splash__video');
					// splashVideo.muted = true;
					document.querySelector('.play__showreel_controls').classList.remove('eq-only');
					document.querySelector('.sound__control').classList.remove('play');
					
					/*if(nextIndex.index == 0) {
						document.querySelector('.play__showreel_controls').classList.add('eq-only');
					}*/


					if(document.querySelector('#video-anker') !== null) {
						document.querySelector('#video-anker').play();
					}
					if(document.querySelector('#video-dc') !== null) {
						document.querySelector('#video-dc').play();
					}

					if(document.querySelector('#splash__video') !== null) {
						document.querySelector('#splash__video').play();
					}

					if(nextIndex.index !== 1 && document.querySelector('.ankr__slide.active') !== null) {
						setTimeout(() => {
							document.querySelector('.main__header_logo').classList.remove('white');
							document.querySelector('.socials.side').classList.remove('white');
						}, 200);
					}
					if(nextIndex.index == 1 && document.querySelector('.ankr__slide.active') !== null) {
						setTimeout(() => {
							document.querySelector('.main__header_logo').classList.add('white');
							document.querySelector('.socials.side').classList.add('white');
						}, 200);
					}

					if(direction =='down'){
						scrollCount++;
						if(scrollCount == 1) {
							setTimeout(function() {
								slideStructureAnimation();
							}, 1000);
						}

						if(scrollCount == 2 || nextIndex.index == 2) {
							setTimeout(function() {
								document.querySelector('#about').classList.add('animated');
							}, 500);
						}

						document.querySelector('.main__header_logo').classList.add('short');
					}

					if(direction =='up'){
						document.querySelector('.main__header_logo').classList.remove('short');
					}
				}
      },
    }
  },

  computed: {
  	...mapGetters({
  		'displayModal': types.TOGGLE_MODAL,
  		'displayNav': types.TOGGLE_NAVIGATION
  	})
  },

  components: {
		'hero-section': HeroSection,
		'slider-section': SliderSection,
		'about-section': AboutSection,
		'ourteam-section': OurTeamSection,
		'contactus-section': ContactUsSection,
		'footer-section': Footer
  },

  watch: {
  	displayModal: function() {
  		if(window.innerWidth > 1199) {
  			this.displayModal.show || this.displayNav.show ? fullpage_api.setAllowScrolling(false) : fullpage_api.setAllowScrolling(true);
  		}
  	}
  },

  mounted() {

  	
  	document.querySelector('.play__showreel_controls').classList.remove('hidden');


  	// document.querySelector('.play__showreel_controls').classList.add('eq-only');


  	//Split section titles to chars
  	/*let titleChars = document.querySelectorAll('.page-wrapper.auto .section-title.chars');
  	titleChars = new SplitText(titleChars, {type:"chars", charsClass:"char"});

  	document.querySelectorAll('.page-wrapper.auto .section-title.chars .char').forEach((char) => {
			let initialHtml = char.innerHTML;
			let newHtml = `<div>${initialHtml}</div>`;
			char.innerHTML = newHtml;
  	});*/


  	//First Animations

  	setTimeout(() => {
  		if(heroAnimationTrigger) {
  			heroContentAnimation(true);
  		}
  		
  		if(heroAnimationTrigger == false) {
  			heroContentAnimation(false);
  		}

  		heroAnimationTrigger = false;


  		window.scrollTo(0, 0);
			document.querySelector('.main__header').classList.remove('mob-sticky');
			document.querySelector('.main__header_logo').classList.remove('short');
  		
  	}, 1000);
		
		

		document.querySelector('.main__header_logo').classList.remove('white');
		document.querySelector('.socials.side').classList.remove('white');
		document.querySelector('.hamburger').classList.remove('white');
		document.querySelector('.get__started').classList.remove('white');
		document.querySelector('#app > .get__started').classList.remove('white');
		document.querySelector('.languages-list').classList.remove('white');
		document.querySelector('.languages-list li a').removeAttribute('style');
		document.querySelector('.play__showreel_btn').classList.remove('white');
		
		document.querySelectorAll('.main__header_logo .logo path').forEach((path) => {
			path.removeAttribute('style');
		});
		document.querySelector('.hamburger-inner').removeAttribute('style');
		document.querySelectorAll('.hamburger-inner .line').forEach((line) => {
			line.removeAttribute('style');
		});
		


		// Desktop base animations
  	if(scrollCount >= 1 && window.innerWidth > 1199) {
  		setSliderComponentsVisible();
  	}


		if(window.innerWidth > 1199) {
			if(heroAnimationTrigger) {
				document.querySelectorAll('.page-wrapper.auto section').forEach((section) => {
					let thisOffset = Math.floor(section.offsetTop);
					section.setAttribute('data-offset', thisOffset);
				});

				let ssLastScrollTop = document.querySelector('.page-wrapper.auto .ss-content').scrollTop;

				document.querySelector('.page-wrapper.auto .ss-content').addEventListener('scroll', () => {
					var dmst = document.querySelector('.page-wrapper.auto .ss-content').scrollTop;
					document.querySelectorAll('.page-wrapper.auto section').forEach((section) => {
						let thisDataOffset = section.getAttribute('data-offset') - window.innerHeight/2;
						if(dmst > thisDataOffset) {
							section.classList.add('animated');
						}
						if(dmst > ssLastScrollTop) {
							document.querySelector('.main__header_logo').classList.add('short');
						}
						else {
							document.querySelector('.main__header_logo').classList.remove('short');
						}
					});
					ssLastScrollTop = dmst;
				});
			}
			else {
				document.querySelectorAll('.page-wrapper.auto section').forEach((section) => {
					section.classList.add('done');
				});
			}
			
		}



  	if(window.innerWidth < 1200) {

  		let sliderAnimationTrigger = 0,
  		sliderSectionOffsetTop = document.querySelector('.page-wrapper.slider').offsetTop/2;

  		document.querySelectorAll('.page-wrapper.auto section').forEach((section) => {
  			let thisOffset = Math.floor(section.getBoundingClientRect().top);
  			section.setAttribute('data-offset', thisOffset);
  		});


  		let mlastScrollTop = window.scrollY || document.documentElement.scrollTop;

  		window.addEventListener('scroll', () => {
  			var mst = window.scrollY || document.documentElement.scrollTop;
  			if(mst >= sliderSectionOffsetTop) {
  				sliderAnimationTrigger++;
  				if(sliderAnimationTrigger < 2) {
  					slideStructureAnimation();
  				}
  			}

  			document.querySelectorAll('.page-wrapper.auto section').forEach((section) => {
  				let thisDataOffset = section.getAttribute('data-offset') - window.innerHeight/1.2;
					if(mst > thisDataOffset) {
						section.classList.add('animated');
					}
  			});


  			if(mst > mlastScrollTop) {
  				document.querySelector('.main__header_logo').classList.add('short');
  			}
  			else {
  				document.querySelector('.main__header_logo').classList.remove('short');
  			}

				mlastScrollTop = mst;


  		});

  	}
  },

  beforeDestroy() {
  	if(window.innerWidth > 1199) {
  		if(document.querySelector('#main') !== null && document.querySelector('body').classList.contains('fp-viewing-2')) {
  			document.querySelector('#main').style.transform = "translateY(-100vh)";
  		}
  	}
  },

  destroyed() {
  	if(window.innerWidth > 1199) {
  		setTimeout(() => {
  			if(document.querySelector('#main') !== null) {
  				document.querySelector('#main').style.transform = "";
  			}
  		}, pageTransitionDuration);
  	}
  }
}
</script>

<style lang="scss">

@import '../../variables.scss';

#main {
	min-height: 100vh;
	background: $white;
	-webkit-backface-visibility: hidden;
	backface-visibility: hidden;
	will-change: transform;

	@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
		overflow: hidden;	
	}

	.fullpage-wrapper {
		min-height: 100vh;
	}
}

.page-wrapper {
	min-height: 100vh;
	position: relative;

	.fp-tableCell {
		position: relative;
	}

	.content__wrapper {
		position: relative;
		z-index: 1;
		overflow: hidden;
	}

	&.intro {

		.lines-wrapper {

			span {
				transform: translateY(-100%);
			}
		}
	}

	&.auto {

		.inner {
			position: absolute;
			left: -18px;
			top: 0;
			width: -webkit-calc(100% + 18px);
			width: calc(100% + 18px);
			height: 100%;
			overflow-y: auto;

			@media only screen and (max-width:1199px) {
				position: relative;
				left: 0;
				top: 0;
				width: 100%;
				height: auto;	
			}
		}

		section {
			min-height: 100vh;
			position: relative;

			.content {
				min-height: 100vh;
				display: flex;
				align-items: center;

				@media only screen and (max-width: 992px) {
					min-height: 1rem;	
				}
			}

			.animation {
				position: relative;
				top: 5rem;
				opacity: 0;
				-webkit-transition: all 1s ease 0.3s;
				-moz-transition: all 1s ease 0.3s;
				transition: all 1s ease 0.3s;
			}

			.chars {

				.char {

					div {
						transform: translateX(-100%);
						-webkit-transition: all 0.5s ease-out 0s;
						-moz-transition: all 0.5s ease-out 0s;
						transition: all 0.5s ease-out 0s;
					}
				}
			}

			&.animated {

				.animation {
					top: 0;
					opacity: 1;
				}

				.chars {

					.char {

						div {
							transform: translateX(0);
						}
					}
				}

				.person__item_image {
					clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
					transition-delay: 0.7s;
				}
			}

			&.done {

				.animation {
					top: 0;
					opacity: 1;
					transition: none !important;
				}

				.chars {

					.char {

						div {
							transform: translateX(0);
							transition: none !important;
						}
					}
				}
			}

			@media only screen and (max-width: 992px) {
				min-height: 1rem;	
			}
		}

		@media only screen and (max-width: 992px) {
			margin-top: -18rem;
		}

		@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
			margin-top: 0;

			.lines-wrapper {
				display: none;
			}	
		}
	}

	@media only screen and (max-width: 992px) {
		min-height: 1rem;	
	}
}


#fp-nav {
	position: fixed;
	top: 50%;
	transform: translateY(-50%);
	left: auto;
	right: 0;
	margin: 0 !important;
	-webkit-transition: all 0.3s ease 0s;
	-moz-transition: all 0.3s ease 0s;
	transition: all 0.3s ease 0s;
	opacity: 1;
	visibility: visible;

	ul {
		margin: 0;
		padding: 0;
		list-style: none;

		li {
			overflow: hidden;

			a {
				display: block;
				width: 3rem;
				height: 3rem;
				font-size: 1.1rem;
				font-weight: 300;
				color: $black;
				text-align: center;
				line-height: 3rem;
				position: relative;
				padding-right: 6.5rem;
				visibility: hidden;
				transform: translateY(-100%);
				-webkit-transition: none;
				-moz-transition: none;
				transition: none;

				&::after {
					content: '';
					display: block;
					height: 1px;
					background: $blue-light;
					width: 3rem;
					position: absolute;
					top: 50%;
					transform: translateX(100%) translateY(-50%);
					right: 0;
					-webkit-transition: all 0.5s ease 0s;
					-moz-transition: all 0.5s ease 0s;
					transition: all 0.5s ease 0s;

					@media only screen and (max-width:1600px) {
						width: 2rem;
					}

					@media only screen and (max-width:1399px) {
						width: 1.3rem;
					}
				}

				&.active {

					&::after {
						transform: translateX(0) translateY(-50%);
					}
				}

				@media only screen and (max-width:1600px) {
					width: 2rem;
					padding-right: 4.5rem;
				}

				@media only screen and (max-width:1399px) {
					font-size: 1rem;
					padding-right: 3.5rem;
				}
			}

			&:not(:last-child) {
				margin-bottom: 4.2rem;

				@media only screen and (max-width:1600px) {
					margin-bottom: 3rem;
				}
			}
		}
	}

	&.hide {
		opacity: 0;
		visibility: hidden;
	}
}




</style>