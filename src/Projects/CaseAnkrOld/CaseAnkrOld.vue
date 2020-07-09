<template>

	<!-- #f4fafa - like a transparent -->
	
	<div id="case">

		<div class="case__bg ankr-old"></div>

		<router-link :to="{name: 'AllWorks'}" exact class="back__link" active-class="" exact-active-class="">
			<i class="fal fa-angle-left arrow"></i>
			<span class="text"><img :src="require(`@/assets/img/arrow-back-icon.svg`)" alt="">all cases</span>
		</router-link>

		<intro-section
			:data-bg="'#f9fbfb'"
			:className="'darkbox ankr-old'"
			:backgroundImage="'case-ankr-old-intro-bg.jpg'"
			:logo="'case-ankr-intro-logo-icon.svg'"
			:projectName="'ANKR ICO'"
			:text="'Distributed Cloud Computing on Trusted Hardware'"
			:showReelVideoUrl="'ankr-old'"
		></intro-section>
		<short-info-section
			:data-bg="'#f9fbfb'"
			:titleTextTop="'Distributed Cloud'"
			:titleTextBottom="'Computing Network'"
			:client="'Ankr'"
			:location="'USA'"
			:workTopLine="'UX/UI design, Prototyping,'"
			:workBottomLine="'Frontend Development'"
			:type="'Landing Page'"
			:developedDate="'May 2018'"
			:hoursTracked="'~300'"
			:rightTextOne="'To unleash the whole power of the information, you should wrap it up in an attractive way. Therefore, we paid special attention to the visual representation of the project for Ankr. It took us some time and effort, but we grasped the thistle firmly. This is the unique way we do our job – “Never stop and constantly look for perfection!”'"
			:rightTextTwo="'We implemented the light illusion within the video effects on the starter screen, which guides the end-user through the informational and numeric digital world.'"
			:rightTextThree="'Let’s embark on the journey!'"
			:siteUrl="'http://ankr.1pls1.com'"
		>
		</short-info-section>
		<product-section
			:data-bg="'#f3f7f7'"
			:className="'ankr-old'"
			:titleText="'The product'"
			:text="'Ankr develops infrastructure for deploying any blockchain node easy, accessible, affordable, and instantly distributed across the globe. Built on the state-of-the-art cloud-native solution, Ankr allows us to instantly deploy apps or own codebase on their distributed platform.'"
			:textStrong="'They’re fantastic, aren’t they?'"
			:imageUrl="'ankr-old-product-img.png'"
		>
		</product-section>
		<project-overview-section
			:data-bg="'#f4fafa'"
			:className="'ankr-old'"
			:text="'Amen created a feature-rich website focused on the company’s tech products, according to our approach of “making a cloud computing revolution, not just developing another app.” Our creative team worked their hearts out in order to develop a unique concept:'"
			:listItemFirst="'Abstract video animation that welcomes the site visitors'"
			:listItemSecond="'Geometrically sharpened edges that look modern'"
			:listItemThird="'Frosted glass texture that adds charm to the home page'"
			:listItemFourth="'Techy premium look'"
			:textStrong="'It looks like the future!'"
			:imageFirstUrl="'ankr-old-overview-img-1.jpg'"
			:imageSecondUrl="'ankr-old-overview-img-2.jpg'"
			:imageThirdUrl="'ankr-old-overview-img-3.jpg'"
			:imageFourthUrl="'ankr-old-overview-img-4.jpg'"
		>
		</project-overview-section>
		<moution-design-section
			:data-bg="'#f4fafa'"
			:className="'ankr-old'"
			:text="'We implemented experimental motion animation on the starter screen, which fosters an illusion of the flight through the digital environment. This video is associated with the new birth, the launch of the new era, and an endless journey.'"
			:textStrong="'Dive in!'"
			:videoUrl="'mdv-ankr-old'"
			:darkClass="'darkbox'"
		>
		</moution-design-section>
		<isometric-graphics-section
			:data-bg="'#f3f7f7'"
			:className="'ankr-old'"
			:subtitleText="'Algorithmic schemes made easy to take in'"
			:text="'Subsequently, we included some isometric graphics to help website visitors easily perceive savvy content. Block-schemes speak more than words.'"
			:imageFirstUrl="'ig-ankr-old-1.png'"
			:imageSecondUrl="'ig-ankr-old-2.png'"
			:imageThirdUrl="'ig-ankr-old-3.png'"
		>
		</isometric-graphics-section>
		<other-section
			:data-bg="'#f9fbfb'"
			:className="'ankr-old'"
			:introText="'The last detail that helped us to build the desired look and feel was an attractive background animation. What a “little something extra” move!'"
			:portfolioImage="'case-ankr-old-portfolio-img.jpg'"
			:roadmapText="'Have a look at the convenient and efficient roadmap. No unnecessary details, only the main stuff.'"
			:roadmapImage="'case-ankr-old-roadmap-img.jpg'"
			:teamTitleText="'Compact Team Section'"
			:teamText="'Usually, team sections on websites are huge, heavy-footed, and occupy a lot of space. We strived to make the team section compact, informative, and convenient.'"
			:teamTextTwo="'Presently, it serves as an attractor, not as a distractor.'"
			:teamImage="'case-ankr-old-team-img.png'"
			:mapTitleText="'Backer Map Section'"
			:mapText="'We developed a minimalistic map, showing how Ankr is spread across all continents and highlighting the number of active users on each.'"
			:mapImage="'case-ankr-old-map-img.png'"
			:darkClass="'darkbox'"
		>
		</other-section>
		<adaptive-section
			:data-bg="'#f3f7f7'"
			:className="'ankr-old'"
			:text="'With the incredible popularity and the wide range of mobile devices, as designers, we need to adapt to the variety of screen sizes. From the gigantic corporate monitor to the smartwatch, the Ankr website looks superb everywhere. Literally, everywhere.'"
			:imageFirstUrl="'case-ankr-old-adaptive-img-1-new.png'"
			:imageSecondUrl="'case-ankr-old-adaptive-img-2-new.png'"
			:imageThirdUrl="'case-ankr-old-adaptive-img-3-new.png'"
		>
		</adaptive-section>
		<similar-section
			:data-bg="'#f9fbfb'"
			:showLines="true"
		></similar-section>
		<next-project-section
			:data-bg="'#f9fbfb'"
			:imageUrl="'next-project-ankr-new.jpg'"
			:projectName="'Ankr'"
			:projectDescription="'Distributed Cloud Computing Network'"
			:linkText="'ankr'"
			:siteUrl="'http://ankr-new.1pls1.com'"
			:nextCaseName="'ankr-new'"
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

import { changeColor } from '../AllWorks/AllWorks.vue';
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

  	document.head.insertAdjacentHTML('afterbegin', `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-P2DXNZ2');`);

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
			


		}, pageTransitionDuration);
		
  }
}
</script>

<style lang="scss" scoped>

	

</style>