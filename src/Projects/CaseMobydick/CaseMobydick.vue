<template>
	
	<div id="case">

		<router-link :to="{name: 'AllWorks'}" exact class="back__link" active-class="" exact-active-class="">
			<i class="fal fa-angle-left arrow"></i>
			<span class="text"><img :src="require(`@/assets/img/arrow-back-icon.svg`)" alt="">all cases</span>
		</router-link>

		<intro-section
			:className="'darkbox mobydick'"
			:backgroundImage="'case-moby-intro-bg.jpg'"
			:logo="'case-moby-intro-logo-icon.svg'"
			:projectName="'MobyDick Wallet Lab'"
			:text="'History of Wealth for Everyone'"
		></intro-section>
		<short-info-section
			:titleTextTop="'History of Wealth for Everyone'"
			:client="'MobyDick Wallet Lab'"
			:location="'USA'"
			:workTopLine="'Project Strategy, UX/UI design,'"
			:workBottomLine="'Prototyping, Frontend Development'"
			:type="'Landing Page'"
			:developedDate="'June 2019'"
			:hoursTracked="'~300'"
			:rightTextOne="'Whale Wallet is a crypto-wallet through which a large volume of Bitcoin has passed and you can see this in the blockchain.'"
			:rightTextTwoFirst="'It also gives the opportunity to create the likeness of the activities retrospectively.'"
			:rightTextTwoSecond="'And the most important thing is that you, as the owner of the Whale Wallet, will always have the opportunity to both receive funds from it and send them from it.'"
			:siteUrl="'https://www.mobydickwalletlab.com'"
		>

		</short-info-section>
		<product-section
			:className="'mobydick'"
			:titleText="'The product'"
			:text="'MobyDick Wallet Lab - is a team of enthusiasts since the time when Bitcoin’s price was 10 $. We saw ups and downs of Mt.Gox и BTC-e. For all the time, we worked with thousands of Bitcoins, which passed through exchanges and wallets, and the trace of this remains only in memory.'"
			:imageUrl="'moby-product-img.jpg'"
		>
		</product-section>
		<project-overview-section
			:className="'mobydick'"
			:text="'Now Wallet with a turnover of 1,000 Bitcoin as on 05/15/2019 is estimated at about $ 8,000,000.When Bitcoin will cost $ 20-50 or $ 100 thousand, the turnover of funds in this wallet will amount to tens and hundreds of millions dollars.'"
			:imageFirstUrl="'moby-overview-img-1.jpg'"
			:imageSecondUrl="'moby-overview-img-2.jpg'"
			:imageThirdUrl="'moby-overview-img-3.jpg'"
			:imageFourthUrl="'moby-overview-img-4.jpg'"
		>
		</project-overview-section>
		<product-section
			:className="'mobydick-animation'"
			:titleText="'Animation'"
			:text="'We implemented the flight illusion within the video effects on the starter screen that guides the end-user through the informational and numeric digital world.'"
			:imageUrl="'moby-animation-img.jpg'"
		>
		</product-section>
		<adaptive-section
			:className="'mobydick'"
			:text="'Ankr strives to build a resource efficient blockchain framework that truly enables Distributed Cloud Computing (DCC) and provides user-friendly infrastucture for business applications.'"
			:imageFirstUrl="'case-moby-adaptive-img-1.png'"
			:imageSecondUrl="'case-moby-adaptive-img-2.png'"
		>
		</adaptive-section>
		<similar-section
			:showLines="true"
		></similar-section>
		<next-project-section
			:imageUrl="'next-project-ankr-new.jpg'"
			:projectName="'ANKR'"
			:projectDescription="'Distributed Cloud Computing on Trusted Hardware'"
			:linkText="'devserver link'"
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