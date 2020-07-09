<template>
	
	<div id="case">

		<div class="case__bg ankr-new">
			<!-- <div class="case__bg_inner"></div> -->
		</div>

		<!-- <play-showreel-btn
			:videoType="'ankr-new'"
		></play-showreel-btn> -->

		<router-link :to="{name: 'AllWorks'}" exact class="back__link" active-class="" exact-active-class="">
			<i class="fal fa-angle-left arrow"></i>
			<span class="text"><img :src="require(`@/assets/img/arrow-back-icon.svg`)" alt="">all cases</span>
		</router-link>

		<intro-section
			:className="'darkbox ankr-new'"
			:backgroundImage="'case-ankr-new-intro-bg.jpg'"
			:logo="'case-ankr-intro-logo-icon-new.svg'"
			:projectName="'ANKR'"
			:text="'Distributed Cloud Computing on Trusted Hardware'"
		></intro-section>
		<short-info-section
			:titleTextTop="'Distributed Cloud'"
			:titleTextBottom="'Computing Network'"
			:client="'Ankr'"
			:location="'USA'"
			:workTopLine="'UX/UI design, Prototyping,'"
			:workBottomLine="'Frontend Development'"
			:type="'Corporate Website'"
			:developedDate="'January 2019'"
			:hoursTracked="'~550'"
			:rightTextOne="'With the incredible popularity and the wide range of mobile devices, as designers, we need to adapt to the variety of screen sizes. From the gigantic corporate monitor to the smartwatch, the Ankr website looks superb everywhere. Literally, everywhere.'"
			:rightTextTwo="'Presently, the ultimate aim of the project was to strengthen the face of the Ankr brand, retain existing customers and attract new ones, and maximize the company’s revenues.'"
			:rightTextThree="'In order to highlight the technical value Ankr offers to its users and investors, we unanimously decided to focus on the high-tech minimalistic design and convenient website navigation. We gave 110% of our commitment to creating the refined and austere finish for the Ankr website.'"
			:siteUrl="'https://www.ankr.com'"
		>
		</short-info-section>
		<product-section
			:className="'ankr-new'"
			:titleText="'The product'"
			:text="'Ankr provides a computation-resource-efficient blockchain and an integrated data feed system leveraging both cryptographic primitives and trusted hardware.'"
			:textStrong="'Sounds amazing!'"
			:imageUrl="'ankr-new-product-img.png'"
		>
		</product-section>
		<project-overview-section
			:className="'ankr-new'"
			:text="'This time we developed an official corporate website for Ankr. This project represents a logical continuation of our previous work for Ankr where we developed a landing for them. Presently, we leveraged all of our experience and creativity to invent a fully-functional website with a multipage menu.'"
			:textTwo="'We committed all of our genuine passion for design to puzzle over the corporate style for Ankr. Our team decided to reinvent their corporate brand identity, give a second thought to the brand colors, and rethink their identity concept.'"
			:textStrong="'We think we got it.'"
			:imageFirstUrl="'ankr-new-overview-img-1.jpg'"
			:imageSecondUrl="'ankr-new-overview-img-2.jpg'"
			:imageThirdUrl="'ankr-new-overview-img-3.jpg'"
			:imageFourthUrl="'ankr-new-overview-img-4.jpg'"
		>
		</project-overview-section>
		<moution-design-section
			:className="'ankr-new'"
			:text="'To create an unobtrusive premium motion animation, we took an Ankr logo for the direct inspiration. Their logo sparks a thought of sharpened edges, meaningful geometry, customer-centricity, and numerous possibilities. As follows, we developed a visual effect of the constant moving of the geometrical planes, which appears to be a kind of smooth and elegant technological meditation.'"
			:textStrong="'Tune in!'"
			:videoUrl="'mdv-ankr-new'"
			:darkClass="'darkbox'"
		>
		</moution-design-section>
		<isometric-graphics-section
			:className="'ankr-new'"
			:subtitleText="null"
			:text="'Sophisticated graphical components form an integral part of any website design. We created from scratch, using eye-catching informational and navigational elements, drawing the user’s attention in the right direction and helping them manipulate the website information.'"
			:imageFirstUrl="'ig-ankr-new-1.png'"
			:imageSecondUrl="'ig-ankr-new-2.png'"
			:imageThirdUrl="'ig-ankr-new-3.png'"
		>
		</isometric-graphics-section>
		<other-section
			:data-bg="'#F9FBFB'"
			:className="'ankr-new'"
			:roadmapText="'The well-thought-out roadmap section enables a quick glance into Ankr main milestones and objectives. The roadmap is complemented with left-right navigation buttons, provides a very clear overview of the company information, and looks crystal-clear.'"
			:roadmapImage="'case-ankr-new-roadmap-img.jpg'"
			:customIconsText="'We custom designed all the icons for the Ankr corporate website to look like deep-frost in ice, properly reflect the website information, and fit with the general elegant style of the project.'"
			:customIconsImage="'case-ankr-new-custom-icons-img.png'"
			:darkClass="'darkbox'"
		>
		</other-section>
		<adaptive-section
			:data-bg="'gradient-ankrnew'"
			:className="'ankr-new darkbox'"
			:text="'With the rise of mobiles, the Ankr website needs to adapt to literally every screen size. Consequently, we strived that the website properly detects the screen size and loads the appropriate layout for it.'"
			:imageFirstUrl="'case-ankr-new-adaptive-img-1-new.png'"
			:imageSecondUrl="'case-ankr-new-adaptive-img-2-new.png'"
		>
		</adaptive-section>
		<similar-section
			:showLines="true"
		></similar-section>
		<next-project-section
			:className="'darkbox'"
			:imageUrl="'next-project-phantasma.jpg'"
			:projectName="'Phantasma Chain'"
			:projectDescription="'Blockchain for next generation content distribution'"
			:linkText="'phantasma.io'"
			:siteUrl="'https://phantasma.io/home'"
			:nextCaseName="'phantasma'"
		></next-project-section>
		<app-footer></app-footer>
	</div>

</template>

<script>

// import ShowRealBtn from '../../components/PlayShowReel.vue';
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
import { halfChangeColor } from '../AllWorks/AllWorks.vue';
import { pageTransitionDuration } from '../../App.vue';

let sectionsAnimationTrigger = true;

export default {

  data () {
    return {

    }
  },

  components: {
  	// 'play-showreel-btn': ShowRealBtn,
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
		

		// white for case
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