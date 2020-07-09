<template>
	
	<section class="adaptive" :class="className">

		<div class="adaptive__bg_trigger"></div>

		<div class="adaptive__content pin-wrapper">
			<div class="container">
				<div class="row">
					<div class="col-sm-12">
						<div class="adaptive__content_inner">
							<h2 class="section__title" data-delay="0">Adaptive</h2>
							<p data-delay="0.1">{{text}}</p>
						</div>
					</div>
				</div>
				
				<!-- Ankr old -->
				<div class="row" data-delay="0.2" v-if="className == 'ankr-old'">
					<div class="col-sm-12">
						<div class="adaptive__image_boxes">
							<div class="adaptive__image_box box-1" data-from="100" data-to="-200" data-mob-from="60" data-mob-to="-20">
								<img :src="require(`@/assets/img/${imageFirstUrl}`)" alt="screen-1">
							</div>
							<div class="adaptive__image_box box-2" data-from="500" data-to="-300" data-mob-from="120" data-mob-to="-60">
								<img :src="require(`@/assets/img/${imageSecondUrl}`)" alt="screen-2">
							</div>
							<div class="adaptive__image_box box-3" data-from="200" data-to="-400" data-mob-from="80" data-mob-to="-80">
								<img :src="require(`@/assets/img/${imageThirdUrl}`)" alt="screen-3">
							</div>
						</div>
					</div>
				</div>

				
				<!-- Phantasma -->
				<div class="row align-items-center" data-delay="0.2" v-if="className == 'phantasma'">
					<div class="col-sm-12">
						<div class="image__boxes">
							<div class="image__box box-1" data-from="500" data-to="-300" data-mob-from="150" data-mob-to="-120">
								<img :src="require(`@/assets/img/${imageFirstUrl}`)" alt="screen-1">
							</div>
							<div class="image__box box-2" data-from="200" data-to="-150" data-mob-from="120" data-mob-to="-80">
								<img :src="require(`@/assets/img/${imageSecondUrl}`)" alt="screen-2">
							</div>
							<div class="image__box box-3" data-from="50" data-to="-50" data-mob-from="50" data-mob-to="-50">
								<img :src="require(`@/assets/img/${imageThirdUrl}`)" alt="screen-3">
							</div>
						</div>
					</div>
				</div>


				<!-- ankr-new -->
				<div class="space ankr-new top" v-if="className == 'ankr-new darkbox'"></div>
				<div class="row" data-delay="0.2" v-if="className == 'ankr-new darkbox'">
					<div class="col-8">
						<div class="adaptive__image_box box-1" data-from="400" data-to="-700" data-mob-from="80" data-mob-to="-20">
							<img :src="require(`@/assets/img/${imageFirstUrl}`)" alt="screen-1">
						</div>
					</div>
					<div class="col-4">
						<div class="adaptive__image_box box-2" data-from="850" data-to="-1350" data-mob-from="120" data-mob-to="-120">
							<img :src="require(`@/assets/img/${imageSecondUrl}`)" alt="screen-2">
						</div>
					</div>
				</div>
				<div class="space ankr-new bottom" v-if="className == 'ankr-new darkbox'"></div>

				<!-- deepcloud -->
				<div class="row" data-delay="0.2" v-if="className == 'deepcloud'">
					<div class="col-8">
						<div class="adaptive__image_box box-1" data-from="100" data-to="-50" data-mob-from="80" data-mob-to="-20">
							<img :src="require(`@/assets/img/${imageFirstUrl}`)" alt="screen-1">
						</div>
					</div>
					<div class="col-4">
						<div class="adaptive__image_box box-2" data-from="550" data-to="-350" data-mob-from="120" data-mob-to="-120">
							<img :src="require(`@/assets/img/${imageSecondUrl}`)" alt="screen-2">
						</div>
					</div>
				</div>

				<!-- Alita -->
				<div class="row" data-delay="0.2" v-if="className == 'darkbox alita'">
					<div class="col-sm-12">
						<div class="adaptive__image_boxes">
							<div class="adaptive__image_boxes_inner">
								<div class="adaptive__image_box box-1" data-from="150" data-to="-150" data-mob-from="60" data-mob-to="-40">
									<img :src="require(`@/assets/img/${imageFirstUrl}`)" alt="screen-1">
								</div>
								<div class="adaptive__image_box box-2" data-from="400" data-to="-400" data-mob-from="120" data-mob-to="-80">
									<img :src="require(`@/assets/img/${imageSecondUrl}`)" alt="screen-2">
								</div>
							</div>
						</div>
					</div>
				</div>

				<!-- Mobydick -->
				<div class="row" data-delay="0.2" v-if="className == 'mobydick'">
					<div class="col-sm-12">
						<div class="boxes">
							<div class="adaptive__image_box box-1" data-from="150" data-to="-150">
								<img :src="require(`@/assets/img/${imageFirstUrl}`)" alt="screen-1">
							</div>
							<div class="adaptive__image_box box-2" data-from="400" data-to="-400">
								<img :src="require(`@/assets/img/${imageSecondUrl}`)" alt="screen-2">
							</div>
						</div>
					</div>
				</div>

			</div>
		</div>
	</section>

