<template>

	<div id="page-wrapper-1" class="slider page-wrapper" data-anchor="2" data-tooltip-text="02" data-target="slider">
		<div class="projects__slider" v-touch:swipe.left="leftSlide" v-touch:swipe.right="rightSlide">
			<transition-group
			tag="div" 
			@enter="enter"
			@leave="leave">
			<phantasma v-show="currentSlideAction.currentSlide == 'phantasma'" key="phantasma" :class="{'active': currentSlideAction.currentSlide == 'phantasma'}"></phantasma>
			<ankr v-show="currentSlideAction.currentSlide == 'ankr'" key="ankr" :class="{'active': currentSlideAction.currentSlide == 'ankr'}"></ankr>
			<deepcloud v-show="currentSlideAction.currentSlide == 'deepcloud'" key="deepcloud" :class="{'active': currentSlideAction.currentSlide == 'deepcloud'}"></deepcloud>
			<nos v-show="currentSlideAction.currentSlide == 'nos'" key="nos" :class="{'active': currentSlideAction.currentSlide == 'nos'}"></nos>
		</transition-group>
		

		<div class="projects__info not-show">
			<div class="slider__controls" :class="{'prevent': this.preventControls}">
				<div class="control prev" @click="prevSlide('backward')">
					<span></span><i class="fal fa-angle-left"></i>
				</div>
				<div class="control next" @click="nextSlide('forward')">
					<span></span><i class="fal fa-angle-right"></i>
				</div>
			</div>
			<div class="projects__info_text not-show">
				<ul class="next__project_info_list clear">
					<li class="not-show">
						<p class="next__progect_text">Next project:</p>
					</li>
					<li class="not-show">
						<div class="next__progect_logo">
							<div class="next__progect_logo_icon">
								<a href="javascript:void(0);" target="_blank">
									<transition
									enter-class="text-in" 
									enter-active-class="text-show" 
									leave-active-class="text-out" 
									mode="out-in"
									>
									<picture v-if="currentSlideAction.currentSlide =='phantasma'" key="ankr">
										<source :srcset="require(`@/assets/img/ankr-icon.webp`)" type="image/webp">
										<source :srcset="require(`@/assets/img/ankr-icon.png`)" type="image/png">
										<img :src="require(`@/assets/img/ankr-icon.png`)" alt="ankr">
									</picture>

									<picture v-if="currentSlideAction.currentSlide =='ankr'" key="deepcloud">
										<source :srcset="require(`@/assets/img/deepcloud-icon.webp`)" type="image/webp">
										<source :srcset="require(`@/assets/img/deepcloud-icon.png`)" type="image/png">
										<img :src="require(`@/assets/img/deepcloud-icon.png`)" alt="ankr">
									</picture>

									<picture v-if="currentSlideAction.currentSlide =='deepcloud'" key="nos">
										<source :srcset="require(`@/assets/img/nos-icon.webp`)" type="image/webp">
										<source :srcset="require(`@/assets/img/nos-icon.png`)" type="image/png">
										<img :src="require(`@/assets/img/nos-icon.png`)" alt="ankr">
									</picture>

									<picture v-if="currentSlideAction.currentSlide =='nos'" key="phantasma">
										<source :srcset="require(`@/assets/img/phantasma-icon.webp`)" type="image/webp">
										<source :srcset="require(`@/assets/img/phantasma-icon.png`)" type="image/png">
										<img :src="require(`@/assets/img/phantasma-icon.png`)" alt="ankr">
									</picture>


									<!-- <img v-if="currentSlideAction.currentSlide =='phantasma'" key="ankr" src="../../../../assets/img/ankr-icon.png" alt="ankr"> -->
									<!-- <img v-if="currentSlideAction.currentSlide =='ankr'" key="deepcloud" src="../../../../assets/img/deepcloud-icon.png" alt="deepcloud"> -->
									<!-- <img v-if="currentSlideAction.currentSlide =='deepcloud'" key="nos" src="../../../../assets/img/nos-icon.png" alt="nos"> -->
									<!-- <img v-if="currentSlideAction.currentSlide =='nos'" key="phantasma" src="../../../../assets/img/phantasma-icon.png" alt="phantasma"> -->
								</transition>
							</a>
						</div>

						<div class="next__progect_logo_text">
							<p class="next__progect_text">
								<span class="title">
									<transition
									enter-class="text-in" 
									enter-active-class="text-show" 
									leave-active-class="text-out" 
									mode="out-in"
									>
									<span v-if="currentSlideAction.currentSlide =='phantasma'" key="ankr">Ankr</span>
									<span v-if="currentSlideAction.currentSlide =='ankr'" key="deepcloud">DeepCloud AI</span>
									<span v-if="currentSlideAction.currentSlide =='deepcloud'" key="nos">nOS</span>
									<span v-if="currentSlideAction.currentSlide =='nos'" key="phantasma">Phantasma Chain</span>
								</transition>
							</span>
							<span class="next__progect_name">
								<transition
								enter-class="text-in" 
								enter-active-class="text-show" 
								leave-active-class="text-out" 
								mode="out-in"
								>
								<span v-if="currentSlideAction.currentSlide =='phantasma'" key="ankr">Distributed Cloud Computing Network</span>
								<span v-if="currentSlideAction.currentSlide =='ankr'" key="deepcloud">Next Generation Cloud Computing</span>
								<span v-if="currentSlideAction.currentSlide =='deepcloud'" key="nos">Discover &amp; Build the web of the future</span>
								<span v-if="currentSlideAction.currentSlide =='nos'" key="phantasma">Next-Generation Content Distribution</span>
							</transition>
						</span>
					</p>
				</div>
			</div>
		</li>
	</ul>
