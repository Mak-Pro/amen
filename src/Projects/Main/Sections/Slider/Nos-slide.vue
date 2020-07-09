<template>
	<div class="project__slide nos__slide">
		<div class="project__slide_image">
			<div class="project__slide_image_overlay"></div>
		</div>
		<div class="project__slide_text shadow">
			<div class="project__slide_text_inner">
				<h4 class="project__name_title split lines">Project name:</h4>
				<h2 class="project__name split chars">nOS</h2>
				<div class="divider"></div>
				<div class="project__description">Discover &amp; Build the web of the future</div>
				<div class="project__case">
					<router-link :to="{name: 'nos'}" class="btn btn-action btn-action-full case__link" exact><a>Show this Case</a></router-link>
				</div>
				<!-- <a href="https://projects.invisionapp.com/share/K7JC2N585MW#/screens" class="project__link" target="_blank">
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

    }
  },

  mounted() {
  	let textContainer = document.querySelectorAll('.nos__slide .split'),
  	textLines = document.querySelectorAll('.nos__slide .split.lines'),
  	textChars = document.querySelectorAll('.nos__slide .split.chars');

  	new SplitText(textChars, {type:"chars", charsClass:"char"});
  	new SplitText(textLines, {type:"lines", charsClass:"line"});

  	document.querySelectorAll('.nos__slide .chars .char').forEach((char) => {
  		let oldCharHtml = char.innerHTML,
  		newCharHTML = `<div>${oldCharHtml}</div>`;
  		char.innerHTML = newCharHTML;
  	});
  }


}
</script>

<style lang="scss" scoped>

	.webp {

		.project__slide_image_overlay {
			background-image: url('../../../../assets/img/nos-bg.webp');
		}
	}

	.project__slide_image_overlay {
		background-image: url('../../../../assets/img/nos-bg.jpg');
	}

</style>