</template>

<script>

import * as ScrollMagic from "scrollmagic";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);


export default {

	props: {
		className: String,
		text: String,
		imageFirstUrl: String,
		imageSecondUrl: String,
		imageThirdUrl: String
	},

  data () {
    return {

    }
  },

  mounted() {

  	if(this.className == 'ankr-old' || 
  			this.className == 'phantasma' ||
  		 this.className == 'ankr-new darkbox' || 
  		 this.className == 'deepcloud' || 
  		 this.className == 'darkbox alita' ||
  		 this.className == 'mobydick') {
			
			document.querySelectorAll('*[data-from]').forEach((box) => {

				const thisController = new ScrollMagic.Controller();
				const thisBox = box;

				let thisImg = thisBox.children[0], thisFromPercent, thisToPercent;

				if(window.innerWidth > 1200) {
					  thisFromPercent = box.getAttribute('data-from'),
						thisToPercent = box.getAttribute('data-to');
				}
				else {
						thisFromPercent = thisBox.getAttribute('data-mob-from'),
						thisToPercent = thisBox.getAttribute('data-mob-to');
				}

				

				const parallaxItem = new TimelineMax()
					.fromTo(thisImg, 1, {y: thisFromPercent}, {y: thisToPercent, ease: Linear.easeNone});

				new ScrollMagic
						.Scene({
							triggerElement: box,
							reverse: true,
							triggerHook: 0.9,
							duration: '160%'
						})
						.setTween(parallaxItem)
						.addTo(thisController);
			});

  	}

		// Phantasma
		if(this.className == 'phantasma' && document.querySelector('.adaptive__slider') !== null) {

			const slide = document.querySelectorAll('.adaptive__slider .slide__item');
			let slideTotal = slide.length - 1;
			let slideCurrent = -1;

			function slideInitial() {
				slide.forEach((slide) => {
					slide.classList.add('proactivede');
				});
				setTimeout(() => {
					slideRight();
				}, 500);
			}

			// slide to RIGHT
			function slideRight() {

				let preactiveSlide,
						activeSlide,
						proactiveSlide;

				if (slideCurrent < slideTotal) {
					slideCurrent++;
				} else {
					slideCurrent = 0;
				}

				if (slideCurrent > 0) {
					preactiveSlide = slide[slideCurrent - 1];
				} else {
					preactiveSlide = slide[slideTotal];
				}
				activeSlide = slide[slideCurrent];
				if (slideCurrent < slideTotal) {
					proactiveSlide = slide[slideCurrent + 1];
				} else {
					proactiveSlide = slide[0];
				}

				slide.forEach((slide) => {
					if (slide.classList.contains('preactivede')) {
						slide.classList.remove('preactivede', 'preactive', 'active', 'proactive');
						slide.classList.add('proactivede');
					}
					if (slide.classList.contains('preactive')) {
						slide.classList.remove('preactive', 'active', 'proactive', 'proactivede');
						slide.classList.add('preactivede');
					}
				});
				preactiveSlide.classList.remove('preactivede', 'active', 'proactive', 'proactivede');
				preactiveSlide.classList.add('preactive');

				activeSlide.classList.remove('preactivede', 'preactive', 'proactive', 'proactivede');
				activeSlide.classList.add('active');

				proactiveSlide.classList.remove('preactivede', 'preactive', 'active', 'proactivede');
				proactiveSlide.classList.add('proactive');
			}


			// slide to LEFT
			function slideLeft() {

				let proactiveSlide,
						activeSlide,
						preactiveSlide;

				if (slideCurrent > 0) {
					slideCurrent--;
				} else {
					slideCurrent = slideTotal;
				}

				if (slideCurrent < slideTotal) {
					proactiveSlide = slide[slideCurrent + 1];
				} else {
					proactiveSlide = slide[0];
				}
				activeSlide = slide[slideCurrent];
				if (slideCurrent > 0) {
					preactiveSlide = slide[slideCurrent - 1];
				} else {
					preactiveSlide = slide[slideTotal];
				}
				slide.forEach((slide) => {
					if (slide.classList.contains('proactivede')) {
						slide.classList.remove('preactive', 'active', 'proactive', 'proactivede');
						slide.classList.add('preactivede');
					}
					if (slide.classList.contains('proactive')) {
						slide.classList.remove('preactivede', 'preactive', 'active', 'proactive');
						slide.classList.add('proactivede');
					}
				});
				preactiveSlide.classList.remove('preactivede', 'active', 'proactive', 'proactivede');
				preactiveSlide.classList.add('preactive');
				activeSlide.classList.remove('preactivede', 'preactive', 'proactive', 'proactivede');
				activeSlide.classList.add('active');
				proactiveSlide.classList.remove('preactivede', 'preactive', 'active', 'proactivede');
				proactiveSlide.classList.add('proactive');
			}

			slideInitial();

			let autoPlay = setInterval(function() {
				slideRight();
			}, 4000);


			// Touch swipe 
			setTimeout(() => {
				var touchStartCoords =  {'x':-1, 'y':-1},
				touchEndCoords = {'x':-1, 'y':-1},
				direction = 'undefined',
				minDistanceXAxis = 20,
				maxDistanceYAxis = 20,
				maxAllowedTime = 300,
				startTime = 0,
				elapsedTime = 0,
				targetElement = document.querySelector('.adaptive__slider');

				function swipeStart(e) {

					e = e ? e : window.event;
					e = ('changedTouches' in e)?e.changedTouches[0] : e;
					touchStartCoords = {'x':e.pageX, 'y':e.pageY};
					startTime = new Date().getTime();
					clearInterval(autoPlay);
				}

				function swipeMove(e){
					e = e ? e : window.event;
					if(window.innerWidth > 1199) {
					}

				}

				function swipeEnd(e) {
					e = e ? e : window.event;
					e = ('changedTouches' in e)?e.changedTouches[0] : e;
					touchEndCoords = {'x':e.pageX - touchStartCoords.x, 'y':e.pageY - touchStartCoords.y};
					elapsedTime = new Date().getTime() - startTime;
					if (elapsedTime <= maxAllowedTime){
						if (Math.abs(touchEndCoords.x) >= minDistanceXAxis && Math.abs(touchEndCoords.y) <= maxDistanceYAxis){
							direction = (touchEndCoords.x < 0)? 'left' : 'right';
							switch(direction){
								case 'left':
								// console.log('LEFT');
								slideRight();
								break;
								case 'right':
								// console.log('RIGHT');
								slideLeft();
								break;
							}
						}
					}

					autoPlay = setInterval(function() {
						slideRight();
					}, 4000);
				}

				function addMultipleListeners(el, s, fn) {
					var evts = s.split(' ');
					for (var i=0, iLen=evts.length; i<iLen; i++) {
						el.addEventListener(evts[i], fn, false);
					}
				}

				addMultipleListeners(targetElement, 'mousedown touchstart', swipeStart);
				addMultipleListeners(targetElement, 'mousemove touchmove', swipeMove);
				addMultipleListeners(targetElement, 'mouseup touchend', swipeEnd);
			}, 1000);
		}
  }
}
</script>