</div>
</div>

<div class="pagination__box">
	<span v-for="(bullet, index) in currentSlideAction.slides" :class="{'active': index == currentSlideAction.slideNum}"></span>
</div>

</div>
</div>


</template>

<script>

	import PhantasmaSlide from './Phantasma-slide.vue';
	import AnkrSlide from './Ankr-slide.vue';
	import DeepcloudSlide from './Deepcloud-slide.vue';
	import NosSlide from './Nos-slide.vue';


	import { mapGetters, mapActions } from 'vuex';
	import * as types from '../../../../store/types.js';

	export default {

		data () {
			return {
				preventControls: false
			}
		},

		components: {
			'phantasma': PhantasmaSlide,
			'ankr': AnkrSlide,
			'deepcloud': DeepcloudSlide,
			'nos': NosSlide
		},

		methods: {
			...mapActions({
				'nextSlide': types.NEXT_SLIDE_ACTION,
				'prevSlide': types.PREV_SLIDE_ACTION
			}),


			leftSlide() {
				if(window.innerWidth < 600) {
					this.nextSlide('forward');
				}
			},

			rightSlide() {
				if(window.innerWidth < 600) {
					this.prevSlide('backward');
				}
			},


			enter(el, done) {
				this.preventControls = true;
				let moveTl = new TimelineMax(),
				resetTl = new TimelineMax(),
				linesDiv = el.querySelectorAll('.project__slide_text .split.lines > div'),
				divider = el.querySelector('.project__slide_text .divider'),
				charDiv = el.querySelectorAll('.project__slide_text .char > div'),
				slideImage = el.querySelector('.project__slide_image'),
				description = el.querySelector('.project__description'),
				projectCase = el.querySelector('.project__case'),
				projectLink = el.querySelector('.project__link');
				if(this.currentSlideAction.slideMoveDirection == 'backward') {
					resetTl
					.to([linesDiv,divider,charDiv,slideImage,description, projectCase, projectLink], 0, {clearProps:"all", onComplete: () => {
						moveTl
							.from(linesDiv, 0.4, {y:"-115%", ease: Power4.easeOut}, '+=0.4')
							.from(divider, 0.4, {x:"100%", ease: Power4.easeOut}, '-=0.4')
							.from(charDiv, 0.4, {x:"100%", ease: Power4.easeOut}, '-=0.4')
							.from([description, projectCase, projectLink], 0.6, {opacity: 0, y: -20, ease: Power4.easeOut, onComplete: () => {
								resetTl
								.set([linesDiv,divider,charDiv,slideImage,description, projectCase, projectLink], {clearProps:"all"});
								done();
								this.preventControls = false;
							}}, '-=0.3');
		  			}});
				}
				else if(this.currentSlideAction.slideMoveDirection == 'forward') {
					resetTl
					.to([linesDiv,divider,charDiv,slideImage,description, projectCase, projectLink], 0, {clearProps:"all", onComplete: () => {
						moveTl
							.from(linesDiv, 0.4, {y:"-115%", ease: Power4.easeOut}, '+=0.4')
							.from(divider, 0.4, {x:"-100%", ease: Power4.easeOut}, '-=0.4')
							.from(charDiv, 0.4, {x:"-100%", ease: Power4.easeOut}, '-=0.4')
							.to(slideImage, 0.4, {opacity: 1, ease: Power4.easeOut}, '-=0.4')
							.from([description, projectCase, projectLink], 0.6, {opacity: 0, y: -20, ease: Power4.easeOut, onComplete: () => {
								resetTl
								.set([linesDiv,divider,charDiv,slideImage,description, projectCase, projectLink], {clearProps:"all"});
								done();
								this.preventControls = false;
							}}, '-=0.3')
						}});
				}
				else {
					done();
					this.preventControls = false;
				}

				if(this.currentSlideAction.slideNum == 1) {
					setTimeout(() => {
						document.querySelector('.main__header_logo').classList.add('white');
						document.querySelector('.socials.side').classList.add('white');
					}, 205);
				}
			},

			leave(el, done) {
				setTimeout(() => {
					document.querySelector('.main__header_logo').classList.remove('white');
					document.querySelector('.socials.side').classList.remove('white');
				}, 195);
				this.preventControls = true;
				let moveTl = new TimelineMax(),
				resetTl = new TimelineMax(),
				linesDiv = el.querySelectorAll('.project__slide_text .split.lines > div'),
				divider = el.querySelector('.project__slide_text .divider'),
				charDiv = el.querySelectorAll('.project__slide_text .char > div'),
				slideImage = el.querySelector('.project__slide_image'),
				description = el.querySelector('.project__description'),
				projectCase = el.querySelector('.project__case'),
				projectLink = el.querySelector('.project__link');
				if(this.currentSlideAction.slideMoveDirection == 'backward') {
					resetTl
					.to([linesDiv,divider,charDiv,slideImage,description, projectCase, projectLink], 0, {clearProps:"all", onComplete: () => {
						moveTl
							.to(linesDiv, 0.4, {y:"-115%", ease: Power4.easeIn})
							.to(divider, 0.4, {x:"-100%", ease: Power4.easeIn}, '-=0.4')
							.to(charDiv, 0.4, {x:"-100%", ease: Power4.easeIn}, '-=0.4')
							.to(slideImage, 0.4, {opacity: 0, ease: Power4.easeOut}, '-=0.4')
							.to([description, projectCase, projectLink], 0.4, {opacity: 0, y: -20, ease: Power4.easeIn, onComplete: () => {
								resetTl
								.set([linesDiv,divider,charDiv,slideImage,description, projectCase, projectLink], {clearProps:"all"})
								done();
								this.preventControls = false;
							}}, '-=0.3')
						}});
				}
				else if(this.currentSlideAction.slideMoveDirection == 'forward') {
					resetTl
					.to([linesDiv,divider,charDiv,slideImage,description, projectCase, projectLink], 0, {clearProps:"all", onComplete: () => {
						moveTl
							.to(linesDiv, 0.4, {y:"-115%", ease: Power4.easeIn})
							.to(divider, 0.4, {x:"100%", ease: Power4.easeIn}, '-=0.4')
							.to(charDiv, 0.4, {x:"100%", ease: Power4.easeIn}, '-=0.4')
							.to(slideImage, 0.4, {opacity: 0, ease: Power4.easeOut}, '-=0.4')
							.to([description, projectCase, projectLink], 0.4, {opacity: 0, y: -20, ease: Power4.easeIn, onComplete: () => {
								resetTl
								.to([linesDiv,divider,charDiv,slideImage,description, projectCase, projectLink], 0, {clearProps:"all"});
								done();
								this.preventControls = false;

							}}, '-=0.3')
						}});
				}
				else {
					done();
					this.preventControls = false;
				}
			},
		},

		computed: {
			...mapGetters({
				'currentSlideAction': types.CURRENT_SLIDE
			})
		}
	}
