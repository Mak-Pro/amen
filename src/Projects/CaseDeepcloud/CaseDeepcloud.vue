<template>
	
	<div id="case">

		<div class="case__bg deepcloud">
			<!-- <div class="case__bg_inner"></div> -->
		</div>

		<router-link :to="{name: 'AllWorks'}" exact class="back__link" active-class="" exact-active-class="">
			<i class="fal fa-angle-left arrow"></i>
			<span class="text"><img :src="require(`@/assets/img/arrow-back-icon.svg`)" alt="">all cases</span>
		</router-link>


		<intro-section
			:className="'deepcloud'"
			:backgroundImage="'case-deepcloud-intro-bg.jpg'"
			:logo="'case-deepcloud-intro-logo-icon.svg'"
			:projectName="'DEEPCLOUD AI'"
			:text="'Next generation Cloud Computing'"
		></intro-section>
		<short-info-section
			:titleTextTop="'Next generation '"
			:titleTextBottom="' Cloud Computing'"
			:client="'DeepCloud AI'"
			:location="'USA'"
			:workTopLine="'UX/UI design, Prototyping,'"
			:workBottomLine="'Frontend Development'"
			:type="'Landing Page'"
			:developedDate="'May 2018'"
			:hoursTracked="'~300'"
			:rightTextOne="'The collaboration started when one of our clients advised DeepCloudAI to approach us for their web development project. DeepCloud AI had a negative previous experience with their former web developers, and during the project launch, they had rather negative sentiments.'"
			:rightTextTwo="'After a few negotiations, we managed to reach a consensus, building mutual trust and agreed the client needed a logo development in addition to the website development. DeepCloud AI provided us with the scenario for the motion animation, which we had to bring into existence and implement on the website. It was an information impulse, which goes through the product, gets processed, then goes to the Internet of Things. As a result, we created a cool scroll-animation, which goes through the whole website content.'"
			:siteUrl="'https://deepcloudai.com'"
		>
		</short-info-section>
		<product-section
			:className="'deepcloud'"
			:titleText="'The product'"
			:text="'DeepCloud is building an AI-driven decentralized cloud computing platform for running decentralized applications—IoT and Web 3.0 dApps. They provide a spot market for computing and storage resources for companies and individuals to share their excess capacity on DeepCloud’s decentralized cloud, and with their AI Matching engine, pair these resources for application developers.'"
			:textTwo="'Applications execute in a secure sandbox on the peer-peer resources, and all transactions are managed on the blockchain via smart contracts. They also have an application marketplace for developers with pre-validated applications to speed up the development of their end to end solutions.'"
			:imageUrl="'deepcloud-product-img.png'"
		>
		</product-section>
		<project-overview-section
			:className="'deepcloud'"
			:text="'We took the triangle form as the basis for the website design because the Deepcloud AI logo is a triangle. Hence, we drew a modern triangle-based cloud, as if sparkling with the lightning of information. We also placed a lot of triangle-based elements on the website in the form of icons and buttons. In this project, we efficiently utilized the stylish and futuristic digital style, lightweight texture, and the stretching of the blue color.'"
			:imageFirstUrl="'deepcloud-overview-img-1.jpg'"
			:imageSecondUrl="'deepcloud-overview-img-2.jpg'"
			:imageThirdUrl="'deepcloud-overview-img-3.jpg'"
			:imageFourthUrl="'deepcloud-overview-img-4.jpg'"
		>
		</project-overview-section>
		<moution-design-section
			:className="'deepcloud'"
			:text="'The motion animation was aimed at adding the ‘wow’ effect to the website. In spite of the fact that we created it according to the client’s scenario, we put together all our creativity to draw this net of micro schemes, where the informational flow moves freely. The animation looks clean, refined, and sparkling, as well as brings additional context value to the website.'"
			:videoUrl="'mdv-deepcloud'"
		>
		</moution-design-section>
		<product-section
			:className="'deppcloud-scrolling'"
			:titleText="'The WOW-effect scrolling animation'"
			:text="'Our principal designers implemented the impulse animation going vertically throughout the main page while scrolling down. The animation fits perfectly with the custom icons, transparent background, and clean fonts. Oh my, we hit it damn perfect!'"
			:imageUrl="'case-deepcloud-scrolling-img.jpg'"
			:videoUrl="'deepcloud-solution.mp4'"
		>
		</product-section>
		<other-section
			:className="'deepcloud'"
			:roadmapText="'We made a concise roadmap with good usability, compactness, and exceptional clarity. The roadmap for the Deepcloud AI is well-thought-out, structured, perfectly organized, and it powerfully resonates with the dominant theme of the website.'"
			:roadmapImage="'case-deepcloud-roadmap-img.png'"
			:portfolioText="'The portfolio section looks crystal clear and fresh. All the key elements are arranged in a structured way and are paired with the impulse-like graphical elements. At this place we employed a convenient animation - when you hover on any element, more information appears.'"
			:portfolioImage="'case-deepcloud-portpholio-img.jpg'"
			:advantagesTopText="'We created an unusual visualization of company advantages for a more accurate perception of information. The client provided us with the content for the website, different in size. As a result, we put together our creativity to develop an unconventional solution for the information boxes. We made this section quite chaotic, but still integral and cohesive, and highlighted the info with the different shades of blue.'"
			:advantagesBottomText="''"
			:advantagesImageUrl="'case-deepcloud-advantages-img.png'"
		>
		</other-section>
		<adaptive-section
			:className="'deepcloud'"
			:text="'More and more visitors are using mobile devices such as tablets and smartphones to navigate websites. Our designers produced adaptive, predefined layouts that have been carefully constructed for a variety of common screen sizes and resolutions.'"
			:imageFirstUrl="'case-deepcloud-adaptive-img-1-new.png'"
			:imageSecondUrl="'case-deepcloud-adaptive-img-2-new.png'"
		>
		</adaptive-section>
		<similar-section
			:showLines="true"
		></similar-section>
		<next-project-section
			:className="'darkbox'"
			:imageUrl="'next-project-alita.jpg'"
			:projectName="'Alita'"
			:projectDescription="'Pioneer of Sharing Economy Benefiting Everyone'"
			:linkText="'devserver link'"
			:siteUrl="'http://alita.1pls1.com/'"
			:nextCaseName="'alita'"
		></next-project-section>
		<app-footer></app-footer>
	</div>

