<template>
	
	<div id="case">

		<div class="case__bg alita"></div>

		<router-link :to="{name: 'AllWorks'}" exact class="back__link" active-class="" exact-active-class="">
			<i class="fal fa-angle-left arrow"></i>
			<span class="text"><img :src="require(`@/assets/img/arrow-back-icon.svg`)" alt="">all cases</span>
		</router-link>

		<intro-section
			:className="'darkbox alita'"
			:backgroundImage="'case-alita-intro-bg.jpg'"
			:logo="'case-alita-intro-logo-icon.svg'"
			:projectName="'ALITA'"
			:text="'Pioneer of Sharing Economy Benefiting Everyone'"
		></intro-section>
		<short-info-section
			:titleTextTop="'Pioneer of Sharing'"
			:titleTextBottom="'Economy Benefiting Everyone'"
			:client="'Alita'"
			:location="'USA'"
			:workTopLine="'UX/UI design, Prototyping,'"
			:workBottomLine="'Frontend Development'"
			:type="'Landing Page'"
			:developedDate="'June 2019'"
			:hoursTracked="'~300'"
			:rightTextOne="'Loyal customers are the lifeblood of any business, as they are telling others about you. Same here—we were recommended to Alita by one of our clients Ankr, an instant cloud infrastructure provider for blockchain applications. Alita got acquainted with our project for Ankr and did not hesitate to contact us for the development of their website.'"
			:rightTextTwo="'One of the major challenges for this project was very strict deadlines. Alita requested to develop a landing website for them in just two weeks. We carefully looked through their branding identity for the design inspiration and found they use a lot of geometrical elements. Thus, we decided to create the design of this project on the basis of the simple geometric forms and found our inspiration in modern minimal geometric tattoos.'"
			:siteUrl="'http://alita.1pls1.com'"
		>
		</short-info-section>
		<product-section
			:className="'alita'"
			:titleText="'The product'"
			:text="'Alita is a cloud computing network composed of social idle computing capacity - committed to building an asset-light, low-cost, high-availability computing platform. Alita builds a verifiable computing model based on TEE. It already supports both ARM and X86 servers and edge devices and is the world\'s first MapReduce framework to support Android.'"
			:imageUrl="'alita-product-img.png'"
		>
		</product-section>
		<project-overview-section
			:className="'alita'"
			:text="'The Amen creative team has developed an elegant and sophisticated design solution for the Alita website with perfectly organized information blocks and sections. We made a rethinking of the simple geometric forms and transformed them into stylized website elements.'"
			:listStaff="'Alita website features:'"
			:listItemFirst="'Unpressing and lightweight animations'"
			:listItemSecond="'Delicate color scheme'"
			:listItemThird="'Custom icons'"
			:listItemFourth="'Minimal and neat look and feel'"
			:imageFirstUrl="'alita-overview-img-1.jpg'"
			:imageSecondUrl="'alita-overview-img-2.jpg'"
			:imageThirdUrl="'alita-overview-img-3.jpg'"
			:imageFourthUrl="'alita-overview-img-4.jpg'"
		>
		</project-overview-section>
		<product-section
			:className="'alita-testnet'"
			:titleText="'Testnet Section'"
			:text="'In this specific section, we implemented lightweight vector-like animation, utilized the contrast of colors, and developed custom-made icons.'"
			:imageUrl="'alita-testnet-img.jpg'"
			:videoUrl="'alita-testnet.mp4'"
		>
		</product-section>
		<other-section
			:data-bg="'#F3F7F7'"
			:className="'alita'"
			:introImageUrl="'alita-token-img.png'"
			:customIconsText="'We created a customized icons pack in the main company colors.'"
			:customIconsImage="'alita-icons-img.png'"
			:roadmapTitleText="'Token Section'"
			:roadmapText="'This section features an unconventional diagram, accompanied by the clear geometrical elements in the background.'"
		>
		</other-section>
		<adaptive-section
			:data-bg="'gradient-alita'"
			:className="'darkbox alita'"
			:text="'The Alita website is optimized for mobile readability and prepared for mobile use. We designed several distinct layouts for multiple screen sizes. The layout used will depend on the screen size of a device. The website detects the type of gadget used and delivers the pre-set layout for the corresponding type of a screen.'"
			:imageFirstUrl="'case-alita-adaptive-img-1-new.png'"
			:imageSecondUrl="'case-alita-adaptive-img-2-new.png'"
		>
		</adaptive-section>
		<similar-section
			:showLines="true"
		></similar-section>
		<next-project-section
			:className="'darkbox'"
			:imageUrl="'next-project-ankr-old.jpg'"
			:projectName="'Ankr ICO'"
			:projectDescription="'Distributed Cloud Computing on Trusted Hardware'"
			:linkText="'devserver link'"
			:siteUrl="'http://ankr.1pls1.com'"
			:nextCaseName="'ankr-old'"
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

import { changeColor, triggerCaseBg } from '../AllWorks/AllWorks.vue';
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

  	document.querySelector('.socials.side').classList.add('cs');

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


			document.querySelector('.main__header_logo').classList.add('white');
			document.querySelector('.socials.side').classList.add('white');
			document.querySelector('.hamburger').classList.add('white');
			document.querySelector('.get__started').classList.add('white');
			document.querySelector('.play__showreel_btn').classList.add('white');
			document.querySelector('.back__link').classList.add('white');
			document.querySelector('#app > .get__started').classList.add('white');
			document.querySelector('.languages-list').classList.add('white');

			document.querySelectorAll('.main__header_logo .logo path').forEach((path) => {
				path.style.fill = '#fff';
			});
			document.querySelector('.hamburger-inner').style.backgroundColor = '#fff';
			document.querySelectorAll('.hamburger-inner .line').forEach((line) => {
				line.style.backgroundColor = '#fff';
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


			// BG

			triggerCaseBg();



		}, pageTransitionDuration);
		
  }
}
</script>

<style lang="scss" scoped>

	

</style>