</script>

<style lang="scss">

	@import '../../../../variables.scss';


	.text-show {
		opacity: 1;
		-webkit-transition: opacity 0.4s ease-out 0s;
		-moz-transition: opacity 0.4s ease-out 0s;
		transition: opacity 0.4s ease-out 0s;
	}

	.text-in {
		opacity: 0;
	}

	.text-out {
		opacity: 0;
		-webkit-transition: opacity 0.4s ease-in 0s;
		-moz-transition: opacity 0.4s ease-in 0s;
		transition: opacity 0.4s ease-in 0s;
	}



	.projects__slider {
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		overflow: hidden;

		video {
			position: absolute;
			left: 50%;
			top: 50%;
			transform: translate(-50%,-50%);
			min-width: 101%;
			min-height: 101%;
		}

		@media only screen and (max-width: 992px) {
			position: relative;
			min-height: 100vh;
		}

		@media only screen and (max-width: 599px) {
			min-height: 65rem;	
		}
	}

	.project__slide {
		display: flex !important;
		height: 100%;
		overflow: hidden;
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		// visibility: hidden;
		opacity: 0;
		-webkit-transition: all 0s ease 0.4s !important;
		-moz-transition: all 0s ease 0.4s !important;
		transition: all 0s ease 0.4s !important;

		.project__slide_image {
			opacity: 0 !important;
			-webkit-transition: all 0.4s ease 0s;
			-moz-transition: all 0.4s ease 0s;
			transition: all 0.4s ease 0s;
		}


	&.active {
		opacity: 1;
		// visibility: visible;
		transition-delay: 0s;

		.project__slide_image {
			opacity: 1 !important;
			-webkit-transition: all 0.4s ease 0.1s !important;
			-moz-transition: all 0.4s ease 0.1s !important;
			transition: all 0.4s ease 0.1s !important;
		}
	}

	&.phantasma__slide {

		.project__slide_image {

			@media only screen and (max-width: 1199px) {
				opacity: 0 !important;	
			}

			@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
				opacity: 1 !important;	
			}

			&.mobile-show {

				@media only screen and (max-width: 1199px) {
					opacity: 1 !important;	
				}
			}
		}
	}

	&.ankr__slide {

		.project__slide_image_overlay {

			@media only screen and (max-width:1199px) {
				background-size: contain;
			}

			@media only screen and (max-width:992px) {
				background-size: cover;
			}

			@media only screen and (max-width: 599px) {
				background-size: cover;	
			}
		}
	}

	@media only screen and (max-width: 992px) {
		flex-direction: column;
	}

	@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
		flex-direction: row;	
	}

	@media only screen and (max-width: 599px) {
		flex-direction: column;	
	}
}