<style lang="scss" scoped>
	
	@import '../../variables.scss';

	.adaptive {
		background: $cases-gray-light;
		border-bottom: 0.4rem solid #C4C4C4;
		box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.2);
		position: relative;
		z-index: 1;
		overflow: hidden;
		-webkit-transition: color 0.3s ease 0s;
		-moz-transition: color 0.3s ease 0s;
		transition: color 0.3s ease 0s;

		&__bg_trigger {
			position: absolute;
			left: 0;
			right: 0;
			z-index: -1;
		}

		&__content {
			padding: 13rem 0 10rem;

			@media only screen and (max-width: 992px) {
				padding: 4.5rem 0 2.5rem;	
			}

			&_inner {
				max-width: 56rem;
				margin-bottom: 7rem;

				@media only screen and (max-width: 992px) {
					margin-bottom: 3rem;	
				}

				@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
					padding-left: 1.5rem !important;
					padding-right: 1.5rem !important;	
				}
			}
		}

		.section__title {
			margin-bottom: 5.6rem;

			@media only screen and (max-width: 992px) {
				margin-bottom: 2.5rem;	
			}
		}


		.space {

			&.ankr-new {

				&.top {
					padding: 15rem 0;

					@media only screen and (max-width: 1199px) {
						padding: 5rem 0;
					}
				}

				&.bottom {
					
					@media only screen and (max-width: 1199px) {
						padding: 5rem 0;
					}
				}
			}
		}




		// Ankr old
		&.ankr-old {

			.adaptive__content {
				padding-bottom: 16rem;

				@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
					padding-bottom: 4rem;	
				}

				@media only screen and (max-width: 599px) {
					padding-bottom: 8.5rem;	
				}

				&_inner {
					margin-bottom: 17.5rem;

					@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
						margin-bottom: 5rem;	
					}
				}
			}

			.adaptive__image_boxes {
				position: relative;
				display: inline-block;

				@media only screen and (max-width: 1299px) {
					max-width: 60rem;
				}

				@media only screen and (max-width: 1199px) {
					max-width: 54rem;
				}

				@media only screen and (max-width: 1199px) {
					max-width: 40rem;
				}

				@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
					max-width: 32rem;
					left: 3rem;
					margin-top: 8rem;
				}

				@media only screen and (max-width: 599px) {
					left: 0;
					max-width: 20rem;
					margin-top: 6rem;
				}

				.adaptive__image_box {
					position: relative;

					&.box-2 {
						position: absolute;
						left: 101%;
						min-width: 40%;
						bottom: 47%;

						@media only screen and (max-width: 1600px) {
							bottom: 35%;	
						}

						@media only screen and (max-width: 1399px) {
							bottom: 28%;	
						}

						@media only screen and (max-width: 1199px) {
							bottom: 47%;	
						}

						@media only screen and (max-width: 992px) {
							bottom: 75%;	
						}

						@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
							bottom: 25%;	
						}

						@media only screen and (max-width: 599px) {
							bottom: 55%;	
						}
					}

					&.box-3 {
						position: absolute;
						width: 100%;
						left: 72%;
						top: 29%;

						@media only screen and (max-width: 1600px) {
							top: 23%;	
						}

						@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
							top: 18%;	
						}
					}
				}
			}

			.adaptive__image_box {

				@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
					// max-width: 26rem;
					// margin: 0 auto;

					// img {
					// 	transform: none !important;
					// }
				}
			}
		}
		


		// Phantasma
		&.phantasma {

			.adaptive__slider {
				width: 100%;
				max-width: 41rem;
				margin: 0 auto;

				@media only screen and (max-width: 1399px) {
					max-width: 34rem;	
				}

				@media only screen and (max-width: 992px) {
					max-width: 30rem;
				}

				@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
					max-width: 24rem;	
				}

				&_inner {
					position: relative;
					width: 100%;
					height: 100%;

					.slide__item {
						position: absolute;
						top: 0;

						img {
							-webkit-transition: all 0.5s ease-out 0s;
							-moz-transition: all 0.5s ease-out 0s;
							transition: all 0.5s ease-out 0s;
							transform: scale(0);
							opacity: 0;
							pointer-events: none;
						}

						&.active {
							position: relative;
							z-index: 2;
							cursor: grab;

							img {
								opacity: 1;
								transform: translateX(0%) scale(1);
							}
						}

						&.preactive {
							z-index: 1;

							img {
								opacity: 0.4;
								transform: translateX(-72%) scale(0.8);
							}

							@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
								
								img {
									transform: translateX(-34%) scale(0.8);
								}	
							}
						}

						&.proactive {
							cursor: pointer;
							z-index: 1;

							img {
								opacity: 0.4;
								transform: translateX(72%) scale(0.8);
							}

							@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
								
								img {
									transform: translateX(34%) scale(0.8);
								}
							}
						}
					}
				}
			}


			.image__boxes {
				position: relative;
				display: inline-block;
				left: 14rem;

				@media only screen and (max-width: 1399px) {
					left: 8rem;	
				}

				@media only screen and (max-width: 1199px) {
					left: 6rem;	
				}

				@media only screen and (max-width: 599px) {
					left: 2.5rem;
					top: -5rem;
				}

				.image__box {
					position: relative;

					&.box-1 {
						position: absolute;
						left: 4%;
						top: -29%;
						min-width: 54.3%;
						max-width: 54.3%;
						z-index: 2;

						@media only screen and (max-width: 599px) {
							top: -15%;	
						}
					}

					&.box-2 {
						z-index: 1;
					}

					&.box-3 {
						position: absolute;
						min-width: 117.7%;
						max-width: 117.7%;
						bottom: -3%;
						left: -14%;
						z-index: 0;

						@media only screen and (max-width: 599px) {
							bottom: -15%;	
						}
					}
				}
			}

			.adaptive__content {
				padding-bottom: 5rem;

				@media only screen and (max-width: 992px) {
					padding-bottom: 2rem;	
				}

				@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
					padding-bottom: 0;	
				}

				&_inner {
					max-width: 64rem;
					margin-bottom: 16rem;

					@media only screen and (max-width: 992px) {
						margin-bottom: 8rem;	
					}
				}
			}
		}




		// Ankr new
		&.ankr-new {
			box-shadow: none;
			border: 0 none;
			background: $cases-gray-light;
			-webkit-transition: background 0.3s ease 0s;
			-moz-transition: background 0.3s ease 0s;
			transition: background 0.3s ease 0s;

			@media only screen and (max-width: 1199px) {
				overflow: visible;	
			}

			.adaptive__bg_trigger {
				top: 0;
				height: 55%;

				@media only screen and (max-width: 1600px) {
					height: 65%;	
				}

				@media only screen and (max-width: 1199px) {
					top: -5rem;	
				}

				@media only screen and (max-width: 992px) {
					top: -10rem;
					height: 40%;
				}

				@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
					height: 80%;	
				}

				@media only screen and (max-width: 599px) {
					height: 40%;	
				}
			}

			.adaptive__content {

				@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
					padding-bottom: 0;
					padding-top: 8rem;
				}

				&_inner {

					@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
						margin-bottom: 0;
					}
				}
			}

			.adaptive__image_box {

				@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {

					
				}

				&.box-1 {
					margin-right: -17.5rem;
					position: relative;
					left: 8rem;

					@media only screen and (max-width: 992px) {
						left: 4rem;	
					}

					@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
						margin-right: -5.5rem;
						left: 5rem;
						margin-top: -2rem;
						margin-bottom: -2rem;
					}

					@media only screen and (max-width: 599px) {
						margin-top: -3rem;
						left: 2rem;
						margin-bottom: 0;	
					}
				}

				&.box-2 {
					position: relative;
					left: -11rem;

					@media only screen and (max-width: 992px) {
						left: -4rem;	
					}

					@media only screen and (max-width: 599px) {
						top: -2rem;
						left: -4rem;	
					}
				}
			}
		}





		// Deepcloud
		&.deepcloud {


			.adaptive__content {

				&_inner {
					margin-bottom: 0;
				}
			}

			.adaptive__image_box {

				&.box-1 {
					margin-right: -17.5rem;
					position: relative;
					left: 8rem;
					top: 10rem;

					@media only screen and (max-width: 1199px) {
						top: 7rem;
					}

					@media only screen and (max-width: 992px) {
						left: 4rem;
						top: 2rem;
					}

					@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
						left: 2rem;
						margin-bottom: -5rem;	
						top: 0;
					}

					@media only screen and (max-width: 599px) {
						margin-right: -12.5rem;	
						margin-bottom: 0;
						left: 0;
					}
				}

				&.box-2 {
					position: relative;
					left: -11rem;
					top: 10rem;

					@media only screen and (max-width: 1299px) {
						left: -8rem;	
					}

					@media only screen and (max-width: 992px) {
						left: -2rem;
						top: 4rem;
					}

					@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
						left: 0;
						top: 2rem;
					}

					@media only screen and (max-width: 599px) {
						top: 2rem;	
					}
				}
			}
		}
		



		// Alita
		&.alita {
			background: transparent;


			.adaptive__bg_trigger {
				top: 0;
				height: 55%;

				@media only screen and (max-width: 1600px) {
					height: 65%;	
				}

				@media only screen and (max-width: 1199px) {
					top: -5rem;	
				}

				@media only screen and (max-width: 992px) {
					top: -5rem;
					height: 40%;
				}

				@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
					top: -7rem;
					height: 80%;	
				}

				@media only screen and (max-width: 599px) {
					height: 60%;	
				}
			}


			.adaptive__content {
				padding-top: 13rem;

				@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
					padding-top: 5rem;	
				}
			}

			.adaptive__content_inner {
				max-width: 69rem;
			}

			.adaptive__image_boxes {
				display: flex;
				justify-content: center;

				&_inner {
					position: relative;
					left: -8.5rem;

					@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
						max-width: 15rem;
						left: -5.5rem;	
					}
				}

			}

			.adaptive__image_box {
				text-align: center;

				&.box-1 {
					position: relative;
					z-index: 1;
				}

				&.box-2 {
					position: absolute;
					width: 100%;
					left: 75%;
					top: -15%;
					z-index: 0;

					@media only screen and (max-width: 992px) {
						top: -10%;	
					}
				}
			}
		}





		// Mobydick
		&.mobydick {

			.adaptive__content {
				padding-bottom: 10rem;

				@media only screen and (max-width: 992px) {
					padding-bottom: 5rem;	
				}
			}

			.boxes {
				display: flex;
				align-items: center;
				justify-content: center;
			}

			.adaptive__image_box {
				position: relative;
				z-index: 1;

				@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
					
					img {
						transform: none !important;
					}	
				}

				&.box-1 {
					z-index: 0;
					left: 6rem;

					@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
						left: 3rem;	
					}
				}

				&.box-2 {

					@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
						right: 3rem;	
					}
				}
			}
		}
	}


</style>