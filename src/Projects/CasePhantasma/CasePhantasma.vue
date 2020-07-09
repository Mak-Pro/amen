<template>
	
	<div id="case">

		<div class="case__bg phantasma"></div>

		<router-link :to="{name: 'AllWorks'}" exact class="back__link" active-class="" exact-active-class="">
			<i class="fal fa-angle-left arrow"></i>
			<span class="text"><img :src="require(`@/assets/img/arrow-back-icon.svg`)" alt="">all cases</span>
		</router-link>

		<intro-section
			:className="'darkbox phantasma'"
			:backgroundImage="'case-phantasma-intro-bg.jpg'"
			:logo="'case-phantasma-intro-logo-icon.svg'"
			:projectName="'PHANTASMA CHAIN'"
			:text="'Blockchain for next generation content distribution'"
		></intro-section>
		<short-info-section
			:titleTextTop="'Blockchain for next '"
			:titleTextBottom="' generation content distribution'"
			:client="'Phantasma Chain'"
			:location="'Brasil, USA, United Kingdom'"
			:workTopLine="'UX/UI design, Prototyping,'"
			:workBottomLine="'Frontend Development'"
			:type="'Promo Website'"
			:developedDate="'June 2018'"
			:hoursTracked="'~550'"
			:rightTextOne="'The project for Phantasma Chain is genuinely our team’s pride. This is the first project where we could implement decent examples of isometric graphics into the context of the website.'"
			:rightTextTwo="'We animated the whole website, so it’s as if visitors are embarking on a journey through it. The core element the website design revolves around is kind of a lego-constructor. We added lots of dynamic elements, transitions, interactive details, and animated illustrations, which make the design of this website fundamentally different from our other projects.'"
			:siteUrl="'https://phantasma.io/home'"
		>
		</short-info-section>
		<product-section
			:className="'phantasma'"
			:titleText="'The product'"
			:text="'Phantasma is a new standard for seamless and secure data sharing, management, and integration across a multitude of communication partners, connected users, and dApps.'"
			:textTwo="'The goal of Phantasma is to provide a new adaptable framework to fill the needs for data management from dApps. By providing a uniform, standard interface (API) with all the fundamental data access semantics applications require, Phantasma will boost the productivity of dApp developers, broaden its potential, and energize the blockchain ecosystem.'"
			:imageUrl="'phantasma-product-img.png'"
		>
		</product-section>
		<project-overview-section
			:className="'phantasma'"
			:text="'After we had launched the Phantasma Chain website, we received a lot of positive feedback and requests from new clients to make the same for them. It’s no surprise, the Phantasma Chain website is something to see.'"
			:listStaff="'It features:'"
			:listItemFirst="'Stunning animations, which add life to the infirmation blocks'"
			:listItemSecond="'Beautiful isometric graphics, all created by the Amen team'"
			:listItemThird="'Unconventional info-organizing solutions'"
			:listItemFourth="'Comfortable site-map and menu'"
			:listItemFifth="'Really awesome face for the brand'"
			:imageFirstUrl="'phantasma-overview-img-1.jpg'"
			:imageSecondUrl="'phantasma-overview-img-2.jpg'"
			:imageThirdUrl="'phantasma-overview-img-3.jpg'"
			:imageFourthUrl="'phantasma-overview-img-4.jpg'"
		>
		</project-overview-section>
		<isometric-graphics-section
			:className="'phantasma'"
			:subtitleText="'Boring schemes can be interesting'"
			:text="'We employed many isometric graphics elements as a core feature of the project. Attractive and positive animations instantly draw the attention of the website visitors to the highlighted information, produce an increasing aesthetic effect, and providing a more authentic look than flat layers.'"
			:imageFirstUrl="'ig-phantasma-1.png'"
			:imageSecondUrl="'ig-phantasma-2.png'"
			:imageThirdUrl="'ig-phantasma-3.png'"
			:imageFourthUrl="'ig-phantasma-4.png'"
			:imageFiveUrl="'ig-phantasma-5.png'"
			:imageSixUrl="'ig-phantasma-6.png'"
		>
		</isometric-graphics-section>
		<other-section
			:className="'phantasma'"
			:introText='null'
			:portfolioImage="null"
			:roadmapTitleText="'Roadmap Section'"
			:roadmapText="'In this section, we leveraged a fresh animated functionality, which enables visitors to view a comprehensive list of Phantasma’s tasks-sprints for a quartal, as well as dive into the specific details of each sprint in the developed view on the right side of the screen.'"
			:roadmapTextTwo="'Usually, the roadmap sections on websites look long and complicated, and our two-sided solution allowed us to make it compact, functional, techy, and convenient.'"
			:roadmapImage="'case-phantasma-roadmap-img.png'"
			:teamTitleText="'Team Section'"
			:teamText="'Our team racked their brains to make the team section compact and neat, yet informative and spread out. And, voila, here we invented a kind of a cube animation effect and succeeded to save a lot of space. When hovering on any of the team members, their box turns over, revealing some details about the position.'"
			:teamImage="'case-phantasma-team-img.png'"
			:darkClass="'darkbox'"
		>
		</other-section>
		<adaptive-section
			:className="'phantasma'"
			:text="'We took into account that the users will view the Phantasma chain website on different devices and in different contexts. As a result, our website adapts to the width of a browser at specific points and looks great on every screen.'"
			:imageFirstUrl="'case-phantasma-adaptive-img-1-new.png'"
			:imageSecondUrl="'case-phantasma-adaptive-img-2-new.png'"
			:imageThirdUrl="'case-phantasma-adaptive-img-3-new.png'"
		>
		</adaptive-section>
		<similar-section
			:showLines="true"
		></similar-section>
		<next-project-section
			:imageUrl="'next-project-nos.jpg'"
			:projectName="'nOS client'"
			:projectDescription="'Discover & Build the web of the future'"
			:linkText="'open prototype'"
			:siteUrl="'https://projects.invisionapp.com/share/K7JC2N585MW#/screens'"
			:nextCaseName="'nos'"
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