.project__slide_image {
	width: 60.2%;
	position: relative;
	display: flex;
	align-items: center;

	@media only screen and (max-width:1600px) {
		width: 62.54%;	
	}

	@media only screen and (max-width:1439px) {
		width: 62.9%;	
	}

	@media only screen and (max-width:1299px) {
		width: 62.6%;	
	}

	@media only screen and (max-width:1199px) {
		width: 55%;	
	}

	@media only screen and (max-width:992px) {
		width: 100%;
		position: relative;
		padding-top: 56%;
		overflow: hidden;
		display: block;
		order: 1;	
	}

	@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
		order: 0;
		width: 60%;	
	}

	@media only screen and (max-width: 599px) {
		order: 0;
		width: 100%;
		opacity: 1 !important;
		height: 30.6rem;
		padding: 0;
	}
}

.project__slide_image_overlay {
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center center;
	position: absolute;
	left: 0;
	top: 0;
	right: 0;
	bottom: 0;
	z-index: 0;
	// visibility: hidden;
}

.project__slide_image_box {
	width: 38.5vw;
	max-width: 74rem;
	margin: 0 auto;
	position: relative;
	z-index: 1;

	img {

		@media only screen and (max-width: 599px) {
			max-height: 86%;	
		}
	}

	@media only screen and (max-width: 992px) {
		position: absolute;
		width: 100%;
		max-width: 40rem;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);	
	}

	@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
		max-width: 30rem;	
	}

	@media only screen and (max-width: 599px) {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
		max-width: 100%;
		left: 0;
		top: 0;
		transform: none;
	}
}

