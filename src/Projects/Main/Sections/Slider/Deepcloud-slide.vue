<template>
	<div class="project__slide deepcloud__slide">
		<div class="project__slide_image">
			<div class="project__slide_image_overlay" :style="[webp ? { backgroundImage: 'url(' + require(`@/assets/img/cloud-img-mobile.webp`) + ')' } : { backgroundImage: 'url(' + require(`@/assets/img/cloud-img-mobile.jpg`) + ')' }]">
				<video v-if="showVideo" class="video" id="video-dc" muted="" playsinline="" autoplay="" loop="" style="">
					<source src="../../../../assets/img/dc.mp4" type="video/mp4">
					<source src="../../../../assets/img/dc.webm" type="video/webm">
					<!-- <source src="img/dc.ogv" type="video/ogv"> -->
				</video>
			</div>
			<div class="project__slide_content_box">
				<h2 class="title"><span>Your spot market for renting and buying</span>spare compute resources</h2>
			</div>
		</div>
		<div class="project__slide_text shadow">
			<div class="project__slide_text_inner">
				<h4 class="project__name_title split lines">Project name:</h4>
				<h2 class="project__name split chars">DeepCloud AI</h2>
				<div class="divider"></div>
				<div class="project__description">Next generation Cloud Computing</div>
				<div class="project__case">
					<router-link :to="{name: 'deepcloud'}" class="btn btn-action btn-action-full case__link" exact><a>Show this Case</a></router-link>
				</div>
				<!-- <a href="http://deep-cloud.1pls1.com" class="project__link" target="_blank">
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
  	let textContainer = document.querySelectorAll('.deepcloud__slide .split'),
  	textLines = document.querySelectorAll('.deepcloud__slide .split.lines'),
  	textChars = document.querySelectorAll('.deepcloud__slide .split.chars');

  	new SplitText(textChars, {type:"chars", charsClass:"char"});
  	new SplitText(textLines, {type:"lines", charsClass:"line"});

  	document.querySelectorAll('.deepcloud__slide .chars .char').forEach((char) => {
  		let oldCharHtml = char.innerHTML,
  		newCharHTML = `<div>${oldCharHtml}</div>`;
  		char.innerHTML = newCharHTML;
  	});
  }


}
</script>

<style lang="scss" scoped>

	.project__slide_content_box {
		margin-top: -25rem;
		padding: 0 1.5rem;
		text-align: center;
		width: 100%;
		display: none;

		.title {
			margin: 0;

			span {
				display: block;
				font-size: 3.5rem;
				font-weight: 400;
				text-transform: none;
			}
		}
	}

</style>