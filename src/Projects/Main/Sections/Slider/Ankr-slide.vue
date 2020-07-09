<template>
	<div class="project__slide ankr__slide">
		<div class="project__slide_image">
			<div class="project__slide_image_overlay" :style="[webp ? { backgroundImage: 'url(' + require(`@/assets/img/ankr-bg.webp`) + ')'} : {backgroundImage: 'url(' + require(`@/assets/img/ankr-bg.jpg`) + ')'}]">
				<video v-if="showVideo" class="video" id="video-anker" muted="" playsinline="" autoplay="" loop="">
					<source src="../../../../assets/img/ankr.mp4" type="video/mp4">
					<source src="../../../../assets/img/ankr.webm" type="video/webm">
					<!-- <source src="../../../../assets/img/ankr.ogv" type="video/ogv"> -->
				</video>
			</div>
			<div v-if="showVideo" class="project__slide_content_box">
				<div class="icon__wrapper">
					<img src="../../../../assets/img/ankr-icon-big.png" alt="">
				</div>
				<h2 class="section-title words-rotate" data-word-delay="3" data-animation-type="rotateWordFromBottom"><span class="single-text">The Cloud,</span>&nbsp;<span class="words">
					<span>Reimagined</span>
					<span>Distributed</span>
					<span>Trusted</span>
				</span>
			</h2>
			<p class="section-subtitle">Build a Faster, Cheaper, Securer cloud using idle processing power in data centers and edge devices</p>
		</div>
		</div>
		<div class="project__slide_text shadow">
			<div class="project__slide_text_inner">
				<h4 class="project__name_title split lines">Project name:</h4>
				<h2 class="project__name split chars">ANKR</h2>
				<div class="divider"></div>
				<div class="project__description">Distributed Cloud Computing Network</div>
				<div class="project__case">
					<router-link :to="{name: 'ankr-new'}" class="btn btn-action btn-action-full case__link" exact><a>Show this Case</a></router-link>
				</div>
				<!-- <a href="https://www.ankr.com" class="project__link" target="_blank">
					<img src="../../../../assets/img/project-link-icon.svg" alt="link icon" class="project__link_icon">
					visit website
				</a> -->
			</div>
		</div>
	</div>
</template>

<script>

import { TimelineMax, SplitText } from 'gsap';

export default {

  data () {
    return {
			showVideo: true,
			webp: document.querySelector('html.webp') !== null ? true : false
    }
  },

  created() {
  	if(window.innerWidth < 1200) {
  		this.showVideo = false;
  	}
  },

  mounted() {
  	let textContainer = document.querySelectorAll('.ankr__slide .split'),
  	textLines = document.querySelectorAll('.ankr__slide .split.lines'),
  	textChars = document.querySelectorAll('.ankr__slide .split.chars');

  	new SplitText(textChars, {type:"chars", charsClass:"char"});
  	new SplitText(textLines, {type:"lines", charsClass:"line"});

  	document.querySelectorAll('.ankr__slide .chars .char').forEach((char) => {
  		let oldCharHtml = char.innerHTML,
  		newCharHTML = `<div>${oldCharHtml}</div>`;
  		char.innerHTML = newCharHTML;
  	});

  	// document.querySelector('#video-anker').play();


		// words rotate

		function wordsRotate() {

			let maxWidth = 0;
			
			document.querySelectorAll('.words span').forEach((item) => {
				if(item.offsetWidth > maxWidth) {
					maxWidth = item.offsetWidth;
				}
			});

			document.querySelector('.words').style.width = maxWidth + 'px';
			document.querySelectorAll('.words').forEach((item) => {
				item.style.height = item.closest('.words-rotate').offsetHeight + 'px';
			});

			let wordDelay = Number(document.querySelector('.words-rotate').getAttribute('data-word-delay')),
					animationType = document.querySelector('.words-rotate').getAttribute('data-animation-type');

			document.querySelectorAll('.words span').forEach((item) => {
				item.style.cssText = `animation-name: ${animationType}; animation-duration: 9s; animation-iteration-count: infinite;`;
			});

			for(var i = 0, j = 0; i < document.querySelectorAll('.words span').length; i++, j += wordDelay) {
				document.querySelectorAll('.words span').forEach((item, index) => {
					if(index == i) {
						item.style.animationDelay = j + 's';
					}
				});
			}
			
		}
		
		if(window.innerWidth > 1199) {
			wordsRotate();
		}
		


  },
}
</script>

<style lang="scss" scoped>

	.project__slide_content_box {
		padding: 0 1.5rem;
		text-align: center;
		width: 100%;
		color: #fff;
		z-index: 1;
	}

	.icon__wrapper {
		text-align: center;
		margin-bottom: 6rem;

		img {
			display: inline-block;
		}
	}

	.section-title {
		font-weight: 600;
		margin-bottom: 4rem;
	}

	.section-subtitle {
		font-size: 2rem;
		margin: 0 auto;
		max-width: 54rem;
		line-height: 1.8;
	}

	.words-rotate {
		text-transform: none;
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		align-items: center;

		.words {
			position: relative;

			span {
				position: absolute;
				left: 0;
				top: 0;
				opacity: 0;
				display: inline-block;
			}
		}
	}

</style>