.project__slide_text {
	flex: 1;
	display: flex;
	align-items: center;
	background: #F4FAFA;
	justify-content: center;
	position: relative;
	box-shadow: none !important;
	z-index: 1;
	margin-top: -21vh;

	@media only screen and (max-width: 992px) {
		margin-top: 0;
		flex: 0 1 auto;
		padding: 2rem 4rem 1.5rem;
	}

	@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
		padding: 0rem 2rem 10rem;
		flex: 1;
		visibility: visible;
		transform: none !important;	
	}

	@media only screen and (max-width: 599px) {
		align-items: flex-start;
		padding: 6.4rem 3rem 1.5rem;
		flex: 0 1 auto;	
	}

	&.not-show {

		&::before {
			opacity: 0;

			@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
				opacity: 1;	
			}
		}
	}

	&::before {
		content: '';
		display: block;
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		z-index: 0;
		box-shadow: 0rem 0 1rem 0 rgba(0, 0, 0, 0.04);
		-webkit-transition: all .5s ease 0s;
		-o-transition: all .5s ease 0s;
		transition: all .5s ease 0s;
	}

	.project__name_title {
		font-family: inherit;
		font-size: 2.2rem;
		font-weight: 500;
		text-transform: none;
		line-height: 1.2;
		color:$gray-dark;
		position: relative;
		line-height: 1;
		margin-bottom: 2.5rem;
		white-space: nowrap;

		@media only screen and (max-width:1399px) {
			margin-bottom: 1.5rem;	
		}

		@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
			font-size: 1.6rem;
			margin-bottom: 0.5rem;	
		}

		@media only screen and (max-width: 599px) {
			font-size: 1.8rem;
			margin-bottom: 1.4rem;	
		}
	}

	.project__name {
		font-weight: 600;
		margin-bottom: 3.6rem;

		@media only screen and (max-width:1399px) {
			margin-bottom: 2.5rem;	
		}

		@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
			font-size: 2.4rem;
			margin-bottom: 0.5rem;
		}

		@media only screen and (max-width: 599px) {
			font-size: 3.5rem;
			margin-bottom: 2.8rem;
		}
	}

	.divider {
		height: 1px;
		background: $black;
		margin-bottom: 3.4rem;

		@media only screen and (max-width:1399px) {
			margin-bottom: 2.5rem;	
		}

		@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
			margin-bottom: 0.5rem;	
		}

		@media only screen and (max-width: 599px) {
			margin-bottom: 3rem;	
		}
	}

	.project__description {
		font-size: 1.6rem;
		position: relative;
		margin-bottom: 3.6rem;

		@media only screen and (max-width:1399px) {
			margin-bottom: 2.5rem;	
		}

		@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
			font-size: 1.2rem;
			margin-bottom: 1rem;
			line-height: 1.4;
		}

		@media only screen and (max-width: 599px) {
			line-height: 1.66;
			margin-bottom: 3.4rem;
			font-size: 1.48rem;	
		}
	}

	.project__case {

		@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
			line-height: 0;	
		}
	}

	.case__link {
		margin-bottom: 2rem;

		@media only screen and (max-width:1399px) {
			margin-bottom: 1rem;	
		}

		@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
			min-height: 1px;
			height: 4rem;
			line-height: 4rem;
			font-size: 1rem;
			min-width: 15rem;
			margin-bottom: 0.5rem;
		}

		@media only screen and (max-width: 599px) {
			height: 6rem;
			line-height: 6rem;
			font-size: 1.3rem;
			min-width: 1rem;
			width: 100%;
			margin-bottom: 1.4rem;	
		}
	}

	.project__link {
		display: inline-flex;
		white-space: nowrap;
		align-items: center;
		font-size: 1.6rem;
		font-weight: 400;
		line-height: 1;
		color: $blue-light;
		position: relative;
		-webkit-transition: none;
		-moz-transition: none;
		transition: none;

		.project__link_icon {
			min-width: 1.3rem;
			max-width: 1.3rem;
			margin-right: 2rem;
			position: relative;
			top: .1rem;
		}

		@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
			font-size: 1.2rem;	
		}
	}
}




.project__slide_text_inner {
	width: 100%;
	max-width: 49.5rem;
	overflow: hidden;
	-webkit-transition: opacity 1s ease 0s;
	-moz-transition: opacity 1s ease 0s;
	transition: opacity 1s ease 0s;
	opacity: 1;

	&.not-show {
		opacity: 0;

		@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
			opacity: 1;	
		}
	}

	@media only screen and (max-width:1600px) {
		max-width: 42rem;
	}

	@media only screen and (max-width:1199px) {
		max-width: 38rem;
	}

	@media only screen and (max-width: 992px) {
		max-width: 100%;	
	}
}


.projects__info {
	width: 40%;
	position: absolute;
	right: 0;
	bottom: 10vh;
	z-index: 2;
	display: flex;
	box-shadow: none;

	@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
		visibility: visible;
		transform: none !important;	
	}

	&.not-show {

		@media (min-height: 600px) and (min-width: 768px) {
			.slider__controls {

				.control {
					top: .4rem;

					&::before {
						left: 0;
						right: 0;
						border-width: 0;
					}

					&::after {
						border-width: 0;
					}
				}
			}	
		}
	}

	@media only screen and (max-width:1600px) {
		width: 37.6%;
		bottom: 11.3vh;	
	}

	@media only screen and (max-width:1499px) {
		width: 37.3%;	
	}

	@media only screen and (max-width:1399px) {
		bottom: 10.6vh;	
	}

	@media only screen and (max-width:1299px) {
		width: 37.6%;	
	}

	@media only screen and (max-width:1199px) {
		width: 45.3%;	
	}

	@media only screen and (max-width: 992px) {
		width: 100%;
		bottom: 18.5rem;	
	}

	@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
		width: 40.4%;
		bottom: 5rem;	
	}

	@media only screen and (max-width: 599px) {
		width: 100%;
		bottom: 3.7rem;
		display: none;
	}
}