</template>

<script>

import Lines from '../../components/Lines.vue';
import IntroSection from '../../components/CasesSections/CaseIntroSection.vue';
import ShortinfoSection from '../../components/CasesSections/CaseShortInfoSection.vue';
import ProductSection from '../../components/CasesSections/CaseProductSection.vue';
import ProjectOverviewSection from '../../components/CasesSections/CaseProjectOverviewSection.vue';
import MoutionDesignSection from '../../components/CasesSections/CaseMoutionDesignSection.vue';
import IsometricGraphicsSection from '../../components/CasesSections/CaseIsometricGraphicsSection.vue';
import OtherSection from '../../components/CasesSections/CaseOtherSection.vue';
import AdaptiveSection from '../../components/CasesSections/CaseAdaptiveSection.vue';
import SimilarSection from '../../components/Similar.vue';
import NextProjectSection from '../../components/CasesSections/CaseNextProjectSection.vue';
import Footer from '../../components/Footer.vue';

import SimpleScrollbar from 'simple-scrollbar';
import ScrollMagic from 'scrollmagic';

import { changeColor, setCaseBg, runCaseBg } from '../AllWorks/AllWorks.vue';
import { pageTransitionDuration } from '../../App.vue';

let sectionsAnimationTrigger = true;

export default {

  data () {
    return {

    }
  },

  components: {
  	'app-lines': Lines,
		'intro-section': IntroSection,
		'short-info-section': ShortinfoSection,
		'product-section': ProductSection,
		'project-overview-section': ProjectOverviewSection,
		'moution-design-section': MoutionDesignSection,
		'isometric-graphics-section': IsometricGraphicsSection,
		'other-section': OtherSection,
		'adaptive-section': AdaptiveSection,
		'similar-section': SimilarSection,
		'next-project-section': NextProjectSection,
		'app-footer': Footer
  },

  mounted() {

  	document.querySelector('#case').addEventListener('scroll', () => {
  		let st = document.querySelector('#case').scrollTop;
  		st > 0 ? document.querySelector('.main__header').classList.add('mob-sticky') : document.querySelector('.main__header').classList.remove('mob-sticky');
  	});
		

		// white
  	if(window.innerWidth < 1200) {
  		let cst = window.pageYOffset;
  		document.querySelector('.hamburger').addEventListener('click', () => {
  			if(cst == 0) {
  				document.querySelector('.main__header_logo').classList.add('white');
  				document.querySelector('.hamburger').classList.add('white');
  			}
  		});
  	}

		setTimeout(() => {

			window.scrollTo(0, 0);
			document.querySelector('#case').classList.remove('light');
			document.querySelector('.main__header').classList.remove('mob-sticky');
			document.querySelector('.main__header_logo').classList.remove('short');

			document.querySelector('.play__showreel_controls').classList.remove('hidden','eq-only');

			// scroll bar
			if(window.innerWidth > 1199) {
				const scrollContainer = document.getElementById('case');  
				SimpleScrollbar.initEl(scrollContainer);
			}

			document.querySelectorAll('*[data-delay]').forEach((item) => {
				let thisDelay = item.getAttribute('data-delay');
				item.setAttribute('style', 'transition: opacity 0.7s ease ' + thisDelay + 's, top 0.7s ease ' + thisDelay + 's');
			});

			// base fade animation
			if(sectionsAnimationTrigger == true) {

				document.querySelectorAll('.pin-wrapper').forEach((pin) => {
					const thisController = new ScrollMagic.Controller();
					var contentFadeUp = new ScrollMagic
					.Scene({
						triggerElement: pin,
						reverse: false,
						triggerHook: 0.8,
					})
					.setClassToggle(pin, "animated")
					.addTo(thisController);
				});

				// image blocks animation
				document.querySelectorAll('.pin-scene').forEach((scene) => {

					var thisController = new ScrollMagic.Controller();
					var $this = scene;
					var contentFadeUp = new ScrollMagic
					.Scene({
						triggerElement: scene,
						reverse: false,
						triggerHook: 0.8,
					})
					.setClassToggle(scene, "show")
					.on("enter", (e) => {
						setTimeout(() => {
							scene.classList.add('no-clip');
							setTimeout(() => {
								scene.classList.add('show-shadow');
							}, 50);
						}, 1500);
					})
					.addTo(thisController);
				});

				sectionsAnimationTrigger = false;

			}
			else {
				document.querySelectorAll('.pin-wrapper').forEach((pin) => {
					pin.classList.add('finished');
				});

				document.querySelectorAll('.pin-scene').forEach((pin) => {
					pin.classList.add('finished');
				});
			}


			document.querySelector('.main__header_logo').classList.remove('white');
			document.querySelector('.socials.side').classList.remove('white');
			document.querySelector('.hamburger').classList.remove('white');
			document.querySelector('.get__started').classList.remove('white');
			document.querySelector('.play__showreel_btn').classList.remove('white');
			document.querySelector('.back__link').classList.remove('white');
			document.querySelector('#app > .get__started').classList.remove('white');
			document.querySelector('.languages-list').classList.remove('white');

			document.querySelectorAll('.main__header_logo .logo path').forEach((path) => {
				path.removeAttribute('style');
			});
			document.querySelector('.hamburger-inner').removeAttribute('style');
			document.querySelectorAll('.hamburger-inner .line').forEach((line) => {
				line.removeAttribute('style');
			});

			

			if(window.innerWidth > 1199) {
				document.querySelector('.languages-list li a').style.color = '#fff';

				changeColor('#case .ss-content','.main__header_logo', '.darkbox');
				changeColor('#case .ss-content','.socials.side', '.darkbox');
				changeColor('#case .ss-content','.hamburger', '.darkbox');
				changeColor('#case .ss-content','.get__started', '.darkbox');
				changeColor('#case .ss-content','.play__showreel_btn', '.darkbox');
				changeColor('#case .ss-content','.back__link', '.darkbox');
				changeColor('#case .ss-content','#app > .get__started', '.darkbox');
				changeColor('#case .ss-content','.languages-list', '.darkbox');

				// A
				let clastScrollTop = document.querySelector('#case .ss-content').scrollTop;
				document.querySelector('#case .ss-content').addEventListener('scroll', () => {
					var cst = document.querySelector('#case .ss-content').scrollTop;
					if(cst > clastScrollTop) {
						document.querySelector('.main__header_logo').classList.add('short');
					}
					else {
						document.querySelector('.main__header_logo').classList.remove('short');
					}
					clastScrollTop = cst;
				});
			}

			if(window.innerWidth < 1200) {
				changeColor('#case','.main__header_logo', '.darkbox');
				changeColor('#case','.socials.side', '.darkbox');
				changeColor('#case','.hamburger', '.darkbox');
				changeColor('#case','.get__started', '.darkbox');
				changeColor('#case','.play__showreel_btn', '.darkbox');
				changeColor('#case','.back__link', '.darkbox');
				changeColor('#case','#app > .get__started', '.darkbox');
				changeColor('#case','.languages-list', '.darkbox');


				// A
				let clastScrollTop = window.pageYOffset;

				window.addEventListener('scroll', (e) => {
					let cst = window.pageYOffset;
					cst > clastScrollTop ? document.querySelector('.main__header_logo').classList.add('short') : document.querySelector('.main__header_logo').classList.remove('short');
					clastScrollTop = cst;
				});

			}



		}, pageTransitionDuration);
		
  }
}
</script>

<style lang="scss" scoped>

	

</style>