.slider__controls {
	position: relative;
	display: inline-flex;
	align-items: center;

	&.prevent {

		.control {
			pointer-events: none !important;
		}
	}

	.control {
		width: 10.6rem;
		height: 10.6rem;
		min-width: 10.6rem;
		min-height: 10.6rem;
		position: relative;
		margin: 0;
		left: 0;
		right: 0;
		background: none;
		border: 1px solid;
		-webkit-transition: all 0.3s ease 0s;
		-moz-transition: all 0.3s ease 0s;
		transition: all 0.3s ease 0s;
		z-index: 0;
		transform: translateY(0);
		top: 0;
		cursor: pointer;

		&:hover {
			z-index: 1;
		}

		&::before,
		&::after {
			content: '';
			display: block;
			position: absolute;
			-webkit-transition: all 0.3s ease 0s;
			-moz-transition: all 0.3s ease 0s;
			transition: all 0.3s ease 0s;
		}

		&::before {
			height: 0;
			top: 100%;
			margin-top: 1px;
		}

		span {
			display: block;
			position: absolute;
			left: 0;
			top: 0;
			right: 0;
			bottom: 0;
			z-index: 0;
			overflow: hidden;

			&::before,
			&::after {
				content: '';
				display: block;
				position: absolute;
				left: 0;
				top: 0;
				right: 0;
				bottom: 0;
				transform: translateX(0);
				-webkit-transition: all 0.5s ease 0s;
				-moz-transition: all 0.5s ease 0s;
				transition: all 0.5s ease 0s;
			}
		}

		i {
			color: #fff;
			font-size: 5.8rem;
			position: absolute;
			left: 50%;
			top: 50%;
			transform: translate(-50%, -50%);
			z-index: 1;
			text-shadow: 0 0.2rem 0.1rem #04a7da;

			@media only screen and (max-width:1499px) {
				font-size: 4rem;	
			}

			@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
				font-size: 2rem;	
			}

			@media only screen and (max-width: 599px) {
				font-size: 3.4rem;	
			}
		}

		&.prev {
			border-left-color: #00fbff;
			border-top-color: #adddec;
			border-right-color: #00d1ef;
			border-bottom-color: #11ebff;
			z-index: 1;

			span {

				&::before {
					background: -moz-linear-gradient(0deg, rgba(3,235,238,1) 0%, rgba(49,200,251,1) 100%);
					background: -webkit-gradient(linear, left top, right top, color-stop(0%, rgba(3,235,238,1)), color-stop(100%, rgba(49,200,251,1)));
					background: -webkit-linear-gradient(0deg, rgba(3,235,238,1) 0%, rgba(49,200,251,1) 100%);
					background: -o-linear-gradient(0deg, rgba(3,235,238,1) 0%, rgba(49,200,251,1) 100%);
					background: -ms-linear-gradient(0deg, rgba(3,235,238,1) 0%, rgba(49,200,251,1) 100%);
					background: linear-gradient(90deg, rgba(3,235,238,1) 0%, rgba(49,200,251,1) 100%);
					filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#03ebee', endColorstr='#31c8fb',GradientType=1 );
				}

				&::after {
					background: -moz-linear-gradient(0deg, rgba(49,200,251,1) 0%, rgba(3,235,238,1) 100%);
					background: -webkit-gradient(linear, left top, right top, color-stop(0%, rgba(49,200,251,1)), color-stop(100%, rgba(3,235,238,1)));
					background: -webkit-linear-gradient(0deg, rgba(49,200,251,1) 0%, rgba(3,235,238,1) 100%);
					background: -o-linear-gradient(0deg, rgba(49,200,251,1) 0%, rgba(3,235,238,1) 100%);
					background: -ms-linear-gradient(0deg, rgba(49,200,251,1) 0%, rgba(3,235,238,1) 100%);
					background: linear-gradient(90deg, rgba(49,200,251,1) 0%, rgba(3,235,238,1) 100%);
					filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#31c8fb', endColorstr='#03ebee',GradientType=1 );
					transform: translateX(-100%);
				}
			}


			&::before {
				left: 0.1rem;
				right: -0.2rem;
				border-left: 0 solid transparent;
				border-right: 0 solid transparent;
				border-top: 0.4rem solid $blue-light;
				transform: skewX(25deg);
				border-image: linear-gradient(90deg, #00adcd, #0073ad) 5;
				z-index: 1;
			}

			&::after {
				top: 0.1rem;
				bottom: -0.4rem;
				left: 100%;
				border-left: 0.2rem solid $blue-light;
				border-top: 0px solid transparent;
				border-bottom: 0px solid transparent;
				transform: skewY(30deg);
				border-image: linear-gradient(180deg, #00adcd, #0073ad) 5;
			}


			&:active {
				transform: translateX(0.1rem) translateY(0.4rem);
				z-index: 2;

				&::before,
				&::after {
					border-width: 0;
				}

				&::before {
					left: 0;
					right: 0;
				}

				&::after {
					border-width: 1px;
					top: 0;
					bottom: 0;
				}
			}
		}

		&.next {
			border-left-color: #00d3f3;
			border-top-color: #c4e5f2;
			border-right-color: #00fbff;
			border-bottom-color: #15e9ff;
			z-index: 1;

			span {

				&::before {
					background: -moz-linear-gradient(0deg, rgba(49,200,251,1) 0%, rgba(3,235,238,1) 100%);
					background: -webkit-gradient(linear, left top, right top, color-stop(0%, rgba(49,200,251,1)), color-stop(100%, rgba(3,235,238,1)));
					background: -webkit-linear-gradient(0deg, rgba(49,200,251,1) 0%, rgba(3,235,238,1) 100%);
					background: -o-linear-gradient(0deg, rgba(49,200,251,1) 0%, rgba(3,235,238,1) 100%);
					background: -ms-linear-gradient(0deg, rgba(49,200,251,1) 0%, rgba(3,235,238,1) 100%);
					background: linear-gradient(90deg, rgba(49,200,251,1) 0%, rgba(3,235,238,1) 100%);
					filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#31c8fb', endColorstr='#03ebee',GradientType=1 );
				}

				&::after {
					background: -moz-linear-gradient(0deg, rgba(3,235,238,1) 0%, rgba(49,200,251,1) 100%);
					background: -webkit-gradient(linear, left top, right top, color-stop(0%, rgba(3,235,238,1)), color-stop(100%, rgba(49,200,251,1)));
					background: -webkit-linear-gradient(0deg, rgba(3,235,238,1) 0%, rgba(49,200,251,1) 100%);
					background: -o-linear-gradient(0deg, rgba(3,235,238,1) 0%, rgba(49,200,251,1) 100%);
					background: -ms-linear-gradient(0deg, rgba(3,235,238,1) 0%, rgba(49,200,251,1) 100%);
					background: linear-gradient(90deg, rgba(3,235,238,1) 0%, rgba(49,200,251,1) 100%);
					filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#03ebee', endColorstr='#31c8fb',GradientType=1 );
					transform: translateX(-100%);
				}
			}


			&::before {
				left: -0.2rem;
				right: 0.1rem;
				border-left: 0 solid transparent;
				border-right: 0 solid transparent;
				border-top: 0.4rem solid $blue-light;
				transform: skewX(-30deg);
				border-image: linear-gradient(90deg, #00adcd, #0073ad) 5;
				z-index: 1;
			}

			&:active {
				transform: translateX(0rem) translateY(0.4rem);
				z-index: 1;

				&::before,
				&::after {
					border-width: 0;
				}

				&::before {
					left: 0;
					right: 0;
				}

				&::after {
					top: 0;
					bottom: 0;
				}
			}
		}


		@media only screen and (max-width:1600px) {
			width: 8.6rem;
			height: 8.6rem;
			min-width: 8.6rem;
			min-height: 8.6rem;	
		}

		@media only screen and (max-width:1499px) {
			width: 7.6rem;
			height: 7.6rem;
			min-width: 7.6rem;
			min-height: 7.6rem;	
		}

		@media only screen and (max-width:1299px) {
			width: 6.6rem;
			height: 6.6rem;
			min-width: 6.6rem;
			min-height: 6.6rem;	
		}

		@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
			width: 4rem;
			height: 4rem;
			min-width: 4rem;
			min-height: 4rem;	
		}

		@media only screen and (max-width: 599px) {
			width: 6rem;
			height: 6rem;
			min-width: 6rem;
			min-height: 6rem;	
		}
	}
}


.projects__info_text {
	position: relative;
	background: #F9FCFC;
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: center;
	box-shadow:
	-0.4rem 0.4rem 0 #c4c4c4,
	-0.3rem 0.3rem 0 #c4c4c4,
	-0.2rem 0.2rem 0 #c4c4c4,
	-0.1rem 0.1rem 0 #c4c4c4;
	padding-left: 5rem;
	margin-right: -1rem;
	-webkit-transition: all 0.3s ease 0.09s;
	-moz-transition: all 0.3s ease 0.09s;
	transition: all 0.3s ease 0.09s;

	&.not-show {

		@media (min-height: 600px) and (min-width: 768px) {
			top: .4rem;
			box-shadow: none;	
		}
	}

	@media only screen and (max-width:1600px) {
		padding-left: 1.5rem;			
	}

	@media only screen and (max-width:1399px) {
		padding-left: 1rem;			
	}

	@media only screen and (max-width: 599px) {
		padding-left: 2rem;	
	}
}

.next__project_info_list {
	display: flex;
	align-items: center;
	line-height: 0;
	width: 100%;
	padding: 0 7%;
	opacity: 1;

	@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
		opacity: 1 !important;
		visibility: visible;
		transform: none !important;	
	}

	&.not-show {
		opacity: 0;
	}

	li {
		opacity: 1;
		-webkit-transition: all 1s ease 0s;
		-moz-transition: all 1s ease 0s;
		transition: all 1s ease 0s;

		&.not-show {
			opacity: 0;

			@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
				opacity: 1;	
			}
		}

		&:not(:last-child) {
			margin-right: 6.5%;

			@media only screen and (max-width:1600px) {
				margin-right: 3%;	
			}
		}
	}

	@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
		display: block;	
	}
}

.next__progect_text {
	font-size: 1.6rem;
	font-weight: 600;
	line-height: 1.6;
	margin-bottom: 0;
	letter-spacing: 0.1rem;
	white-space: nowrap;

	span {
		display: block;

		&.next__progect_name {
			font-size: 1.2rem;
			font-weight: 300;
			letter-spacing: 0.05rem;

			@media only screen and (max-width:1499px) {
				font-size: 1.1rem;
				letter-spacing: 0;
			}
		}
	}

	@media only screen and (max-width:1600px) {
		font-size: 1.4rem;
	}

	@media only screen and (max-width:1399px) {
		font-size: 1.2rem;
	}

	@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
		font-size: 1rem;	
	}

	@media only screen and (max-width: 599px) {
		font-size: 1.3rem;	
	}
}


.next__progect_logo {
	display: flex;
	align-items: center;

	.title {
		font-size: 1.4rem;
		font-weight: 600;
		letter-spacing: 0.08rem;

		@media only screen and (max-width:1499px) {
			font-size: 1.3rem;	
		}

		@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
			font-weight: 300;
			letter-spacing: 0;
		}
	}

	&_icon {
		margin-right: 2.5rem;
		filter: url("data:image/svg+xml;utf8,&lt;svg xmlns=\'http://www.w3.org/2000/svg\'&gt;&lt;filter id=\'grayscale\'&gt;&lt;feColorMatrix type=\'matrix\' values=\'0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0\'/&gt;&lt;/filter&gt;&lt;/svg&gt;#grayscale");
		filter: gray;
		-webkit-filter: grayscale(100%);

		a {
			pointer-events: none;
		}

		@media only screen and (max-width:1600px) {
			margin-right: 1.5rem;	
		}

		@media only screen and (max-width:1499px) {
			max-width: 6.4rem;	
		}

		@media only screen and (max-width:1399px) {
			max-width: 5.8rem;	
		}

		@media only screen and (max-width:1299px) {
			max-width: 5.4rem;
			margin-right: 1rem;	
		}

		@media only screen and (max-width:1199px) {
			max-width: 4rem;
			margin-right: 1rem;	
		}

		@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
			display: none;	
		}
	}

	.next__progect_name {

		@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
			display: none;	
		}
	}


	&.deepcloud {
		margin-left: -1rem;
		.next__progect_logo_icon {
			width: 7.4rem;
		}
	}


	&.ankr {
		.next__progect_logo_icon {
			width: 4rem;
		}
	}

	&.phantasma {
		.next__progect_logo_icon {
			width: 4rem;
		}
	}


	&.nos {
		.next__progect_logo_icon {
			width: 4.5rem;
		}
	}
}


.pagination__box {
	width: 40%;
	position: absolute;
	bottom: 5vh;
	right: 0;
	display: flex;
	justify-content: center;
	z-index: 1;
	visibility: hidden;

	span {
		display: inline-block;
		border-radius: 100%;
		width: 0.4rem;
		height: 0.4rem;
		background: $black;
		margin: 0 .5rem;
		-webkit-transition: all 0.4s ease 0s;
		-moz-transition: all 0.4s ease 0s;
		transition: all 0.4s ease 0s;

		&.active {
			background: $blue-light;
		}
	}

	@media only screen and (max-width:1600px) {
		width: 37.5%;	
	}

	@media only screen and (max-width:1499px) {
		width: 37%;	
	}


	@media only screen and (max-width:1399px) {
		bottom: 4.5vh;
		width: 37.1%;	
	}

	@media only screen and (max-width: 992px) {
		width: 100%;
		bottom: 14rem;	
	}

	@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
		width: 40%;
		bottom: 2.2rem;	
	}

	@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
		visibility: visible;
		opacity: 1;	
	}

	@media only screen and (max-width: 599px) {
		width: 100%;
		bottom: auto;
		top: 33.5rem;
	}
}



@keyframes rotateWordFromBottom {
	0%   { opacity: 0; }
	2%   { opacity: 0; top: 20px; }
	5%   { opacity: 1; top: 0;}
	30%  { opacity: 1; top: 0; }
	35%  { opacity: 0; top: -20px; }
	80%  { opacity: 0; }
	100% { opacity: 0; }
}

@-webkit-keyframes rotateWordFromBottom {
	0%   { opacity: 0; }
	2%   { opacity: 0; top: 20px; }
	5%   { opacity: 1; top: 0;}
	30%  { opacity: 1; top: 0; }
	35%  { opacity: 0; top: -20px; }
	80%  { opacity: 0; }
	100% { opacity: 0; }
}

</style>